import { Building2, Heart, ShoppingCart, GraduationCap, Plane, Factory } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import BlurText from "@/components/animations/BlurText";
import ParallaxSection from "@/components/animations/ParallaxSection";

const industries = [
  { icon: Building2, label: "Banking & Finance" },
  { icon: Heart, label: "Healthcare" },
  { icon: ShoppingCart, label: "Retail & E-Commerce" },
  { icon: GraduationCap, label: "Education" },
  { icon: Plane, label: "Travel & Logistics" },
  { icon: Factory, label: "Manufacturing" },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 section-dark relative overflow-hidden">
      <ParallaxSection speed={0.2} className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm text-accent font-medium uppercase tracking-widest mb-3">Industries</p>
          </FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-white">
            <BlurText text="Industries We" delay={0.1} />
            {" "}
            <BlurText text="Serve" delay={0.3} gradient />
          </h2>
          <FadeIn delay={0.2}>
            <p className="text-slate-400">
              Deep domain expertise across verticals that demand reliability, security, and scale.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <FadeIn key={ind.label} delay={0.08 * i}>
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover-lift cursor-default text-center group transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.08]">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                  <ind.icon size={24} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-white">{ind.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
