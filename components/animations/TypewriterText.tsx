"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export default function TypewriterText({
  texts,
  className = "",
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
}: TypewriterTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const current = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && display === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && display === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplay(
            isDeleting
              ? current.substring(0, display.length - 1)
              : current.substring(0, display.length + 1)
          );
        },
        isDeleting ? deleteSpeed : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, textIndex, texts, isInView, speed, deleteSpeed, pauseTime]);

  return (
    <span ref={ref} className={className}>
      {display}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-[#FFE834] ml-1 align-middle"
      />
    </span>
  );
}
