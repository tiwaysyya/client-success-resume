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
            Biotechnology graduate from Imperial College London. Started in the lab, but always more drawn to <strong className="text-foreground font-medium">understanding how work actually gets done and making it better</strong>.
          </p>
          
          <p>
            Built tools that turn hours of manual work into minutes. Led cross-functional teams, ran 50+ user interviews, and shipped workflows that teams actually adopt. Most recently co-led product and operations at a climate-tech startup.
          </p>
          
          <p>
            I do my best work when I can <strong className="text-foreground font-medium">spot inefficiencies, find the right tools, and help teams work faster without adding complexity</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
