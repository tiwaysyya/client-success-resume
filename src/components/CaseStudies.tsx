import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Rocket, BarChart3 } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      icon: BarChart3,
      title: "Accelerating Equity Research",
      situation: "Equity desk needed faster Q2 review cycle across RM15B+ Pharma and Construction portfolio",
      action: "Leveraged Bloomberg to rapidly synthesise dense financial disclosures and regulatory updates into high-impact metrics for portfolio decisions",
      insight: "Speed without sacrificing depth—the right systems turn information overload into actionable intelligence",
      impact: [
        "Drove strategic coverage decisions on >RM 5B assets",
        "Influenced model portfolio allocation through stock pitch",
        "Delivered 5+ research reports with positive analyst feedback"
      ]
    },
    {
      icon: Users,
      title: "Editorial Operations Scale-Up",
      situation: "Investment newsletter needed engagement growth while maintaining weekly publication cadence under pressure",
      action: "Analysed readership data to iterate on headlines and formats. Streamlined editorial workflows. Trained 10-analyst team on structured research frameworks",
      insight: "Content-market fit is testable—data reveals what compels action, not intuition",
      impact: [
        "45% engagement growth to 1,500+ readers",
        "100% on-time publication record",
        "Elevated quality across 30+ weekly publications"
      ]
    },
    {
      icon: Rocket,
      title: "Climate Startup Go-to-Market",
      situation: "CO2LLECT needed commercial validation and market entry strategy for climate-positive carbon removal",
      action: "Led 50+ stakeholder interviews across farmers, operators and regulators. Built pricing model and go-to-market plan from unit economics and competitive benchmarking",
      insight: "Market entry barriers hide in behavioural economics and regulatory gaps—not just technical feasibility",
      impact: [
        "Won 1st place pitch competition",
        "Secured VC and Imperial Enterprise Lab interest",
        "Pricing model projected 30% profitability"
      ]
    },
    {
      icon: TrendingUp,
      title: "Membership Growth Strategy",
      situation: "GenCorporate needed rapid membership expansion and high-profile speaker acquisition",
      action: "Used outreach engagement data to adjust strategy week-by-week. Cold-outreached and coordinated logistics for career panels with Tier 1 firm professionals",
      insight: "Rapid experimentation beats perfect planning—test, learn, iterate",
      impact: [
        "50% membership growth through experimentation",
        "Secured speakers from McKinsey, PwC, EY, Goldman Sachs",
        "150+ participants at flagship events"
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
            Real problems. Fast execution. Measurable impact.
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