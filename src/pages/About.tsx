import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", description: "Every line of code serves a purpose — delivering measurable business value." },
  { icon: Users, title: "Client-Centric", description: "Your success is our KPI. We build partnerships, not just software." },
  { icon: Award, title: "Excellence", description: "We set the bar high and deliver enterprise-grade quality every time." },
  { icon: Zap, title: "Innovation", description: "Constantly pushing boundaries with emerging technologies and methodologies." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">About Us</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              Engineering the <span className="text-gradient">Digital Future</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded with a vision to bridge the gap between enterprise requirements and modern technology, NexusTech has grown into a trusted partner for 200+ organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl border border-border bg-gradient-card hover-lift text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="hero" className="gap-2">
              Join Our Team <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
