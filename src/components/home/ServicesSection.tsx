import { Globe, Brain, Smartphone, Cloud, Palette, Shield } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import BlurText from "@/components/animations/BlurText";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web applications built with modern frameworks, optimized for performance and scalability.",
    accent: "from-primary/10 to-primary/5",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI — from NLP to computer vision and predictive analytics.",
    accent: "from-accent/10 to-accent/5",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android.",
    accent: "from-primary/10 to-accent/5",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud architecture, CI/CD pipelines, and infrastructure automation for enterprise workloads.",
    accent: "from-accent/10 to-primary/5",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with usability — research-driven and conversion-focused.",
    accent: "from-primary/8 to-accent/8",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits, penetration testing, and compliance solutions to protect your assets.",
    accent: "from-accent/8 to-primary/8",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">What We Do</p>
          </FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            <BlurText text="Services That" delay={0.1} />
            {" "}
            <span className="text-gradient"><BlurText text="Drive Results" delay={0.3} /></span>
          </h2>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground">
              End-to-end technology solutions tailored for startups, enterprises, and everything in between.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.1 * i}>
              <div className="group relative p-6 rounded-2xl border border-border bg-background hover-lift cursor-pointer overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
