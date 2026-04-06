"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import SitePage from "@/components/layout/SitePage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const allProjects = [
  {
    slug: "homate",
    category: "Hospitality",
    title: "Homate - Smart Property Management",
    description: "Seamless property data management and Slack integration for real-time updates.",
    fullDescription: "HOMATE, a leading force in remodeling and interior design, is committed to delivering excellence. We integrated their property management flows with Slack, providing real-time data synchronization and automated reporting for their distributed team. This solution streamlined their internal processes and enhanced collaboration between design and execution teams.",
    aboutClient: "HOMATE is a prominent architecture and interior design firm specializing in high-end residential and commercial remodeling. With a growing portfolio of complex projects, they needed a more robust way to track onsite progress and coordinate with their design office in real-time.",
    businessRequirements: [
      "Real-time onsite progress tracking",
      "Automated Slack notifications for project updates",
      "Centralized dashboard for management overview",
      "Seamless integration with existing design workflows"
    ],
    ourApproach: "We developed a custom integration layer that connects their project management tools with a dedicated Slack application. This involved building a specialized middleware that captures field technician inputs and formats them into actionable reports delivered instantly to relevant project channels.",
    tech: ["React", "Node.js", "Slack API", "PostgreSQL"],
    results: ["Real-time property updates", "Automated designer reporting", "30% faster data flow", "Slack integration"],
    duration: "4 months",
    team: "4 engineers",
    color: "from-primary/20 to-accent/10",
    websiteUrl: "https://homate.com",
  },
  {
    slug: "volumenzeit",
    category: "E-Commerce",
    title: "Volumenzeit - Premium Watches",
    description: "Customized theme and high-performance frontend for a luxury 3D dial watch manufacturer.",
    fullDescription: "Volumenzeit is a manufacturer of one-of-a-kind 3D dial wristwatches, jewelry, and high-end accessories. We developed a custom, high-performance ecommerce storefront that showcases their artisan products with 3D-inspired visuals and a seamless checkout experience. The final platform handles global transactions and high-resolution media with ease.",
    aboutClient: "Volumenzeit creates highly customized, luxury timepieces. Their brand identity is built on artisan craftsmanship and unique 3D textures, which needed a digital presence that reflected this level of detail and luxury.",
    businessRequirements: [
      "High-resolution 3D visual showcase",
      "Seamless global e-commerce integration",
      "Custom product configurator",
      "Premium brand storytelling landing pages"
    ],
    ourApproach: "Our team utilized Liquid and JavaScript to build a tailored Shopify experience that doesn't compromise on speed. We implemented optimized 3D asset loaders and a clean, minimalist UI that lets the product photography and textures take center stage.",
    tech: ["Liquid", "JavaScript", "3D Web", "Shopify"],
    results: ["Global transaction support", "High-performance visuals", "Customized brand experience", "Luxury market optimization"],
    duration: "5 months",
    team: "5 engineers",
    color: "from-accent/20 to-primary/10",
    websiteUrl: "https://volumenzeit.com",
  },
  {
    slug: "rentlondonflat",
    category: "Marketplace",
    title: "RentLondonFlat.com Data Sync",
    description: "Data flows and Salesforce synchronization for a leading real estate platform.",
    fullDescription: "RentLondonFlat.com is one of London's fastest-growing flat rental agencies. We implemented complex data synchronization between their web platform and Salesforce CRM, ensuring that listing data, lead information, and agent activities are mirrored in real-time. This eliminated double data entry and significantly improved agent productivity.",
    aboutClient: "RentLondonFlat.com is a technology-driven real estate agency focusing on the vibrant London rental market. They manage a vast database of listings and leads that requires constant synchronization with their Salesforce CRM.",
    businessRequirements: [
      "Bidirectional Salesforce synchronization",
      "Real-time property availability updates",
      "Automated lead assignment logic",
      "Scalable infrastructure for high-traffic periods"
    ],
    ourApproach: "We architected a robust backend using Laravel and Redis to handle the intensive data flows between the two platforms. By implementing a queue-based synchronization system, we ensured zero latency for end-users while maintaining perfect data integrity in the CRM.",
    tech: ["PHP Laravel", "Salesforce API", "PostgreSQL", "Redis"],
    results: ["Zero-latency CRM sync", "Real-time listing updates", "Improved agent productivity", "Scalable data architecture"],
    duration: "6 months",
    team: "6 engineers",
    color: "from-primary/15 to-accent/15",
    websiteUrl: "https://rentlondonflat.com",
  },
  {
    slug: "baby-sleep",
    category: "Healthcare",
    title: "The Baby Sleep Site Integration",
    description: "Seamless integration and responsive web updates for a child sleep consultation platform.",
    fullDescription: "The Baby Sleep Site is a popular platform for child sleep consultation. We integrated Freshdesk to optimize their customer support workflows and performed a series of responsive web updates to ensure a seamless experience for parents across all devices. The integration improved response times and support visibility.",
    aboutClient: "The Baby Sleep Site provides sleep consultation and resources for parents. With thousands of clients worldwide, their support team was overwhelmed by manual ticket processing and a fragmented customer view.",
    businessRequirements: [
      "Custom Freshdesk integration with WordPress/WooCommerce",
      "Unified customer support dashboard",
      "Responsive UI overhaul for the consultation portal",
      "Automated ticket categorization and routing"
    ],
    ourApproach: "We built a custom bridge between their WooCommerce backend and Freshdesk, allowing support agents to see purchase history and previous consultations directly within the ticket interface. We also modernised their frontend using React to provide a smoother, app-like experience for parents.",
    tech: ["WooCommerce", "WordPress", "Freshdesk API", "React"],
    results: ["Freshdesk integration", "Responsive mobile experience", "Improved support response", "Streamlined consultation flow"],
    duration: "3 months",
    team: "3 engineers",
    color: "from-accent/15 to-primary/20",
    websiteUrl: "https://babysleepsite.com",
  },
  {
    slug: "gokinda",
    category: "Sustainability",
    title: "GoKinda - Eco Travel Curation",
    description: "Curating a collection of stylish, eco-conscious travel options with a fokus on sustainability.",
    fullDescription: "GoKinda simplifies sustainable travel by curating a collection of stylish, eco-conscious hotels and travel options. We're proud to have built a platform that enables eco-conscious travelers to discover and book sustainable stays with ease, featuring custom search filters and Mapbox integration for geographical discovery.",
    aboutClient: "GoKinda is a sustainability-focused travel startup on a mission to make eco-tourism accessible and stylish. They needed a discovery engine that balanced high-end aesthetic with data-driven sustainability metrics.",
    businessRequirements: [
      "Map-based hotel discovery engine",
      "Custom sustainability scoring system",
      "Curated travel guides and editorial content",
      "Seamless API integration with booking providers"
    ],
    ourApproach: "Using React and Mapbox, we created a highly interactive discovery interface. We developed a custom CMS architecture that allows editors to tag hotels with sustainability metrics, which are then used to power the platform's advanced filtering logic.",
    tech: ["React", "Node.js", "Mapbox", "Tailwind CSS"],
    results: ["Eco-filter search", "Map-based discovery", "Seamless booking flow", "Sustainable travel platform"],
    duration: "5 months",
    team: "5 engineers",
    color: "from-primary/20 to-accent/20",
    websiteUrl: "https://gokinda.com",
  },
  {
    slug: "hilco-industrial",
    category: "Manufacturing",
    title: "Hilco Industrial Equipment",
    description: "Machinery and equipment buying/selling platform with robust inventory management.",
    fullDescription: "Hilco Industrial specializes in buying and selling machinery and equipment globally. We developed a robust inventory management system and an auction/sale platform that handles complex equipment listings, multiple currencies, and high-volume media assets, ensuring a professional and reliable experience for industrial buyers.",
    aboutClient: "Hilco Industrial is a global leader in industrial asset valuation and sales. Their business involves managing thousands of unique equipment listings across various continents and currencies.",
    businessRequirements: [
      "Robust inventory management system",
      "Global multi-currency support",
      "High-volume media asset management",
      "Real-time auction integration"
    ],
    ourApproach: "We developed a centralized management hub using PHP and MySQL that handles the scale of their global operations. The platform was built with a modular architecture to allow for localized versions and seamless integration with Third-party auction providers.",
    tech: ["PHP", "MySQL", "Google Cloud", "Complex Logic"],
    results: ["Global industrial listings", "Multicurrency support", "Robust inventory engine", "Industrial scale performance"],
    duration: "7 months",
    team: "8 engineers",
    color: "from-accent/10 to-primary/15",
    websiteUrl: "https://hilcoindustrial.com",
  },
];

