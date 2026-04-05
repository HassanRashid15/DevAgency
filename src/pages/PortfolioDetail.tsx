import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const allProjects = [
  {
    slug: "ai-risk-assessment",
    category: "FinTech",
    title: "AI Risk Assessment Platform",
    description: "Real-time risk scoring processing 10M+ daily transactions.",
    fullDescription: "We built an AI-powered risk assessment engine for a leading financial institution. The platform processes over 10 million transactions daily, leveraging advanced machine learning models for real-time fraud detection and credit scoring. The system reduced false positives by 60% while maintaining regulatory compliance across 12 jurisdictions.",
    tech: ["Python", "TensorFlow", "AWS", "Kafka", "React"],
    results: ["10M+ daily transactions processed", "60% reduction in false positives", "99.97% uptime SLA achieved", "12 jurisdictions compliant"],
    duration: "8 months",
    team: "14 engineers",
    color: "from-primary/20 to-accent/10",
  },
  {
    slug: "telemedicine-at-scale",
    category: "Healthcare",
    title: "Telemedicine at Scale",
    description: "HIPAA-compliant platform serving 500K+ patients across 3 countries.",
    fullDescription: "We designed and developed a comprehensive telemedicine platform enabling virtual consultations, EHR integration, and remote patient monitoring. The platform is fully HIPAA-compliant and supports multi-language interfaces, serving over 500,000 patients across the US, UK, and Canada.",
    tech: ["React Native", "Node.js", "PostgreSQL", "WebRTC", "Azure"],
    results: ["500K+ patients served", "3 countries deployed", "40% reduction in no-shows", "HIPAA & GDPR compliant"],
    duration: "12 months",
    team: "18 engineers",
    color: "from-accent/20 to-primary/10",
  },
  {
    slug: "enterprise-marketplace",
    category: "E-Commerce",
    title: "Enterprise Marketplace",
    description: "Monolith-to-microservices migration with 99.99% uptime.",
    fullDescription: "We migrated a legacy monolithic e-commerce system to a modern microservices architecture. The new system supports 50,000+ concurrent users, handles $200M+ in annual GMV, and integrates with 30+ third-party services. The migration was completed with zero downtime.",
    tech: ["Next.js", "Go", "Kubernetes", "Redis", "Stripe"],
    results: ["99.99% uptime achieved", "$200M+ annual GMV", "50K+ concurrent users", "Zero-downtime migration"],
    duration: "10 months",
    team: "20 engineers",
    color: "from-primary/15 to-accent/15",
  },
  {
    slug: "lms-universities",
    category: "Education",
    title: "LMS for Universities",
    description: "Learning management system supporting 100K concurrent users.",
    fullDescription: "We built a next-generation learning management system for a consortium of 15 universities. The platform supports live virtual classrooms, adaptive learning paths, AI-powered grading, and real-time collaboration tools — all at massive scale.",
    tech: ["React", "Django", "WebSocket", "GCP", "ElasticSearch"],
    results: ["100K concurrent users", "15 universities onboarded", "35% improvement in engagement", "AI-powered auto-grading"],
    duration: "9 months",
    team: "12 engineers",
    color: "from-accent/15 to-primary/20",
  },
  {
    slug: "fleet-management",
    category: "Logistics",
    title: "Fleet Management System",
    description: "Real-time tracking and route optimization for 5000+ vehicles.",
    fullDescription: "We developed an IoT-powered fleet management solution that provides real-time GPS tracking, predictive maintenance alerts, driver behavior analytics, and AI-based route optimization across a fleet of 5,000+ commercial vehicles.",
    tech: ["React", "Python", "IoT", "AWS", "MapBox"],
    results: ["5000+ vehicles tracked", "22% fuel cost reduction", "Real-time GPS tracking", "Predictive maintenance alerts"],
    duration: "7 months",
    team: "10 engineers",
    color: "from-primary/20 to-accent/20",
  },
  {
    slug: "analytics-dashboard",
    category: "SaaS",
    title: "Analytics Dashboard",
    description: "Custom BI platform with real-time data visualization.",
    fullDescription: "We created a powerful business intelligence dashboard that consolidates data from 20+ sources into real-time visualizations. Features include custom report builders, predictive analytics, anomaly detection, and role-based access control for enterprise teams.",
    tech: ["React", "D3.js", "Node.js", "ClickHouse", "Docker"],
    results: ["20+ data sources integrated", "Real-time visualizations", "50% faster decision-making", "Custom report builder"],
    duration: "6 months",
    team: "8 engineers",
    color: "from-accent/10 to-primary/15",
  },
];

const PortfolioDetail = () => {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-24 text-center container mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio">
            <Button variant="hero">Back to Portfolio</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </FadeIn>

          <div className={`rounded-2xl h-56 md:h-72 bg-gradient-to-br ${project.color} flex items-center justify-center mb-10`}>
            <span className="text-5xl md:text-7xl font-heading font-bold text-foreground/5">{project.category}</span>
          </div>

          <FadeIn>
            <span className="text-sm text-primary font-medium uppercase tracking-wider">{project.category}</span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{project.fullDescription}</p>
          </FadeIn>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 section-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <div className="bg-background rounded-xl p-6 shadow-card">
                <h3 className="font-heading font-semibold text-lg mb-4 text-gradient">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-background rounded-xl p-6 shadow-card">
                <h3 className="font-heading font-semibold text-lg mb-4 text-gradient">Project Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="font-medium">{project.duration}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Team Size</span><span className="font-medium">{project.team}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Industry</span><span className="font-medium">{project.category}</span></div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-background rounded-xl p-6 shadow-card">
                <h3 className="font-heading font-semibold text-lg mb-4 text-gradient">Key Results</h3>
                <ul className="space-y-2.5">
                  {project.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Have a similar project in mind?</h2>
            <p className="text-muted-foreground mb-8">Let's discuss how we can help you achieve your goals.</p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="gap-2">
                Get in Touch <ArrowUpRight size={18} />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
