"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#1E293B]"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold relative group">
          <motion.span
            className="text-[#14B8A6] inline-block"
            whileHover={{ rotate: -10, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            M
          </motion.span>
          <motion.span
            className="text-white inline-block"
            whileHover={{ rotate: 10, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            G
          </motion.span>
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#14B8A6] to-[#00B4D8]"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium group"
              >
                <motion.span
                  className={`transition-colors duration-200 ${
                    isActive ? "text-[#14B8A6]" : "text-[#94A3B8] group-hover:text-white"
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {link.label}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#14B8A6]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white relative w-6 h-6"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="absolute left-0 w-6 h-0.5 bg-white block"
            animate={mobileOpen ? { rotate: 45, top: 11 } : { rotate: 0, top: 4 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute left-0 w-6 h-0.5 bg-white block top-[11px]"
            animate={mobileOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute left-0 w-6 h-0.5 bg-white block"
            animate={mobileOpen ? { rotate: -45, top: 11 } : { rotate: 0, top: 18 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="md:hidden bg-[#0B0F19] border-t border-[#1E293B] overflow-hidden"
          >
            <div className="px-6 py-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 text-sm font-medium ${
                      pathname === link.href ? "text-[#14B8A6]" : "text-[#94A3B8]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