const PortfolioDetailPage = () => {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);
  const otherProjects = allProjects.filter((p) => p.slug !== slug).slice(0, 3);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionIds = ["overview", "about", "requirements", "approach", "result", "tech"];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [project]);

  if (!project) {
    return (
      <SitePage>
        <div className="pt-32 pb-24 text-center container mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio">
            <Button variant="hero">Back to Portfolio</Button>
          </Link>
        </div>
      </SitePage>
    );
  }

  return (
    <SitePage className="bg-[#F8FAFC]">
      <section className="pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
              <div className="max-w-3xl">
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 leading-[1.1]">
                  {project.title.split(" - ")[0]}
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed font-medium md:max-w-2xl">{project.description}</p>
              </div>
              <div className="flex-shrink-0 pb-2">
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white font-bold gap-2">
                    Visit Website <ArrowUpRight size={18} />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative mx-auto max-w-7xl scale-110 md:scale-100 mt-16">
              <div className={`rounded-[2rem] h-[300px] md:h-[600px] bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)]`}>
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
                <img
                  src="/case-study-mockup.png"
                  alt={`${project.title} Mockup`}
                  className="w-full h-full object-cover relative z-10 opacity-90 mix-blend-multiply"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3";
                  }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-20 py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32 space-y-6">
                {[{ id: "overview", title: "OVERVIEW" }, { id: "about", title: "ABOUT THE CLIENT" }, { id: "requirements", title: "REQUIREMENTS" }, { id: "approach", title: "OUR APPROACH" }, { id: "result", title: "THE RESULT" }, { id: "tech", title: "TECHNOLOGIES" }].map((item) => (
                  <Button
                    key={item.id}
                    type="button"
                    variant="ghost"
                    className={`h-auto w-full justify-start px-2 text-left font-heading text-sm font-bold uppercase tracking-[0.2em] transition-all hover:translate-x-2 hover:bg-transparent ${activeSection === item.id ? "text-primary" : "text-slate-400 hover:text-primary"}`}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  >
                    {item.title}
                  </Button>
                ))}
              </div>
            </aside>
            <div className="lg:col-span-9 space-y-32">
              <div id="overview" className="scroll-mt-32">
                <h2 className="text-slate-700 font-heading text-md font-semibold uppercase tracking-[0.1em] mb-10">Overview:</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">{project.description}</p>
                <p className="mt-6 text-slate-500 leading-relaxed">{project.fullDescription}</p>
              </div>
              <div id="about" className="scroll-mt-32">
                <h2 className="text-slate-700 font-heading text-md font-semibold uppercase tracking-[0.1em] mb-10">ABOUT THE CLIENT:</h2>
                <p className="text-lg text-slate-600 leading-relaxed md:max-full">{project.aboutClient}</p>
              </div>
              <div id="requirements" className="scroll-mt-32">
                <h2 className="text-slate-700 font-heading text-md font-semibold uppercase tracking-[0.1em] mb-10">REQUIREMENTS:</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.businessRequirements?.map((req, j) => (
                    <li key={j}>
                      <Card className="flex items-start gap-4 rounded-2xl border-slate-100/50 bg-slate-50/50 p-6 text-lg text-slate-600 shadow-none">
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{req}</span>
                      </Card>
                    </li>
                  ))}
                </ul>
              </div>
              <div id="approach" className="scroll-mt-32">
                <h2 className="text-slate-700 font-heading text-md font-semibold uppercase tracking-[0.1em] mb-10">OUR APPROACH:</h2>
                <p className="text-lg text-slate-600 leading-relaxed md:max-w-2xl">{project.ourApproach}</p>
              </div>
              <div id="result" className="scroll-mt-32">
                <h2 className="text-slate-700 font-heading text-md font-semibold uppercase tracking-[0.1em] mb-10">THE RESULT:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.results.map((r) => (
                    <Card key={r} className="flex items-center gap-4 rounded-xl border-slate-100 bg-slate-50 p-6 shadow-none">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500/10">
                        <CheckCircle2 size={20} className="text-green-600" />
                      </div>
                      <span className="font-bold text-slate-900">{r}</span>
                    </Card>
                  ))}
                </div>
              </div>
              <div id="tech" className="scroll-mt-32">
                <h2 className="text-slate-700 font-heading text-md font-semibold uppercase tracking-[0.1em] mb-10">PROJECT DETAILS:</h2>
                <Card className="rounded-2xl border-slate-100 bg-slate-50 p-8 shadow-none">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Service</h4>
                      <p className="font-bold text-slate-900">{project.category}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Duration</h4>
                      <p className="font-bold text-slate-900">{project.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Team</h4>
                      <p className="font-bold text-slate-900">{project.team}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.slice(0, 3).map((t) => (
                          <Badge key={t} variant="secondary" className="rounded bg-primary/5 px-2 py-1 text-xs font-bold text-primary hover:bg-primary/10">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Recent Projects</h2>
              <p className="text-slate-500">Explore more of our digital solutions and success stories.</p>
            </div>
            <Button variant="link" className="hidden h-auto items-center gap-2 p-0 font-bold text-primary md:inline-flex" asChild>
              <Link href="/portfolio" className="group">
                View All <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
                <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${p.color} mb-6 overflow-hidden relative shadow-lg`}>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-heading font-black text-4xl uppercase tracking-tighter">
                    {p.category}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{p.title.split(" - ")[0]}</h3>
                <p className="text-slate-400 text-sm mt-1">{p.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold mb-6 text-white leading-tight">Ready to build your next <br />digital masterpiece?</h2>
            <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">Partner with us to create premium experiences that drive results and delight your users.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-bold shadow-xl shadow-primary/20">
                  Start Your Project <ArrowUpRight size={20} />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-bold border-white/10 bg-white/5 text-white hover:bg-white/10">
                   Our Portfolio
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </SitePage>
  );
};

export default PortfolioDetailPage;
