"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import TiltCard from "@/components/animations/TiltCard";
import MagneticButton from "@/components/animations/MagneticButton";
import MorphingBlob from "@/components/animations/MorphingBlob";
import GlitchText from "@/components/animations/GlitchText";
import ScrollProgress from "@/components/animations/ScrollProgress";

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  phone: string;
  summary: string;
}

export default function ContactClient({ personalInfo }: { personalInfo: PersonalInfo }) {
  return (
    <>
      <ScrollProgress />
      <main className="pt-28 pb-20 px-6 relative overflow-hidden">
        <MorphingBlob color="#14B8A6" size={400} className="-top-40 -right-40" />
        <MorphingBlob color="#00B4D8" size={300} className="bottom-0 -left-40" />

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal variant="blur">
            <SectionHeading
              accent="Contact"
              title="Get in Touch"
              subtitle="I'm actively looking for opportunities in data science, risk analytics, and fintech. Let's connect."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact cards */}
            <StaggerContainer className="flex flex-col gap-6" staggerDelay={0.12}>
              {/* Email */}
              <StaggerItem>
                <a href={`mailto:${personalInfo.email}`} className="group bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#22D3EE]/50 transition-all duration-300 block">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-[#22D3EE]/10 rounded-lg flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </motion.div>
                    <div>
                      <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">Email</p>
                      <p className="text-white font-semibold group-hover:text-[#22D3EE] transition-colors">
                        {personalInfo.email}
                      </p>
                    </div>
                  </div>
                </a>
              </StaggerItem>

              {/* LinkedIn */}
              <StaggerItem>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="group bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#14B8A6]/50 transition-all duration-300 block">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-[#14B8A6]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </motion.div>
                    <div>
                      <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">LinkedIn</p>
                      <p className="text-white font-semibold group-hover:text-[#14B8A6] transition-colors">
                        linkedin.com/in/mezemir-guchale
                      </p>
                    </div>
                  </div>
                </a>
              </StaggerItem>

              {/* GitHub */}
              <StaggerItem>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="group bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#00B4D8]/50 transition-all duration-300 block">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-[#00B4D8]/10 rounded-lg flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-[#00B4D8]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.div>
                    <div>
                      <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">GitHub</p>
                      <p className="text-white font-semibold group-hover:text-[#00B4D8] transition-colors">
                        github.com/mezemir-guchale
                      </p>
                    </div>
                  </div>
                </a>
              </StaggerItem>

              {/* Location */}
              <StaggerItem>
                <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-12 h-12 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-[#14B8A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </motion.div>
                    <div>
                      <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">Location</p>
                      <p className="text-white font-semibold">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Right side */}
            <div className="flex flex-col gap-6">
              <ScrollReveal variant="fadeRight" delay={0.2}>
                <TiltCard tiltAmount={5}>
                  <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-4">
                      <GlitchText>Open to Opportunities</GlitchText>
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                      I bring 12+ years of finance expertise combined with modern data science skills.
                      I&apos;m particularly interested in roles that leverage my unique background:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Risk Analytics & Compliance Analytics",
                        "Data Scientist (Fintech / Banking)",
                        "AML / Fraud Analytics Specialist",
                        "Business Intelligence Analyst",
                        "Financial Data Analyst",
                      ].map((role, i) => (
                        <motion.li
                          key={role}
                          className="flex items-center gap-3 text-sm"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                        >
                          <motion.span
                            className="w-2 h-2 rounded-full bg-[#14B8A6] shrink-0"
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          />
                          <span className="text-[#CBD5E1]">{role}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </ScrollReveal>

              <ScrollReveal variant="fadeRight" delay={0.4}>
                <div className="bg-gradient-to-br from-[#14B8A6]/20 to-[#00B4D8]/20 border border-[#14B8A6]/30 rounded-xl p-8 relative overflow-hidden">
                  {/* Animated gradient shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-3">
                      Quick Response Guaranteed
                    </h3>
                    <p className="text-[#CBD5E1] text-sm leading-relaxed">
                      I typically respond within 24 hours. For urgent inquiries, feel free to connect on LinkedIn for a faster response.
                    </p>
                    <MagneticButton>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-block mt-4 px-6 py-3 bg-[#22D3EE] text-[#0B0F19] font-bold rounded-lg hover:bg-[#0EA5E9] transition-colors text-sm"
                      >
                        Send Email Now
                      </a>
                    </MagneticButton>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
