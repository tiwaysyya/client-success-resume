import { Award, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Developing comprehensive financial strategies aligned with client objectives and market dynamics"
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Building lasting partnerships through transparent communication and exceptional service delivery"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful client engagements and portfolio performance optimization"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Profile
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experienced client relations professional with expertise in financial analysis, risk management, 
            and strategic advisory. Passionate about delivering data-driven solutions that drive client success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-8 border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
