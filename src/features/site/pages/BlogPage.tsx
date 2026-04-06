"use client";

import SitePage from "@/components/layout/SitePage";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight, Sparkles, User, Search } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SplitText from "@/components/animations/SplitText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const posts = [
  {
    slug: "ai-reshaping-enterprise-software-2026",
    title: "How AI is Reshaping Enterprise Software in 2026",
    category: "AI & Innovation",
    date: "Mar 28, 2026",
    readTime: "5 min",
    author: "Alex Rivera",
    excerpt:
      "Explore the latest trends in AI-powered enterprise solutions and what they mean for your business. From automated workflows to predictive analytics, AI is no longer a luxury but a core necessity.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    featured: true,
  },
  {
    slug: "migrating-to-microservices-practical-guide",
    title: "Migrating to Microservices: A Practical Guide",
    category: "Engineering",
    date: "Mar 20, 2026",
    readTime: "8 min",
    author: "Sarah Chen",
    excerpt:
      "Step-by-step strategies for decomposing monolithic applications into scalable, resilient microservices without disrupting your business operations.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    featured: false,
  },
  {
    slug: "future-of-cloud-native-development",
    title: "The Future of Cloud-Native Development",
    category: "Cloud",
    date: "Mar 15, 2026",
    readTime: "6 min",
    author: "Michael Smith",
    excerpt:
      "Kubernetes, serverless, and beyond — what the next wave of cloud infrastructure looks like and how to prepare your team for the shift.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    featured: false,
  },
  {
    slug: "designing-for-enterprise-ux-patterns",
    title: "Designing for Enterprise: UX Patterns That Work",
    category: "Design",
    date: "Mar 10, 2026",
    readTime: "4 min",
    author: "Elena Petrova",
    excerpt:
      "Proven design patterns for building intuitive enterprise dashboards and tools that users actually enjoy using every day.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000",
    featured: false,
  },
  {
    slug: "securing-your-production-environment",
    title: "Securing Your Production Environment",
    category: "Security",
    date: "Mar 05, 2026",
    readTime: "7 min",
    author: "David Vark",
    excerpt:
      "Best practices for implementing a Zero Trust architecture and protecting your sensitive data in an increasingly complex threat landscape.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    featured: false,
  },
];

const BlogPage = () => {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <SitePage className="bg-white">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2" />
      </div>

      <section className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <FadeIn delay={0}>
              <Badge
                variant="outline"
                className="mb-6 inline-flex items-center gap-2 rounded-full border-primary/20 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-primary shadow-sm"
              >
                <Sparkles size={14} />
                DevStitch Insights
              </Badge>
            </FadeIn>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-8 text-slate-900 tracking-tight leading-[1.1]">
              <SplitText text="Insights" splitBy="words" delay={0.2} />{" "}
              <span className="text-slate-400">&</span>{" "}
              <SplitText text="Innovation" splitBy="words" delay={0.4} gradient />
            </h1>
            <FadeIn delay={0.6}>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                Thoughts, strategies, and deep dives into the technologies shaping the future of enterprise software.
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="mt-12 max-w-md mx-auto relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                <Input
                  placeholder="Search articles..."
                  className="pl-12 h-14 rounded-full border-slate-100 bg-slate-50 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                />
              </div>
            </FadeIn>
          </div>

          {featuredPost && (
            <FadeIn delay={1.0}>
              <div className="max-w-7xl mx-auto mb-20">
                <Card className="overflow-hidden border-0 bg-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] rounded-[2.5rem] group">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <Link href={`/blogs/${featuredPost.slug}`} className="relative h-[300px] lg:h-full overflow-hidden block">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-white/90 text-primary hover:bg-white text-xs font-bold px-4 py-2 rounded-full border-0 backdrop-blur-sm shadow-lg">
                          Featured Article
                        </Badge>
                      </div>
                    </Link>
                    <div className="p-8 lg:p-14 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <Badge variant="secondary" className="rounded-full bg-primary/5 text-primary border-0 font-bold px-4 py-1.5 text-xs">
                          {featuredPost.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                          <Clock size={14} /> {featuredPost.readTime}
                        </div>
                      </div>
                      <Link href={`/blogs/${featuredPost.slug}`}>
                        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors leading-[1.2]">
                          {featuredPost.title}
                        </h2>
                      </Link>
                      <p className="text-lg text-slate-500 mb-8 leading-relaxed line-clamp-3">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold">
                            {featuredPost.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{featuredPost.author}</p>
                            <p className="text-xs font-medium text-slate-400">{featuredPost.date}</p>
                          </div>
                        </div>
                        <Link href={`/blogs/${featuredPost.slug}`}>
                          <Button variant="ghost" className="rounded-full gap-2 font-bold text-primary hover:bg-primary/5 px-6">
                            Read More <ArrowRight size={18} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </FadeIn>
          )}

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((p, i) => (
                <FadeIn key={p.title} delay={0.2 * i}>
                  <Card className="flex flex-col h-full border-slate-100 bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-500 rounded-[2rem] overflow-hidden group hover:-translate-y-2">
                    <Link href={`/blogs/${p.slug}`} className="relative h-48 overflow-hidden block">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <CardContent className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="rounded-full bg-slate-50 text-slate-500 border-0 font-bold px-3 py-1 text-[10px] uppercase tracking-wider">
                          {p.category}
                        </Badge>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{p.readTime}</span>
                      </div>
                      <Link href={`/blogs/${p.slug}`}>
                        <h3 className="font-heading text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {p.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-slate-500 mb-6 line-clamp-3 font-medium leading-relaxed">{p.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                        <div className="flex items-center gap-2">
                          <User size={14} className="text-primary" />
                          <span className="text-xs font-bold text-slate-900">{p.author}</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{p.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto rounded-[3rem] bg-slate-900 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />

            <FadeIn>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">Stay ahead of the curve</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto font-medium">
                Subscribe to our newsletter for the latest insights on AI, engineering, and digital transformation.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 rounded-full bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-primary focus-visible:border-primary px-8"
                />
                <Button className="h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-xl shadow-primary/20">
                  Subscribe
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </SitePage>
  );
};

export default BlogPage;
