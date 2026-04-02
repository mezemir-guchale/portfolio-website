import Link from "next/link";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  tech: string[];
  metrics: Record<string, string>;
  github: string;
  slug: string;
}

export default function ProjectCard({
  number,
  title,
  description,
  tech,
  metrics,
  github,
  slug,
}: ProjectCardProps) {
  return (
    <div className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#7F1CFF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#7F1CFF]/5 flex flex-col">
      {/* Number badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#7F1CFF] text-sm font-bold bg-[#7F1CFF]/10 px-3 py-1 rounded-full">
          #{number}
        </span>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9ca3af] hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#7F1CFF] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#9ca3af] text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* Metrics */}
      <div className="flex flex-wrap gap-3 mb-4">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="text-[#FFE834] text-sm font-bold">{value}</div>
            <div className="text-[#9ca3af] text-xs">{key}</div>
          </div>
        ))}
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#2a2a2a]">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 bg-[#7F1CFF]/10 text-[#7F1CFF] rounded-md font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Blog link */}
      <Link
        href={`/blog/${slug}`}
        className="mt-4 text-sm text-[#D46F88] hover:text-[#FFE834] transition-colors font-medium"
      >
        Read case study &rarr;
      </Link>
    </div>
  );
}
