import { BookOpen, ArrowUpRight } from "lucide-react";

export default function ResearchHighlight() {
  const tags = ["Robotics", "Autonomous Systems", "UAV", "SLAM", "Defence Tech"];

  return (
    <section className="bg-[#030304] py-24">
      <div className="container-custom">

        <p className="section-label mb-3">// RESEARCH</p>
        <h2 className="section-title font-heading mb-10">
          Published{" "}
          <span className="gradient-text">Research</span>
        </h2>

        {/* Card */}
        <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-[#030304] p-8 md:p-12 hover:border-[#F7931A]/30 transition-all duration-300 hover:shadow-[0_0_50px_-15px_rgba(247,147,26,0.2)]">

          {/* Left accent border */}
          <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-gradient-to-b from-[#EA580C] via-[#F7931A] to-transparent rounded-full" />

          {/* Background icon watermark */}
          <BookOpen
            size={180}
            className="absolute -right-8 -bottom-8 text-white/[0.03] group-hover:text-white/[0.06] transition-all duration-500 pointer-events-none"
          />

          <div className="relative z-10 pl-6">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F7931A]/30 bg-[#F7931A]/5 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-[#F7931A] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F7931A]" />
              </span>
              <span className="font-mono text-xs text-[#F7931A] tracking-wider">
                ACCEPTED FOR PUBLICATION — 2026
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white leading-tight max-w-2xl">
              Applications of Autonomous Mobile Robots in Defence
            </h3>

            <p className="mt-4 text-[#94A3B8] leading-relaxed max-w-2xl font-body">
              Research focused on autonomous robotics, navigation systems, SLAM,
              UAVs and future defence applications. Explores how intelligent mobile
              robots can be deployed in high-stakes, unstructured environments.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-[#F7931A]/30 text-[#F7931A]/80 bg-[#F7931A]/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href="/research"
              className="inline-flex items-center gap-2 mt-8 font-mono text-sm text-[#F7931A] hover:text-[#FFD600] transition-colors duration-200 tracking-wider group/link"
            >
              View Research
              <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}