const SignalsOfImpact = () => {
  const metrics = [
    { value: "3+", label: "Automation tools built and shipped" },
    { value: "50+", label: "User interviews led for discovery" },
    { value: "Hours→Min", label: "Manual workflows automated" },
    { value: "6", label: "Sectors covered in market analysis" },
    { value: "30+", label: "Publications delivered on deadline" },
    { value: "45%", label: "Growth via data-driven operations" },
    { value: "10", label: "People coordinated cross-functionally" },
    { value: "5+", label: "Stakeholders engaged with evidence" }
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
            Identified. Built. Delivered.
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
