import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SplitText from "@/components/animations/SplitText";
import ParallaxSection from "@/components/animations/ParallaxSection";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <ParallaxSection speed={0.2} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            <SplitText text="Ready to Build" splitBy="words" delay={0} />
            <br />
            <SplitText text="Something Great?" splitBy="words" delay={0.3} gradient />
          </h2>
          <FadeIn delay={0.5}>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how we can turn your vision into a scalable, production-ready solution.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="gap-2 px-8">
                Start a Project <ArrowRight size={16} />
              </Button>
              <Button variant="hero-outline" size="lg" className="px-8">
                Schedule a Call
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
