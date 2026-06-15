import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  status: string;
  technologies: string[];
}

export default function ProjectCard({
  slug,
  title,
  shortDescription,
  category,
  status,
  technologies,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block h-full">
      <div className="relative h-full crypto-card p-6 flex flex-col overflow-hidden">

        {/* Corner accent — top left */}
        <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#00D4FF]/60 rounded-tl-2xl" />
        {/* Corner accent — bottom right */}
        <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#00D4FF]/60 rounded-br-2xl" />

        {/* Header row */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-full border border-[#00D4FF]/20 text-[#5B7A91] uppercase">
            {category}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00D4FF]" />
            </span>
            <span className="font-mono text-[10px] text-[#00D4FF] tracking-wider">
              {status}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading font-semibold text-xl text-[#E2F4FF] mb-3 group-hover:text-[#00D4FF] transition-colors duration-200 flex items-start justify-between gap-2">
          {title}
          <ArrowUpRight
            size={18}
            className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-[#00D4FF] transition-all duration-200 mt-0.5"
          />
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-[#5B7A91] leading-relaxed flex-1 mb-5">
          {shortDescription}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-[#00D4FF]/10 text-[#5B7A91] tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </Link>
  );
}
