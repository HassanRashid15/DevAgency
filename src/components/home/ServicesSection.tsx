import { Globe, Brain, Smartphone, Cloud, Palette, Shield } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import BlurText from "@/components/animations/BlurText";
import ParallaxSection from "@/components/animations/ParallaxSection";

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
    <section className="py-24 section-dark relative overflow-hidden">
      {/* Parallax decorative orbs */}
      <ParallaxSection speed={0.2} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm text-accent font-medium uppercase tracking-widest mb-3">What We Do</p>
          </FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-white">
            <BlurText text="Services That" delay={0.1} />
            {" "}
            <BlurText text="Drive Results" delay={0.3} gradient />
          </h2>
          <FadeIn delay={0.2}>
            <p className="text-slate-400">
              End-to-end technology solutions tailored for startups, enterprises, and everything in between.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.1 * i}>
              <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover-lift cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.08] h-full">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
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
