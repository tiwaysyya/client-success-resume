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
      problem: "Tracking updates meant repeatedly scanning websites and news sources, which quickly became unsustainable alongside other responsibilities.",
      solution: {
        description: "I built an automated scraper with AI categorisation that surfaces competitor updates in seconds.",
        tool: "Founder's Intelligence Dashboard",
        link: "/intel"
      }
    },
    {
      context: "At CO2LLECT, we ran 50+ customer discovery interviews to understand real user needs.",
      problem: "Insights were scattered across notes and recordings, making patterns hard to spot and priorities unclear.",
      solution: {
        description: "I built an AI-powered analysis tool that extracts and categorizes pain points and feature requests from interview transcripts.",
        tool: "User Research Deep Dive",
        link: "/user-research"
      }
    },
    {
      context: "Pricing decisions depended on understanding CAC, LTV, and margins across the business.",
      problem: "Key metrics lived in disconnected spreadsheets with no real-time view of economic health.",
      solution: {
        description: "I built a live dashboard that tracks CAC/LTV with threshold alerts to catch problems early.",
        tool: "Unit Economics Health Monitor",
        link: "/unit-economics"
      }
    },
    {
      context: "At the Imperial Investment Society, I oversaw biotech and pharma sector coverage, producing regular market updates and thematic analysis.",
      problem: "Sector evaluation relied on fragmented data pulled manually from multiple sources, with the same consolidation work repeated every two weeks across different focus areas.",
      solution: {
        description: "To remove that bottleneck, I built a dashboard aggregating key market signals across six therapeutic areas for instant prioritisation.",
        tool: "Biotech Market Analysis Dashboard",
        link: "/biotech-market"
      }
    },
    {
      context: "During my BSc at Imperial, lab protocols often required running several time-critical steps in parallel.",
      problem: "Missing a single step meant scrapping the entire experiment, making manual timer management a repeated failure point.",
      solution: {
        description: "I built a protocol parser with concurrent timers that turns complex lab workflows into a single, error-resistant interface.",
        tool: "Lab Workflow Timer",
        link: "https://tiwaysyya.github.io/lab-multi-protocol-timer/",
        external: true
      }
    }
  ];

  const additionalExperience = [
    {
      role: "Patent Analyst Intern",
      company: "KASS International",
      period: "Aug 2023 - Sep 2023",
      highlight: <>Built multi-jurisdiction tracking system. Conducted <strong className="text-foreground font-medium">competitive landscape analysis</strong> across 6+ biotech filings.</>
    },
    {
      role: "Strategy & Growth Lead",
      company: "GenCorporate",
      period: "Oct 2023 - Oct 2024",
      highlight: <>Analysed engagement data to pivot outreach strategy, <strong className="text-foreground font-medium">driving 43% member growth</strong>. Negotiated partnerships with Tier-1 firms.</>
    },
    {
      role: "Equity Research Analyst Intern",
      company: "RHB Asset Management",
      period: "Jul 2024 - Aug 2024",
      highlight: <>Conducted competitive analysis across 20+ healthcare providers. Led <strong className="text-foreground font-medium">12+ expert interviews</strong> to inform portfolio positioning.</>
    }
  ];

  return (
    <section id="what-ive-done" className="py-28 px-4 bg-background">
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            What I've Built
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Real problems I encountered. Tools I built to solve them.
          </p>
        </div>

        {/* Case Studies as Narrative */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <article key={index} className="relative">
              {/* Number indicator */}
              <p className="text-6xl font-serif text-accent/20 mb-4 select-none">
                {String(index + 1).padStart(2, '0')}
              </p>
              
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed font-sans">
                  {study.context}
                </p>
                
                <p className="text-base text-muted-foreground leading-relaxed pl-5 border-l-2 border-accent/30 font-sans">
                  {study.problem}
                </p>
                
                <div className="pt-2">
                  <p className="text-base text-foreground leading-relaxed mb-3 font-sans">
                    {study.solution.description}
                  </p>
                  {study.solution.external ? (
                    <a 
                      href={study.solution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent font-sans font-medium text-sm hover:text-foreground transition-colors duration-300"
                    >
                      {study.solution.tool}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link 
                      to={study.solution.link}
                      className="inline-flex items-center gap-2 text-accent font-sans font-medium text-sm hover:text-foreground transition-colors duration-300 group"
                    >
                      {study.solution.tool}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  )}
                </div>
              </div>

              {index < caseStudies.length - 1 && (
                <div className="mt-16 editorial-divider"></div>
              )}
            </article>
          ))}
        </div>

        {/* Additional Experience */}
        <div className="border-t border-border mt-24 pt-16">
          <h3 className="text-3xl font-serif text-foreground mb-10 text-center">
            Other Experience
          </h3>
          <div className="space-y-0 border-t border-border">
            {additionalExperience.map((exp, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10 py-6 border-b border-border hover:bg-muted/50 transition-colors duration-300 px-4"
              >
                <div className="md:w-56 flex-shrink-0">
                  <h4 className="font-sans font-semibold text-foreground text-base">{exp.role}</h4>
                  <p className="text-accent text-sm font-sans">{exp.company} · {exp.period}</p>
                </div>
                <p className="text-base text-muted-foreground font-sans leading-relaxed">{exp.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
