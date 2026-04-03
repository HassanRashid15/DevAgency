import FadeIn from "@/components/animations/FadeIn";

const clients = [
  "Microsoft", "Google", "Amazon", "Salesforce", "Oracle", "IBM", "SAP", "Adobe",
];

const ClientsSection = () => {
  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="container mx-auto px-4">
        <FadeIn>
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
            Trusted by industry leaders
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {clients.map((name) => (
              <div
                key={name}
                className="text-muted-foreground/30 font-heading font-semibold text-lg hover:text-primary/60 transition-colors duration-300 cursor-default select-none"
              >
                {name}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ClientsSection;
