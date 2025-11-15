import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Let's talk about science, strategy or any problem worth solving.
        </h2>
        
        <Card className="p-8 md:p-12 mt-12 border-border bg-card">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="mailto:tiwaysyya@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="https://www.linkedin.com/in/tiwaysyya-s-5440b1287" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
