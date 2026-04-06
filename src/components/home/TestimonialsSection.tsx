"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import BlurText from "@/components/animations/BlurText";
import ParallaxSection from "@/components/animations/ParallaxSection";

const testimonials = [
  {
    quote: "DevStitch’s team has successfully customized a theme, maintained the site, and worked with our backend team to integrate data flows. They truly listened to our needs.",
    name: "Eugin Song",
    role: "MD, RentLondonFlat.com",
    avatar: "/images/testimonials/eugin-song.jpg",
  },
  {
    quote: "DevStitch delivered a bug-free website on time and improved its frontend. Their commitment, technical expertise, and transparency impressed us.",
    name: "Dmitrii Vorontsov",
    role: "Owner, Volumenzeit",
    avatar: "/images/testimonials/dmitrii-vorontsov.jpg",
  },
  {
    quote: "DevStitch delivered a website that ran smoothly with optimized loading times and seamless data synchronization with Salesforce. They are highly reliable.",
    name: "Nidhi Agarwal-Bhardwaj",
    role: "Marketing Director",
    avatar: "/images/testimonials/nidhi-agarwal-bhardwaj.jpg",
  },
  {
    quote: "The client was satisfied with the website’s visuals, aesthetics, and functionality. They went above and beyond to meet our satisfaction.",
    name: "Mohammad Khalid",
    role: "Executive, Kalgreens",
    avatar: "/images/testimonials/mohammad-khalid.jpg",
  },
  {
    quote: "Integration worked seamlessly. The team delivered as scheduled and responded to all our concerns. They were very easy to work with.",
    name: "Nicole Johnson",
    role: "President, The Baby Sleep Site",
    avatar: "/images/testimonials/nicole-johnson.jpg",
  },
  {
    quote: "Creative execution, clear communication, and fast turnaround. Their team helped us launch with confidence and measurable business impact.",
    name: "Natalie Martinez",
    role: "Co-founder, Growth Studio",
    avatar: "/images/testimonials/natalie-martinez.jpg",
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[number] }) => (
  <Card className="flex h-[280px] w-[85vw] flex-col gap-0 rounded-2xl border-slate-200/80 bg-white p-7 shadow-sm sm:h-[300px] sm:w-[430px] lg:w-[380px]">
    <Quote size={22} className="mb-4 text-primary" />
    <p className="mb-8 flex-1 text-[1.03rem] font-medium leading-relaxed text-slate-800">{t.quote}</p>
    <div className="flex items-center gap-3">
      <Avatar className="h-10 w-10 border border-slate-200">
        <AvatarImage src={t.avatar} alt={t.name} />
        <AvatarFallback className="bg-gradient-primary font-heading text-sm font-bold text-primary-foreground">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="text-base font-semibold leading-tight text-slate-900">{t.name}</p>
        <p className="text-xs text-slate-500">{t.role}</p>
      </div>
    </div>
  </Card>
);

const TestimonialsSection = () => {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      <ParallaxSection speed={0.15} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm text-primary font-semibold uppercase tracking-widest mb-3">Testimonials</p>
          </FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
            <BlurText text="What Our Clients" delay={0.1} />
            {" "}
            <BlurText text="Say" delay={0.4} gradient />
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Honest feedback from teams we partnered with to build and scale digital products.
          </p>
        </div>

        <FadeIn delay={0.2} direction="up">
          <div
            className="space-y-6"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="overflow-hidden">
              <div className="flex w-max gap-6 animate-marquee [animation-duration:34s]">
                {[...firstRow, ...firstRow].map((t, i) => (
                  <TestimonialCard key={`${t.name}-row1-${i}`} t={t} />
                ))}
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="flex w-max gap-6 animate-marquee-reverse [animation-duration:36s]">
                {[...secondRow, ...secondRow].map((t, i) => (
                  <TestimonialCard key={`${t.name}-row2-${i}`} t={t} />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TestimonialsSection;
