import { Card } from "@/components/ui/card";

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
    <section id="signals" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Proof of Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discovered. Prioritised. Delivered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-lg transition-all border-border bg-card"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground leading-tight">
                {metric.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignalsOfImpact;
