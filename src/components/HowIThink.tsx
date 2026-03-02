import { Card } from "@/components/ui/card";

const HowIThink = () => {
  const hats = [
    { domain: "Discovery", description: "User interviews, pain point mapping, competitive analysis" },
    { domain: "Strategy", description: "Prioritisation frameworks, roadmap planning, business cases" },
    { domain: "Execution", description: "Sprint management, milestone tracking, cross-team coordination" },
    { domain: "Analysis", description: "Metrics dashboards, A/B testing, data-driven decision making" }
  ];

  const defaults = [
    {
      principle: "Start with the user",
      description: "I talk to users first and let their problems define what we build."
    },
    {
      principle: "Prioritise ruthlessly",
      description: "I use data and frameworks to focus the team on the highest-impact work."
    },
    {
      principle: "Own the outcome",
      description: "I take full responsibility for delivery and keep stakeholders aligned."
    },
    {
      principle: "Let evidence lead",
      description: "I test assumptions with data and change course when the numbers say so."
    },
    {
      principle: "Ship and iterate",
      description: "I get a working version out fast, then improve based on real feedback."
    }
  ];

  return (
    <section id="how-i-think" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            How I Work
          </h2>
        </div>

        {/* Product Domains */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">
            The Product Lifecycle
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hats.map((hat, index) => (
              <Card key={index} className="p-6 border-primary/30 bg-card hover:border-primary/60 hover:shadow-lg transition-all">
                <p className="text-lg font-bold text-primary mb-2">{hat.domain}</p>
                <p className="text-sm text-muted-foreground">{hat.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Default Mode */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">
            My default mode
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defaults.map((item, index) => (
              <Card key={index} className="p-6 border-secondary/30 bg-card hover:border-secondary/60 hover:shadow-lg transition-all">
                <h4 className="text-lg font-bold text-secondary mb-2">{item.principle}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
