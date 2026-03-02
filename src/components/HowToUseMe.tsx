import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const HowToUseMe = () => {
  const thrive = [
    "Ambiguity: open-ended problems where the solution isn't obvious yet",
    "User obsession: direct access to customers and real feedback loops",
    "Cross-functional work: close collaboration across engineering, design, and business",
    "Ownership: responsibility for product outcomes from discovery to delivery",
    "Impact: work that has a tangible effect on users and business trajectory",
    "Speed: fast iteration cycles with room to learn and adapt"
  ];

  const roles = [
    "Associate Product Manager",
    "Junior Product Manager",
    "Product Analyst",
    "Product Operations Associate",
    "Growth Product Manager",
    "Technical Product Manager"
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
        </div>
      </div>
    </section>
  );
};

export default HowToUseMe;
