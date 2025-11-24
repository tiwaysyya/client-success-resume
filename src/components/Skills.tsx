import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "ESG & Sustainability Analysis",
      skills: [
        "ESG Risk Assessment",
        "Transition Analysis",
        "Climate Scenario Modelling",
        "Stewardship Research",
        "Regulatory Impact Analysis",
        "Materiality Mapping"
      ]
    },
    {
      category: "Investment Research",
      skills: [
        "Equity Analysis",
        "Financial Modelling",
        "DCF Valuation",
        "Peer Benchmarking",
        "Sector Research",
        "Stock Pitching"
      ]
    },
    {
      category: "Scientific & Policy Synthesis",
      skills: [
        "Biotechnology Research",
        "Evidence Integrity",
        "Patent Analysis",
        "Policy Evaluation",
        "Regulatory Diligence",
        "Risk-Benefit Assessment"
      ]
    },
    {
      category: "Technical & Data Tools",
      skills: [
        "Bloomberg Terminal",
        "ESG Datasets",
        "Excel Modelling",
        "Financial Analysis",
        "Data Synthesis",
        "Presentation Design"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Core Competencies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 border-border hover:shadow-lg transition-all bg-card"
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-6 flex items-center">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mr-3"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i}
                    variant="secondary"
                    className="px-4 py-2 bg-secondary hover:bg-primary/10 text-secondary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
