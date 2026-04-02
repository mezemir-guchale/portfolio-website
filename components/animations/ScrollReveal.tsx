"use client";

import { motion, useInView, type Variant } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealVariant =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "scale"
  | "flip"
  | "blur"
  | "slideRotate";

const variants: Record<RevealVariant, { hidden: Variant; visible: Variant }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  flip: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(20px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  slideRotate: {
    hidden: { opacity: 0, x: -60, rotate: -5 },
    visible: { opacity: 1, x: 0, rotate: 0 },
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
