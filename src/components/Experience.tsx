import { Briefcase, TrendingUp, Users, Rocket, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Rocket,
      role: "Product & Market Strategy Lead",
      company: "CO2LLECT (Climate Startup)",
      period: "Oct 2024 - Jun 2025",
      achievements: [
        "Won 1st place pitch competition. Presented commercially grounded business case to VCs and Imperial Enterprise Lab",
        "Led discovery from scratch: 50+ cold stakeholder interviews translated into actionable go-to-market strategy",
        "Built pricing model and market entry plan from unit economics, segmentation and competitive analysis"
      ],
      insight: "Market barriers hide in behaviour and regulation, not just tech",
      keyResult: "30% profitability projected in pricing model"
    },
    {
      icon: Users,
      role: "Investment Editorial Head",
      company: "Imperial Investment Society",
      period: "Oct 2024 - Jun 2025",
      achievements: [
        "Grew engagement 45% to 1,500+ readers by running data-driven content experiments",
        "Built and trained a 10-person team on structured research frameworks",
        "Shipped 30+ publications with 100% on-time record through workflow optimisation"
      ],
      insight: "Content-market fit is testable. Data shows what works—intuition doesn't",
      keyResult: "45% engagement growth → 1,500+ readers"
    },
    {
      icon: TrendingUp,
      role: "Strategy & Branding Director",
      company: "GenCorporate",
      period: "Oct 2023 - Oct 2024",
      achievements: [
        "Grew membership 50% through rapid weekly experimentation using engagement data",
        "Cold-outreached and secured speakers from McKinsey, PwC, EY, Goldman Sachs",
        "Shipped flagship events with 150+ participants"
      ],
      insight: "Rapid experimentation beats perfect planning every time",
      keyResult: "50% membership growth"
    },
    {
      icon: Zap,
      role: "Equity Analyst Intern",
      company: "RHB Asset Management",
      period: "Jul 2024 - Aug 2024",
      achievements: [
        "Shipped Q2 research 3x faster by building rapid synthesis workflows with Bloomberg",
        "Directly influenced portfolio allocation through high-impact stock pitch",
        "Delivered 5+ internal research reports with positive analyst feedback"
      ],
      insight: "Speed is a feature. The right systems turn information overload into decisions",
      keyResult: "Covered RM 5B+ in assets"
    },
    {
      icon: Briefcase,
      role: "Patent Law Intern",
      company: "KASS International",
      period: "Aug 2023 - Sep 2023",
      achievements: [
        "Analysed 10+ biotech patents and synthesised findings into focused risk assessments",
        "Authored 10+ B2B explainer articles clarifying complex regulatory procedures",
        "Improved claim language through cross-functional coordination with attorneys"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            BSc Biotechnology (Hons), Imperial College London. Upper Second Class Honours
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 md:pl-12 pb-8 border-l-2 border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <exp.icon className="w-3 h-3 text-white" />
              </div>
              
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <span className="text-accent mr-2 mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {(exp.insight || exp.keyResult) && (
                  <div className="flex flex-wrap gap-3 pt-3 border-t border-border">
                    {exp.keyResult && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {exp.keyResult}
                      </span>
                    )}
                    {exp.insight && (
                      <span className="text-sm text-muted-foreground italic">
                        "{exp.insight}"
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;