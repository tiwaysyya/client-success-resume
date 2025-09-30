import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      
      <footer className="py-8 px-4 bg-secondary/20 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Client Relations Professional. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
