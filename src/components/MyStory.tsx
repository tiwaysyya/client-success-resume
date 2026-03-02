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
            Biotechnology graduate from Imperial College London. Started in the lab — but always more drawn to <strong className="text-foreground font-medium">understanding problems and building the right solutions</strong>.
          </p>
          
          <p>
            Led product discovery through 50+ customer interviews at a climate-tech startup. Managed a 10-analyst editorial pipeline. Grew communities by over 50%. Built tools to solve problems I ran into myself.
          </p>
          
          <p>
            I do my best work when I can <strong className="text-foreground font-medium">go deep on user problems, make data-driven trade-offs, and coordinate across teams</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
