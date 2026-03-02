import { CheckCircle2 } from "lucide-react";

const HowToUseMe = () => {
  const thrive = [
    "Ambiguity — open-ended problems where the solution isn't obvious yet",
    "User obsession — direct access to customers and real feedback loops",
    "Cross-functional work — close collaboration across engineering, design, and business",
    "Ownership — responsibility for product outcomes from discovery to delivery",
    "Impact — work that has a tangible effect on users and business trajectory",
    "Speed — fast iteration cycles with room to learn and adapt"
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
    <section id="how-to-use-me" className="py-28 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Fit
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            What I'm Looking For
          </h2>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-serif mb-8 text-foreground">I thrive in environments with:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {thrive.map((item, index) => (
                <div key={index} className="flex items-start gap-3 py-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground font-sans">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="editorial-divider"></div>

          <div>
            <h3 className="text-xl font-serif mb-8 text-foreground">Roles I'm targeting:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <div key={index} className="flex items-start gap-3 py-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground font-sans font-medium">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseMe;
