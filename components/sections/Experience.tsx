import ExperienceCard from "@/components/cards/ExperienceCard";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section className="container-custom py-24">

      <h2 className="section-title mb-12">
        Experience
      </h2>

      <div className="grid gap-6">

        {experience.map((item) => (
          <ExperienceCard
            key={item.company}
            {...item}
          />
        ))}

      </div>

    </section>
  );
}