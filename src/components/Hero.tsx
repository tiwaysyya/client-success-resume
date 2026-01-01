import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Pink/Purple gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(336_100%_44%/0.2),hsl(249_100%_67%/0.3),hsl(336_100%_44%/0.15))]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,hsl(336_100%_44%/0.3),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,hsl(249_100%_67%/0.3),transparent_70%)]" />
      
      <div className="container max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">I build things.</span>
          <br />
          <span className="text-foreground">I fix problems.</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">I move fast.</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Generalist. Builder. Problem-solver. Ready to own whatever needs doing.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white border-0"
            onClick={() => scrollToSection("projects")}
          >
            See My Projects
          </Button>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0"
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