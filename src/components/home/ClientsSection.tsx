const clients = [
  "Microsoft", "Google", "Amazon", "Salesforce", "Oracle", "IBM", "SAP", "Adobe",
];

const ClientsSection = () => {
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {clients.map((name) => (
            <div
              key={name}
              className="text-muted-foreground/40 font-heading font-semibold text-lg hover:text-muted-foreground transition-colors duration-300 cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
