const HowIThink = () => {
  const lifecycle = [
    { stage: "01", domain: "Scope", description: "Understand the real problem, talk to the right people, and define what good looks like" },
    { stage: "02", domain: "Research", description: "Gather evidence through interviews, data, and competitive analysis to inform the approach" },
    { stage: "03", domain: "Execute", description: "Ship fast, iterate based on feedback, and coordinate across teams to deliver" },
    { stage: "04", domain: "Learn", description: "Measure outcomes, extract what worked, and feed insights back into the next cycle" }
  ];

  const defaults = [
    { principle: "Start with the problem", description: "Understand what's actually broken before jumping to solutions." },
    { principle: "Bias toward action", description: "A scrappy first version beats a perfect plan that never ships." },
    { principle: "Work across boundaries", description: "The best outcomes come from pulling the right people together, regardless of team." },
    { principle: "Make it repeatable", description: "Build systems and documentation so wins compound over time." },
    { principle: "Stay evidence-driven", description: "Ground decisions in data and real feedback, not assumptions." }
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
