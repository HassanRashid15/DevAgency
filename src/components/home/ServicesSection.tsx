import { Card } from "@/components/ui/card";
import { Globe, Brain, Smartphone, Cloud, Palette, Shield, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import BlurText from "@/components/animations/BlurText";
import ParallaxSection from "@/components/animations/ParallaxSection";
import Link from "next/link";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Our team of skilled developers crafts high-performance, visually appealing websites using industry-leading technologies like PHP Laravel and Node.js.",
  },
  {
    id: "web-app-development",
    icon: Brain,
    title: "Web App Development",
    description: "Build innovative, user-centric web applications that streamline processes and enhance user experiences with scalable and secure solutions.",
  },
  {
    id: "ecommerce-development",
    icon: Smartphone,
    title: "Ecommerce Development",
    description: "Our expert developers create seamless, user-friendly Ecommerce stores that drive sales and customer satisfaction with custom storefronts.",
  },
  {
    id: "dedicated-teams",
    icon: Cloud,
    title: "Dedicated Teams",
    description: "Meet our passionate team, committed to delivering exceptional results. Our talented developers and QA experts work tirelessly to bring your vision to life.",
  },
  {
    id: "custom-ai-solutions",
    icon: Palette,
    title: "Custom AI Solutions",
    description: "Custom web solutions development agency driven by AI and focused on performance and security. We ensure quality work and customer satisfaction.",
  },
  {
    id: "quality-assurance",
    icon: Shield,
    title: "Quality Assurance",
    description: "Meticulous testing and quality control provided by our dedicated QA experts to ensure your platform performs flawlessly across all devices.",
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
              <Link href={`/services/${service.id}`}>
                <Card className="group relative h-full cursor-pointer gap-0 overflow-hidden border-white/10 bg-white/5 p-8 text-inherit shadow-none backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.08] hover-lift">
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <service.icon size={28} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">{service.description}</p>
                    <div className="flex items-center text-xs font-bold text-primary gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      LEARN MORE <ArrowRight size={14} />
                    </div>
                  </div>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
