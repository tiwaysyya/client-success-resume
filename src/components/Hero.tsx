import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-background">
      <div className="container max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
          I build solutions.
          <br />
          I fix problems.
          <br />
          I move fast.
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Generalist. Builder. Problem-solver. Ready to own whatever needs doing.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("projects")}
          >
            See My Projects
          </Button>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("case-studies")}
          >
            What I've Done
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary hover:bg-primary/10"
          >
            Download CV
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <button
            onClick={() => scrollToSection("pillars")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;