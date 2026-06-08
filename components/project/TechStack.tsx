export default function TechStack({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">

      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-4 py-2 border rounded-full"
        >
          {tech}
        </span>
      ))}

    </div>
  );
}