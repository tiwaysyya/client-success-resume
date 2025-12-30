import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const HowToUseMe = () => {
  const thrive = [
    "Ambiguity: give me a problem, not a process",
    "Ownership: let me run with it end-to-end",
    "Speed: fast feedback loops and rapid iteration",
    "Impact: work that actually moves the needle",
    "Cross-functional chaos: I'll figure out where I'm needed",
    "Building from scratch: 0 to 1 is where I'm happiest"
  ];

  const roles = [
    "Founder's Associate",
    "Chief of Staff",
    "Operations Associate",
    "Growth Associate",
    "Commercial Associate",
    "Business Operations"
  ];

  const expectations = [
    "I'll figure it out",
    "I ship, then iterate",
    "I ask questions early",
    "I own problems end-to-end",
    "I move fast",
    "I build things that work"
  ];

  return (
    <section id="how-to-use-me" className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What I'm Looking For
          </h2>
        </div>

        <div className="space-y-12">
          {/* Where I Thrive */}
          <Card className="p-8 border-border bg-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground">I thrive in environments with:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {thrive.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Best Suited Roles */}
          <Card className="p-8 border-border bg-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Roles I'm targeting:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{role}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Expectations */}
          <Card className="p-8 border-border bg-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground">If you work with me, expect:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {expectations.map((expectation, index) => (
                <div 
                  key={index} 
                  className="bg-secondary rounded-lg p-4 text-center"
                >
                  <p className="font-semibold text-foreground">{expectation}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowToUseMe;