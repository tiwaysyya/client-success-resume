import { Card } from "@/components/ui/card";

const HowIThink = () => {
  const hats = [
    { domain: "Product", description: "Scoping features, user research, roadmap prioritisation" },
    { domain: "Growth", description: "Experiments, outreach, community building, content" },
    { domain: "Operations", description: "Workflows, processes, cross-functional coordination" },
    { domain: "Strategy", description: "Market analysis, stakeholder discovery, business cases" }
  ];

  const defaults = [
    {
      principle: "Bias to action",
      description: "Start with action. Improve with data."
    },
    {
      principle: "Own my lane",
      description: "I take full responsibility while staying aligned with the team."
    },
    {
      principle: "Learn in public",
      description: "Ask questions early, share context, iterate openly with others."
    },
    {
      principle: "Data over intuition",
      description: "Test assumptions. Let results guide decisions."
    },
    {
      principle: "Build with the team",
      description: "I bring ideas, but the best solutions come from collaboration."
    }
  ];

  return (
    <section id="how-i-think" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How I Work
          </h2>
        </div>

        {/* Hats I Wear */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">
            I Wear Every Hat
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hats.map((hat, index) => (
              <Card key={index} className="p-6 border-cocoa/30 bg-card hover:shadow-lg transition-all">
                <p className="text-lg font-bold text-foreground mb-2">{hat.domain}</p>
                <p className="text-sm text-muted-foreground">{hat.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Default Mode */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">
            My Default Mode
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defaults.map((item, index) => (
              <Card key={index} className="p-6 border-cocoa/30 bg-card hover:shadow-lg transition-all">
                <h4 className="text-lg font-bold text-foreground mb-2">{item.principle}</h4>
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