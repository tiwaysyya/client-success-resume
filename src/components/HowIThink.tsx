import { Card } from "@/components/ui/card";

const HowIThink = () => {
  const hats = [
    { domain: "Financial Analysis", description: "Valuation, modelling, benchmarking, due diligence" },
    { domain: "Client Materials", description: "Pitches, presentations, memoranda, marketing materials" },
    { domain: "Transaction Execution", description: "End-to-end project management, coordination, delivery" },
    { domain: "Stakeholder Management", description: "Client servicing, relationship building, cross-team work" }
  ];

  const defaults = [
    {
      principle: "Proactive",
      description: "I get things moving early, then refine based on feedback rather than waiting for perfect information."
    },
    {
      principle: "Own the outcome",
      description: "I take full responsibility for my work and keep it aligned with what stakeholders need."
    },
    {
      principle: "Communicate early",
      description: "I flag issues, share progress, and adjust openly as priorities evolve."
    },
    {
      principle: "Detail-oriented",
      description: "I check my work, verify assumptions, and ensure deliverables are polished and accurate."
    },
    {
      principle: "Adaptable",
      description: "I handle multiple workstreams, reprioritise when needed, and stay effective under pressure."
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