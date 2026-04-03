import { Building2, Heart, ShoppingCart, GraduationCap, Plane, Factory } from "lucide-react";

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
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Industries</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-muted-foreground">
            Deep domain expertise across verticals that demand reliability, security, and scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-gradient-card hover-lift cursor-default text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ind.icon size={22} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
