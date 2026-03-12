import { Wrench, Users, BarChart3, Shield, Zap } from "lucide-react";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Spotting repetitive processes and building practical solutions that save teams real time."
    },
    {
      icon: Wrench,
      title: "Tool Evaluation & Rollout",
      description: "Finding the right tools, running trials, and making pragmatic recommendations based on actual fit."
    },
    {
      icon: Users,
      title: "Cross-Functional Coordination",
      description: "Aligning stakeholders across teams, designing training, and creating feedback loops that stick."
    },
    {
      icon: BarChart3,
      title: "Impact Measurement",
      description: "Tracking adoption and efficiency gains, then packaging learnings so others can replicate."
    },
    {
      icon: Shield,
      title: "Process & Governance",
      description: "Ensuring new tools and workflows are rolled out responsibly with clear documentation and oversight."
    }
  ];

  return (
    <section id="pillars" className="py-28 px-4 bg-primary text-primary-foreground">
      <div className="container max-w-5xl mx-auto">
        <p className="text-sm font-sans uppercase tracking-[0.2em] text-primary-foreground/60 mb-4 text-center">
          Core Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary-foreground">
          What I Bring
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="p-10 bg-primary hover:bg-secondary transition-colors duration-300 group"
            >
              <pillar.icon className="w-8 h-8 mb-6 text-accent group-hover:text-warm-accent-light transition-colors duration-300" />
              <h3 className="text-xl font-serif mb-3 text-primary-foreground">
                {pillar.title}
              </h3>
              <p className="text-primary-foreground/70 font-sans text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
