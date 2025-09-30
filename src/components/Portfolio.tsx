import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, TrendingUp, Shield, BarChart3, PresentationIcon } from "lucide-react";

const Portfolio = () => {
  const portfolioSections = [
    {
      id: "pitches",
      label: "Pitches",
      icon: PresentationIcon,
      items: [
        {
          title: "Series B Funding Deck",
          description: "Comprehensive pitch deck for tech startup securing $25M in Series B funding",
          metrics: "25M+ raised • 15 investors • 3-month close"
        },
        {
          title: "Strategic Partnership Proposal",
          description: "Multi-year partnership pitch resulting in exclusive distribution agreement",
          metrics: "3-year term • $50M projected revenue • 2 Fortune 500 partners"
        }
      ]
    },
    {
      id: "analysis",
      label: "Financial Analysis",
      icon: TrendingUp,
      items: [
        {
          title: "Portfolio Performance Analysis",
          description: "Comprehensive quarterly analysis of diversified investment portfolio",
          metrics: "15% YoY growth • 8% alpha generation • Risk-adjusted returns"
        },
        {
          title: "Market Opportunity Assessment",
          description: "Deep-dive analysis of emerging market opportunities in fintech sector",
          metrics: "$2B TAM • 5-year projection • Competitive landscape mapping"
        }
      ]
    },
    {
      id: "risk",
      label: "Risk Assessments",
      icon: Shield,
      items: [
        {
          title: "Enterprise Risk Framework",
          description: "Comprehensive risk assessment framework for institutional portfolios",
          metrics: "25% volatility reduction • Stress testing • Scenario analysis"
        },
        {
          title: "Market Risk Evaluation",
          description: "Real-time monitoring system for portfolio risk exposure",
          metrics: "Daily monitoring • VaR models • Downside protection strategies"
        }
      ]
    },
    {
      id: "metrics",
      label: "Metrics & KPIs",
      icon: BarChart3,
      items: [
        {
          title: "Client Performance Dashboard",
          description: "Interactive dashboard tracking key performance indicators across all portfolios",
          metrics: "Real-time data • 30+ KPIs • Custom reporting"
        },
        {
          title: "Investment Analytics Suite",
          description: "Comprehensive analytics platform for portfolio attribution and performance",
          metrics: "Attribution analysis • Benchmark comparison • Risk metrics"
        }
      ]
    },
    {
      id: "decks",
      label: "Investor Decks",
      icon: FileText,
      items: [
        {
          title: "Quarterly Investor Update",
          description: "Professional presentation for board meetings and investor communications",
          metrics: "50+ slides • Financial highlights • Strategic initiatives"
        },
        {
          title: "Annual Performance Review",
          description: "Comprehensive year-end review and forward-looking strategy presentation",
          metrics: "Year-over-year analysis • Market outlook • Growth strategy"
        }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing diverse capabilities across financial strategy, analysis, and client communications
          </p>
        </div>

        <Tabs defaultValue="pitches" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 mb-8 bg-secondary/50 p-2 rounded-xl">
            {portfolioSections.map((section) => (
              <TabsTrigger 
                key={section.id} 
                value={section.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
              >
                <section.icon className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">{section.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {portfolioSections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="space-y-6">
              {section.items.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 md:p-8 border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-card-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.metrics.split(' • ').map((metric, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
