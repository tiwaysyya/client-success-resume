import { Briefcase, TrendingUp, Users, Rocket, Zap, Radar, Target, LayoutDashboard, DollarSign, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Rocket,
      role: "Co-founder & Product-Market Strategy Lead",
      company: "CO2LLECT",
      period: "Oct 2024 - Jun 2025",
      context: "Early-stage climate startup. Won 1st place Imperial pitch competition.",
      problems: [
        {
          problem: "No validated demand before building",
          solution: "50+ cold stakeholder interviews → eliminated 2 non-viable product directions early"
        },
        {
          problem: "Pricing was guesswork",
          solution: "Built unit economics from first principles → £1.30/kg price point at 40% gross margin"
        },
        {
          problem: "High customer adoption risk",
          solution: "Designed trust-led acquisition: free trial batches for one crop cycle before paid orders"
        }
      ],
      builtTools: [
        {
          name: "Founder's Intelligence Dashboard",
          what: "Automated scraper + AI categorization → competitor updates in seconds",
          link: "/intel"
        },
        {
          name: "User Research Deep Dive",
          what: "AI interview analysis → instant feature requests & pain points",
          link: "/user-research"
        },
        {
          name: "Unit Economics Health Monitor",
          what: "Real-time CAC/LTV tracking with threshold alerts",
          link: "/unit-economics"
        }
      ]
    },
    {
      icon: Users,
      role: "Investment Editorial Head",
      company: "Imperial Investment Society",
      period: "Oct 2024 - Jun 2025",
      context: "Led 10-analyst team. 30+ monthly publications. 100% on-time record.",
      problems: [
        {
          problem: "Low reader engagement",
          solution: "Data-driven content experiments → scaled readership 45% to 1,500+ active readers"
        },
        {
          problem: "Inconsistent research quality",
          solution: "Enforced strict research standards and workflows across team"
        }
      ],
      builtTool: {
        name: "Biotech Market Analysis Dashboard",
        reason: "Market data scattered online, research tedious",
        what: "Aggregated data across 6 therapeutic areas → instant evaluation tool",
        link: "/biotech-market"
      }
    },
    {
      icon: Timer,
      role: "Research Student",
      company: "Imperial College London",
      period: "Oct 2022 - Jun 2025",
      context: "BSc Biotechnology (Hons). Upper Second Class.",
      problems: [
        {
          problem: "Lab protocols required parallel timer management",
          solution: "Missing a time-critical step = scrapped experiment"
        }
      ],
      builtTool: {
        name: "Lab Workflow Timer",
        reason: "High-pressure parallel task management led to errors",
        what: "Automated protocol parsing + simultaneous timers → failsafe system",
        link: "https://tiwaysyya.github.io/lab-multi-protocol-timer/",
        external: true
      }
    },
    {
      icon: TrendingUp,
      role: "Strategy & Branding Director",
      company: "GenCorporate",
      period: "Oct 2023 - Oct 2024",
      context: "Career society. Flagship events 150+ attendees.",
      problems: [
        {
          problem: "Stagnant membership growth",
          solution: "Analysed engagement data → reshaped outreach around highest-engaged segments → 800 to 1,200+ members"
        },
        {
          problem: "Needed industry speaker credibility",
          solution: "Cold-outreach secured McKinsey, PwC, EY, Goldman Sachs speakers"
        }
      ]
    },
    {
      icon: Zap,
      role: "Equity Analyst Intern (Buy-Side)",
      company: "RHB Asset Management",
      period: "Jul 2024 - Aug 2024",
      context: "RM 1-15B market cap healthcare coverage. Q2 earnings cycle.",
      problems: [
        {
          problem: "Slow post-earnings turnaround",
          solution: "Built rapid synthesis workflows → delivered 10+ earnings notes within 24-48 hours"
        },
        {
          problem: "Hidden valuation risks in pharma pipeline",
          solution: "Identified Phase II/III trial delays across 5+ names → flagged 6-12 month launch deferrals"
        },
        {
          problem: "Portfolio needed alpha opportunities",
          solution: "Pitched RM10B+ contractor based on infrastructure spending analysis"
        }
      ]
    },
    {
      icon: Briefcase,
      role: "Patent Law Intern",
      company: "KASS International",
      period: "Aug 2023 - Sep 2023",
      context: "IP law firm. Medical device patent work.",
      problems: [
        {
          problem: "Clients committed to products before knowing IP risk",
          solution: "Reviewed 20+ competitor patents → mapped freedom-to-operate risk and white space"
        },
        {
          problem: "No centralized patent tracking",
          solution: "Built multi-jurisdiction tracking system → summarised examiner feedback into actionable next steps"
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I've Done
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <exp.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary text-sm font-medium">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{exp.context}</p>
                </div>
              </div>

              {/* Problems & Solutions - Clean table-like layout */}
              <div className="ml-14 space-y-2">
                {exp.problems.map((item, i) => (
                  <div key={i} className="grid grid-cols-[auto_1fr] gap-x-3 text-sm">
                    <span className="text-destructive/70">→</span>
                    <p>
                      <span className="text-muted-foreground">{item.problem}:</span>{" "}
                      <span className="text-foreground">{item.solution}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Built Tools */}
              {exp.builtTools && exp.builtTools.length > 0 && (
                <div className="ml-14 mt-3 space-y-1">
                  <span className="text-primary font-medium text-sm">Built:</span>
                  {exp.builtTools.map((tool, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm ml-2">
                      <span className="text-muted-foreground">•</span>
                      {'external' in tool && tool.external ? (
                        <a 
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-foreground hover:text-primary inline-flex items-center gap-1 underline underline-offset-2"
                        >
                          {tool.name} <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <Link 
                          to={tool.link}
                          className="font-semibold text-foreground hover:text-primary inline-flex items-center gap-1 underline underline-offset-2"
                        >
                          {tool.name} <ExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                      <span className="text-muted-foreground">— {tool.what}</span>
                    </div>
                  ))}
                </div>
              )}
              {exp.builtTool && (
                <div className="ml-14 mt-3 flex items-center gap-2 text-sm">
                  <span className="text-primary font-medium">Built:</span>
                  {exp.builtTool.external ? (
                    <a 
                      href={exp.builtTool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:text-primary inline-flex items-center gap-1 underline underline-offset-2"
                    >
                      {exp.builtTool.name} <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link 
                      to={exp.builtTool.link}
                      className="font-semibold text-foreground hover:text-primary inline-flex items-center gap-1 underline underline-offset-2"
                    >
                      {exp.builtTool.name} <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
                  <span className="text-muted-foreground">— {exp.builtTool.what}</span>
                </div>
              )}

              {/* Divider */}
              {index < experiences.length - 1 && (
                <div className="ml-14 mt-8 border-b border-border/50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;