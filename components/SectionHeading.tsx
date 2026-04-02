"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  accent = "Projects",
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="text-[#14B8A6] text-sm font-semibold uppercase tracking-widest mb-2">
        {accent}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="text-[#94A3B8] mt-3 max-w-2xl text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
