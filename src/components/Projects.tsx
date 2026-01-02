import { Card } from "@/components/ui/card";
import { LayoutDashboard, Timer, Radar, ExternalLink, Target, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      icon: Radar,
      title: "Founder's Intelligence Dashboard",
      description: "An automated intelligence system that scrapes competitor updates and uses AI to categorize them.",
      problem: "While serving as Product strategy lead at an early-stage startup, I wasted hours manually tracking competitor sites and news. This was critical data, but the manual collection was a slow process I simply didn't have time for.",
      impact: "To reclaim valuable founder bandwidth, I replaced a manual, daily chore with a real-time feed that provides strategic responses in seconds.",
      features: [
        "Real-time competitor website & news scraping",
        "AI-powered categorization of updates",
        "3-bullet strategic response for each competitor"
      ],
      tech: ["React", "Supabase", "Firecrawl", "AI/LLM"],
      link: "/intel"
    },
    {
      icon: Target,
      title: "User Research Deep Dive",
      description: "Automated platform that processes raw interview transcripts to instantly pull out feature requests, pain points, and user sentiment.",
      problem: "While leading product strategy at an early-stage startup, analyzing dozens of manual interviews was a bottleneck.",
      impact: "Reduced the product feedback loop by cutting the time from \"interview\" to \"insight\", letting us pivot strategy in minutes.",
      features: [
        "Interactive Impact vs Effort matrix",
        "AI-powered interview analysis tool"
      ],
      tech: ["React", "AI/LLM", "Product Strategy", "UX Research"],
      link: "/user-research"
    },
    {
      icon: LayoutDashboard,
      title: "Biotech Market Analysis Dashboard",
      description: "Dynamic dashboard that aggregates data to score and compare 6 therapeutic areas using weighted factors to visualize growth trajectories and competitive intensity in real-time.",
      problem: "While leading biotech investment research for the Imperial Investment Society, I found that market data was scattered online, making the research process tedious.",
      impact: "To accelerate commercial strategy, I turned a weeks-long manual research process into an instant evaluation tool for rapid decision-making.",
      features: [
        "Side-by-side comparison of therapeutic areas",
        "Score breakdown with weighted factors",
        "Historical TAM growth trajectories"
      ],
      tech: ["React", "Recharts", "Data Visualisation"],
      link: "/biotech-market"
    },
    {
      icon: DollarSign,
      title: "Unit Economics Health Monitor",
      description: "A real-time financial monitor that tracks CAC/LTV ratios by cohort and acquisition channel, providing automated alerts the moment a payback period exceeds safe thresholds, ensuring growth remains sustainable.",
      problem: "While researching more about startup operational challenges, I noticed companies often \"scale into a black hole\" by growing users while hemorrhaging cash. Without an early warning system, founders often realize their unit economics are broken only after it's too late to pivot.",
      impact: "To protect business longevity, I created a tool that replaces reactive accounting with a proactive system for identifying and fixing \"danger zone\" metrics instantly.",
      features: [
        "Live CAC/LTV tracking with threshold alerts",
        "Cohort-based LTV decay curves",
        "Channel-level acquisition breakdown"
      ],
      tech: ["React", "Recharts", "Slack Integration", "Stripe API"],
      link: "/unit-economics"
    },
    {
      icon: Timer,
      title: "Lab Workflow Timer",
      description: "An automation tool that parses scientific protocols into a sequenced timeline and sets up multiple step-labeled timers that can run simultaneously.",
      problem: "During long, complex lab protocols, the high pressure of parallel task management and limited timeframes often led to human error. Missing a single time-critical step meant the entire experiment had to be scrapped and restarted.",
      impact: "To eliminate costly operational waste, I replaced manual tracking of multiple physical timers with a failsafe system that guarantees protocol adherence and protects the integrity of long-term projects.",
      features: [
        "Protocol parsing and automated timers",
        "Time-critical step highlighting",
        "Parallel experiment support"
      ],
      tech: ["JavaScript", "HTML/CSS", "Process Automation"],
      link: "https://tiwaysyya.github.io/lab-multi-protocol-timer/",
      external: true
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tools I've Built
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Side projects. No one asked me to. I just saw problems and built solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all border-border bg-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  {project.link && (
                    project.external ? (
                      <a 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
                      >
                        Try it live <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link 
                        to={project.link} 
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
                      >
                        Try it live <ExternalLink className="w-3 h-3" />
                      </Link>
                    )
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="mb-6 p-3 bg-secondary/50 rounded-lg space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-muted-foreground uppercase">Problem:</span>
                  <p className="text-sm text-foreground">{project.problem}</p>
                </div>
                {project.impact && (
                  <div className="flex items-start gap-2 pt-1 border-t border-border/50">
                    <span className="text-xs font-semibold text-primary uppercase">Startup Impact:</span>
                    <p className="text-sm text-foreground">{project.impact}</p>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">WHAT IT DOES</p>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;