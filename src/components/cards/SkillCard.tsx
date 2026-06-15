import { ElementType } from "react";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: ElementType;
}

export default function SkillCard({ title, skills, icon: Icon }: SkillCardProps) {
  return (
    <div className="group crypto-card p-6 md:p-8">

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        {/* Icon container */}
        <div className="w-11 h-11 rounded-xl border border-[#00D4FF]/40 bg-[#00D4FF]/10 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300">
          <Icon size={20} className="text-[#00D4FF]" />
        </div>

        <h3 className="font-heading font-semibold text-lg text-[#E2F4FF]">
          {title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-[#00D4FF]/10 text-[#5B7A91] hover:border-[#00D4FF]/40 hover:text-[#00D4FF] transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}
