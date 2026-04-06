import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import BlurText from "@/components/animations/BlurText";
import ParallaxSection from "@/components/animations/ParallaxSection";

const caseStudies = [
  {
    category: "Hospitality",
    title: "Homate - Smart Property Management",
    description: "A comprehensive platform for managing property data flows, Slack integrations, and real-time backend updates.",
    metrics: "Seamless Integration",
    gradient: "from-primary/20 via-primary/5 to-accent/15",
  },
  {
    category: "E-Commerce",
    title: "Volumenzeit - Premium Watch Store",
    description: "Customized theme and high-performance frontend for a luxury watch brand, optimized for loading times.",
    metrics: "Bug-Free Performance",
    gradient: "from-accent/20 via-accent/5 to-primary/15",
  },
  {
    category: "Marketplace",
    title: "RentLondonFlat.com Data Sync",
    description: "Seamless data synchronization with Salesforce and management of high-volume web traffic for a leading real estate platform.",
    metrics: "Scalable Backend",
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
              <Card className="group relative flex h-full cursor-pointer flex-col gap-0 overflow-hidden rounded-2xl border-border bg-card p-0 text-inherit shadow-sm hover-lift">
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
                  <Badge
                    variant="secondary"
                    className="w-fit gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/10"
                  >
                    {study.metrics}
                  </Badge>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
