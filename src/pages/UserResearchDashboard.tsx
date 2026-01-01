import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Users, Lightbulb, Target, Quote, Loader2, Sparkles, Grid3X3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Interview {
  id: string;
  participant: string;
  role: string;
  keyQuote: string;
  painPoints: string[];
  themes: string[];
}

interface Feature {
  id: string;
  name: string;
  impact: number; // 1-10
  effort: number; // 1-10
  linkedPainPoints: string[];
  priority: "Quick Win" | "Major Project" | "Fill-In" | "Thankless Task";
}

const sampleInterviews: Interview[] = [
  {
    id: "1",
    participant: "Participant #1",
    role: "Homeowner, Active Gardener",
    keyQuote: "I'd rate my concern about global warming an 8, and I'd be 9 out of 10 likely to buy a fertilizer that removes CO2. That's a no-brainer for me.",
    painPoints: [
      "Wants environmentally friendly gardening products",
      "Currently uses fertilizer but seeks sustainable alternatives",
      "Willing to pay premium for climate-positive products"
    ],
    themes: ["Environmental Concern", "Purchase Intent", "Sustainability Premium"]
  },
  {
    id: "2",
    participant: "Participant #3",
    role: "Homeowner, Health-Conscious",
    keyQuote: "My concern is that fertilizers are cancer-causing. I've never used them because of that fear.",
    painPoints: [
      "Deep health and safety concerns about fertilizers",
      "Skeptical of chemical products in domestic gardens",
      "Low purchase intent without extensive safety proof"
    ],
    themes: ["Health Concerns", "Safety Skepticism", "Education Needed"]
  },
  {
    id: "3",
    participant: "Participant #4",
    role: "Plant Enthusiast, Indoor Focus",
    keyQuote: "I use fertilizer on potted plants but not outside. I'd need research into long-term effects, effectiveness, and whether it's organic before buying.",
    painPoints: [
      "Distinguishes between indoor vs outdoor use cases",
      "Requires scientific evidence before adoption",
      "Organic certification is a key purchase driver"
    ],
    themes: ["Use Case Specificity", "Evidence-Based Decisions", "Organic Priority"]
  },
  {
    id: "4",
    participant: "Participant #5",
    role: "Homeowner, Eco-Conscious",
    keyQuote: "I always make sure fertilizers are natural. 8 out of 10 would buy something environmentally friendly.",
    painPoints: [
      "Currently uses fertilizer but prioritizes natural ingredients",
      "High environmental concern (8/10)",
      "Strong alignment with eco-friendly product positioning"
    ],
    themes: ["Natural Products", "Environmental Values", "Brand Alignment"]
  },
  {
    id: "5",
    participant: "Participant #7",
    role: "Homeowner, Climate Activist",
    keyQuote: "I think fertilizers are bad for the environment, which is why a CO2-capturing one would be a 10/10 for me. I care deeply about this—9 out of 10 on global warming concern.",
    painPoints: [
      "Current perception that fertilizers harm environment",
      "Highest climate concern and purchase intent scores",
      "Perfect target demographic for carbon-capture messaging"
    ],
    themes: ["Climate Activism", "Maximum Intent", "Perception Shift"]
  },
  {
    id: "6",
    participant: "Participant #11",
    role: "New Gardener, Safety-Focused",
    keyQuote: "I've never used fertilizers because I want to make sure they are safe. But I'd be 10/10 on a CO2-capturing one.",
    painPoints: [
      "Non-user due to safety concerns, not disinterest",
      "Moderate climate concern (6/10) but maximum purchase intent",
      "Safety messaging could unlock this segment"
    ],
    themes: ["Safety Barrier", "High Convertibility", "Trust Building"]
  },
  {
    id: "7",
    participant: "Participant #12",
    role: "Non-Gardener, Environmentally Aware",
    keyQuote: "I don't have a garden and haven't used fertilizer, but I'd still consider buying at a 5/10 if I did.",
    painPoints: [
      "No current use case but open to future adoption",
      "Moderate interest suggests secondary market potential",
      "May influence others who do garden"
    ],
    themes: ["Future Customer", "Influence Network", "Market Expansion"]
  },
  {
    id: "8",
    participant: "Participant #17",
    role: "Non-Gardener, Price-Sensitive",
    keyQuote: "I'd be 10/10 likely to buy if it's cheap. Cost matters as much as the environmental benefit.",
    painPoints: [
      "Maximum purchase intent but price-dependent",
      "Moderate climate concern (5/10)",
      "Price positioning critical for this segment"
    ],
    themes: ["Price Sensitivity", "Conditional Intent", "Value Proposition"]
  },
  {
    id: "9",
    participant: "Participant #18",
    role: "Homeowner, Concerned User",
    keyQuote: "My concern with fertilizers is that they affect the environment negatively. That's why I'd be 10/10 on one that captures CO2.",
    painPoints: [
      "Current user with environmental guilt",
      "High climate concern (7/10)",
      "Strong value alignment with product mission"
    ],
    themes: ["Guilt Reduction", "Value Alignment", "Existing User Conversion"]
  },
  {
    id: "10",
    participant: "Aggregate Insight",
    role: "50+ Interview Synthesis",
    keyQuote: "Across 50+ interviews, we found 77% would score 8+ on purchase intent, but only after understanding the science. Education is the unlock.",
    painPoints: [
      "Gap between interest and understanding of carbon capture",
      "Health/safety concerns are primary adoption barrier",
      "Price and organic certification are secondary factors"
    ],
    themes: ["Education Gap", "Trust Deficit", "Market Readiness"]
  }
];

