"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import ScrollProgress from "@/components/animations/ScrollProgress";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export default function BlogClient({ posts }: { posts: Post[] }) {
  return (
    <>
      <ScrollProgress />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="blur">
            <SectionHeading
              accent="Blog"
              title="Technical Articles"
              subtitle="Deep dives into each project — connecting 12+ years of finance expertise with modern data science."
            />
          </ScrollReveal>

          <StaggerContainer className="flex flex-col gap-6" staggerDelay={0.08}>
            {posts.map((post, i) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex gap-6 bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#00B4D8]/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover shimmer */}
                  <motion.div
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    whileHover={{ translateX: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Number */}
                  <div className="hidden md:flex items-start">
                    <motion.span
                      className="text-3xl font-extrabold text-[#14B8A6]/30 group-hover:text-[#14B8A6] transition-colors"
                      whileHover={{ scale: 1.3, rotate: -10 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow relative z-10">
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

                  {/* Arrow */}
                  <div className="hidden md:flex items-center relative z-10">
                    <motion.span
                      className="text-[#94A3B8] group-hover:text-[#00B4D8] transition-colors text-xl"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      &rarr;
                    </motion.span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </main>
    </>
  );
}
