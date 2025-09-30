import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Client Relations Manager",
      company: "Premier Financial Services",
      period: "2021 - Present",
      achievements: [
        "Managed portfolio of 50+ high-value clients with combined AUM of $500M+",
        "Developed comprehensive risk assessment frameworks reducing portfolio volatility by 25%",
        "Led quarterly investor presentations and strategic planning sessions"
      ]
    },
    {
      role: "Financial Analyst",
      company: "Strategic Capital Group",
      period: "2018 - 2021",
      achievements: [
        "Conducted in-depth financial analysis and due diligence for M&A transactions",
        "Created investor pitch decks resulting in $150M in capital raises",
        "Implemented KPI tracking systems improving client reporting accuracy by 40%"
      ]
    },
    {
      role: "Associate Analyst",
      company: "Global Investment Partners",
      period: "2016 - 2018",
      achievements: [
        "Performed financial modeling and valuation analysis for diverse sectors",
        "Assisted in preparation of quarterly reports and investor communications",
        "Developed risk metrics dashboards for portfolio monitoring"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
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
