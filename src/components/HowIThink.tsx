const HowIThink = () => {
  const lifecycle = [
    { stage: "01", domain: "Identify", description: "Understand how teams work, find where time is wasted, and define the real problem" },
    { stage: "02", domain: "Evaluate", description: "Trial solutions, compare trade-offs, and recommend what actually fits" },
    { stage: "03", domain: "Enable", description: "Roll out with clear training, documentation, and support so adoption sticks" },
    { stage: "04", domain: "Measure", description: "Track what changed, quantify gains, and share learnings across the org" }
  ];

  const defaults = [
    { principle: "Start with the workflow", description: "Understand how people actually work before changing anything." },
    { principle: "Reduce friction, don't add it", description: "Every intervention should make things simpler, not more complicated." },
    { principle: "Roll out responsibly", description: "Partner with the right stakeholders to ensure safe, process-driven adoption." },
    { principle: "Make it copyable", description: "Document what worked so other teams can replicate wins independently." },
    { principle: "Measure what matters", description: "Track real efficiency gains and build evidence that proves value." }
  ];

  return (
    <section id="how-i-think" className="py-28 px-4">
      <div className="container max-w-5xl mx-auto space-y-24">
        <div className="text-center">
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            How I Work
          </h2>
        </div>

        <div className="space-y-10">
          <h3 className="text-2xl font-serif text-center text-foreground">
            From Problem to Adoption
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lifecycle.map((item, index) => (
              <div key={index} className="group">
                <p className="text-5xl font-serif text-accent/30 mb-3">{item.stage}</p>
                <h4 className="text-lg font-serif text-foreground mb-2">{item.domain}</h4>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="editorial-divider"></div>

        <div className="space-y-10">
          <h3 className="text-2xl font-serif text-center text-foreground">
            My Operating Principles
          </h3>
          <div className="space-y-0 border-t border-border">
            {defaults.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-6 border-b border-border group hover:bg-muted/50 transition-colors duration-300 px-4">
                <h4 className="text-lg font-serif text-foreground md:w-56 flex-shrink-0">{item.principle}</h4>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
