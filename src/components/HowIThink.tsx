const HowIThink = () => {
  const lifecycle = [
    { stage: "01", domain: "Identify", description: "Spot automation opportunities by understanding team workflows and pain points" },
    { stage: "02", domain: "Evaluate", description: "Trial tools, assess fit, and make pragmatic build-vs-buy recommendations" },
    { stage: "03", domain: "Enable", description: "Design training, run demos, and create feedback loops for confident adoption" },
    { stage: "04", domain: "Measure", description: "Track adoption metrics, quantify efficiency gains, and share learnings" }
  ];

  const defaults = [
    { principle: "Start with the workflow", description: "Understand how teams actually work before introducing any tool." },
    { principle: "Reduce friction, don't add it", description: "Strong operational instincts — every change should make things simpler." },
    { principle: "Safety-first rollout", description: "Partner with IT and InfoSec to ensure responsible, process-driven adoption." },
    { principle: "Make it copyable", description: "Document what worked so other teams can replicate wins independently." },
    { principle: "Measure what matters", description: "Track real efficiency gains and build case studies that prove value." }
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

        {/* AI Ops Lifecycle */}
        <div className="space-y-10">
          <h3 className="text-2xl font-serif text-center text-foreground">
            The AI Enablement Lifecycle
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

        {/* Operating Principles */}
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
