"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import TextReveal from "@/components/animations/TextReveal";
import TypewriterText from "@/components/animations/TypewriterText";
import CountUp from "@/components/animations/CountUp";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import TiltCard from "@/components/animations/TiltCard";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import InfiniteScroll from "@/components/animations/InfiniteScroll";
import AnimatedLine from "@/components/animations/AnimatedLine";
import MorphingBlob from "@/components/animations/MorphingBlob";
import ParallaxSection from "@/components/animations/ParallaxSection";
import ScrollProgress from "@/components/animations/ScrollProgress";
import CustomCursor from "@/components/animations/CustomCursor";
import SectionHeading from "@/components/SectionHeading";

interface Props {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    linkedin: string;
    summary: string;
  };
  skills: Array<{ category: string; items: string[] }>;
  featuredProjects: Array<{
    id: string;
    number: string;
    title: string;
    description: string;
    tech: string[];
    metrics: Record<string, string>;
    github: string;
    slug: string;
    demo?: string;
  }>;
  latestPosts: Array<{
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
  }>;
}

const allTechItems = [
  "Python", "XGBoost", "scikit-learn", "SHAP", "pandas", "NumPy",
  "Plotly", "Dash", "Streamlit", "SQL", "Tableau", "Matplotlib",
  "IFRS", "Risk Modeling", "Credit Risk", "AML", "NLP", "Monte Carlo",
  "Git", "Jupyter", "ARIMA", "Isolation Forest",
];

