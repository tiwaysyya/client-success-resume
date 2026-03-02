const SignalsOfImpact = () => {
  const metrics = [
    { value: "50+", label: "Customer discovery interviews led" },
    { value: "2", label: "Non-viable product directions eliminated" },
    { value: "40%", label: "Gross margin from pricing strategy" },
    { value: "5+", label: "Investors engaged with pitch decks" },
    { value: "30+", label: "Publications delivered on time" },
    { value: "10", label: "Analysts managed in editorial pipeline" },
    { value: "43%", label: "Member growth through data-driven pivot" },
    { value: "1st", label: "Place startup pitch competition" }
  ];

  return (
    <section id="signals" className="py-28 px-4 bg-primary text-primary-foreground">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-primary-foreground/50 mb-4">
            Results
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-primary-foreground">
            Proof of Impact
          </h2>
          <p className="text-lg text-primary-foreground/60 font-sans">
            Discovered. Prioritised. Delivered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/10">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="p-8 text-center bg-primary hover:bg-secondary transition-colors duration-300"
            >
              <p className="text-4xl md:text-5xl font-serif text-accent mb-2">
                {metric.value}
              </p>
              <p className="text-xs text-primary-foreground/60 font-sans leading-tight uppercase tracking-wide">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignalsOfImpact;
