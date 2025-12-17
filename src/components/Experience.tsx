import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Equity Analyst (Buy Side) Intern",
      company: "RHB Asset Management",
      period: "Jul 2024 - Aug 2024",
      achievements: [
        "Accelerated Q2 review by synthesising dense financial disclosures and regulatory updates into high-impact metrics using Bloomberg",
        "Drove strategic coverage decisions for RM15B+ Pharma and Construction assets through primary operational analysis",
        "Influenced portfolio allocation with high-impact stock pitch identifying data centre investment growth opportunities",
        "Delivered 5+ internal research reports with positive feedback on clarity of peer comparative analysis"
      ]
    },
    {
      role: "Product & Market Strategy Lead",
      company: "CO2LLECT (Climate Startup)",
      period: "Oct 2024 - Jun 2025",
      achievements: [
        "Won 1st place pitch competition presenting commercially grounded business case to VCs and Imperial Enterprise Lab",
        "Led discovery through 50+ cold stakeholder interviews translating primary insights into actionable strategy",
        "Built pricing model and go-to-market plan from unit economics, segmentation and competitive benchmarking"
      ]
    },
    {
      role: "Investment Editorial Head",
      company: "Imperial Investment Society",
      period: "Oct 2024 - Jun 2025",
      achievements: [
        "Grew engagement 45% to 1,500+ readers by iterating on data-driven content optimisation",
        "Elevated quality of 30+ publications by training 10-analyst team on structured research frameworks",
        "Maintained 100% on-time record by streamlining workflows and cross-functional coordination"
      ]
    },
    {
      role: "Strategy & Branding Director",
      company: "GenCorporate",
      period: "Oct 2023 - Oct 2024",
      achievements: [
        "Grew membership 50% through rapid experimentation using engagement data to adjust strategy weekly",
        "Secured Tier 1 firm professionals (McKinsey, PwC, EY, Goldman Sachs) for 150+ participant events"
      ]
    },
    {
      role: "Patent Law Intern",
      company: "KASS International",
      period: "Aug 2023 - Sep 2023",
      achievements: [
        "Mitigated novelty risks across 10+ biotech patents by analysing comparable filings into focused assessments",
        "Improved regulatory alignment by coordinating with attorneys and specialists to tighten claim language",
        "Optimised B2B communication by authoring 10+ explainer articles clarifying complex procedures"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg">
            BSc Biotechnology (Hons), Imperial College London • Upper Second Class Honours (68.88%)
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 md:pl-12 pb-8 border-l-2 border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-white" />
              </div>
              
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <span className="text-accent mr-2 mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;