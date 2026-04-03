import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build
            <br />
            <span className="text-gradient">Something Great?</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Let's discuss how we can turn your vision into a scalable, production-ready solution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="gap-2">
              Start a Project <ArrowRight size={16} />
            </Button>
            <Button variant="hero-outline" size="lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
