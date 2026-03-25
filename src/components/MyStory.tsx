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
            Imperial College London. Biotechnology. Started in the lab — ended up wherever the hardest problems were.
          </p>
          
          <p className="text-foreground font-medium text-xl">
            Biotech. Finance. IP. Climate-tech. Early-stage ops.
          </p>
          
          <p>
            I don't wait for a job description. I find what's broken, figure out what matters, and ship it.
          </p>
          
          <p className="text-foreground font-medium italic">
            Ambiguity is the brief. Execution is the proof.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
