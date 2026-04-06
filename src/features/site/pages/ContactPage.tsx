"use client";

import SitePage from "@/components/layout/SitePage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, Clock, Globe, ArrowRight, Sparkles, MapPin } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SplitText from "@/components/animations/SplitText";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <SitePage className="bg-white">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-32 right-[10%] w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[140px] opacity-50" />
        <div className="absolute bottom-32 left-[5%] w-[25rem] h-[25rem] bg-accent/10 rounded-full blur-[120px] opacity-40" />
      </div>

      <section className="relative z-10 pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto mb-20">
            <FadeIn delay={0}>
              <Badge
                variant="outline"
                className="mb-6 inline-flex items-center gap-2 rounded-full border-primary/20 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-primary shadow-sm backdrop-blur-sm hover:bg-white/90"
              >
                <Sparkles size={14} />
                Get in Touch
              </Badge>
            </FadeIn>

            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight leading-[1]">
              <SplitText text="Contact" splitBy="words" delay={0.2} /> <SplitText text="Us" splitBy="words" delay={0.4} gradient />
            </h1>

            <FadeIn delay={0.6}>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl text-start leading-relaxed font-medium">
                We provide scalable services that prioritize transparency, honesty, and building trust with our clients. Our solutions empower you to make informed decisions and achieve your business goals.
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="flex flex-wrap items-start justify-start gap-4 mt-10">
                <Link href="/contact-us">
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/25 border-0 px-8 py-6 text-base font-bold shadow-lg">
                    Free Tech Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="rounded-full border-slate-300 bg-white/70 text-slate-700 hover:bg-white px-8 py-6 text-base font-bold">
                    Work Portfolio
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-5 space-y-8">
              <FadeIn delay={0.7} direction="left">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-8">
                  {[
                    {
                      icon: Mail,
                      label: "Email us at",
                      value: "inquiry@devstitch.com",
                      description: "Our team usually responds within 12 hours.",
                      color: "text-blue-500",
                      bg: "bg-blue-50/50",
                    },
                    {
                      icon: MessageSquare,
                      label: "Quick chat",
                      value: "Schedule a Call",
                      description: "Book a 15-minute discovery session with our experts.",
                      color: "text-purple-500",
                      bg: "bg-purple-50/50",
                    },
                    {
                      icon: MapPin,
                      label: "Visit us",
                      value: "Global Operations",
                      description: "Serving clients worldwide with a remote-first mindset.",
                      color: "text-emerald-500",
                      bg: "bg-emerald-50/50",
                    },
                  ].map((item) => (
                    <motion.div key={item.label} whileHover={{ y: -5 }}>
                      <Card className="group rounded-[2rem] border-slate-100 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
                        <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} transition-transform group-hover:scale-110`}>
                          <item.icon size={24} className={item.color} />
                        </div>
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                        <p className="mb-2 text-lg font-bold text-slate-900">{item.value}</p>
                        <p className="text-sm font-medium leading-relaxed text-slate-500">{item.description}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn delay={0.8} direction="up">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative p-8 md:p-12 rounded-[2.5rem] border border-slate-100 bg-white/80 backdrop-blur-xl shadow-2xl overflow-hidden">
                    <div className="mb-10 text-center lg:text-left">
                      <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Project Details</h3>
                      <p className="text-slate-500 font-medium">Tell us more about what you're looking to build.</p>
                    </div>

                    <ContactForm />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Response Within", value: "12 Hours", icon: Clock },
              { label: "Global Presence", value: "24/7 Support", icon: Globe },
              { label: "Secure Data", value: "NDAs Available", icon: Sparkles },
              { label: "Industry Focus", value: "AI & Tech", icon: ArrowRight },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                  <stat.icon size={18} className="text-primary" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</span>
                <span className="text-lg font-bold text-slate-900">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
};

export default ContactPage;
