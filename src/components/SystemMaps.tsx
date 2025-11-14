import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Target } from "lucide-react";
import pipelineMap from "@/assets/system-map-pipeline.jpg";
import vennMap from "@/assets/system-map-venn.jpg";
import radarMap from "@/assets/system-map-radar.jpg";

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
        <Card className="p-8 md:p-12 border-border bg-card overflow-hidden">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Science → Product → IP → Market → Capital
          </h3>
          <div className="mb-8">
            <img 
              src={pipelineMap} 
              alt="Life science pipeline system map showing the flow from lab to capital" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {pipeline.map((item, index) => (
              <div key={index}>
                <p className="font-bold text-foreground mb-1">{item.node}</p>
                <p className="text-xs text-muted-foreground italic">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Stakeholder Alignment */}
        <Card className="p-8 md:p-12 border-border bg-card overflow-hidden">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Users className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">
              Incentive Alignment Map
            </h3>
          </div>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            I bridge different worlds and translate between stakeholder languages
          </p>
          <div className="mb-8">
            <img 
              src={vennMap} 
              alt="Venn diagram showing the overlap of Science, Product, IP, Market, and Capital incentives" 
              className="w-full max-w-2xl h-auto mx-auto rounded-lg"
            />
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3">
              <Target className="w-5 h-5" />
              <p className="font-bold">Strategic Translator</p>
            </div>
          </div>
        </Card>

        {/* Opportunity Map */}
        <Card className="p-8 md:p-12 border-border bg-card overflow-hidden">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Opportunity Assessment Framework
          </h3>
          <div className="mb-8">
            <img 
              src={radarMap} 
              alt="Radar chart showing five evaluation axes: Technical, Commercial, Regulatory, Competitive, and Financial" 
              className="w-full max-w-2xl h-auto mx-auto rounded-lg"
            />
          </div>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div className="p-4 bg-secondary rounded-lg">
              <p className="font-bold text-foreground text-sm">Technical</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <p className="font-bold text-foreground text-sm">Commercial</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <p className="font-bold text-foreground text-sm">Regulatory</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <p className="font-bold text-foreground text-sm">Competitive</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <p className="font-bold text-foreground text-sm">Financial</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SystemMaps;
