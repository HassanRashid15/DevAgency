import { Star } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import BlurText from "@/components/animations/BlurText";
import ParallaxSection from "@/components/animations/ParallaxSection";

const testimonials = [
  {
    quote: "NexusTech transformed our legacy infrastructure into a modern cloud-native platform. The ROI was visible within the first quarter.",
    name: "Sarah Chen",
    role: "CTO, FinanceFlow",
  },
  {
    quote: "Their AI team delivered a recommendation engine that increased our conversion rate by 35%. Exceptional technical depth.",
    name: "Marcus Rivera",
    role: "VP Engineering, ShopScale",
  },
  {
    quote: "Professional, responsive, and deeply technical. They feel like an extension of our own engineering team.",
    name: "Priya Sharma",
    role: "Director of Product, MedConnect",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 section-dark relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm text-accent font-medium uppercase tracking-widest mb-3">Testimonials</p>
          </FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-white">
            <BlurText text="What Our Clients" delay={0.1} />
            {" "}
            <BlurText text="Say" delay={0.4} gradient />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.1 * i}>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover-lift transition-all duration-300 hover:border-primary/30 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 italic flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
