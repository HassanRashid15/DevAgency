"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import FadeIn from "@/components/animations/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden pt-20 bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-12 right-[8%] w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[140px] animate-float opacity-50" />
        <div className="absolute -bottom-24 left-[3%] w-[34rem] h-[34rem] bg-accent/10 rounded-full blur-[140px] opacity-45" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[26rem] h-[26rem] bg-sky-300/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20 min-h-[75vh]">
          {/* Left Column: Content */}
          <motion.div className="flex-[1.2] text-left flex flex-col justify-center py-12 lg:pr-16" style={{ y: contentY, opacity }}>
            <FadeIn delay={0} direction="none">
              <div className="mb-6">
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 rounded-full border-primary/20 bg-white/90 px-4 py-2 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur hover:bg-white/90"
                >
                  <Sparkles size={14} className="text-primary" />
                  Trusted product and engineering partner
                </Badge>
              </div>
            </FadeIn>

            <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-[1.15] pb-1 mb-8 text-slate-900 tracking-tight">
              <span className="block">
                <SplitText text="Transform Your" splitBy="words" delay={0.2} />
              </span>
              <span className="block">
                <SplitText text="Business with" splitBy="words" delay={0.4} />
              </span>
              <span className="block">
                <SplitText text="AI-Powered Solutions" splitBy="words" delay={0.6} gradient />
              </span>
            </h1>

            <FadeIn delay={0.8} direction="up">
              <p className="text-base lg:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed">
                We craft high-converting websites, scalable applications, and AI-powered experiences with speed, clarity, and measurable impact.
              </p>
            </FadeIn>

            <FadeIn delay={0.9} direction="up">
              <div className="flex flex-wrap gap-3 mb-10">
                {["Fast delivery cycles", "Conversion-first UX", "Enterprise-ready architecture"].map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-white/90"
                  >
                    <CheckCircle2 size={14} className="text-primary" />
                    {item}
                  </Badge>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={1.0} direction="up">
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact-us">
                  <Button size="lg" className="group rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/25 border-0 px-8 py-6 text-base font-bold">
                    Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button variant="outline" size="lg" className="rounded-full border-slate-300 bg-white/70 text-slate-700 hover:bg-white px-8 py-6 text-base font-bold">
                    Book a Strategy Call
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </motion.div>

          {/* Right Column: Showcase Card */}
          <motion.div 
            className="flex-1 relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full max-w-2xl group">
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-3xl opacity-80 -z-10" />
              <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-md group-hover:-translate-y-1 transition-all duration-700 ease-out">
                <img 
                  src="/assets/hero-bg.jpg" 
                  alt="Digital product delivery illustration"
                  className="w-full h-auto rounded-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                />
              </div>
              <Card className="absolute -bottom-6 -left-4 gap-0 rounded-2xl border-slate-200/70 bg-white/90 px-4 py-3 shadow-lg">
                <p className="text-xs text-slate-500">Average delivery sprint</p>
                <p className="text-xl font-bold text-slate-900">2-3 weeks</p>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <FadeIn delay={1.1} direction="up">
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-slate-100">
            {[
              { value: "200+", label: "Clients Served" },
              { value: "500+", label: "Projects Delivered" },
              { value: "50+", label: "Team Members" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-3xl lg:text-4xl font-heading font-bold bg-gradient-to-r from-[#1E90FF] to-[#00D1FF] bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
