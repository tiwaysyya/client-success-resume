import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
          What most people see as silos,
          <br />
          <span className="text-muted-foreground">I see as a system.</span>
        </h1>
        
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Full-pipeline experience across science, product, IP and markets.
          </p>
          <p className="text-lg text-muted-foreground">
            Systems thinking. Fast learning. Tailored problem solving.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("how-i-think")}
          >
            See How I Think
          </Button>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("case-studies")}
          >
            Case Studies
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2"
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
