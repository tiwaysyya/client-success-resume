import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Rocket, Zap } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      icon: Zap,
      title: "Shipped Research at Speed",
      situation: "Equity desk needed Q2 reviews completed fast across a massive portfolio",
      action: "Built rapid synthesis workflows using Bloomberg. Turned dense financial data into actionable insights in days, not weeks",
      insight: "Speed is a feature. The right systems turn information overload into decisions",
      impact: [
        "Covered RM 5B+ in assets",
        "5+ reports shipped with positive feedback",
        "Directly influenced portfolio allocation"
      ]
    },
    {
      icon: Users,
      title: "Built a Content Engine from Scratch",
      situation: "Investment newsletter needed growth while maintaining weekly cadence",
      action: "Analysed engagement data, iterated on formats, trained a 10-person team on research frameworks. Built the machine, then ran it",
      insight: "Content-market fit is testable. Data shows what works—intuition doesn't",
      impact: [
        "45% engagement growth → 1,500+ readers",
        "100% on-time publication record",
        "30+ publications elevated in quality"
      ]
    },
    {
      icon: Rocket,
      title: "0→1 Market Entry",
      situation: "Climate startup needed commercial validation and go-to-market strategy",
      action: "Led 50+ stakeholder interviews from scratch. Built pricing model from unit economics. Pitched to VCs and won",
      insight: "Market barriers hide in behaviour and regulation, not just tech",
      impact: [
        "Won 1st place pitch competition",
        "VC and Imperial Enterprise Lab interest secured",
        "30% profitability projected in pricing model"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth Hacked a Community",
      situation: "Professional society needed rapid membership expansion and speaker acquisition",
      action: "Ran weekly experiments using engagement data. Cold-outreached to Tier 1 firms. Shipped events that people actually came to",
      insight: "Rapid experimentation beats perfect planning every time",
      impact: [
        "50% membership growth",
        "Speakers from McKinsey, PwC, EY, Goldman Sachs",
        "150+ participants at flagship events"
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What I've Shipped
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real problems. Fast execution. Measurable outcomes.
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
                  <p className="text-sm font-semibold text-primary mb-1">WHAT I DID</p>
                  <p className="text-muted-foreground text-sm">{caseStudy.action}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-primary mb-1">INSIGHT</p>
                  <p className="text-muted-foreground text-sm italic">{caseStudy.insight}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-primary mb-2">RESULTS</p>
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