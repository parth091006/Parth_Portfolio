export default function TechStack({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="font-mono text-xs px-4 py-2 border border-[#00D4FF]/10 rounded-full text-[#5B7A91] bg-[#00D4FF]/5 hover:border-[#00D4FF]/40 hover:text-[#00D4FF] transition-colors duration-200 cursor-default"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
