import { Card } from "@/components/ui/card";
import { LayoutDashboard, Timer, Lightbulb, Radar, ExternalLink, Target, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      icon: Radar,
      title: "Founder's Intelligence Dashboard",
      description: "Competitive intelligence tool that tracks competitor moves and generates strategic response recommendations using AI.",
      story: "Founders need to track competitors but lack time. Built an automated intel system that scrapes, analyzes, and recommends.",
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
      description: "PM-style user research synthesis. 10 biotech interviews distilled into pain points and a Feature Priority Matrix with strategic roadmap recommendations.",
      story: "Wanted to show I can translate raw customer feedback into product decisions. Built the framework founders need.",
      features: [
        "10 synthesized biotech user interviews",
        "Interactive Impact vs Effort matrix",
        "AI-powered interview analysis tool"
      ],
      tech: ["React", "AI/LLM", "Product Strategy", "UX Research"],
      link: "/user-research"
    },
    {
      icon: LayoutDashboard,
      title: "Biotech Market Analysis Dashboard",
      description: "Saw a gap in how therapeutic areas were evaluated. Built a tool that ranks 6 therapeutic areas by attractiveness, growth, and competitive intensity.",
      story: "No one asked me to build this. I wanted faster diligence-style assessments, so I made one.",
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
      description: "Real-time financial dashboard that tracks CAC/LTV ratios with automated alerts when payback period exceeds safe thresholds.",
      story: "Many startups 'scale into a black hole' — growing users while hemorrhaging cash. Built this to catch the warning signs early.",
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
      description: "Wet lab protocols are time-critical and error-prone. Built a tool that parses protocols and automates timing.",
      story: "Got frustrated with missed steps in experiments. Built the solution myself.",
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
            Things I've Built
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
              
              <div className="flex items-start gap-2 mb-6 p-3 bg-secondary/50 rounded-lg">
                <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground italic">{project.story}</p>
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