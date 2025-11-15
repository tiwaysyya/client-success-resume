import { Card } from "@/components/ui/card";
import { Network, Target, TrendingUp } from "lucide-react";

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
    <section id="system-maps" className="py-24 px-4 bg-secondary/20">
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
        <Card className="p-8 border-cocoa/30 bg-card hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-6">
            <Network className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">The Pipeline Map</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Value flows from science to capital.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {pipeline.map((item, index) => (
              <div key={index} className="p-4 border border-cocoa/30 rounded text-center">
                <p className="font-bold text-foreground mb-2">{item.node}</p>
                <p className="text-xs text-muted-foreground italic">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Incentive Alignment Map */}
        <Card className="p-8 border-cocoa/30 bg-card hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Incentive Alignment Map</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Where stakeholder interests overlap—and where they diverge.
          </p>
          <div className="bg-accent/30 p-6 rounded-lg border border-cocoa/30">
            <p className="text-sm text-foreground font-semibold mb-2">The Strategic Translator:</p>
            <p className="text-sm text-muted-foreground">
              Operates in the overlap zone, translating between domains and building alignment.
            </p>
          </div>
        </Card>

        {/* Opportunity Assessment Framework */}
        <Card className="p-8 border-cocoa/30 bg-card hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Opportunity Assessment</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            A five-axis view of biotech value potential.
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {["Technical", "Commercial", "Regulatory", "Competitive", "Financial"].map((axis, index) => (
              <div key={index} className="p-4 border border-cocoa/30 rounded text-center">
                <h4 className="font-bold text-foreground mb-2">{axis}</h4>
                <p className="text-xs text-muted-foreground">
                  {axis === "Technical" && "Scientific feasibility"}
                  {axis === "Commercial" && "Market need & fit"}
                  {axis === "Regulatory" && "Pathway clarity"}
                  {axis === "Competitive" && "Differentiation"}
                  {axis === "Financial" && "Return potential"}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SystemMaps;
