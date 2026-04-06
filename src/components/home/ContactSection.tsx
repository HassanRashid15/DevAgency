"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SplitText from "@/components/animations/SplitText";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-[5%] w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-1/4 left-[5%] w-[25rem] h-[25rem] bg-accent/5 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column: Content */}
          <div className="lg:col-span-5">
              <FadeIn delay={0.8}>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-primary/20 text-primary hover:bg-primary/5 hover:text-primary px-8 font-bold gap-2 mb-4"
              >
             
                Any Query 
              </Button>
            </FadeIn>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight leading-[1.1]">
              <SplitText text="Let's talk about" splitBy="words" delay={0.2} /> <br />
              <SplitText text="your project" splitBy="words" delay={0.4} gradient />
            </h2>
            
            <FadeIn delay={0.6}>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                We provide scalable services that prioritize transparency, honesty, and building trust with our clients. Our solutions empower you to make informed decisions and achieve your business goals.
              </p>
            </FadeIn>

        
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.4} direction="up">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[2.5rem] blur opacity-50"></div>
                <div className="relative p-8 md:p-12 rounded-[2.5rem] border border-slate-100 bg-white shadow-2xl overflow-hidden">
                  <div className="mb-10">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                      Ready to collaborate? Reach out to us. We're eager to learn more about your business and tailor our services to your unique needs.
                    </h3>
                  </div>
                  
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
