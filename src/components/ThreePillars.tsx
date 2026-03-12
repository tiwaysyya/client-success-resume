import { Bot, Wrench, Users, BarChart3, Shield } from "lucide-react";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Bot,
      title: "AI Workflow Design",
      description: "Identifying automation opportunities and translating team needs into practical AI-enabled solutions."
    },
    {
      icon: Wrench,
      title: "Tool Evaluation & Rollout",
      description: "Discovering, trialling, and deploying AI tools with pragmatic recommendations and light configuration."
    },
    {
      icon: Users,
      title: "Cross-Functional Enablement",
      description: "Designing role-relevant training, running demos, and building feedback loops that make adoption stick."
    },
    {
      icon: BarChart3,
      title: "Impact Tracking",
      description: "Measuring adoption, quantifying efficiencies, and surfacing case studies that drive organisational learning."
    },
    {
      icon: Shield,
      title: "Responsible AI Adoption",
      description: "Partnering with IT, InfoSec, and stakeholders to ensure tools are rolled out safely with clear processes."
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
