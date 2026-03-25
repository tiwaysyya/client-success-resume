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
            Biotechnology graduate from Imperial College London. I came in through the lab, but what kept me going was never the pipette. It was <strong className="text-foreground font-medium">the moment a system clicked, or a process stalled, and someone had to figure out why</strong>.
          </p>
          
          <p>
            Since then I have worked across biotech, finance, IP, and early-stage startups. I have led user research, built internal tools, run competitive analysis, and co-led operations at a climate-tech company. The through-line is not the industry. It is <strong className="text-foreground font-medium">the steep learning curve I walked into each time, and how quickly I found my footing</strong>.
          </p>
          
          <p>
            I have always been the youngest in the room. It taught me early that you do not wait until you feel ready. <strong className="text-foreground font-medium">You learn by doing, you listen before you speak, and you earn your place by taking ownership before anyone assigns it to you</strong>.
          </p>
          
          <p>
            I do my best work when <strong className="text-foreground font-medium">the problem is not yet well-defined, the scope keeps shifting, and moving is the only way to find the answer</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
