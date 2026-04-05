import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import FadeIn from "@/components/animations/FadeIn";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-[0.07]"
          poster=""
        >
          <source
            src="https://cdn.pixabay.com/video/2021/07/30/83523-581269517_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/30 animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse-glow" style={{ animationDelay: "1s" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-sm text-muted-foreground font-medium">Trusted by 200+ enterprises worldwide</span>
            </div>
          </FadeIn>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground">
            <SplitText text="Building the Future" splitBy="words" delay={0.2} />
            <br />
            <span className="text-gradient">
              <SplitText text="with Technology" splitBy="words" delay={0.5} />
            </span>
          </h1>

          <FadeIn delay={0.7}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We engineer enterprise-grade software solutions — from AI-powered platforms to scalable cloud infrastructure — that drive real business growth.
            </p>
          </FadeIn>

          <FadeIn delay={0.9}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="gap-2 text-base px-8">
                Get Started <ArrowRight size={18} />
              </Button>
              <Button variant="hero-outline" size="lg" className="gap-2 text-base px-8">
                <Play size={16} /> Watch Demo
              </Button>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={1.1}>
            <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { value: "200+", label: "Clients Served" },
                { value: "500+", label: "Projects Delivered" },
                { value: "50+", label: "Team Members" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
