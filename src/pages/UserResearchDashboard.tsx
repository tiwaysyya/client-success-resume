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
    participant: "Dr. Sarah Chen",
    role: "Principal Scientist, Gene Therapy Startup",
    keyQuote: "I spend 40% of my time on data management instead of actual science. Our ELN is a glorified Word document.",
    painPoints: [
      "Manual data entry across multiple systems",
      "No integration between lab instruments and databases",
      "Difficulty tracking experiment versions"
    ],
    themes: ["Data Management", "Workflow Automation", "Version Control"]
  },
  {
    id: "2",
    participant: "Dr. Michael Okonkwo",
    role: "Head of R&D, Small Molecule Discovery",
    keyQuote: "Regulatory submissions take 3x longer than they should because we're hunting for documentation scattered across drives.",
    painPoints: [
      "Fragmented documentation across platforms",
      "Audit trail gaps for FDA submissions",
      "Compliance burden on small teams"
    ],
    themes: ["Regulatory Compliance", "Documentation", "Team Efficiency"]
  },
  {
    id: "3",
    participant: "Dr. Priya Sharma",
    role: "CSO, Precision Medicine Company",
    keyQuote: "We're drowning in genomic data but starving for insights. Our bioinformatics pipeline is held together with duct tape.",
    painPoints: [
      "Scalability issues with data analysis pipelines",
      "Lack of real-time collaboration on datasets",
      "Integration challenges with external labs"
    ],
    themes: ["Data Analytics", "Collaboration", "Infrastructure"]
  },
  {
    id: "4",
    participant: "Dr. James Park",
    role: "VP Clinical Development, Oncology Biotech",
    keyQuote: "Every clinical site has different protocols for the same study. Harmonization is a nightmare.",
    painPoints: [
      "Protocol deviation tracking is manual",
      "Site-to-site inconsistencies in data collection",
      "Delayed visibility into trial progress"
    ],
    themes: ["Clinical Operations", "Standardization", "Real-time Visibility"]
  },
  {
    id: "5",
    participant: "Dr. Elena Rodriguez",
    role: "Lab Director, CDMO",
    keyQuote: "Clients want real-time batch tracking but our systems are stuck in the 90s. We're losing contracts over this.",
    painPoints: [
      "Legacy systems with no API access",
      "Client transparency demands exceeding capabilities",
      "Manual batch record keeping"
    ],
    themes: ["Digital Transformation", "Client Experience", "Manufacturing"]
  },
  {
    id: "6",
    participant: "Dr. Ahmed Hassan",
    role: "Founder, Computational Biology Startup",
    keyQuote: "Hiring a full DevOps team just to manage our ML infrastructure is killing our runway.",
    painPoints: [
      "High infrastructure costs for ML workloads",
      "Talent scarcity for biotech-specific tools",
      "Time-to-insight bottlenecks"
    ],
    themes: ["Infrastructure Costs", "Talent", "Speed to Market"]
  },
  {
    id: "7",
    participant: "Dr. Lisa Thompson",
    role: "Head of Quality, Cell Therapy",
    keyQuote: "Every batch release takes 2 weeks of manual review. Automation would cut that to days.",
    painPoints: [
      "Paper-based quality processes",
      "Human error in batch documentation",
      "Slow release cycles impacting patient access"
    ],
    themes: ["Quality Assurance", "Automation", "Patient Impact"]
  },
  {
    id: "8",
    participant: "Dr. Robert Kim",
    role: "Director of Research, Academic Spinout",
    keyQuote: "Translating academic protocols to GMP is like learning a new language. We need a Rosetta Stone.",
    painPoints: [
      "Academic-to-industry knowledge gap",
      "Protocol translation complexity",
      "Regulatory learning curve"
    ],
    themes: ["Tech Transfer", "Education", "Regulatory Guidance"]
  },
  {
    id: "9",
    participant: "Dr. Maria Santos",
    role: "Program Manager, ATMP Developer",
    keyQuote: "Cross-functional alignment is our biggest blocker. Everyone uses different tools and speaks different languages.",
    painPoints: [
      "Siloed teams with misaligned priorities",
      "No single source of truth for project status",
      "Communication overhead"
    ],
    themes: ["Cross-functional Collaboration", "Project Management", "Communication"]
  },
  {
    id: "10",
    participant: "Dr. David Walsh",
    role: "CEO, Rare Disease Biotech",
    keyQuote: "We're a 15-person team trying to compete with pharma giants. Every inefficiency is existential.",
    painPoints: [
      "Resource constraints vs. regulatory demands",
      "Need for end-to-end platform solutions",
      "Investor pressure for capital efficiency"
    ],
    themes: ["Resource Optimization", "Platform Solutions", "Capital Efficiency"]
  }
];

