"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface GlitchTextProps {
  children: string;
  className?: string;
}

export default function GlitchText({ children, className = "" }: GlitchTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {/* Main text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.1, delay: 0.5 }}
      >
        {children}
      </motion.span>

      {/* Glitch layers */}
      {isInView && (
        <>
          <motion.span
            className="absolute inset-0 text-[#14B8A6] select-none"
            aria-hidden
            animate={{
              x: [0, -3, 3, -1, 0],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            style={{ clipPath: "inset(20% 0 30% 0)" }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-[#00B4D8] select-none"
            aria-hidden
            animate={{
              x: [0, 3, -3, 1, 0],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            style={{ clipPath: "inset(50% 0 10% 0)" }}
          >
            {children}
          </motion.span>
        </>
      )}
    </span>
  );
}
