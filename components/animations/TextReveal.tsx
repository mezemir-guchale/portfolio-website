"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  /** "char" = letter-by-letter, "word" = word-by-word */
  mode?: "char" | "word";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  mode = "char",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const units = mode === "char" ? children.split("") : children.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * (mode === "char" ? 0.03 : 0.08),
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {unit === " " ? "\u00A0" : unit}
          {mode === "word" && i < units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
