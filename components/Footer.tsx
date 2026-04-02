"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-[#070B14] border-t border-[#1E293B] mt-auto relative overflow-hidden">
      {/* Gradient accent line */}
      <motion.div
        className="h-px w-full bg-gradient-to-r from-[#14B8A6] via-[#00B4D8] to-[#22D3EE]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <ScrollReveal variant="fadeUp">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-3">
                <span className="text-[#14B8A6]">Mezemir</span>{" "}
                <span className="text-white">Guchale</span>
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Data Scientist & Financial Risk Analyst based in Hamburg, Germany.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                Navigation
              </h4>
              <div className="flex flex-col gap-2">
                {[
                  { href: "/projects", label: "Projects" },
                  { href: "/blog", label: "Blog" },
                  { href: "/experience", label: "Experience" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#94A3B8] text-sm hover:text-[#14B8A6] transition-colors hover:translate-x-1 inline-block w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                Connect
              </h4>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
                >
                  {personalInfo.email}
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#14B8A6] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#14B8A6] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-[#1E293B] mt-8 pt-6 text-center">
          <p className="text-[#94A3B8] text-xs">
            &copy; {new Date().getFullYear()} Mezemir Neway Guchale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
