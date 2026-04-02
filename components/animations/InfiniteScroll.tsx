"use client";

import { motion } from "framer-motion";

interface InfiniteScrollProps {
  items: string[];
  speed?: number;
  className?: string;
  direction?: "left" | "right";
}

export default function InfiniteScroll({
  items,
  speed = 30,
  className = "",
  direction = "left",
}: InfiniteScrollProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex gap-6"
        animate={{ x: direction === "left" ? [0, "-50%"] : ["-50%", 0] }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#111827] border border-[#1E293B] rounded-full text-sm text-[#CBD5E1] whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
