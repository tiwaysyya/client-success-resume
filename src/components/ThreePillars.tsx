import { Zap, Layers, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Zap,
      title: "Scrappy Execution",
      description: "I move fast and get things done. When I see a gap, I step up and fill it."
    },
    {
      icon: Layers,
      title: "Cross-Functional Versatility",
      description: "Product, growth, ops, strategy. I bridge gaps and pick up whatever needs doing."
    },
    {
      icon: UserCheck,
      title: "Founder-Level Ownership",
      description: "I take full accountability for my work while staying plugged into the bigger picture."
    }
  ];

  return (
    <section id="pillars" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          What I Bring to Startups
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card"
            >
              <pillar.icon className="w-12 h-12 mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;