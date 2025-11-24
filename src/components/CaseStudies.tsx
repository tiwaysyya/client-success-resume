import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Rocket, Microscope } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      icon: TrendingUp,
      title: "Healthcare ESG Analysis",
      situation: "Regional hospital operator needed evaluation across utilisation, margin and sustainability risks for multi-million RM investment decision",
      action: "Built financial and ESG models integrating emissions intensity, demographic pressures and supply chain labour standards with traditional DCF analysis",
      insight: "Healthcare ESG risks are material—demographic shifts and supply chain ethics directly impact long-term margins and regulatory exposure",
      impact: [
        "Informed investment decisions on >RM 5B market cap portfolio",
        "Identified material sustainability risks others missed",
        "Briefed senior analysts on valuation shifts"
      ]
    },
    {
      icon: Shield,
      title: "Construction Sector Pitch",
      situation: "Sunway Construction opportunity amid data centre expansion and sustainable infrastructure demand",
      action: "Linked forecasted order book growth to rising sustainable infrastructure spending, modelled emissions intensity scenarios and regulatory tailwinds",
      insight: "Transition to sustainable infrastructure creates structural demand—not just ESG compliance, but revenue driver",
      impact: [
        "Stock elevated to top-priority status internally",
        "Demonstrated ESG integration drives alpha",
        "Positioned construction as transition beneficiary"
      ]
    },
    {
      icon: Rocket,
      title: "Climate Startup Strategy",
      situation: "CO2LLECT needed commercial validation for climate-positive carbon removal business case",
      action: "Conducted 50+ stakeholder interviews across farmers, supply chain and regulators to assess behavioural barriers and policy misalignments",
      insight: "Climate solutions fail without understanding behavioural economics and regulatory-market gaps—not just technical feasibility",
      impact: [
        "Won 1st place pitch competition",
        "Secured VC and Imperial Enterprise Lab interest",
        "Pricing model projected 30% profitability"
      ]
    },
    {
      icon: Microscope,
      title: "Biotech Patent Diligence",
      situation: "Patent filings needed faster prosecution with stronger novelty assessment for commercial viability",
      action: "Conducted prior art analysis on biotech claims, collaborated with legal and scientific specialists to strengthen regulatory alignment",
      insight: "Patent strength determines long-term defensibility—novelty risks directly impact investment thesis and exit multiples",
      impact: [
        "30% faster attorney turnaround",
        "15% fewer examiner objections",
        "Improved regulatory and commercial alignment"
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
