import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "ESG Sector Head",
      company: "Imperial Investment Society",
      period: "Oct 2024 - Jun 2025",
      achievements: [
        "Led ESG coverage producing sustainability, policy and sector analysis for 1,500+ readers",
        "Campaigned for integration of ESG considerations across all research verticals",
        "Grew newsletter audience 45% leading 10-person team with 100% on-time publication"
      ]
    },
    {
      role: "Equity Analyst (Buy Side) Intern",
      company: "RHB Asset Management",
      period: "Jul 2024 - Aug 2024",
      achievements: [
        "Prepared daily/weekly sector notes using Bloomberg and ESG datasets across 10+ healthcare and construction names",
        "Built financial and ESG models for hospital operator and construction contractor (>RM 5B market cap)",
        "Supported 5+ equity research reports with DCF modelling, peer benchmarking and ESG factor mapping",
        "Pitched Sunway Construction linking order book growth to data centre expansion and sustainable infrastructure demand"
      ]
    },
    {
      role: "Product & Market Strategy Lead",
      company: "CO2LLECT (Climate Startup)",
      period: "Oct 2023 - Jun 2024",
      achievements: [
        "Won 1st place pitch competition, secured VC interest for climate-positive business case",
        "Conducted 50+ interviews with farmers, logisticians and regulators to assess adoption barriers",
        "Designed pricing model and ESG positioning strategy guiding product development priorities"
      ]
    },
    {
      role: "Patent Law Intern",
      company: "KASS International",
      period: "Aug 2023 - Sep 2023",
      achievements: [
        "Conducted prior art diligence on biotech patents, driving 30% faster attorney turnaround",
        "Strengthened claim drafting precision, reducing examiner objections 15%",
        "Authored 10+ explainer articles improving stakeholder understanding of regulatory constraints"
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
