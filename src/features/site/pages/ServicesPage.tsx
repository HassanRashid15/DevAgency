"use client";

import SitePage from "@/components/layout/SitePage";
import {
  Globe, Brain, Smartphone, Cloud, Palette, Shield,
  Code, ShoppingCart, Layout, Zap, LayoutDashboard, PenTool, Settings,
  ArrowRight, CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams } from "next/navigation";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";

const servicesOverview = [
  { id: "web-development", icon: Globe, title: "Web Development", description: "Our team of skilled developers crafts high-performance, visually appealing websites using industry-leading technologies like PHP Laravel and Node.js.", features: ["PHP Laravel", "Node.js", "Responsive Design", "SEO Optimization"] },
  { id: "web-app-development", icon: Brain, title: "Web App Development", description: "Build innovative, user-centric web applications that streamline processes and enhance user experiences. Our expertise in modern technologies ensures fast, scalable, and secure solutions.", features: ["User-Centric UI", "Scalable Architecture", "Process Streamlining", "Secure Integration"] },
  { id: "ecommerce-development", icon: Smartphone, title: "Ecommerce Development", description: "Our expert developers create seamless, user-friendly Ecommerce stores that drive sales and customer satisfaction. From product catalogs to secure checkout processes.", features: ["Custom Storefronts", "Secure Checkout", "Inventory Management", "Payment Integration"] },
  { id: "dedicated-teams", icon: Cloud, title: "Dedicated Teams", description: "Meet our passionate team, committed to delivering exceptional results. Our talented developers and QA experts work tirelessly to bring your vision to life.", features: ["Talented Developers", "QA Experts", "Resource Scaling", "Direct Collaboration"] },
  { id: "custom-ai-solutions", icon: Palette, title: "Custom AI Solutions", description: "Custom web solutions development agency driven by AI and focused on performance and security. We ensure quality work with a strong commitment to customer satisfaction.", features: ["AI Integration", "Performance Focus", "Security Audits", "Custom Logic"] },
  { id: "quality-assurance", icon: Shield, title: "Quality Assurance", description: "Meticulous planning, design, development, and testing. Before deployment, we rigorously test the project across devices, browsers, and environments.", features: ["Cross-Device Testing", "Browser Compatibility", "Performance Testing", "Bug-Free Delivery"] },
];

const serviceDetails: any = {
  "web-development": {
    title: "Web Development",
    subtitle: "Empowering your business with scalable, high-performance web solutions.",
    description: "From custom websites to complex web applications, we deliver excellence tailored to your business needs.",
    stats: [{ label: "Performance", value: "99.9%" }, { label: "SEO Score", value: "95+" }, { label: "Responsive", value: "100%" }],
    subServices: [
      { title: "Custom Website Development", icon: Code, description: "Tailor-made websites built from scratch to align with your brand identity and business goals." },
      { title: "E-commerce Development", icon: ShoppingCart, description: "Robust and secure online stores designed to provide a seamless shopping experience and drive sales." },
      { title: "CMS Development", icon: Layout, description: "Easy-to-manage content systems like WordPress or custom-built solutions for total control." },
      { title: "Web Application Development", icon: LayoutDashboard, description: "Feature-rich web apps that solve complex business problems and enhance user engagement." },
      { title: "UI/UX Design", icon: PenTool, description: "Modern, intuitive designs that ensure your website looks stunning on all devices." },
      { title: "Maintenance & Support", icon: Settings, description: "Continuous monitoring and updates to keep your website secure, fast, and up-to-date." },
    ],
    values: ["Performance Optimized", "SEO Friendly Architecture", "Responsive & Mobile First", "Secure & Scalable Codebase"],
  },
  "web-app-development": {
    title: "Web App Development",
    subtitle: "Building powerful, scalable, and user-centric web applications.",
    description: "We turn complex ideas into seamless digital experiences that drive innovation and efficiency.",
    stats: [{ label: "Scalability", value: "Unlimited" }, { label: "Uptime", value: "99.99%" }, { label: "Modern Tech", value: "100%" }],
    subServices: [
      { title: "Custom Web Applications", icon: Code, description: "Bespoke web applications designed to solve specific business challenges and enhance productivity." },
      { title: "Enterprise Solutions", icon: Shield, description: "Secure, scalable, and robust applications tailored for large-scale organizational needs." },
      { title: "MVP Development", icon: Zap, description: "Quick-to-market Minimum Viable Products to test your ideas and gather user feedback." },
      { title: "Progressive Web Apps (PWA)", icon: Smartphone, description: "High-performance web apps that offer an app-like experience on any device or browser." },
      { title: "Cloud Integration", icon: Cloud, description: "Seamless integration with cloud platforms like AWS, Azure, or GCP for maximum reliability." },
      { title: "API Development", icon: LayoutDashboard, description: "Building secure and efficient APIs to connect your services and empower third-party integrations." },
    ],
    values: ["User-Centric Architecture", "High Scalability & Security", "Seamless Third-Party Integration", "Future-Ready Tech Stack"],
  },
};

const ServicesPage = () => {
  const params = useParams();
  const slugArray = params?.slug as string[];
  const slug = slugArray?.[0];
  const detail = slug ? serviceDetails[slug] : null;

  if (detail) {
    return (
      <SitePage>
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-64 -mt-64" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <FadeIn>
                <div className="flex items-center gap-2 mb-6">
                  <Link href="/services" className="text-primary hover:underline text-sm font-medium">Services</Link>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-muted-foreground text-sm">{detail.title}</span>
                </div>
                <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-6">
                  {detail.title} <span className="text-gradient">Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">{detail.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full px-8">Get Started</Button>
                  <Button variant="outline" size="lg" className="rounded-full px-8">View Portfolio</Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-12 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {detail.stats.map((stat: any) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold mb-4">Comprehensive Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to build a successful digital presence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {detail.subServices.map((sub: any, i: number) => (
                <FadeIn key={sub.title} delay={i * 0.1}>
                  <Card className="p-8 h-full bg-gradient-card border-border hover-lift group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <sub.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{sub.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{sub.description}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold mb-12">Why Choose Our Web Services?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {detail.values.map((val: string) => (
                <div key={val} className="flex items-center gap-3 bg-background p-4 rounded-xl shadow-sm border border-border">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                  <span className="font-medium text-sm">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SitePage>
    );
  }

  return (
    <SitePage>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10" />
          <FadeIn>
            <p className="text-sm text-primary font-bold uppercase tracking-[0.2em] mb-4">What We Offer</p>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-6">
              Expert <span className="text-gradient">Technology Services</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From concept to deployment, we deliver solutions that scale with your ambitions and drive real business growth.
            </p>
          </FadeIn>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesOverview.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <Card className="rounded-2xl border-border bg-gradient-card p-8 shadow-sm hover-lift group h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <s.icon size={28} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{s.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {s.features.map((f) => (
                        <Badge
                          key={f}
                          variant="secondary"
                          className="rounded-full bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/10"
                        >
                          {f}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link href={`/services/${s.id}`} className="mt-auto">
                    <Button variant="outline" className="w-full rounded-xl gap-2 font-bold group">
                      Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
};

export default ServicesPage;
