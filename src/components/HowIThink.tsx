const HowIThink = () => {
  const lifecycle = [
    { stage: "01", domain: "Discover", description: "User interviews, pain point mapping, competitive analysis" },
    { stage: "02", domain: "Strategise", description: "Prioritisation frameworks, roadmap planning, business cases" },
    { stage: "03", domain: "Execute", description: "Sprint management, milestone tracking, cross-team coordination" },
    { stage: "04", domain: "Measure", description: "Metrics dashboards, A/B testing, data-driven decision making" }
  ];

  const defaults = [
    { principle: "Start with the user", description: "Talk to users first. Let their problems define what we build." },
    { principle: "Prioritise ruthlessly", description: "Use data and frameworks to focus on highest-impact work." },
    { principle: "Own the outcome", description: "Take full responsibility for delivery and stakeholder alignment." },
    { principle: "Let evidence lead", description: "Test assumptions with data. Change course when numbers say so." },
    { principle: "Ship and iterate", description: "Get a working version out fast. Improve based on real feedback." }
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

        {/* Product Lifecycle */}
        <div className="space-y-10">
          <h3 className="text-2xl font-serif text-center text-foreground">
            The Product Lifecycle
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

        {/* Default Mode */}
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
