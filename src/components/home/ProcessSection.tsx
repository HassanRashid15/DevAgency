const steps = [
  { number: "01", title: "Discovery", description: "Deep-dive into your business goals, challenges, and technical requirements." },
  { number: "02", title: "Strategy", description: "Architecture planning, technology selection, and project roadmap creation." },
  { number: "03", title: "Development", description: "Agile sprints with continuous integration, testing, and stakeholder demos." },
  { number: "04", title: "Launch & Scale", description: "Production deployment, monitoring setup, and ongoing optimization." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground">
            A proven methodology refined across 500+ projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="p-6 rounded-xl border border-border bg-gradient-card">
                <span className="text-4xl font-heading font-bold text-gradient opacity-60">{step.number}</span>
                <h3 className="font-heading font-semibold text-lg mt-3 mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
