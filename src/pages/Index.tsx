import Hero from "@/components/Hero";
import ThreePillars from "@/components/ThreePillars";
import MyStory from "@/components/MyStory";
import HowIThink from "@/components/HowIThink";
import SystemMaps from "@/components/SystemMaps";
import CaseStudies from "@/components/CaseStudies";
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
      <SystemMaps />
      <CaseStudies />
      <HowToUseMe />
      <SignalsOfImpact />
      <Contact />
      
      <footer className="py-8 px-4 bg-secondary/20 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Strategic Systems Thinker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
