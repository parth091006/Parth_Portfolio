import TechStack from "./ProjectTechStack";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  category: string;
  description: string;
  technologies: string[];
}

export default function ProjectHero({
  title,
  category,
  description,
  technologies,
}: Props) {
  return (
    <section className="bg-[#020B18] border-b border-[#00D4FF]/10 pt-16 pb-24 relative overflow-hidden">

      {/* Background radial glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-custom relative z-10">

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-[#5B7A91] hover:text-[#00D4FF] transition-colors duration-200 mb-12"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <span className="font-mono text-xs tracking-widest uppercase text-[#00D4FF] border border-[#00D4FF]/30 bg-[#00D4FF]/5 px-3 py-1.5 rounded-full inline-block">
          {category}
        </span>

        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-[#E2F4FF] mt-6 mb-6 leading-tight max-w-4xl">
          {title}
        </h1>

        <p className="font-body text-lg md:text-xl text-[#5B7A91] max-w-3xl leading-relaxed mb-10">
          {description}
        </p>

        <TechStack technologies={technologies} />

      </div>
    </section>
  );
}
