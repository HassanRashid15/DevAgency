import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: "chars" | "words";
  as?: React.ElementType;
}

const SplitText = ({ text, className = "", delay = 0, splitBy = "chars", as: Tag = "span" }: SplitTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const items = splitBy === "chars" ? text.split("") : text.split(" ");

  return (
    <Tag ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * (splitBy === "chars" ? 0.03 : 0.08),
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {item === " " || splitBy === "words" ? (
            <>{item}{splitBy === "words" && i < items.length - 1 ? "\u00A0" : ""}</>
          ) : (
            item
          )}
        </motion.span>
      ))}
    </Tag>
  );
};

export default SplitText;