const sampleFeatures: Feature[] = [
  {
    id: "1",
    name: "Science-Backed Education Hub",
    impact: 10,
    effort: 4,
    linkedPainPoints: ["Gap between interest and understanding", "Requires scientific evidence", "Education is the unlock"],
    priority: "Quick Win"
  },
  {
    id: "2",
    name: "Third-Party Safety Certifications",
    impact: 9,
    effort: 6,
    linkedPainPoints: ["Health/safety concerns", "Cancer-causing fears", "Trust deficit"],
    priority: "Major Project"
  },
  {
    id: "3",
    name: "Organic Certification Badge",
    impact: 8,
    effort: 5,
    linkedPainPoints: ["Organic certification is key driver", "Make sure they are natural", "Whether it is organic"],
    priority: "Quick Win"
  },
  {
    id: "4",
    name: "Tiered Pricing Strategy",
    impact: 8,
    effort: 3,
    linkedPainPoints: ["Price-dependent purchase intent", "Cost matters as much as benefit", "Value proposition"],
    priority: "Quick Win"
  },
  {
    id: "5",
    name: "CO2 Impact Calculator",
    impact: 7,
    effort: 4,
    linkedPainPoints: ["Quantify environmental benefit", "Climate activism alignment", "Guilt reduction"],
    priority: "Quick Win"
  },
  {
    id: "6",
    name: "Indoor/Outdoor Product Line Split",
    impact: 6,
    effort: 7,
    linkedPainPoints: ["Potted plants vs outdoor use", "Use case specificity", "Different user segments"],
    priority: "Fill-In"
  },
  {
    id: "7",
    name: "Long-term Effects Research Program",
    impact: 9,
    effort: 9,
    linkedPainPoints: ["Long-term effects research needed", "Evidence-based decisions", "Safety barrier"],
    priority: "Major Project"
  },
  {
    id: "8",
    name: "Referral/Influence Program",
    impact: 5,
    effort: 3,
    linkedPainPoints: ["May influence others who garden", "Future customer", "Market expansion"],
    priority: "Fill-In"
  }
];

const UserResearchDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("showcase");
  const [interviews, setInterviews] = useState<Interview[]>(sampleInterviews);
  const [features, setFeatures] = useState<Feature[]>(sampleFeatures);
  
  // Interactive tool state
  const [interviewNotes, setInterviewNotes] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [participantRole, setParticipantRole] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isGeneratingMatrix, setIsGeneratingMatrix] = useState(false);
  const [customInterviews, setCustomInterviews] = useState<Interview[]>([]);
  const [customFeatures, setCustomFeatures] = useState<Feature[]>([]);

  const analyzeInterview = async () => {
    if (!interviewNotes.trim() || !participantName.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter participant name and interview notes.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const { data, error } = await supabase.functions.invoke('analyze-interview', {
        body: { 
          notes: interviewNotes,
          participant: participantName,
          role: participantRole || "Biotech Professional"
        }
      });

      if (error) throw error;

      const newInterview: Interview = {
        id: Date.now().toString(),
        participant: participantName,
        role: participantRole || "Biotech Professional",
        keyQuote: data.keyQuote,
        painPoints: data.painPoints,
        themes: data.themes
      };

      setCustomInterviews([...customInterviews, newInterview]);
      setInterviewNotes("");
      setParticipantName("");
      setParticipantRole("");

      toast({
        title: "Interview Analyzed",
        description: `Extracted ${data.painPoints.length} pain points and ${data.themes.length} themes.`
      });
    } catch (error) {
      console.error("Error analyzing interview:", error);
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze interview. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const generateFeatureMatrix = async () => {
    if (customInterviews.length < 2) {
      toast({
        title: "More Interviews Needed",
        description: "Please analyze at least 2 interviews to generate a feature matrix.",
        variant: "destructive"
      });
      return;
    }

    setIsGeneratingMatrix(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-feature-matrix', {
        body: { interviews: customInterviews }
      });

      if (error) throw error;

      setCustomFeatures(data.features);
      toast({
        title: "Feature Matrix Generated",
        description: `Created ${data.features.length} feature recommendations.`
      });
    } catch (error) {
      console.error("Error generating matrix:", error);
      toast({
        title: "Generation Failed",
        description: "Failed to generate feature matrix. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGeneratingMatrix(false);
    }
  };

  const getQuadrantColor = (priority: string) => {
    switch (priority) {
      case "Quick Win": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "Major Project": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Fill-In": return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "Thankless Task": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const renderInterviewCard = (interview: Interview) => (
    <Card key={interview.id} className="p-6 bg-card border-border">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{interview.participant}</h4>
          <p className="text-sm text-muted-foreground">{interview.role}</p>
        </div>
      </div>

      <div className="mb-4 p-3 bg-secondary/50 rounded-lg border-l-4 border-primary">
        <div className="flex items-start gap-2">
          <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
          <p className="text-sm italic text-foreground">{interview.keyQuote}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs font-semibold text-primary mb-2">PAIN POINTS</p>
          <ul className="space-y-1">
            {interview.painPoints.map((point, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-destructive mt-0.5">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {interview.themes.map((theme, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {theme}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );

  const renderFeatureMatrix = (featureList: Feature[]) => (
    <div className="space-y-6">
      {/* Visual Matrix */}
      <div className="relative bg-card border border-border rounded-xl p-6">
        <div className="text-center mb-4">
          <h4 className="font-semibold text-foreground">Impact vs. Effort Matrix</h4>
          <p className="text-sm text-muted-foreground">Features plotted by strategic priority</p>
        </div>
        
        <div className="relative h-80 border-l-2 border-b-2 border-muted-foreground/30">
          {/* Y-axis label */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-muted-foreground font-medium">
            IMPACT →
          </div>
          
          {/* X-axis label */}
          <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-medium">
            EFFORT →
          </div>

          {/* Quadrant labels */}
          <div className="absolute top-2 left-2 text-xs text-emerald-400 font-medium">Quick Wins</div>
          <div className="absolute top-2 right-2 text-xs text-blue-400 font-medium">Major Projects</div>
          <div className="absolute bottom-8 left-2 text-xs text-amber-400 font-medium">Fill-Ins</div>
          <div className="absolute bottom-8 right-2 text-xs text-red-400 font-medium">Thankless Tasks</div>

          {/* Features as dots */}
          {featureList.map((feature) => (
            <div
              key={feature.id}
              className={`absolute w-3 h-3 rounded-full cursor-pointer transition-transform hover:scale-150 ${
                feature.priority === "Quick Win" ? "bg-emerald-500" :
                feature.priority === "Major Project" ? "bg-blue-500" :
                feature.priority === "Fill-In" ? "bg-amber-500" : "bg-red-500"
              }`}
              style={{
                left: `${(feature.effort / 10) * 90 + 5}%`,
                bottom: `${(feature.impact / 10) * 90 + 5}%`,
              }}
              title={feature.name}
            />
          ))}
        </div>
      </div>

      {/* Feature List */}
      <div className="grid md:grid-cols-2 gap-4">
        {featureList.map((feature) => (
          <Card key={feature.id} className={`p-4 border ${getQuadrantColor(feature.priority)}`}>
            <div className="flex items-start justify-between mb-2">
              <h5 className="font-semibold text-foreground text-sm">{feature.name}</h5>
              <Badge className={getQuadrantColor(feature.priority)}>
                {feature.priority}
              </Badge>
            </div>
            <div className="flex gap-4 text-xs mb-3">
              <span className="text-muted-foreground">Impact: <span className="text-foreground font-medium">{feature.impact}/10</span></span>
              <span className="text-muted-foreground">Effort: <span className="text-foreground font-medium">{feature.effort}/10</span></span>
            </div>
            <div className="flex flex-wrap gap-1">
              {feature.linkedPainPoints.slice(0, 2).map((point, idx) => (
                <span key={idx} className="text-xs bg-secondary/50 px-2 py-0.5 rounded text-muted-foreground">
                  {point.slice(0, 30)}...
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-4 border-b border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">User Research Deep Dive</h1>
              <p className="text-muted-foreground">Carbon-Capturing Fertilizer • Product & Market Strategy</p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            50+ consumer interviews exploring fertilizer usage, climate concern, and purchase intent for a carbon-capturing fertilizer product. 
            Raw insights translated into a strategic Feature Priority Matrix to inform product messaging, pricing, and go-to-market.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <Card className="p-4 text-center bg-card border-border">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-xs text-muted-foreground">Interviews</p>
            </Card>
            <Card className="p-4 text-center bg-card border-border">
              <p className="text-3xl font-bold text-primary">77%</p>
              <p className="text-xs text-muted-foreground">High Intent</p>
            </Card>
            <Card className="p-4 text-center bg-card border-border">
              <p className="text-3xl font-bold text-primary">8</p>
              <p className="text-xs text-muted-foreground">Priority Features</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="showcase" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Sample Research
              </TabsTrigger>
              <TabsTrigger value="interactive" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Try It Yourself
              </TabsTrigger>
            </TabsList>

            {/* Showcase Tab */}
            <TabsContent value="showcase" className="space-y-12">
              {/* Methodology */}
              <Card className="p-6 bg-secondary/30 border-border">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Research Methodology</h3>
                    <p className="text-sm text-muted-foreground">
                      Conducted 50+ structured interviews with general consumers across demographics, exploring garden ownership, 
                      fertilizer usage, environmental concerns, and purchase intent for a carbon-capturing fertilizer. Respondents 
                      rated global warming concern (1-10) and likelihood to purchase (1-10), with qualitative follow-ups on 
                      concerns about fertilizers and key purchase drivers. Data was coded and segmented to identify messaging themes.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Interview Gallery */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Interview Synthesis
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {interviews.map(renderInterviewCard)}
                </div>
              </div>

              {/* Feature Priority Matrix */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Grid3X3 className="w-5 h-5 text-primary" />
                  Feature Priority Matrix
                </h3>
                {renderFeatureMatrix(features)}
              </div>

              {/* Strategic Recommendations */}
              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Top 3 Product Roadmap Priorities</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-medium text-foreground">Science-Backed Education Hub</h4>
                      <p className="text-sm text-muted-foreground">Highest impact, lowest effort. 77% of respondents show high intent but need education on carbon capture science before purchase. Launch with product.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-medium text-foreground">Third-Party Safety Certifications</h4>
                      <p className="text-sm text-muted-foreground">Primary adoption barrier is health/safety concerns. Invest in certifications to unlock skeptical segment—mentions of "cancer" and "chemicals" appeared in 15% of responses.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-medium text-foreground">Tiered Pricing + Organic Certification</h4>
                      <p className="text-sm text-muted-foreground">Quick wins with strong conversion impact. Price sensitivity and organic preference cited as secondary purchase drivers across multiple segments.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Interactive Tab */}
            <TabsContent value="interactive" className="space-y-8">
              <Card className="p-6 bg-secondary/30 border-border">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Build Your Own Research Synthesis</h3>
                    <p className="text-sm text-muted-foreground">
                      Paste your interview notes and AI will extract key quotes, pain points, and themes. 
                      After analyzing 2+ interviews, generate a Feature Priority Matrix with strategic recommendations.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Input Form */}
              <Card className="p-6 bg-card border-border">
                <h4 className="font-semibold text-foreground mb-4">Add Interview</h4>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Participant Name</label>
                      <Input
                        value={participantName}
                        onChange={(e) => setParticipantName(e.target.value)}
                        placeholder="e.g., Dr. Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Role / Title</label>
                      <Input
                        value={participantRole}
                        onChange={(e) => setParticipantRole(e.target.value)}
                        placeholder="e.g., Head of R&D, Biotech Startup"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Interview Notes</label>
                    <Textarea
                      value={interviewNotes}
                      onChange={(e) => setInterviewNotes(e.target.value)}
                      placeholder="Paste your interview transcript or notes here. Include direct quotes, observed frustrations, workflow challenges, and any feature requests mentioned..."
                      rows={6}
                    />
                  </div>
                  <Button 
                    onClick={analyzeInterview} 
                    disabled={isAnalyzing}
                    className="w-full md:w-auto"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Analyze Interview
                      </>
                    )}
                  </Button>
                </div>
              </Card>

              {/* Custom Interviews */}
              {customInterviews.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">Your Analyzed Interviews ({customInterviews.length})</h4>
                    <Button 
                      onClick={generateFeatureMatrix}
                      disabled={isGeneratingMatrix || customInterviews.length < 2}
                      variant="outline"
                    >
                      {isGeneratingMatrix ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Grid3X3 className="w-4 h-4 mr-2" />
                          Generate Feature Matrix
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {customInterviews.map(renderInterviewCard)}
                  </div>
                </div>
              )}

              {/* Custom Feature Matrix */}
              {customFeatures.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Your Feature Priority Matrix</h4>
                  {renderFeatureMatrix(customFeatures)}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default UserResearchDashboard;