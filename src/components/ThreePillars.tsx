import { Network, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Network,
      title: "Systems Thinking",
      description: "Connecting science, product, IP and markets into one coherent view."
    },
    {
      icon: Zap,
      title: "Rapid Learning",
      description: "Onboards into unfamiliar domains fast and makes sense of messy information."
    },
    {
      icon: Target,
      title: "Tailored Problem Solving",
      description: "No templates. Unique problems need unique solutions."
    }
  ];

  return (
    <section id="pillars" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          The Three Pillars of My Lens
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
