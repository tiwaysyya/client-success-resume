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

  const essays = [
    {
      title: "The real reason biotech ideas stall.",
      hook: "Science progresses. Alignment does not.",
      content: "Most biotech failures aren't scientific—they're structural. A brilliant discovery can advance through preclinical stages, pass regulatory milestones, and still fail because the commercial, legal, and financial stakeholders never aligned on the same risk model. Science moves linearly. Systems don't. The companies that succeed build alignment as deliberately as they build data packages."
    },
    {
      title: "Why IP is a commercial argument disguised as a document.",
      hook: "Patents shape power.",
      content: "A patent isn't just legal protection—it's a positioning tool. The best IP strategies don't just defend technology; they define market structure, influence partnership terms, and shape investor confidence. Strong patents clarify where value lives and who controls access. Weak ones create uncertainty and open the door for competitors. IP isn't paperwork. It's strategic leverage."
    },
    {
      title: "How to tell if a scientific idea actually has legs.",
      hook: "Look for incentive alignment before data.",
      content: "Great science is necessary but not sufficient. The question isn't just 'Does this work?'—it's 'Who benefits, and are those incentives durable?' If regulators, payers, clinicians, and patients don't see aligned value, even validated science will struggle to commercialise. The best opportunities have natural pull across the system, not just strong push from the lab."
    },
    {
      title: "The metric that quietly decides biotech success.",
      hook: "Time-to-proof.",
      content: "In biotech, capital is patient until it isn't. The companies that thrive aren't always the ones with the best science—they're the ones that reach proof-of-concept before capital runs out or strategic priorities shift. Time-to-proof determines whether you control your own narrative or become a distressed asset. Speed to clarity matters more than perfection."
    },
    {
      title: "What markets see that scientists don't.",
      hook: "Risk is narrative first, data second.",
      content: "Scientists think in evidence. Markets think in confidence. A compelling dataset can still fail to attract investment if the risk narrative isn't clear, defensible, and differentiated. The best biotech stories don't just present data—they frame uncertainty, contextualise risk against alternatives, and build conviction. Markets buy clarity, not complexity."
    }
  ];

  return (
    <section id="how-i-think" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The principles behind how I solve problems.
          </h2>
        </div>

        {/* Four Languages */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">
            The Four Languages of Biotech
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="p-6 text-center border-border bg-card">
                <p className="text-lg font-bold text-foreground mb-2">{lang.domain}</p>
                <p className="text-sm text-muted-foreground">speaks in</p>
                <p className="text-xl font-semibold text-primary mt-2">{lang.speaks}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-xl text-foreground font-semibold mt-8">
            I translate across all four.
          </p>
        </div>

        <Separator className="bg-border" />

        {/* Decision Framework */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">
            My Decision Framework
          </h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {framework.map((item) => (
              <Card key={item.step} className="p-6 hover:shadow-lg transition-all border-border bg-card">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Micro Essays */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Thought Leadership
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {essays.map((essay, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all border-border bg-card">
                <h4 className="text-xl font-bold text-foreground mb-2">{essay.title}</h4>
                <p className="text-primary font-semibold mb-4 italic">{essay.hook}</p>
                <p className="text-muted-foreground leading-relaxed">{essay.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
