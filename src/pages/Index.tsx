import Hero from "@/components/Hero";
import ThreePillars from "@/components/ThreePillars";
import MyStory from "@/components/MyStory";
import HowIThink from "@/components/HowIThink";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Experience from "@/components/Experience";
import HowToUseMe from "@/components/HowToUseMe";
import SignalsOfImpact from "@/components/SignalsOfImpact";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ThreePillars />
      <MyStory />
      <HowIThink />
      <Projects />
      <CaseStudies />
      <Experience />
      <HowToUseMe />
      <SignalsOfImpact />
      <Contact />
      
      <footer className="py-8 px-4 bg-secondary/20 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Tiwaysyya Santhra Segaran. BSc Biotechnology (Hons), Imperial College London.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;