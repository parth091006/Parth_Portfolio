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
          className="font-mono text-xs px-4 py-2 border border-white/10 rounded-full text-[#94A3B8] bg-white/5 hover:border-[#F7931A]/40 hover:text-[#F7931A] transition-colors duration-200 cursor-default"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}