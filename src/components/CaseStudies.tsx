import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Rocket, Microscope } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      icon: TrendingUp,
      title: "Equity Research",
      situation: "Needed to evaluate biotech investment opportunities across complex scientific and commercial landscapes",
      action: "Applied systems thinking to map scientific validity, competitive positioning, regulatory pathways, and market dynamics",
      insight: "Identified key inflection points and risk-reward asymmetries that others had overlooked",
      impact: [
        "Influenced multi-million RM investment discussions",
        "Boosted stakeholder confidence by 40%",
        "Clarified regulatory risk and timeline assumptions"
      ]
    },
    {
      icon: Shield,
      title: "IP Strategy",
      situation: "Patent portfolio needed stronger protection and faster prosecution",
      action: "Redesigned claim structures using strategic commercial lens, streamlined attorney workflows with systematic process improvements",
      insight: "IP isn't just protection—it's a tool for market positioning and partnership leverage",
      impact: [
        "Accelerated attorney workflows by 30%",
        "Reduced examiner objections by 15%",
        "Strengthened claim scope and enforceability"
      ]
    },
    {
      icon: Rocket,
      title: "Startup Commercial Roadmap",
      situation: "Early-stage biotech needed clear go-to-market strategy and pricing model",
      action: "Conducted 50+ stakeholder interviews across clinicians, payers, and key opinion leaders to map the commercial ecosystem",
      insight: "Success required alignment across scientific validation, reimbursement pathways, and clinical workflow integration",
      impact: [
        "Pitch won first place in competition",
        "Pricing model projected 30% profitability",
        "Validated product-market fit assumptions"
      ]
    },
    {
      icon: Microscope,
      title: "Research & Development",
      situation: "Complex genetic mutation data needed synthesis and strategic direction",
      action: "Analyzed immunotherapy mechanisms and genetic pathways, translating findings into actionable experimental design",
      insight: "Connected molecular mechanisms to therapeutic opportunities that shaped R&D priorities",
      impact: [
        "Informed follow-up experiments on genetic mutations",
        "Advanced immunotherapy development strategy",
        "Bridged bench science with commercial potential"
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real problems. Tailored solutions. Measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all border-border bg-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <caseStudy.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{caseStudy.title}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">SITUATION</p>
                  <p className="text-muted-foreground text-sm">{caseStudy.situation}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-primary mb-1">ACTION</p>
                  <p className="text-muted-foreground text-sm">{caseStudy.action}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-primary mb-1">INSIGHT</p>
                  <p className="text-muted-foreground text-sm italic">{caseStudy.insight}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-primary mb-2">IMPACT</p>
                  <ul className="space-y-1">
                    {caseStudy.impact.map((item, idx) => (
                      <li key={idx} className="text-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
