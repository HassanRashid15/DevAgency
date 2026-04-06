import FadeIn from "@/components/animations/FadeIn";
import BlurText from "@/components/animations/BlurText";
import ParallaxSection from "@/components/animations/ParallaxSection";

const steps = [
  { number: "01", title: "Discovery", description: "Deep-dive into your business goals, challenges, and technical requirements." },
  { number: "02", title: "Strategy", description: "Architecture planning, technology selection, and project roadmap creation." },
  { number: "03", title: "Development", description: "Agile sprints with continuous integration, testing, and stakeholder demos." },
  { number: "04", title: "Launch & Scale", description: "Production deployment, monitoring setup, and ongoing optimization." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">How We Work</p>
          </FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            <BlurText text="Our" delay={0.1} />
            {" "}
            <BlurText text="Process" delay={0.2} gradient />
          </h2>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground">
              A proven methodology refined across 500+ projects.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={0.15 * i}>
              <div className="relative h-full">
                <div className="p-6 rounded-2xl border border-border bg-card hover-lift group h-full">
                  <span className="text-5xl font-heading font-bold text-gradient inline-block opacity-40 group-hover:opacity-70 transition-opacity">{step.number}</span>
                  <h3 className="font-heading font-semibold text-lg mt-3 mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
