import SitePage from "@/components/layout/SitePage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Target, Award, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Mission Statement", description: "Revolutionizing the digital landscape by providing innovative and affordable solutions that exceed expectations." },
  { icon: Users, title: "Client Driven", description: "Our commitment to quality and client satisfaction drives our development process every step of the way." },
  { icon: Award, title: "Proven Track Record", description: "Exceptional results delivered through industry expertise, personalized attention, and innovative solutions." },
  { icon: Zap, title: "Innovative Solutions", description: "Leveraging the latest technologies to create cutting-edge websites and platforms that captivate your audience." },
];

const AboutPage = () => {
  return (
    <SitePage>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">About Us</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              Digitalizing your <span className="text-gradient">Dreams</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              DevStitch is an emerging custom software development company specializing in delivering comprehensive enterprise solutions. Since 2022, we have been helping businesses achieve their goals through innovative Ecommerce development, strategic consulting, and cutting-edge web and mobile app solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="rounded-xl border-border bg-gradient-card p-6 text-center shadow-sm hover-lift">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="hero" className="gap-2">
              Join Our Team <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </SitePage>
  );
};

export default AboutPage;
