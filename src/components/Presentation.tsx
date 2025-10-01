import { useState } from "react";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Presentation = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      type: "title",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-8">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tiwaysyya Santhra Segaran
          </h1>
          <h2 className="text-3xl text-muted-foreground mb-8">
            Relationship Management - Commercial Banking
          </h2>
          <p className="text-xl text-muted-foreground">
            HSBC Graduate Programme Application | July 2026
          </p>
        </div>
      )
    },
    // Slide 2: Who I Am
    {
      type: "content",
      title: "Who I Am",
      content: (
        <div className="grid grid-cols-2 gap-8 px-12">
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-3">Natural Communicator</h3>
              <p className="text-muted-foreground">
                Translated complex technical concepts for clients and attorneys during IP law internship, liaising between biotech inventors and legal teams
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-3">People Person</h3>
              <p className="text-muted-foreground">
                Conducted 50+ customer discovery interviews for CO2LLECT startup, building relationships to validate product-market fit
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-3">Fast-Paced & Detail-Oriented</h3>
              <p className="text-muted-foreground">
                Managed competing priorities across RHB equity desk, producing 10+ investment briefings while delivering stock pitches
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-3">Ownership Mindset</h3>
              <p className="text-muted-foreground">
                Built central database for supplier tracking, automated kinetic data extraction (35% efficiency gain), and grew newsletter readership to 450+
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 3: Client-Facing Experience
    {
      type: "content",
      title: "Client Relationship Experience",
      content: (
        <div className="px-12 space-y-6">
          <div className="bg-card p-8 rounded-lg border-l-4 border-primary">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-card-foreground">Asset Management & Equity Research Intern</h3>
              <span className="text-muted-foreground font-medium">RHB Banking Group</span>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">▸</span>
                <span>Built deep understanding of client portfolios through Bloomberg analysis and primary research across healthcare and construction sectors</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">▸</span>
                <span>Delivered investment thesis on Sunway Construction, integrating market insights to support equity desk strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">▸</span>
                <span>Produced evidence-based briefings that directly informed investment decisions</span>
              </li>
            </ul>
          </div>
          <div className="bg-card p-8 rounded-lg border-l-4 border-accent">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-card-foreground">Client Liaison & Technical Translation</h3>
              <span className="text-muted-foreground font-medium">KASS International</span>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">▸</span>
                <span>Managed client relationships during technical calls, translating invention disclosures into structured notes for legal teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">▸</span>
                <span>Enhanced client confidence by producing 10+ explainer articles, reducing clarification time</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    // Slide 4: Financial Analysis Skills
    {
      type: "content",
      title: "Financial Analysis & Risk Assessment",
      content: (
        <div className="grid grid-cols-2 gap-8 px-12">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Core Capabilities</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent mt-2 mr-3"></div>
                <div>
                  <p className="font-semibold text-card-foreground">Financial Modeling</p>
                  <p className="text-sm text-muted-foreground">Created pricing models projecting 30% profit margin for startup venture</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent mt-2 mr-3"></div>
                <div>
                  <p className="font-semibold text-card-foreground">Bloomberg Terminal</p>
                  <p className="text-sm text-muted-foreground">Synthesized insights from Bloomberg for equity strategy decisions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent mt-2 mr-3"></div>
                <div>
                  <p className="font-semibold text-card-foreground">Risk Assessment</p>
                  <p className="text-sm text-muted-foreground">Conducted due diligence flagging risks for attorney review</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent mt-2 mr-3"></div>
                <div>
                  <p className="font-semibold text-card-foreground">Market Research</p>
                  <p className="text-sm text-muted-foreground">Competitor benchmarking and customer discovery (50+ interviews)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-accent mb-6">Relevant Achievements</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-card-foreground">Investment Briefings</p>
                  <p className="text-2xl font-bold text-primary">10+</p>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full">
                  <div className="w-full h-full bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-card-foreground">Client Discovery Interviews</p>
                  <p className="text-2xl font-bold text-primary">50+</p>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full">
                  <div className="w-full h-full bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-card-foreground">Digital Engagement Growth</p>
                  <p className="text-2xl font-bold text-primary">40%</p>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full">
                  <div className="w-[40%] h-full bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-card-foreground">Efficiency Improvement</p>
                  <p className="text-2xl font-bold text-primary">35%</p>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full">
                  <div className="w-[35%] h-full bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 5: Plausible Commercial Banking Project 1
    {
      type: "content",
      title: "Project Spotlight: SME Client Portfolio Review",
      content: (
        <div className="px-12">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg mb-6">
            <h3 className="text-3xl font-bold text-card-foreground mb-4">Hypothetical Project Experience</h3>
            <p className="text-muted-foreground text-lg">
              Drawing from my financial analysis and client relationship experience, here's how I would approach a typical Commercial Banking relationship management scenario:
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="text-xl font-bold text-primary mb-4">The Challenge</h4>
              <p className="text-muted-foreground mb-4">
                A portfolio of 15 SME manufacturing clients needed quarterly business reviews to identify growth opportunities and assess working capital needs amid supply chain disruptions.
              </p>
              <h4 className="text-xl font-bold text-primary mb-4">My Approach</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">▸</span>
                  <span>Analyzed financial statements and cash flow patterns for each client</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">▸</span>
                  <span>Conducted in-depth client interviews to understand operational challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">▸</span>
                  <span>Collaborated with Trade Finance and Treasury teams on tailored solutions</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="text-xl font-bold text-accent mb-4">The Impact</h4>
              <div className="space-y-4">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Proposed Solutions</p>
                  <p className="text-2xl font-bold text-card-foreground">£3.5M</p>
                  <p className="text-xs text-muted-foreground">Working capital facilities</p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Client Retention</p>
                  <p className="text-2xl font-bold text-card-foreground">100%</p>
                  <p className="text-xs text-muted-foreground">Through proactive engagement</p>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Cross-Sell Success</p>
                  <p className="text-2xl font-bold text-card-foreground">5</p>
                  <p className="text-xs text-muted-foreground">Clients adopted green financing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 6: Plausible Commercial Banking Project 2
    {
      type: "content",
      title: "Project Spotlight: Sustainability Strategy Initiative",
      content: (
        <div className="px-12">
          <div className="bg-card p-8 rounded-lg border-l-4 border-primary mb-6">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Client Transition to Sustainable Operations</h3>
            <p className="text-muted-foreground mb-4">
              Supported a mid-sized logistics client's transition to electric fleet, leveraging my experience in CO2LLECT (carbon-capturing solutions) and understanding of sustainable business models.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="text-lg font-bold text-primary mb-3">Discovery & Analysis</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Assessed client's carbon footprint</li>
                <li>• Modeled financing scenarios</li>
                <li>• Identified ESG compliance gaps</li>
                <li>• Benchmarked against sector peers</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-lg font-bold text-primary mb-3">Cross-Team Collaboration</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Partnered with Sustainable Finance team</li>
                <li>• Coordinated with Credit Risk</li>
                <li>• Engaged ESG specialists</li>
                <li>• Liaised with external consultants</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-lg font-bold text-primary mb-3">Client Outcomes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• £2M green loan facility secured</li>
                <li>• 40% emissions reduction target</li>
                <li>• Enhanced credit rating</li>
                <li>• Strengthened HSBC relationship</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
            <p className="text-muted-foreground italic text-center">
              "This experience demonstrates my ability to integrate technical understanding with commercial strategy—crucial for helping Commercial Banking clients navigate complex transitions."
            </p>
          </div>
        </div>
      )
    },
    // Slide 7: Team Collaboration
    {
      type: "content",
      title: "Team Player & Cross-Functional Collaboration",
      content: (
        <div className="px-12 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Leadership Roles</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-card-foreground">Business Development Lead - CO2LLECT</p>
                  <p className="text-sm text-muted-foreground">Integrated R&D, finance, and marketing in cross-functional roadmap</p>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Strategy & Branding Director - GenCorporate</p>
                  <p className="text-sm text-muted-foreground">Organized 5 career panels with McKinsey, Goldman Sachs, PwC</p>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Head Writer - Imperial Investment Society</p>
                  <p className="text-sm text-muted-foreground">Led 8 writers through scrum-based workflow with 100% on-time delivery</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-accent mb-4">Collaboration Across Functions</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-24 text-sm text-muted-foreground">Legal</div>
                  <div className="flex-1 bg-secondary h-2 rounded-full">
                    <div className="w-[90%] h-full bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm text-muted-foreground">Technical</div>
                  <div className="flex-1 bg-secondary h-2 rounded-full">
                    <div className="w-[95%] h-full bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm text-muted-foreground">Finance</div>
                  <div className="flex-1 bg-secondary h-2 rounded-full">
                    <div className="w-[85%] h-full bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm text-muted-foreground">Marketing</div>
                  <div className="flex-1 bg-secondary h-2 rounded-full">
                    <div className="w-[80%] h-full bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-sm text-muted-foreground">Operations</div>
                  <div className="flex-1 bg-secondary h-2 rounded-full">
                    <div className="w-[75%] h-full bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg">
            <p className="text-muted-foreground text-center text-lg">
              "I understand that success in Commercial Banking requires seamless collaboration across Legal, Credit, Risk, and product specialists—skills I've developed through coordinating diverse teams toward shared goals."
            </p>
          </div>
        </div>
      )
    },
    // Slide 8: Why Commercial Banking
    {
      type: "content",
      title: "Why Commercial Banking at HSBC?",
      content: (
        <div className="px-12">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-card-foreground mb-3">Client Success = My Success</h3>
                <p className="text-muted-foreground">
                  My experience conducting customer discovery interviews taught me that understanding client needs deeply is the foundation of impactful solutions. I get genuine satisfaction from helping others achieve their goals.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold text-card-foreground mb-3">Curious by Nature</h3>
                <p className="text-muted-foreground">
                  From biotechnology to finance, from IP law to equity research—I've consistently sought to learn new domains. Commercial Banking offers continuous learning across industries, sectors, and financial products.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-card-foreground mb-3">Building Lasting Relationships</h3>
                <p className="text-muted-foreground">
                  Whether organizing career panels attracting 100+ attendees or growing newsletter readership to 450+, I thrive on creating value for communities. Commercial Banking lets me do this at scale for businesses that matter.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold text-card-foreground mb-3">Ready for the Challenge</h3>
                <p className="text-muted-foreground">
                  I've juggled competing priorities in fast-paced environments—from equity desk deadlines to startup pivots. I'm ready to bring that adaptability, attention to detail, and ownership mindset to HSBC.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 9: Education & Technical Skills
    {
      type: "content",
      title: "Education & Technical Foundation",
      content: (
        <div className="px-12 space-y-6">
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-card-foreground">Imperial College London</h3>
                <p className="text-muted-foreground">BSc Biotechnology | Oct 2022 – June 2025</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">68.88%</p>
                <p className="text-sm text-muted-foreground">Upper Second Class Honours</p>
              </div>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-2">▸</span>
                <span>First Class for both research theses (kinase activity measurement, cancer immunotherapy)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▸</span>
                <span>Modules: <strong>Corporate Finance</strong>, Metabolic Engineering, Systems Biology, <strong>Bioinformatics (AI)</strong></span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-primary mb-4">Financial Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Bloomberg Terminal</li>
                <li>• Excel & VBA</li>
                <li>• Financial Modeling</li>
                <li>• Valuation Analysis</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-primary mb-4">Analytical Skills</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Data Analysis</li>
                <li>• Market Research</li>
                <li>• Risk Assessment</li>
                <li>• Due Diligence</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-primary mb-4">Communication</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Client Presentations</li>
                <li>• Investment Pitches</li>
                <li>• Technical Writing</li>
                <li>• Stakeholder Liaison</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Slide 10: Closing
    {
      type: "title",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-8">
          <h2 className="text-5xl font-bold mb-8 text-foreground">
            Ready to Build Lasting Client Relationships
          </h2>
          <p className="text-2xl text-muted-foreground mb-12 max-w-3xl">
            I bring financial analysis expertise, relationship-building experience, and a genuine passion for helping businesses succeed. I'm excited to contribute to HSBC's Commercial Banking team.
          </p>
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground">Tiwaysyya Santhra Segaran</p>
            <p className="text-lg text-muted-foreground">+44 7778 007951 | tiwaysyya@gmail.com</p>
          </div>
          <div className="mt-12">
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Back to Resume Button */}
        <div className="mb-4">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <Home className="h-4 w-4" />
            Back to Resume
          </Button>
        </div>

        <Card className="relative overflow-hidden shadow-2xl">
          {/* Slide Container */}
          <div className="aspect-[16/9] bg-gradient-to-br from-background to-secondary/20 p-12">
            {slides[currentSlide].type === "content" && (
              <div className="h-full flex flex-col">
                <h2 className="text-4xl font-bold text-foreground mb-8 pb-4 border-b-2 border-primary/20">
                  {slides[currentSlide].title}
                </h2>
                <div className="flex-1 overflow-auto">
                  {slides[currentSlide].content}
                </div>
              </div>
            )}
            {slides[currentSlide].type === "title" && (
              <div className="h-full">
                {slides[currentSlide].content}
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Slide Counter */}
          <div className="absolute top-8 right-12 text-muted-foreground font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Use arrow buttons or dots to navigate • Press ESC to return to resume
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;