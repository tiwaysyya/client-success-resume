const MyStory = () => {
  return (
    <section id="my-story" className="py-28 px-4">
      <div className="container max-w-3xl mx-auto">
        <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">
          About
        </p>
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-foreground">
          Hi, I'm Tiwaysyya
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-sans">
          <p>
            Biotechnology graduate from Imperial College London. Started in the lab, but always more drawn to <strong className="text-foreground font-medium">understanding how things work and finding ways to make them better</strong>.
          </p>
          
          <p>
            Since then, I've worked across biotech, finance, IP, and early-stage startups. I've led user research, built internal tools, run competitive analysis, and co-led operations at a climate-tech company. I move between strategy and execution depending on what's needed.
          </p>
          
          <p>
            I do my best work in <strong className="text-foreground font-medium">fast-moving environments where the problems are ambiguous, the scope is wide, and the right answer isn't obvious yet</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
