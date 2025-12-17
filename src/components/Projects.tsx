import { Card } from "@/components/ui/card";
import { LayoutDashboard, Timer, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: LayoutDashboard,
      title: "Biotech Market Landscape Analysis Tool",
      description: "Strategy dashboard that ranks 8 therapeutic areas by feasibility, attractiveness and clinical risk, enabling rapid diligence-style assessments.",
      features: [
        "Stakeholder-specific views for different user personas",
        "Dynamic filters to surface high-value opportunities",
        "Diligence-ready insights in minutes, not days"
      ],
      tech: ["Python", "SQL", "Data Visualisation"]
    },
    {
      icon: Timer,
      title: "Lab Workflow & Timing Tool",
      description: "Operational tool that resolves task slippage and human error in wet lab environments by parsing protocols and automating experimental execution.",
      features: [
        "Protocol parsing and automated timer management",
        "Time-critical step highlighting",
        "Parallel experimental execution support"
      ],
      tech: ["Python", "Process Automation"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tools I've built to solve real operational problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all border-border bg-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <project.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">KEY FEATURES</p>
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
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-sm text-foreground"
                    >
                      <Code2 className="w-3 h-3" />
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