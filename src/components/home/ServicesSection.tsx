import { Globe, Brain, Smartphone, Cloud, Palette, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web applications built with modern frameworks, optimized for performance and scalability.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI — from NLP to computer vision and predictive analytics.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud architecture, CI/CD pipelines, and infrastructure automation for enterprise workloads.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with usability — research-driven and conversion-focused.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits, penetration testing, and compliance solutions to protect your assets.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Services That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-muted-foreground">
            End-to-end technology solutions tailored for startups, enterprises, and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-xl border border-border bg-gradient-card hover-lift cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
