"use client";

import SitePage from "@/components/layout/SitePage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, MessageSquare, Twitter, Linkedin, Facebook } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import { useParams } from "next/navigation";

const posts = [
  {
    slug: "ai-reshaping-enterprise-software-2026",
    title: "How AI is Reshaping Enterprise Software in 2026",
    category: "AI & Innovation",
    date: "Mar 28, 2026",
    readTime: "12 min",
    author: "Alex Rivera",
    role: "Head of AI Strategy",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    content: `
      <p>The enterprise software landscape is undergoing its most significant transformation since the move to the cloud. Artificial Intelligence is no longer just a feature tucked away in a sub-menu; it's becoming the very foundation on which software is built. In 2026, we're seeing the emergence of "AI-Native" enterprises that leverage generative and predictive models at every level of their operations.</p>
      <h2>The Shift to Agentic Workflows</h2>
      <p>Traditional software depends on human-triggered actions. You click a button, the software performs a task. AI-native software operates differently. We're moving towards agentic workflows where software agents understand goals, plan steps, and execute tasks autonomously while keeping humans in the loop for critical decisions.</p>
      <blockquote>
        "The goal isn't just to automate tasks, but to augment human capability. We're building brains, not just tools."
      </blockquote>
      <h2>Predictive Analytics in Real-Time</h2>
      <p>Data is the new oil, but only if you can refine it instantly. Companies are now using real-time predictive models to anticipate supply chain disruptions, customer churn, and market shifts before they happen. This proactive approach is saving enterprises millions in lost revenue and operational inefficiencies.</p>
      <h2>Conclusion</h2>
      <p>As we move further into 2026, the gap between AI-driven companies and laggards will only widen. Investing in robust AI infrastructure and fostering a culture of innovation is no longer optional—it's the only way to survive and thrive in the modern economy.</p>
    `,
  },
  {
    slug: "migrating-to-microservices-practical-guide",
    title: "Migrating to Microservices: A Practical Guide",
    category: "Engineering",
    date: "Mar 20, 2026",
    readTime: "8 min",
    author: "Sarah Chen",
    role: "Senior Solutions Architect",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    content: "<p>Detailed content about microservices migration...</p>",
  },
  {
    slug: "future-of-cloud-native-development",
    title: "The Future of Cloud-Native Development",
    category: "Cloud",
    date: "Mar 15, 2026",
    readTime: "6 min",
    author: "Michael Smith",
    role: "Cloud Lead",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    content: "<p>Detailed content about cloud-native development...</p>",
  },
];

const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug) || posts[0];

  return (
    <SitePage className="bg-white">
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <FadeIn delay={0.2}>
                <Badge variant="secondary" className="rounded-full bg-primary/5 text-primary border-0 font-bold px-4 py-1.5 text-xs mb-6">
                  {post.category}
                </Badge>
              </FadeIn>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                {post.title}
              </h1>

              <FadeIn delay={0.4}>
                <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold shadow-sm">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{post.author}</p>
                      <p className="text-xs font-medium text-slate-400">{post.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <Calendar size={14} className="text-primary" /> {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <Clock size={14} className="text-primary" /> {post.readTime}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.6}>
              <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8">
                <FadeIn delay={0.8}>
                  <article className="prose prose-lg max-w-none prose-slate prose-headings:font-heading prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-600 prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-slate-50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:font-medium prose-blockquote:text-slate-900">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </article>
                </FadeIn>

                <FadeIn delay={1.0}>
                  <div className="mt-16 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <h4 className="font-heading text-xl font-bold text-slate-900">Found this helpful? Share it.</h4>
                    <div className="flex items-center gap-3">
                      {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                        <Button key={i} variant="outline" size="icon" className="rounded-full border-slate-200 hover:border-primary hover:text-primary transition-all">
                          <Icon size={18} />
                        </Button>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>

              <aside className="lg:col-span-4 space-y-12">
                <FadeIn delay={1.2}>
                  <div className="sticky top-32 space-y-12">
                    <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                      <MessageSquare className="text-primary mb-6" size={32} />
                      <h4 className="font-heading text-xl font-bold mb-4">Subscribe for updates</h4>
                      <p className="text-slate-400 text-sm mb-6 font-medium">Join 5,000+ engineers receiving weekly insights.</p>
                      <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                        Get Insights
                      </Button>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg font-bold text-slate-900 mb-6">Related Reads</h4>
                      <div className="space-y-6">
                        {posts
                          .filter((p) => p.slug !== slug)
                          .slice(0, 2)
                          .map((p) => (
                            <Link href={`/blogs/${p.slug}`} key={p.slug} className="group block">
                              <Badge className="mb-2 bg-slate-50 text-slate-500 border-0 text-[10px] uppercase font-bold tracking-wider">
                                {p.category}
                              </Badge>
                              <h5 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight line-clamp-2 mb-2">
                                {p.title}
                              </h5>
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{p.date}</span>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </SitePage>
  );
};

export default BlogDetailPage;
