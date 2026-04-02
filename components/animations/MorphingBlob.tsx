"use client";

import { motion } from "framer-motion";

interface MorphingBlobProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function MorphingBlob({
  color = "#7F1CFF",
  size = 300,
  className = "",
}: MorphingBlobProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      animate={{
        borderRadius: [
          "40% 60% 70% 30% / 40% 50% 60% 50%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "50% 40% 60% 50% / 30% 50% 70% 50%",
          "40% 60% 70% 30% / 40% 50% 60% 50%",
        ],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: `radial-gradient(circle, ${color}30 0%, ${color}05 70%)`,
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  );
}
