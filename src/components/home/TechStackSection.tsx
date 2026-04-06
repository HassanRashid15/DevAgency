"use client";

import { Card } from "@/components/ui/card";
import FadeIn from "@/components/animations/FadeIn";
import BlurText from "@/components/animations/BlurText";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

const TechStackSection = () => {
  const row1 = technologies.slice(0, 5);
  const row2 = technologies.slice(5, 9);
  const row3 = technologies.slice(9, 14);
  const row4 = technologies.slice(14, 18);

  return (
    <section className="py-24 bg-background overflow-hidden text-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Our Tech Stack</p>
          </FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
            <BlurText text="Technologies We" delay={0.1} />
            {" "}
            <BlurText text="Use" delay={0.3} gradient />
          </h2>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground">
              We leverage cutting-edge tools and frameworks to build scalable, high-performance solutions.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Row 1 - scroll left */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          className="flex w-max gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
        >
          {[...row1, ...row1, ...row1, ...row1].map((tech, i) => (
            <Card
              key={`${tech.name}-${i}`}
              className="group flex flex-shrink-0 cursor-default items-center gap-3 rounded-2xl border-border bg-card px-6 py-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover-lift"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300" />
              <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">{tech.name}</span>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - scroll right */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          className="flex w-max gap-6 px-3"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
        >
          {[...row2, ...row2, ...row2, ...row2].map((tech, i) => (
            <Card
              key={`${tech.name}-${i}`}
              className="group flex flex-shrink-0 cursor-default items-center gap-3 rounded-2xl border-border bg-card px-6 py-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover-lift"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300" />
              <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">{tech.name}</span>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Row 3 - scroll left */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          className="flex w-max gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 32, ease: "linear" } }}
        >
          {[...row3, ...row3, ...row3, ...row3].map((tech, i) => (
            <Card
              key={`${tech.name}-${i}`}
              className="group flex flex-shrink-0 cursor-default items-center gap-3 rounded-2xl border-border bg-card px-6 py-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover-lift"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300" />
              <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">{tech.name}</span>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Row 4 - scroll right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          className="flex w-max gap-6 px-3"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 38, ease: "linear" } }}
        >
          {[...row4, ...row4, ...row4, ...row4].map((tech, i) => (
            <Card
              key={`${tech.name}-${i}`}
              className="group flex flex-shrink-0 cursor-default items-center gap-3 rounded-2xl border-border bg-card px-6 py-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover-lift"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300" />
              <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">{tech.name}</span>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
