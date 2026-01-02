import { UserCheck, Wrench, TrendingUp, Shuffle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ThreePillars = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: "Founder-Level Ownership",
      description: "To give founders their time back, I take on the projects that don't have a manual and figure them out solo from start to finish."
    },
    {
      icon: Wrench,
      title: "Technical Scrappiness",
      description: "To kill off repetitive manual work, I build my own automations and tools so the team can move faster without a big-company budget."
    },
    {
      icon: TrendingUp,
      title: "Commercial Logic",
      description: "To make sure the startup stays healthy and profitable, I dig into the data to find out which growth experiments are actually moving the needle."
    },
    {
      icon: Shuffle,
      title: "Generalist Agility",
      description: "To stay useful as the company's needs change, I jump between ops, data, and growth by teaching myself whatever skills are needed on the fly."
    }
  ];

  return (
    <section id="pillars" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          What I Bring to the Startup Team
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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