import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import BlurText from "@/components/animations/BlurText";
import ParallaxSection from "@/components/animations/ParallaxSection";

const caseStudies = [
  {
    category: "FinTech",
    title: "AI-Powered Risk Assessment Platform",
    description: "Built a real-time risk scoring engine processing 10M+ transactions daily for a leading financial institution.",
    metrics: "40% faster decisions",
    gradient: "from-primary/20 via-primary/5 to-accent/15",
  },
  {
    category: "Healthcare",
    title: "Telemedicine Platform Scaling",
    description: "Architected a HIPAA-compliant telehealth solution serving 500K+ patients across 3 countries.",
    metrics: "3x user growth",
    gradient: "from-accent/20 via-accent/5 to-primary/15",
  },
  {
    category: "E-Commerce",
    title: "Enterprise Marketplace Rebuild",
    description: "Migrated a legacy monolith to microservices, achieving 99.99% uptime and sub-second page loads.",
    metrics: "60% cost reduction",
    gradient: "from-primary/15 via-accent/10 to-primary/20",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Our Work</p>
          </FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            <BlurText text="Case" delay={0.1} />
            {" "}
            <BlurText text="Studies" delay={0.2} gradient />
          </h2>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground">
              Real projects, real impact. See how we've helped businesses transform through technology.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <FadeIn key={study.title} delay={0.1 * i}>
              <div className="group relative rounded-2xl border border-border overflow-hidden hover-lift cursor-pointer bg-card h-full flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                  <span className="text-4xl font-heading font-bold text-foreground/[0.06]">{study.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{study.category}</span>
                  <h3 className="font-heading font-semibold text-lg mt-2 mb-2 text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    {study.title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{study.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium border border-primary/10 w-fit">
                    {study.metrics}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