export default function HomeClient({ personalInfo, skills, featuredProjects, latestPosts }: Props) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <FloatingOrbs />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(127,28,255,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(127,28,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left side — text */}
          <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20, letterSpacing: "0em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#22D3EE] font-semibold text-sm uppercase mb-6"
          >
            <TypewriterText
              texts={[
                "Data Scientist & Financial Risk Analyst",
                "12+ Years in Finance & Auditing",
                "Machine Learning Engineer",
                "Risk Analytics Specialist",
              ]}
            />
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-2">
            <TextReveal delay={0.4}>Mezemir Neway</TextReveal>
          </h1>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#14B8A6] to-[#00B4D8] bg-clip-text text-transparent">
              <TextReveal delay={0.8}>Guchale</TextReveal>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <MagneticButton>
              <Link href="/projects" className="px-8 py-3.5 bg-[#22D3EE] text-[#0B0F19] font-bold rounded-lg hover:bg-[#0EA5E9] transition-colors inline-block">
                View Projects
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/contact" className="px-8 py-3.5 border border-[#14B8A6] text-[#14B8A6] font-bold rounded-lg hover:bg-[#14B8A6]/10 transition-colors inline-block">
                Get in Touch
              </Link>
            </MagneticButton>
          </motion.div>
          </div>

          {/* Right side — Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.215, 0.61, 0.355, 1] }}
            className="shrink-0 hidden md:block"
          >
            <div className="relative">
              <div className="w-[320px] h-[400px] lg:w-[380px] lg:h-[470px] rounded-2xl overflow-hidden border-2 border-[#14B8A6]/40 shadow-2xl shadow-[#14B8A6]/10">
                <img
                  src="/mezemir.jpg"
                  alt="Mezemir Neway Guchale"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#22D3EE] rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#22D3EE] rounded-br-lg" />
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-30" />
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[#94A3B8] text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-5 h-8 border-2 border-[#94A3B8]/30 rounded-full flex justify-center pt-1.5">
                <motion.div
                  animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-1.5 bg-[#22D3EE] rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Infinite skill marquee ───────────────────── */}
      <section className="py-8 border-t border-[#1E293B] overflow-hidden">
        <InfiniteScroll items={allTechItems} speed={35} direction="left" />
        <div className="mt-4">
          <InfiniteScroll items={[...allTechItems].reverse()} speed={40} direction="right" />
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────── */}
      <section className="py-20 px-6 relative">
        <MorphingBlob color="#14B8A6" size={400} className="-top-20 -left-40" />
        <MorphingBlob color="#00B4D8" size={300} className="-bottom-20 -right-40" />

        <div className="max-w-5xl mx-auto relative z-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.15}>
            {[
              { end: 12, suffix: "+", label: "Years in Finance" },
              { end: 10, suffix: "", label: "Data Science Projects" },
              { end: 203, suffix: "", label: "Unit Tests Written" },
              { end: 10, suffix: "", label: "Technical Blog Posts" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center p-6 bg-[#111827]/50 border border-[#1E293B] rounded-xl backdrop-blur-sm">
                  <p className="text-4xl md:text-5xl font-extrabold text-[#22D3EE]">
                    <CountUp end={stat.end} suffix={stat.suffix} duration={2.5} />
                  </p>
                  <p className="text-[#94A3B8] text-sm mt-2">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <AnimatedLine className="max-w-5xl mx-auto" color="#1E293B" />

      {/* ── Skills ─────────────────────────────────────── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal variant="blur">
            <SectionHeading
              accent="Skills"
              title="What I Bring"
              subtitle="12 years of finance expertise combined with modern data science tools."
            />
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {skills.map((group) => (
              <StaggerItem key={group.category}>
                <TiltCard className="h-full" tiltAmount={8}>
                  <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-5 hover:border-[#14B8A6]/30 transition-colors h-full">
                    <h3 className="text-sm font-bold text-[#22D3EE] mb-3 uppercase tracking-wider">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, j) => (
                        <motion.span
                          key={item}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(20,184,166,0.25)",
                          }}
                          className="text-xs px-2.5 py-1 bg-[#14B8A6]/10 text-[#14B8A6] rounded-md cursor-default transition-colors"
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
      </section>

      <AnimatedLine className="max-w-5xl mx-auto" color="#1E293B" />

      {/* ── Featured Projects ──────────────────────────── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <MorphingBlob color="#22D3EE" size={250} className="top-10 right-0" />
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal variant="fadeUp">
            <SectionHeading
              accent="Portfolio"
              title="Featured Projects"
              subtitle="Highlights from 10 data science projects built with clean architecture and finance domain expertise."
            />
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10" staggerDelay={0.12}>
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <TiltCard className="h-full" tiltAmount={6}>
                  <div className="group bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#14B8A6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#14B8A6]/5 flex flex-col h-full">
                    {/* Number badge + GitHub */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.span
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="text-[#14B8A6] text-sm font-bold bg-[#14B8A6]/10 px-3 py-1 rounded-full"
                      >
                        #{project.number}
                      </motion.span>
                      <div className="flex items-center gap-3">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-3 py-1 bg-[#22D3EE]/10 text-[#22D3EE] rounded-full font-medium hover:bg-[#22D3EE]/20 transition-colors"
                          >
                            Live Demo
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#94A3B8] hover:text-white transition-colors"
                          aria-label="GitHub"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#14B8A6] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-[#22D3EE] text-sm font-bold">{value}</div>
                          <div className="text-[#94A3B8] text-xs">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#1E293B]">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 bg-[#14B8A6]/10 text-[#14B8A6] rounded-md font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${project.slug}`}
                      className="mt-4 text-sm text-[#00B4D8] hover:text-[#22D3EE] transition-colors font-medium inline-block"
                    >
                      Read case study &rarr;
                    </Link>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal variant="scale" className="text-center">
            <MagneticButton>
              <Link href="/projects" className="inline-block px-8 py-3 border border-[#14B8A6] text-[#14B8A6] font-semibold rounded-lg hover:bg-[#14B8A6]/10 transition-colors">
                View All 10 Projects &rarr;
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      <AnimatedLine className="max-w-5xl mx-auto" color="#1E293B" />

      {/* ── Blog Posts ─────────────────────────────────── */}
      <ParallaxSection className="py-20 px-6" speed={0.15}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="fadeUp">
            <SectionHeading
              accent="Blog"
              title="Latest Articles"
              subtitle="Deep dives connecting finance expertise with data science."
            />
          </ScrollReveal>

          <StaggerContainer className="flex flex-col gap-6 mb-10" staggerDelay={0.15}>
            {latestPosts.map((post, i) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#00B4D8]/50 transition-all duration-300 flex gap-6"
                >
                  {/* Animated number */}
                  <div className="hidden md:flex items-start">
                    <motion.span
                      className="text-3xl font-extrabold text-[#14B8A6]/30 group-hover:text-[#14B8A6] transition-colors"
                      whileHover={{ scale: 1.3, rotate: -10 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs text-[#94A3B8] mb-2">
                      {post.date} &bull; {post.readTime} read
                    </p>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00B4D8] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-[#00B4D8]/10 text-[#00B4D8] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex items-center">
                    <motion.span
                      className="text-[#94A3B8] group-hover:text-[#00B4D8] transition-colors text-xl"
                      whileHover={{ x: 5 }}
                    >
                      &rarr;
                    </motion.span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal variant="scale" className="text-center">
            <MagneticButton>
              <Link href="/blog" className="inline-block px-8 py-3 border border-[#00B4D8] text-[#00B4D8] font-semibold rounded-lg hover:bg-[#00B4D8]/10 transition-colors">
                Read All Articles &rarr;
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      <AnimatedLine className="max-w-5xl mx-auto" color="#1E293B" />

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <MorphingBlob color="#14B8A6" size={500} className="-left-60 top-0" />
        <MorphingBlob color="#00B4D8" size={400} className="-right-40 -bottom-20" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal variant="blur">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Let&apos;s Build Something
              <br />
              <span className="bg-gradient-to-r from-[#14B8A6] to-[#00B4D8] bg-clip-text text-transparent">
                Together
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <p className="text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
              I&apos;m actively looking for roles in data science, risk analytics, and fintech.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-8 py-3.5 bg-[#22D3EE] text-[#0B0F19] font-bold rounded-lg hover:bg-[#0EA5E9] transition-colors inline-block"
                >
                  Send Email
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border border-[#14B8A6] text-[#14B8A6] font-bold rounded-lg hover:bg-[#14B8A6]/10 transition-colors inline-block"
                >
                  Connect on LinkedIn
                </a>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
