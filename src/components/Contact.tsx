import { Button } from "@/components/ui/button";
import { Mail, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-4">
      <div className="container max-w-3xl mx-auto text-center">
        <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Connect
        </p>
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">
          Let's Talk
        </h2>
        <p className="text-muted-foreground font-sans mb-12">
          Open to product roles in London and remote.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans tracking-wide"
            asChild
          >
            <a href="mailto:tiwaysyya@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans tracking-wide transition-all duration-300"
            asChild
          >
            <a href="https://www.linkedin.com/in/tiwaysyya-s-5440b1287" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-border text-muted-foreground hover:border-primary hover:text-primary font-sans tracking-wide transition-all duration-300"
            asChild
          >
            <a href="/Tiwaysyya_Product_CV.pdf" download>
              <FileText className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
