"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedLineProps {
  className?: string;
  color?: string;
  direction?: "horizontal" | "vertical";
}

export default function AnimatedLine({
  className = "",
  color = "#14B8A6",
  direction = "horizontal",
}: AnimatedLineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ backgroundColor: color }}
      initial={
        direction === "horizontal"
          ? { width: 0, height: 1, opacity: 0 }
          : { width: 1, height: 0, opacity: 0 }
      }
      animate={
        isInView
          ? direction === "horizontal"
            ? { width: "100%", opacity: 1 }
            : { height: "100%", opacity: 1 }
          : {}
      }
      transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
    />
  );
}
