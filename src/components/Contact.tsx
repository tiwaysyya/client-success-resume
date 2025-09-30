import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, FileText, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss how strategic financial partnerships can drive your success? 
            I'm always open to exploring new opportunities.
          </p>
        </div>

        <Card className="p-8 md:p-12 border-border shadow-lg bg-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-auto py-6 flex flex-col items-center gap-2"
            >
              <Mail className="w-6 h-6" />
              <span className="text-sm">Email</span>
              <span className="text-xs opacity-80">contact@example.com</span>
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary/20 hover:bg-primary/5 h-auto py-6 flex flex-col items-center gap-2"
            >
              <Phone className="w-6 h-6" />
              <span className="text-sm">Phone</span>
              <span className="text-xs opacity-80">+1 (555) 123-4567</span>
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary/20 hover:bg-primary/5 h-auto py-6 flex flex-col items-center gap-2"
            >
              <Linkedin className="w-6 h-6" />
              <span className="text-sm">LinkedIn</span>
              <span className="text-xs opacity-80">Connect professionally</span>
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary/20 hover:bg-primary/5 h-auto py-6 flex flex-col items-center gap-2"
            >
              <FileText className="w-6 h-6" />
              <span className="text-sm">Resume</span>
              <span className="text-xs opacity-80">Download PDF</span>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Available for consulting engagements and full-time opportunities
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
