import { Search, BarChart3, Users, Rocket, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const ThreePillars = () => {
  const pillars = [
    {
      icon: Search,
      title: "Problem Discovery & Research",
      description: "I identify business and customer problems through market research, competitive analysis, and user feedback — making sure we build the right thing before we build it."
    },
    {
      icon: BarChart3,
      title: "Strategic Prioritisation",
      description: "I make data-driven decisions to prioritise solutions based on impact, effort, and business goals — ensuring the team focuses on what moves the needle."
    },
    {
      icon: Users,
      title: "Cross-Functional Leadership",
      description: "I coordinate and communicate across diverse teams — from engineering to design to stakeholders — to align everyone around a shared product vision."
    },
    {
      icon: Rocket,
      title: "Product Execution",
      description: "I manage milestones, unblock teams, and deliver results on time — turning roadmaps into shipped products with clear accountability."
    },
    {
      icon: LineChart,
      title: "Data Analysis",
      description: "I analyse metrics and translate data into decisions — from user behaviour patterns to unit economics, turning numbers into product direction."
    }
  ];

  return (
    <section id="pillars" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Core Product Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
