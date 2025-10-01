import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, TrendingUp, Presentation } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container max-w-6xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
          <Briefcase className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Client Relations Professional</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
          Strategic Financial
          <br />
          Partnership Excellence
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Transforming complex financial landscapes into actionable insights and long-term client relationships. 
          Specializing in investor relations, risk management, and strategic financial analysis.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            onClick={() => navigate("/presentation")}
          >
            <Presentation className="w-5 h-5 mr-2" />
            View Presentation
          </Button>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            onClick={() => scrollToSection("portfolio")}
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            View Portfolio
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary/20 hover:bg-primary/5"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
