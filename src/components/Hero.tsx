import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-background">
      <div className="container max-w-4xl mx-auto text-center space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground">
          AI Ops · Enablement · Workflow Automation
        </p>

        <h1 className="text-4xl md:text-6xl font-serif leading-tight text-foreground">
          I find where AI creates real value
          <br />
          <span className="text-accent italic">and make adoption stick.</span>
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-xl mx-auto font-sans leading-relaxed">
          Tool evaluation. Cross-functional rollout. Hands-on enablement. Measurable impact.
        </p>
        
        <div className="editorial-divider"></div>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans tracking-wide"
            onClick={() => scrollToSection("pillars")}
          >
            What I Bring
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans tracking-wide transition-all duration-300"
            onClick={() => scrollToSection("how-i-think")}
          >
            How I Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans tracking-wide transition-all duration-300"
            onClick={() => scrollToSection("what-ive-done")}
          >
            What I've Built
          </Button>
        </div>

        <div className="pt-16">
          <button
            onClick={() => scrollToSection("my-story")}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowDown className="w-5 h-5 mx-auto animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
