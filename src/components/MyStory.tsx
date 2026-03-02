const MyStory = () => {
  return (
    <section id="my-story" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
          Hi! I'm Tiwaysyya
        </h2>
        
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            As a Biotechnology graduate from Imperial College London, I started in the lab, but I have always been <strong className="text-foreground">more interested in understanding problems and building the right solutions</strong>. I like <strong className="text-foreground">discovering what users need, prioritising what to build, and leading teams to ship it</strong>.
          </p>
          
          <p>
            Alongside my degree, I led product discovery through 50+ customer interviews at a climate-tech startup, managed a 10-analyst editorial pipeline delivering 30+ publications on time, grew communities by more than 50%, and built tools to solve problems I ran into myself. Most of that work started because <strong className="text-foreground">I saw a gap between what users needed and what existed, and decided to close it</strong>.
          </p>
          
          <p>
            I do my best work when I can <strong className="text-foreground">go deep on user problems, make data-driven trade-offs, and coordinate across teams to deliver outcomes</strong>. Give me a problem space, a cross-functional team, and real user feedback, and I will turn it into a product that works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
