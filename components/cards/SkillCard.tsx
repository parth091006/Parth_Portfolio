interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-5">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full border text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}