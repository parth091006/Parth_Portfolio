import SkillCard from "@/components/cards/SkillCard";
import { skills } from "@/data/skills";
import { Brain, Eye, Cpu, Code as Code2 } from "lucide-react";

const skillGroups = [
  {
    title: "AI & Machine Learning",
    skills: skills.aiMl,
    icon: Brain,
  },
  {
    title: "Computer Vision",
    skills: skills.computerVision,
    icon: Eye,
  },
  {
    title: "Robotics",
    skills: skills.robotics,
    icon: Cpu,
  },
  {
    title: "Development",
    skills: skills.development,
    icon: Code2,
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-[#020B18] py-24">
      <div className="container-custom">

        {/* Section header */}
        <p className="section-label-bracket mb-3">02 / SKILLS</p>
        <h2 className="section-title font-heading mb-14">
          Skills &amp;{" "}
          <span className="gradient-text">Technologies</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.title}
              title={group.title}
              skills={group.skills}
              icon={group.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
