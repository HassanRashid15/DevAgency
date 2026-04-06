"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}

const BlurText = ({ text, className = "", delay = 0, gradient = false }: BlurTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", scale: 0.95 }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)", scale: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={`inline-block mr-[0.3em] ${gradient ? "text-gradient" : ""}`}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
