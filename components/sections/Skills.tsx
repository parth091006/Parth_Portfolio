import SkillCard from "@/components/cards/SkillCard";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="container-custom py-24">

      <h2 className="section-title mb-12">
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <SkillCard
          title="AI & Machine Learning"
          skills={skills.aiMl}
        />

        <SkillCard
          title="Computer Vision"
          skills={skills.computerVision}
        />

        <SkillCard
          title="Robotics"
          skills={skills.robotics}
        />

        <SkillCard
          title="Development"
          skills={skills.development}
        />

      </div>

    </section>
  );
}