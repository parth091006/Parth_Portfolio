import { experience } from "@/data/experience";
import ExperienceCard from "@/components/cards/ExperienceCard";

export default function ExperienceSection() {
  return (
    <section className="bg-[#020B18] py-24">
      <div className="container-custom">

        {/* Section header */}
        <p className="section-label-bracket mb-3">04 / EXPERIENCE</p>
        <h2 className="section-title font-heading mb-14">
          Where I&apos;ve{" "}
          <span className="gradient-text">Worked</span>
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical timeline line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px md:left-[1.65rem]"
            style={{
              background: "linear-gradient(to bottom, #00D4FF, rgba(0,212,255,0.1), transparent)",
            }}
          />

          <div className="flex flex-col gap-10">
            {experience.map((item, index) => (
              <div key={item.company} className="relative flex gap-8 md:gap-12">

                {/* Timeline node */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#00D4FF] bg-[#020B18] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                    <span className="font-mono text-xs font-bold text-[#00D4FF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <ExperienceCard {...item} />
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
