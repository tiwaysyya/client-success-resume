const MyStory = () => {
  return (
    <section id="my-story" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
          Who I am
        </h2>
        
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            Biotechnology graduate from Imperial College London. I started in the lab, but I have always been <strong className="text-foreground">more interested in building things</strong> than staying in one lane. I like <strong className="text-foreground">spotting problems, taking ownership, and leading teams</strong>.
          </p>
          
          <p>
            Alongside my degree, I have led student societies, trained and managed teams of over 10 people, grown communities by more than 50%, won pitch competitions, and built tools to solve problems I ran into myself. Most of that work started because something was not working and I <strong className="text-foreground">decided to fix it rather than wait for instructions</strong>.
          </p>
          
          <p>
            I do my best work in <strong className="text-foreground">fast moving environments where priorities shift and resources are limited</strong>. Give me ownership, trust, and a real problem to solve, and I will take it from idea to outcome while bringing others with me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;