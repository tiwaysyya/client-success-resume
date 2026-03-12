import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "AI & Automation",
      skills: ["AI Workflow Design", "Tool Evaluation & Pilots", "Prompt Engineering", "AI Automation Tools", "Lovable", "Replit"]
    },
    {
      category: "Operations & Enablement",
      skills: ["Workflow Optimisation", "Impact Tracking", "Training Design", "Change Management", "Process Documentation", "Adoption Metrics"]
    },
    {
      category: "Stakeholder & Communication",
      skills: ["Cross-Functional Coordination", "Stakeholder Management", "Written Communication", "Facilitating Sessions", "Investor & User Comms", "Demo Delivery"]
    },
    {
      category: "Research & Analysis",
      skills: ["Market Research", "Competitive Analysis", "Data Analysis", "Power BI", "Python (Basic)", "Qualitative Synthesis"]
    }
  ];

  return (
    <section className="py-28 px-4 bg-background">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Toolkit
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Core Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i}
                    variant="secondary"
                    className="px-3 py-1.5 bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground font-sans text-xs tracking-wide transition-all duration-300 rounded-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
