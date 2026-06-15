import { BookOpen, ArrowUpRight } from "lucide-react";

export default function ResearchHighlight() {
  const tags = ["Robotics", "Autonomous Systems", "UAV", "SLAM", "Defence Tech"];

  return (
    <section className="bg-[#0D1B2E] py-24">
      <div className="container-custom">

        <p className="section-label-bracket mb-3">05 / RESEARCH</p>
        <h2 className="section-title font-heading mb-10">
          Published{" "}
          <span className="gradient-text">Research</span>
        </h2>

        {/* Card */}
        <div className="relative group overflow-hidden rounded-2xl border border-[#00D4FF]/10 bg-[#0D1B2E] p-8 md:p-12 hover:border-[#00D4FF]/30 transition-all duration-300 hover:shadow-[0_0_50px_-15px_rgba(0,212,255,0.2)]">

          {/* Left accent border */}
          <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full"
            style={{
              background: "linear-gradient(to bottom, #00D4FF, #7B2FFF, transparent)",
            }}
          />

          {/* Background icon watermark */}
          <BookOpen
            size={180}
            className="absolute -right-8 -bottom-8 text-[#00D4FF]/[0.03] group-hover:text-[#00D4FF]/[0.06] transition-all duration-500 pointer-events-none"
          />

          <div className="relative z-10 pl-6">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00D4FF]" />
              </span>
              <span className="font-mono text-xs text-[#00D4FF] tracking-wider">
                ACCEPTED FOR PUBLICATION — 2026
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#E2F4FF] leading-tight max-w-2xl">
              Applications of Autonomous Mobile Robots in Defence
            </h3>

            <p className="mt-4 text-[#5B7A91] leading-relaxed max-w-2xl font-body">
              Research focused on autonomous robotics, navigation systems, SLAM,
              UAVs and future defence applications. Explores how intelligent mobile
              robots can be deployed in high-stakes, unstructured environments.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-[#00D4FF]/30 text-[#00D4FF]/80 bg-[#00D4FF]/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href="/research"
              className="inline-flex items-center gap-2 mt-8 font-mono text-sm text-[#00D4FF] hover:text-[#7B2FFF] transition-colors duration-200 tracking-wider group/link"
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
