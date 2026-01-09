import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-background">
      <div className="container max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-800">
          I build solutions.
          <br />
          I move fast.
          <br />
          I help you win.
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Problem solver. High achiever. Winner.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("how-i-think")}
          >
            How I Work
          </Button>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("what-ive-done")}
          >
            What I've Done
          </Button>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("pillars")}
          >
            What I Bring
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