const sampleFeatures: Feature[] = [
  {
    id: "1",
    name: "Unified Lab Data Dashboard",
    impact: 9,
    effort: 6,
    linkedPainPoints: ["Manual data entry", "Integration challenges", "No integration between systems"],
    priority: "Major Project"
  },
  {
    id: "2",
    name: "Automated Audit Trail Generator",
    impact: 8,
    effort: 4,
    linkedPainPoints: ["Audit trail gaps", "Compliance burden", "FDA submissions"],
    priority: "Quick Win"
  },
  {
    id: "3",
    name: "Real-time Batch Tracking Portal",
    impact: 8,
    effort: 5,
    linkedPainPoints: ["Client transparency demands", "Manual batch records", "Real-time visibility"],
    priority: "Quick Win"
  },
  {
    id: "4",
    name: "Protocol Version Control System",
    impact: 7,
    effort: 3,
    linkedPainPoints: ["Experiment version tracking", "Protocol translation"],
    priority: "Quick Win"
  },
  {
    id: "5",
    name: "ML Infrastructure Abstraction Layer",
    impact: 7,
    effort: 8,
    linkedPainPoints: ["High infrastructure costs", "DevOps burden", "Time-to-insight"],
    priority: "Major Project"
  },
  {
    id: "6",
    name: "Cross-functional Project Hub",
    impact: 6,
    effort: 5,
    linkedPainPoints: ["Siloed teams", "Single source of truth", "Communication overhead"],
    priority: "Fill-In"
  },
  {
    id: "7",
    name: "Automated Batch Release Review",
    impact: 9,
    effort: 7,
    linkedPainPoints: ["Paper-based QA", "Human error", "Slow release cycles"],
    priority: "Major Project"
  },
  {
    id: "8",
    name: "Regulatory Compliance Templates",
    impact: 5,
    effort: 2,
    linkedPainPoints: ["Regulatory learning curve", "Compliance burden"],
    priority: "Quick Win"
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
              <p className="text-muted-foreground">Biotech Product Strategy</p>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            10 "guerrilla" user interviews with biotech scientists and executives, synthesized into actionable product insights. 
            Raw customer pain points translated into a strategic Feature Priority Matrix.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <Card className="p-4 text-center bg-card border-border">
              <p className="text-3xl font-bold text-primary">10</p>
              <p className="text-xs text-muted-foreground">Interviews</p>
            </Card>
            <Card className="p-4 text-center bg-card border-border">
              <p className="text-3xl font-bold text-primary">30+</p>
              <p className="text-xs text-muted-foreground">Pain Points</p>
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
                      Conducted 10 semi-structured interviews with biotech professionals across therapeutic areas (cell therapy, 
                      gene therapy, small molecules) and functions (R&D, Clinical, Quality, Manufacturing). Each 30-minute session 
                      focused on daily workflow pain points, tool frustrations, and unmet needs. Interviews were recorded, 
                      transcribed, and coded using thematic analysis.
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
                      <h4 className="font-medium text-foreground">Automated Audit Trail Generator</h4>
                      <p className="text-sm text-muted-foreground">High impact, low effort. Addresses critical regulatory pain points across 4 interviews. Build first.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-medium text-foreground">Unified Lab Data Dashboard</h4>
                      <p className="text-sm text-muted-foreground">Highest impact feature. Significant effort but solves core data fragmentation pain. Start scoping now.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-medium text-foreground">Real-time Batch Tracking Portal</h4>
                      <p className="text-sm text-muted-foreground">Quick win with strong client-facing value. Differentiator for CDMO clients. Ship in Q1.</p>
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