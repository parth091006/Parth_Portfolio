import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export default function SkillCard({ title, skills, icon: Icon }: SkillCardProps) {
  return (
    <div className="group crypto-card p-6 md:p-8">

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        {/* Icon container */}
        <div className="w-11 h-11 rounded-xl border border-[#EA580C]/40 bg-[#EA580C]/10 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all duration-300">
          <Icon size={20} className="text-[#F7931A]" />
        </div>

        <h3 className="font-heading font-semibold text-lg text-white">
          {title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-[#94A3B8] hover:border-[#F7931A]/40 hover:text-[#F7931A] transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}