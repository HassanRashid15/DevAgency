import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { category: "FinTech", title: "AI Risk Assessment Platform", description: "Real-time risk scoring processing 10M+ daily transactions.", color: "from-primary/20 to-accent/10" },
  { category: "Healthcare", title: "Telemedicine at Scale", description: "HIPAA-compliant platform serving 500K+ patients across 3 countries.", color: "from-accent/20 to-primary/10" },
  { category: "E-Commerce", title: "Enterprise Marketplace", description: "Monolith-to-microservices migration with 99.99% uptime.", color: "from-primary/15 to-accent/15" },
  { category: "Education", title: "LMS for Universities", description: "Learning management system supporting 100K concurrent users.", color: "from-accent/15 to-primary/20" },
  { category: "Logistics", title: "Fleet Management System", description: "Real-time tracking and route optimization for 5000+ vehicles.", color: "from-primary/20 to-accent/20" },
  { category: "SaaS", title: "Analytics Dashboard", description: "Custom BI platform with real-time data visualization.", color: "from-accent/10 to-primary/15" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Work</span>
            </h1>
            <p className="text-muted-foreground text-lg">Projects that showcase our expertise and impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="group rounded-xl border border-border overflow-hidden hover-lift cursor-pointer">
                <div className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                  <span className="text-3xl font-heading font-bold text-foreground/10">{p.category}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-heading font-semibold text-lg mt-2 mb-2 text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    {p.title} <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
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

export default Portfolio;
