import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  { title: "How AI is Reshaping Enterprise Software in 2026", category: "AI", date: "Mar 28, 2026", readTime: "5 min", excerpt: "Explore the latest trends in AI-powered enterprise solutions and what they mean for your business." },
  { title: "Migrating to Microservices: A Practical Guide", category: "Engineering", date: "Mar 20, 2026", readTime: "8 min", excerpt: "Step-by-step strategies for decomposing monolithic applications into scalable microservices." },
  { title: "The Future of Cloud-Native Development", category: "Cloud", date: "Mar 15, 2026", readTime: "6 min", excerpt: "Kubernetes, serverless, and beyond — what the next wave of cloud infrastructure looks like." },
  { title: "Designing for Enterprise: UX Patterns That Work", category: "Design", date: "Mar 10, 2026", readTime: "4 min", excerpt: "Proven design patterns for building intuitive enterprise dashboards and tools." },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Blog</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              Insights & <span className="text-gradient">Ideas</span>
            </h1>
            <p className="text-muted-foreground text-lg">Thoughts on technology, engineering, and building great products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {posts.map((p) => (
              <div key={p.title} className="group p-6 rounded-xl border border-border bg-gradient-card hover-lift cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{p.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={10} /> {p.readTime}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  {p.title} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.excerpt}</p>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
