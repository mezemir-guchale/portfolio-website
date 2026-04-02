"use client";

import { motion } from "framer-motion";

interface Orb {
  color: string;
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
}

const orbs: Orb[] = [
  { color: "#14B8A6", size: 400, x: "20%", y: "20%", delay: 0, duration: 20 },
  { color: "#00B4D8", size: 350, x: "70%", y: "60%", delay: 2, duration: 25 },
  { color: "#22D3EE", size: 200, x: "80%", y: "15%", delay: 4, duration: 18 },
  { color: "#14B8A6", size: 300, x: "10%", y: "70%", delay: 1, duration: 22 },
  { color: "#00B4D8", size: 250, x: "50%", y: "40%", delay: 3, duration: 15 },
];

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}20 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 30, -20, 40, -30, 0],
            y: [0, -40, 20, -30, 40, 0],
            scale: [1, 1.2, 0.9, 1.1, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
