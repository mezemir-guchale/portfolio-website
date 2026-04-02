"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    // Detect hoverable elements
    const observer = new MutationObserver(() => {
      const hoverables = document.querySelectorAll("a, button, [role='button'], .hoverable");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial pass
    const hoverables = document.querySelectorAll("a, button, [role='button'], .hoverable");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#22D3EE] rounded-full pointer-events-none mix-blend-difference z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: 10,
          translateY: 10,
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none border border-[#22D3EE]/50 mix-blend-difference z-[9999]"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          borderColor: isHovering ? "#22D3EE" : "rgba(34,211,238,0.3)",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
