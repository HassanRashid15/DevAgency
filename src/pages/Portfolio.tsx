import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const projects = [
  { slug: "ai-risk-assessment", category: "FinTech", title: "AI Risk Assessment Platform", description: "Real-time risk scoring processing 10M+ daily transactions.", tech: ["Python", "TensorFlow", "AWS"], color: "from-primary/20 to-accent/10" },
  { slug: "telemedicine-at-scale", category: "Healthcare", title: "Telemedicine at Scale", description: "HIPAA-compliant platform serving 500K+ patients across 3 countries.", tech: ["React Native", "Node.js", "Azure"], color: "from-accent/20 to-primary/10" },
  { slug: "enterprise-marketplace", category: "E-Commerce", title: "Enterprise Marketplace", description: "Monolith-to-microservices migration with 99.99% uptime.", tech: ["Next.js", "Go", "Kubernetes"], color: "from-primary/15 to-accent/15" },
  { slug: "lms-universities", category: "Education", title: "LMS for Universities", description: "Learning management system supporting 100K concurrent users.", tech: ["React", "Django", "GCP"], color: "from-accent/15 to-primary/20" },
  { slug: "fleet-management", category: "Logistics", title: "Fleet Management System", description: "Real-time tracking and route optimization for 5000+ vehicles.", tech: ["React", "Python", "IoT"], color: "from-primary/20 to-accent/20" },
  { slug: "analytics-dashboard", category: "SaaS", title: "Analytics Dashboard", description: "Custom BI platform with real-time data visualization.", tech: ["React", "D3.js", "ClickHouse"], color: "from-accent/10 to-primary/15" },
];

const ITEMS_PER_PAGE = 6;
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Portfolio</p>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Work</span>
              </h1>
              <p className="text-muted-foreground text-lg">Projects that showcase our expertise and impact.</p>
            </div>
          </FadeIn>

          {/* Category Filters */}
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.08}>
                <Link to={`/portfolio/${p.slug}`} className="block h-full">
                  <div className="group rounded-2xl border border-border overflow-hidden hover-lift cursor-pointer bg-background shadow-card h-full flex flex-col">
                    <div className={`h-44 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                      <span className="text-4xl font-heading font-bold text-foreground/[0.06]">{p.category}</span>
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight size={18} className="text-primary" />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">{p.category}</span>
                      <h3 className="font-heading font-semibold text-lg mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {p.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-primary/5 text-primary/70">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
