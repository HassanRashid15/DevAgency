import { Card } from "@/components/ui/card";
import FadeIn from "@/components/animations/FadeIn";
import BlurText from "@/components/animations/BlurText";
import ParallaxSection from "@/components/animations/ParallaxSection";

const steps = [
  { number: "01", title: "Planning", description: "We start by understanding your vision and creating a detailed roadmap, prioritizing clear communication to ensure your goals are met." },
  { number: "02", title: "Design", description: "Our designers create visually appealing and user-friendly wireframes and mockups to ensure a seamless user experience." },
  { number: "03", title: "Development", description: "Our experienced team brings the design to life using the latest technologies, custom coding, and precision API integrations." },
  { number: "04", title: "Testing", description: "We rigorously test across devices and environments to identify and resolve any issues, ensuring a flawless performance." },
  { number: "05", title: "Deployment", description: "Once expectations are met, we handle the technicalities of live deployment to ensure a smooth transition for your business." },
  { number: "06", title: "Maintenance", description: "We offer ongoing support and updates to keep your platform secure, optimized, and growing alongside your business." },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={0.15 * i}>
              <div className="relative h-full">
                <Card className="group h-full gap-0 border-border bg-card p-6 shadow-sm hover-lift">
                  <span className="text-5xl font-heading font-bold text-gradient inline-block opacity-40 group-hover:opacity-70 transition-opacity">{step.number}</span>
                  <h3 className="font-heading font-semibold text-lg mt-3 mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
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
