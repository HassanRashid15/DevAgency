import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const positions = [
  { title: "Senior Full-Stack Engineer", location: "Remote", type: "Full-time", department: "Engineering" },
  { title: "AI/ML Engineer", location: "San Francisco, CA", type: "Full-time", department: "AI Lab" },
  { title: "DevOps Engineer", location: "Remote", type: "Full-time", department: "Infrastructure" },
  { title: "UX Designer", location: "New York, NY", type: "Full-time", department: "Design" },
  { title: "Project Manager", location: "Remote", type: "Full-time", department: "Operations" },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Careers</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              Build the <span className="text-gradient">Future With Us</span>
            </h1>
            <p className="text-muted-foreground text-lg">Join a team of engineers, designers, and strategists shaping tomorrow's technology.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {positions.map((p) => (
              <div key={p.title} className="group p-6 rounded-xl border border-border bg-gradient-card hover-lift flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {p.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {p.type}</span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">{p.department}</span>
                  </div>
                </div>
                <Button variant="hero-outline" size="sm" className="gap-1 shrink-0">
                  Apply <ArrowRight size={14} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careers;
