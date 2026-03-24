import { Wrench, Users, BarChart3, Compass, Zap } from "lucide-react";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Compass,
      title: "Problem Scoping",
      description: "Breaking down ambiguous challenges into clear, actionable workstreams that move the needle."
    },
    {
      icon: Zap,
      title: "Execution & Delivery",
      description: "Getting things done end-to-end, from scrappy first versions to polished outcomes, fast."
    },
    {
      icon: Users,
      title: "Cross-Functional Coordination",
      description: "Working across teams to align priorities, unblock progress, and keep momentum high."
    },
    {
      icon: BarChart3,
      title: "Research & Analysis",
      description: "Running market research, competitive analysis, and user interviews to inform decisions with evidence."
    },
    {
      icon: Wrench,
      title: "Process & Tooling",
      description: "Designing workflows, picking the right tools, and building lightweight systems that scale."
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
