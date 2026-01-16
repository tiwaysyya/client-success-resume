import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-background">
      <div className="container max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-800 font-inter">
          I learn fast in new domains.
          <br />
          I find what's slowing teams down.
          <br />
          I fix how work gets done.
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-inter">
          Product thinking. Startup speed. Bias for action.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("pillars")}
          >
            What I Bring
          </Button>
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
            View Case Studies
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