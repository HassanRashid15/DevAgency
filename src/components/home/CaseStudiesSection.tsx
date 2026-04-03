import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    category: "FinTech",
    title: "AI-Powered Risk Assessment Platform",
    description: "Built a real-time risk scoring engine processing 10M+ transactions daily for a leading financial institution.",
    metrics: "40% faster decisions",
    color: "from-primary/20 to-accent/10",
  },
  {
    category: "Healthcare",
    title: "Telemedicine Platform Scaling",
    description: "Architected a HIPAA-compliant telehealth solution serving 500K+ patients across 3 countries.",
    metrics: "3x user growth",
    color: "from-accent/20 to-primary/10",
  },
  {
    category: "E-Commerce",
    title: "Enterprise Marketplace Rebuild",
    description: "Migrated a legacy monolith to microservices, achieving 99.99% uptime and sub-second page loads.",
    metrics: "60% cost reduction",
    color: "from-primary/15 to-accent/15",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="text-muted-foreground">
            Real projects, real impact. See how we've helped businesses transform through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group relative rounded-xl border border-border overflow-hidden hover-lift cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                <span className="text-4xl font-heading font-bold text-foreground/10">{study.category}</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{study.category}</span>
                <h3 className="font-heading font-semibold text-lg mt-2 mb-2 text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  {study.title}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{study.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {study.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
