import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

const clients = [
  "Microsoft", "Google", "Amazon", "Salesforce", "Oracle", "IBM", "SAP", "Adobe",
];

const ClientsSection = () => {
  return (
    <section className="py-16 border-y border-border bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
            Trusted by industry leaders
          </p>
        </FadeIn>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
        >
          {[...clients, ...clients, ...clients, ...clients].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-8 md:mx-12 h-14 flex items-center justify-center text-muted-foreground/30 font-heading font-semibold text-lg hover:text-primary/60 transition-colors duration-300 cursor-default select-none whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
