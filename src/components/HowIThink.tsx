import { Card } from "@/components/ui/card";

const HowIThink = () => {
  const hats = [
    { domain: "Research & Analysis", description: "Data gathering, synthesis, benchmarking, due diligence" },
    { domain: "Strategy", description: "Market sizing, competitive positioning, business cases" },
    { domain: "Operations", description: "Workflow design, process improvement, coordination" },
    { domain: "Stakeholder Management", description: "Presentations, client materials, cross-team alignment" }
  ];

  const defaults = [
    {
      principle: "Act first",
      description: "I get something moving, then improve it once there is real feedback."
    },
    {
      principle: "Own the work",
      description: "If it is mine, I take full responsibility and keep it aligned with what matters most."
    },
    {
      principle: "Think out loud",
      description: "I ask questions early, share progress, and adjust openly as things evolve."
    },
    {
      principle: "Let evidence lead",
      description: "I test assumptions and change course when the results point another way."
    },
    {
      principle: "Build practical solutions",
      description: "I put together simple tools, systems, and workflows that help work get done."
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

        {/* Hats I Wear */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">
            I Wear Every Hat
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