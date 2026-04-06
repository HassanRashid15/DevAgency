"use client";

import { useState } from "react";
import Link from "next/link";
import SitePage from "@/components/layout/SitePage";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const projects = [
  { slug: "homate", category: "Hospitality", title: "Homate - Smart Property Management", description: "Seamless property data management and Slack integration for real-time updates.", tech: ["React", "Node.js", "Slack API"], color: "from-primary/20 to-accent/10" },
  { slug: "volumenzeit", category: "E-Commerce", title: "Volumenzeit - Premium Watches", description: "Customized theme and high-performance frontend for a luxury 3D dial watch manufacturer.", tech: ["Liquid", "JavaScript", "3D Web"], color: "from-accent/20 to-primary/10" },
  { slug: "rentlondonflat", category: "Marketplace", title: "RentLondonFlat.com Data Sync", description: "Data flows and Salesforce synchronization for a leading real estate platform.", tech: ["PHP Laravel", "Salesforce", "PostgreSQL"], color: "from-primary/15 to-accent/15" },
  { slug: "baby-sleep", category: "Healthcare", title: "The Baby Sleep Site Integration", description: "Seamless integration and responsive web updates for a child sleep consultation platform.", tech: ["WooCommerce", "WordPress", "Freshdesk"], color: "from-accent/15 to-primary/20" },
  { slug: "gokinda", category: "Sustainability", title: "GoKinda - Eco Travel Curation", description: "Curating a collection of stylish, eco-conscious travel options with a fokus on sustainability.", tech: ["React", "Node.js", "Mapbox"], color: "from-primary/20 to-accent/20" },
  { slug: "hilco-industrial", category: "Manufacturing", title: "Hilco Industrial Equipment", description: "Machinery and equipment buying/selling platform with robust inventory management.", tech: ["PHP", "MySQL", "Inventory"], color: "from-accent/10 to-primary/15" },
];

const ITEMS_PER_PAGE = 6;
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const PortfolioPage = () => {
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
    <SitePage>
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

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  type="button"
                  variant={activeCategory === cat ? "default" : "secondary"}
                  size="sm"
                  className={`h-auto rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "border-0 bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.08}>
                <Link href={`/portfolio/${p.slug}`} className="block h-full">
                  <Card className="group h-full cursor-pointer gap-0 overflow-hidden rounded-2xl border-border bg-background p-0 text-inherit shadow-card hover-lift">
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
                          <Badge
                            key={t}
                            variant="secondary"
                            className="rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary/70 hover:bg-primary/10"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>

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
    </SitePage>
  );
};

export default PortfolioPage;
