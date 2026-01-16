import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  context: string;
  problem: string;
  solution: {
    description: string;
    tool: string;
    link: string;
    external?: boolean;
  };
}

const Experience = () => {
  const caseStudies: CaseStudy[] = [
    {
      context: "As a CO2LLECT co-founder, I needed to stay on top of competitor moves in real time.",
      problem: "Insights were scattered across notes and recordings, making patterns hard to spot and priorities unclear.",
      solution: {
        description: "I built an automated scraper with AI categorisation that surfaces competitor updates in seconds.",
        tool: "Founder's Intelligence Dashboard",
        link: "/intel"
      }
    },
    {
      context: "We ran 50+ customer discovery interviews at CO2LLECT. Insights were buried across notes, recordings, and scattered docs.",
      problem: "Patterns were invisible. We couldn't systematically identify what features customers actually wanted.",
      solution: {
        description: "I built an AI-powered analysis tool that extracts and categorizes pain points and feature requests from interview transcripts.",
        tool: "User Research Deep Dive",
        link: "/user-research"
      }
    },
    {
      context: "Pricing our product required understanding unit economics—but CAC, LTV, and margins lived in messy spreadsheets.",
      problem: "No real-time visibility. We couldn't tell if our economics were healthy until it was too late to adjust.",
      solution: {
        description: "I built a live dashboard that tracks CAC/LTV with threshold alerts to catch problems early.",
        tool: "Unit Economics Health Monitor",
        link: "/unit-economics"
      }
    },
    {
      context: "As Investment Editorial Head at Imperial Investment Society, my team covered biotech markets across therapeutic areas.",
      problem: "Market data was scattered across databases, filings, and reports. Evaluating a sector took days of manual aggregation.",
      solution: {
        description: "I built a dashboard that aggregates market intelligence across 6 therapeutic areas for instant evaluation.",
        tool: "Biotech Market Analysis Dashboard",
        link: "/biotech-market"
      }
    },
    {
      context: "During my BSc at Imperial, lab protocols often required running 3-4 parallel timers for different steps.",
      problem: "Missing a single time-critical step meant scrapping the entire experiment. Mental juggling led to errors.",
      solution: {
        description: "I built a protocol parser with simultaneous timers that eliminates human error in high-pressure lab work.",
        tool: "Lab Workflow Timer",
        link: "https://tiwaysyya.github.io/lab-multi-protocol-timer/",
        external: true
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
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I've Built
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real problems I encountered. Tools I built to solve them.
          </p>
        </div>

        {/* Case Studies as Narrative */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <article key={index} className="relative">
              {/* Number indicator */}
              <div className="absolute -left-4 md:-left-12 top-0 text-6xl font-bold text-primary/10 select-none">
                {index + 1}
              </div>
              
              <div className="space-y-4 pl-4">
                {/* Context */}
                <p className="text-lg text-foreground leading-relaxed">
                  {study.context}
                </p>
                
                {/* Problem */}
                <p className="text-lg text-muted-foreground leading-relaxed pl-4 border-l-2 border-destructive/30">
                  {study.problem}
                </p>
                
                {/* Solution with Tool Link */}
                <div className="bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-lg border-l-2 border-primary">
                  <p className="text-lg text-foreground leading-relaxed mb-3">
                    {study.solution.description}
                  </p>
                  {study.solution.external ? (
                    <a 
                      href={study.solution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
                    >
                      → {study.solution.tool}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link 
                      to={study.solution.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4 group"
                    >
                      → {study.solution.tool}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Divider */}
              {index < caseStudies.length - 1 && (
                <div className="mt-12 border-b border-border/30"></div>
              )}
            </article>
          ))}
        </div>

        {/* Additional Experience - Compact */}
        <div className="border-t border-border mt-20 pt-12">
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
