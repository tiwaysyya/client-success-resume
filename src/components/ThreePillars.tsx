import { Search, BarChart3, Users, Rocket, LineChart } from "lucide-react";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Search,
      title: "Problem Discovery",
      description: "Market research, competitive analysis, and user feedback to ensure we build the right thing."
    },
    {
      icon: BarChart3,
      title: "Strategic Prioritisation",
      description: "Data-driven decisions to focus the team on highest-impact work."
    },
    {
      icon: Users,
      title: "Cross-Functional Leadership",
      description: "Aligning engineering, design, and stakeholders around a shared product vision."
    },
    {
      icon: Rocket,
      title: "Product Execution",
      description: "Managing milestones and unblocking teams to ship on time."
    },
    {
      icon: LineChart,
      title: "Data Analysis",
      description: "Translating metrics into product direction — from user behaviour to unit economics."
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
