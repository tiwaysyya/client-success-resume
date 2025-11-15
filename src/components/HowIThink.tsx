import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const HowIThink = () => {
  const languages = [
    { domain: "Science", speaks: "mechanisms" },
    { domain: "Product", speaks: "feasibility" },
    { domain: "IP", speaks: "protection" },
    { domain: "Markets", speaks: "risk" }
  ];

  const framework = [
    { step: "1", title: "Map the system", description: "incentives, constraints, dependencies." },
    { step: "2", title: "Find the leverage point", description: "where one change shifts everything." },
    { step: "3", title: "Pressure-test assumptions", description: "what breaks the model?" },
    { step: "4", title: "Identify growth or differentiation opportunities", description: "where value can be created." },
    { step: "5", title: "Build a tailored solution", description: "no templates, only what fits this exact problem." }
  ];

  const insights = [
    {
      title: "The real reason biotech ideas stall.",
      hook: "Science progresses. Alignment does not."
    },
    {
      title: "Why IP is a commercial argument disguised as a document.",
      hook: "Patents shape power."
    },
    {
      title: "How to tell if a scientific idea actually has legs.",
      hook: "Look for incentive alignment before data."
    },
    {
      title: "The metric that quietly decides biotech success.",
      hook: "Time-to-proof."
    },
    {
      title: "What markets see that scientists don't.",
      hook: "Risk is narrative first, data second."
    }
  ];

  return (
    <section id="how-i-think" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How I solve problems.
          </h2>
        </div>

        {/* Four Languages */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">
            The Four Languages of Biotech
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="p-6 text-center border-cocoa/30 bg-card hover:shadow-lg transition-all">
                <p className="text-lg font-bold text-foreground mb-2">{lang.domain}</p>
                <p className="text-sm text-muted-foreground">speaks {lang.speaks}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-xl text-foreground font-semibold mt-8">
            I translate across all four.
          </p>
        </div>

        {/* Framework */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">
            My Decision Framework
          </h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {framework.map((item, index) => (
              <Card key={index} className="p-6 border-cocoa/30 bg-card hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary flex-shrink-0">{item.step}</span>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">
            Strategic Insights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <Card key={index} className="p-6 border-cocoa/30 bg-card hover:shadow-lg transition-all">
                <h4 className="text-lg font-bold text-foreground mb-2">{insight.title}</h4>
                <p className="text-sm text-muted-foreground italic">{insight.hook}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
