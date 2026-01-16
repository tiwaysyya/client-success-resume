import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CaseStudy {
  tool: string;
  problem: string;
  solution: string;
  link: string;
  external?: boolean;
  context: {
    role: string;
    company: string;
    period: string;
  };
}

const Experience = () => {
  const caseStudies: CaseStudy[] = [
    {
      tool: "Founder's Intelligence Dashboard",
      problem: "Competitor research was manual, slow, and often outdated by the time decisions were made",
      solution: "Automated scraper + AI categorization delivers competitor updates in seconds, not hours",
      link: "/intel",
      context: {
        role: "Co-founder & Product-Market Strategy Lead",
        company: "CO2LLECT",
        period: "Oct 2024 - Jun 2025"
      }
    },
    {
      tool: "User Research Deep Dive",
      problem: "Customer interview insights were scattered across notes, making pattern recognition impossible",
      solution: "AI-powered interview analysis surfaces feature requests & pain points instantly",
      link: "/user-research",
      context: {
        role: "Co-founder & Product-Market Strategy Lead",
        company: "CO2LLECT",
        period: "Oct 2024 - Jun 2025"
      }
    },
    {
      tool: "Unit Economics Health Monitor",
      problem: "CAC/LTV calculations were done manually in spreadsheets with no real-time visibility",
      solution: "Live tracking dashboard with threshold alerts catches unit economics problems early",
      link: "/unit-economics",
      context: {
        role: "Co-founder & Product-Market Strategy Lead",
        company: "CO2LLECT",
        period: "Oct 2024 - Jun 2025"
      }
    },
    {
      tool: "Biotech Market Analysis Dashboard",
      problem: "Market data scattered across sources made therapeutic area evaluation tedious and error-prone",
      solution: "Aggregated intelligence across 6 therapeutic areas for instant market evaluation",
      link: "/biotech-market",
      context: {
        role: "Investment Editorial Head",
        company: "Imperial Investment Society",
        period: "Oct 2024 - Jun 2025"
      }
    },
    {
      tool: "Lab Workflow Timer",
      problem: "Parallel lab protocols required juggling multiple timers—one missed step scrapped entire experiments",
      solution: "Automated protocol parsing with simultaneous timers eliminates human error in high-pressure lab work",
      link: "https://tiwaysyya.github.io/lab-multi-protocol-timer/",
      external: true,
      context: {
        role: "Research Student",
        company: "Imperial College London",
        period: "Oct 2022 - Jun 2025"
      }
    }
  ];

  const additionalExperience = [
    {
      role: "Strategy & Branding Director",
      company: "GenCorporate",
      period: "Oct 2023 - Oct 2024",
      highlight: "Grew membership 800 → 1,200+ through data-driven outreach. Secured McKinsey, PwC, EY, Goldman Sachs speakers."
    },
    {
      role: "Equity Analyst Intern (Buy-Side)",
      company: "RHB Asset Management",
      period: "Jul 2024 - Aug 2024",
      highlight: "Delivered 10+ earnings notes within 24-48 hours. Identified Phase II/III trial delays across 5+ names."
    },
    {
      role: "Patent Law Intern",
      company: "KASS International",
      period: "Aug 2023 - Sep 2023",
      highlight: "Reviewed 20+ competitor patents for FTO risk. Built multi-jurisdiction patent tracking system."
    }
  ];

  return (
    <section id="what-ive-done" className="py-20 px-4 bg-background">
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tools I've Built
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each tool started as a problem I couldn't ignore. Here's what I built to fix them.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid gap-6 mb-16">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="group glow-card border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_auto] gap-0">
                  {/* Main Content */}
                  <div className="p-6 md:p-8">
                    {/* Tool Name as Headline */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      {study.external ? (
                        <a 
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2"
                        >
                          <h3 className="text-2xl font-bold text-foreground group-hover/link:text-primary transition-colors">
                            {study.tool}
                          </h3>
                          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover/link:text-primary transition-colors" />
                        </a>
                      ) : (
                        <Link 
                          to={study.link}
                          className="group/link flex items-center gap-2"
                        >
                          <h3 className="text-2xl font-bold text-foreground group-hover/link:text-primary transition-colors">
                            {study.tool}
                          </h3>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover/link:text-primary group-hover/link:translate-x-1 transition-all" />
                        </Link>
                      )}
                    </div>

                    {/* Problem → Solution */}
                    <div className="space-y-3 mb-4">
                      <div className="flex gap-3">
                        <span className="shrink-0 w-20 text-sm font-medium text-destructive/80 uppercase tracking-wide">Problem</span>
                        <p className="text-muted-foreground">{study.problem}</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="shrink-0 w-20 text-sm font-medium text-primary uppercase tracking-wide">Solution</span>
                        <p className="text-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Context Badge */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{study.context.role}</span>
                      <span>•</span>
                      <span>{study.context.company}</span>
                      <span>•</span>
                      <span>{study.context.period}</span>
                    </div>
                  </div>

                  {/* CTA Side Panel */}
                  <div className="hidden md:flex items-center justify-center px-8 bg-gradient-to-br from-primary/5 to-accent/5 border-l border-border/50">
                    {study.external ? (
                      <a 
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        View Tool
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link 
                        to={study.link}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Try it
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Experience - Compact */}
        <div className="border-t border-border pt-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Other Experience
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {additionalExperience.map((exp, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border border-border/50 bg-card/50"
              >
                <div className="mb-2">
                  <h4 className="font-semibold text-foreground text-sm">{exp.role}</h4>
                  <p className="text-primary text-sm">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
