"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import TiltCard from "@/components/animations/TiltCard";
import CountUp from "@/components/animations/CountUp";
import ScrollProgress from "@/components/animations/ScrollProgress";
import FloatingOrbs from "@/components/animations/FloatingOrbs";

interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tech: string[];
  metrics: Record<string, string>;
  github: string;
  slug: string;
  demo?: string;
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  return (
    <>
      <ScrollProgress />
      <main className="pt-28 pb-20 px-6 relative overflow-hidden">
        <FloatingOrbs />
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal variant="blur">
            <SectionHeading
              accent="Portfolio"
              title="All Projects"
              subtitle="10 data science projects built with clean architecture, comprehensive testing, and finance domain expertise. Each project includes a technical blog post."
            />
          </ScrollReveal>

          {/* Filter stats */}
          <StaggerContainer className="flex flex-wrap gap-4 mb-10" staggerDelay={0.1}>
            {[
              { label: "Total Projects", value: 10 },
              { label: "Unit Tests", value: 203 },
              { label: "Blog Posts", value: 10 },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#111827] border border-[#1E293B] rounded-lg">
                  <span className="text-[#22D3EE] font-bold text-sm">
                    <CountUp end={stat.value} />
                  </span>
                  <span className="text-[#94A3B8] text-xs">{stat.label}</span>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#111827] border border-[#1E293B] rounded-lg">
                <span className="text-[#22D3EE] font-bold text-sm">Python, SQL, ML</span>
                <span className="text-[#94A3B8] text-xs">Tech Stack</span>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <TiltCard className="h-full" tiltAmount={6}>
                  <Link href={`/blog/${project.slug}`} className="block h-full cursor-pointer">
                    <div className="group bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#14B8A6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#14B8A6]/5 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <motion.span
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          className="text-[#14B8A6] text-sm font-bold bg-[#14B8A6]/10 px-3 py-1 rounded-full"
                        >
                          #{project.number}
                        </motion.span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#14B8A6] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-[#22D3EE] text-sm font-bold">{value}</div>
                            <div className="text-[#94A3B8] text-xs">{key}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#1E293B]">
                        {project.tech.map((t) => (
                          <motion.span
                            key={t}
                            whileHover={{ scale: 1.1 }}
                            className="text-xs px-2.5 py-1 bg-[#14B8A6]/10 text-[#14B8A6] rounded-md font-medium"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#1E293B] relative z-10">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#22D3EE]/10 text-[#22D3EE] rounded-lg font-semibold text-sm hover:bg-[#22D3EE]/20 transition-colors border border-[#22D3EE]/20 hover:border-[#22D3EE]/40"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            Live Demo
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#94A3B8]/10 text-[#94A3B8] rounded-lg font-semibold text-sm hover:bg-[#94A3B8]/20 hover:text-white transition-colors border border-[#94A3B8]/20 hover:border-[#94A3B8]/40"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                        <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#14B8A6]/10 text-[#14B8A6] rounded-lg font-semibold text-sm group-hover:bg-[#14B8A6]/20 transition-colors border border-[#14B8A6]/20 group-hover:border-[#14B8A6]/40">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                          </svg>
                          Case Study
                        </span>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </main>
    </>
  );
}
