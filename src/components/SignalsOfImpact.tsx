import { Card } from "@/components/ui/card";

const SignalsOfImpact = () => {
  const metrics = [
    { value: "40%", label: "Stakeholder confidence increase" },
    { value: "30%", label: "Faster claim turnaround" },
    { value: "15%", label: "Fewer examiner objections" },
    { value: "50+", label: "Stakeholder interviews" },
    { value: "Multi-M", label: "RM investment influence" },
    { value: "30%", label: "Profitability projection" },
    { value: "1st Place", label: "Pitch competition" }
  ];

  return (
    <section id="signals" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Signals of Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers tell the story of value created.
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
