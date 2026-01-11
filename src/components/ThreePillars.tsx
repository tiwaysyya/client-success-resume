import { UserCheck, Wrench, TrendingUp, Shuffle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ThreePillars = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: "Full Ownership",
      description: "I take on complex projects without a playbook and drive them from ambiguity to completion, freeing up senior stakeholders to focus on strategy."
    },
    {
      icon: Wrench,
      title: "Technical Problem-Solving",
      description: "I build tools and automations to eliminate inefficiencies—whether that's streamlining workflows or creating dashboards that surface key insights."
    },
    {
      icon: TrendingUp,
      title: "Commercial Acumen",
      description: "I dig into the data to understand what's driving performance, identify opportunities, and communicate findings that inform key decisions."
    },
    {
      icon: Shuffle,
      title: "Adaptive Learning",
      description: "I quickly get up to speed in unfamiliar domains, teaching myself whatever skills are needed to deliver results as priorities evolve."
    }
  ];

  return (
    <section id="pillars" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          What I Bring to the Team
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