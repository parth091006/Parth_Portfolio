import { MapPin } from "lucide-react";

interface ExperienceRole {
  title: string;
  duration: string;
  description: string;
}

interface ExperienceCardProps {
  company: string;
  location: string;
  roles: ExperienceRole[];
}

export default function ExperienceCard({
  company,
  location,
  roles,
}: ExperienceCardProps) {
  return (
    <div className="group crypto-card p-6 md:p-8">

      {/* Company Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6 pb-4 border-b border-[#00D4FF]/5">
        <div>
          <h3
            className="font-body font-semibold text-transparent bg-clip-text text-lg"
            style={{
              backgroundImage: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
            }}
          >
            {company}
          </h3>
          <div className="flex items-center gap-1.5 text-[#5B7A91] mt-2">
            <MapPin size={12} />
            <span className="font-mono text-xs tracking-wide">{location}</span>
          </div>
        </div>
      </div>

      {/* Roles List */}
      <div className="flex flex-col gap-8">
        {roles.map((role, idx) => (
          <div key={idx} className="relative pl-5 border-l border-[#00D4FF]/10">
            {/* Small dot on the line */}
            <div className="absolute left-[-4.5px] top-[7px] w-2 h-2 rounded-full bg-[#020B18] border border-[#00D4FF]" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <h4 className="font-heading font-bold text-xl text-[#E2F4FF] group-hover:text-[#00D4FF] transition-colors duration-200">
                {role.title}
              </h4>

              <span className="font-mono text-[11px] px-3 py-1 rounded-full border border-[#00D4FF]/10 text-[#5B7A91] flex-shrink-0 self-start mt-1 sm:mt-0">
                {role.duration}
              </span>
            </div>

            <p className="font-body text-sm text-[#5B7A91] leading-relaxed">
              {role.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
