import { MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
}

export default function ExperienceCard({
  company,
  role,
  duration,
  location,
  description,
}: ExperienceCardProps) {
  return (
    <div className="group crypto-card p-6 md:p-8">

      {/* Company + role */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#F7931A] transition-colors duration-200">
            {company}
          </h3>
          <p
            className="font-body font-semibold mt-1 text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #F7931A, #FFD600)",
            }}
          >
            {role}
          </p>
        </div>

        {/* Duration badge */}
        <span className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/15 text-[#94A3B8] flex-shrink-0 self-start">
          {duration}
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-[#94A3B8] mb-4">
        <MapPin size={12} />
        <span className="font-mono text-xs tracking-wide">{location}</span>
      </div>

      {/* Description */}
      <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
        {description}
      </p>

    </div>
  );
}