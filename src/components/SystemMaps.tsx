import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Target } from "lucide-react";

const SystemMaps = () => {
  const pipeline = [
    { node: "Science", description: "where truth is tested" },
    { node: "Product", description: "where feasibility enters" },
    { node: "IP", description: "where power is defined" },
    { node: "Market", description: "where risk gets priced" },
    { node: "Capital", description: "where decisions are made" }
  ];

  const stakeholders = [
    "Scientists",
    "Product Teams",
    "IP Attorneys",
    "Investors",
    "Strategists"
  ];

  return (
    <section id="system-maps" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How I see the life science pipeline.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My strategic advantage is seeing the connections others miss.
          </p>
        </div>

        {/* Pipeline Map */}
        <Card className="p-8 md:p-12 border-border bg-card">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Science → Product → IP → Market → Capital
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {pipeline.map((item, index) => (
              <div key={index} className="flex items-center gap-4 w-full md:w-auto">
                <div className="text-center flex-1">
                  <div className="bg-primary text-primary-foreground rounded-lg p-4 mb-2">
                    <p className="font-bold text-lg">{item.node}</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic">{item.description}</p>
                </div>
                {index < pipeline.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Stakeholder Alignment */}
        <Card className="p-8 md:p-12 border-border bg-card">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Users className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">
              Stakeholder Alignment Map
            </h3>
          </div>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            I bridge different worlds and translate between stakeholder languages
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {stakeholders.map((stakeholder, index) => (
              <div key={index} className="relative">
                <div className="bg-secondary border-2 border-primary rounded-lg px-6 py-3">
                  <p className="font-semibold text-foreground">{stakeholder}</p>
                </div>
                {index < stakeholders.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3">
              <Target className="w-5 h-5" />
              <p className="font-bold">Strategic Translator</p>
            </div>
          </div>
        </Card>

        {/* Opportunity Map */}
        <Card className="p-8 md:p-12 border-border bg-card">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Opportunity Identification
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-secondary rounded-lg">
              <p className="font-bold text-foreground mb-2">Map the System</p>
              <p className="text-sm text-muted-foreground">Identify all moving parts and dependencies</p>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <p className="font-bold text-foreground mb-2">Find Leverage Points</p>
              <p className="text-sm text-muted-foreground">Where small changes create large impact</p>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg">
              <p className="font-bold text-foreground mb-2">Create Value</p>
              <p className="text-sm text-muted-foreground">Build differentiated solutions</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SystemMaps;
