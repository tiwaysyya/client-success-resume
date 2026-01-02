import { Card } from "@/components/ui/card";

const SignalsOfImpact = () => {
  const metrics = [
    { value: "45%", label: "Engagement growth as Editorial Head" },
    { value: "1,500+", label: "Readers reached" },
    { value: "1st", label: "Place pitch competition" },
    { value: "50%", label: "Membership growth driven" },
    { value: "10", label: "Person team built & trained" }
  ];

  return (
    <section id="signals" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Proof of Proactivity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers from things I built, led, and delivered.
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