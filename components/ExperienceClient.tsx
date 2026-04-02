"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import TiltCard from "@/components/animations/TiltCard";
import ScrollProgress from "@/components/animations/ScrollProgress";
import AnimatedLine from "@/components/animations/AnimatedLine";

interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

interface Edu {
  degree: string;
  school: string;
  period: string;
}

interface SkillGroup {
  category: string;
  items: string[];
}

interface Props {
  experience: Job[];
  education: Edu[];
  skills: SkillGroup[];
}

function AnimatedTimelineDot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#14B8A6] border-2 border-[#0B0F19] hidden md:block"
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    />
  );
}

function ProgressBar({ pct, delay }: { pct: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2 bg-[#1E293B] rounded-full overflow-hidden">
      <motion.div
        className="h-2 bg-[#14B8A6] rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${pct}%` } : {}}
        transition={{ duration: 1.2, delay, ease: [0.215, 0.61, 0.355, 1] }}
      />
    </div>
  );
}

export default function ExperienceClient({ experience, education, skills }: Props) {
  return (
    <>
      <ScrollProgress />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="blur">
            <SectionHeading
              accent="Career"
              title="Professional Experience"
              subtitle="12+ years bridging finance, risk management, and data analytics."
            />
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            <motion.div
              className="absolute left-4 top-0 bottom-0 w-px bg-[#1E293B] hidden md:block"
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {experience.map((job, i) => (
              <ScrollReveal
                key={i}
                variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"}
                delay={i * 0.1}
              >
                <div className="relative md:pl-14 mb-10">
                  <AnimatedTimelineDot />

                  <TiltCard tiltAmount={5}>
                    <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#14B8A6]/30 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-white">{job.role}</h3>
                          <p className="text-[#00B4D8] text-sm font-medium">
                            {job.company} &bull; {job.location}
                          </p>
                        </div>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="text-xs text-[#22D3EE] bg-[#22D3EE]/10 px-3 py-1 rounded-full font-medium whitespace-nowrap"
                        >
                          {job.period}
                        </motion.span>
                      </div>
                      <ul className="space-y-2">
                        {job.highlights.map((h, j) => (
                          <motion.li
                            key={j}
                            className="text-sm text-[#94A3B8] flex gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + j * 0.08 }}
                          >
                            <span className="text-[#14B8A6] mt-1 shrink-0">&#9656;</span>
                            <span>{h}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <AnimatedLine className="my-16" color="#1E293B" />

          {/* Education */}
          <ScrollReveal variant="fadeUp">
            <SectionHeading accent="Education" title="Academic Background" />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
            {education.map((edu, i) => (
              <StaggerItem key={i}>
                <TiltCard tiltAmount={8}>
                  <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6">
                    <h3 className="text-base font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-sm text-[#00B4D8]">{edu.school}</p>
                    <p className="text-xs text-[#94A3B8] mt-2">{edu.period}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedLine className="my-16" color="#1E293B" />

          {/* Languages */}
          <ScrollReveal variant="fadeUp">
            <SectionHeading accent="Languages" title="Language Proficiency" />
          </ScrollReveal>
          <StaggerContainer className="flex flex-wrap gap-4" staggerDelay={0.15}>
            {[
              { lang: "Amharic", level: "Native", pct: 100 },
              { lang: "English", level: "Advanced", pct: 90 },
              { lang: "German", level: "Intermediate", pct: 55 },
            ].map((l, i) => (
              <StaggerItem key={l.lang} className="flex-1 min-w-[200px]">
                <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold text-sm">{l.lang}</span>
                    <span className="text-[#94A3B8] text-xs">{l.level}</span>
                  </div>
                  <ProgressBar pct={l.pct} delay={i * 0.2} />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedLine className="my-16" color="#1E293B" />

          {/* Skills */}
          <ScrollReveal variant="fadeUp">
            <SectionHeading accent="Skills" title="Technical Competencies" />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {skills.map((group) => (
              <StaggerItem key={group.category}>
                <TiltCard tiltAmount={6}>
                  <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5">
                    <h3 className="text-sm font-bold text-[#22D3EE] mb-3 uppercase tracking-wider">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <motion.span
                          key={item}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(20,184,166,0.25)" }}
                          className="text-xs px-2.5 py-1 bg-[#14B8A6]/10 text-[#14B8A6] rounded-md"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </main>
    </>
  );
}
