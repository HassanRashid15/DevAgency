import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Brain, Smartphone, Cloud, Palette, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", description: "Enterprise web applications using React, Next.js, and modern full-stack architectures. From dashboards to customer-facing platforms — built for scale.", features: ["Custom Web Apps", "E-Commerce Platforms", "Progressive Web Apps", "API Development"] },
  { icon: Brain, title: "AI & Machine Learning", description: "Harness the power of artificial intelligence with custom ML models, NLP solutions, and intelligent automation that drives decisions.", features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "AI Chatbots"] },
  { icon: Smartphone, title: "Mobile Development", description: "Native iOS/Android and cross-platform mobile apps with React Native and Flutter. Pixel-perfect UI with enterprise-grade reliability.", features: ["iOS & Android Apps", "Cross-Platform Solutions", "App Store Optimization", "Mobile Backend"] },
  { icon: Cloud, title: "Cloud & DevOps", description: "Scalable cloud infrastructure on AWS, Azure, and GCP. CI/CD pipelines, containerization, and infrastructure-as-code.", features: ["Cloud Migration", "Kubernetes & Docker", "CI/CD Pipelines", "Infrastructure as Code"] },
  { icon: Palette, title: "UI/UX Design", description: "Research-driven design that converts. User personas, wireframing, prototyping, and design systems built for product teams.", features: ["User Research", "Design Systems", "Prototyping", "Usability Testing"] },
  { icon: Shield, title: "Cybersecurity", description: "Protect your digital assets with comprehensive security audits, penetration testing, and compliance-ready security architecture.", features: ["Security Audits", "Penetration Testing", "Compliance (SOC2, HIPAA)", "Incident Response"] },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              End-to-End <span className="text-gradient">Technology Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              From concept to deployment, we deliver solutions that scale with your ambitions.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={s.title} className="p-8 rounded-xl border border-border bg-gradient-card hover-lift">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{s.title}</h3>
                    <p className="text-muted-foreground mb-4">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <span key={f} className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary font-medium">{f}</span>
                      ))}
                    </div>
                  </div>
                  <Button variant="hero-outline" size="sm" className="shrink-0 gap-1">
                    Learn More <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
