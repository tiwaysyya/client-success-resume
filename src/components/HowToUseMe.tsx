import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const HowToUseMe = () => {
  const capabilities = [
    "Strategic problem solving",
    "Commercial analysis",
    "Scientific evaluation",
    "Market and competitor synthesis",
    "IP and technology positioning",
    "Due diligence and risk mapping",
    "Rapid onboarding into new domains",
    "Translating complexity into decisions"
  ];

  const roles = [
    "Strategy consulting",
    "Equity research",
    "Product and innovation",
    "Medtech/biotech commercial strategy",
    "IP and technology strategy",
    "Early-stage ventures"
  ];

  const expectations = [
    "Fast learning",
    "Tailored solutions",
    "Systems thinking",
    "Creative problem solving",
    "Precision in ambiguity",
    "High-quality synthesis"
  ];

  return (
    <section id="how-to-use-me" className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Where I create the most value.
          </h2>
        </div>

        <div className="space-y-12">
          {/* Capabilities */}
          <Card className="p-8 border-border bg-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground">You can use me for:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{capability}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Best Suited Roles */}
          <Card className="p-8 border-border bg-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Best suited for roles in:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{role}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Expectations */}
          <Card className="p-8 border-border bg-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground">If you work with me, expect:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {expectations.map((expectation, index) => (
                <div 
                  key={index} 
                  className="bg-secondary rounded-lg p-4 text-center"
                >
                  <p className="font-semibold text-foreground">{expectation}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowToUseMe;
