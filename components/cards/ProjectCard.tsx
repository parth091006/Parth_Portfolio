import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  status: string;
  technologies: string[];
}

export default function ProjectCard({
  slug,
  title,
  shortDescription,
  category,
  status,
  technologies,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>

      <div className="glass-card p-6 h-full hover:scale-[1.02] transition-all duration-300 cursor-pointer">

        <div className="flex justify-between mb-4">

          <span className="text-xs px-3 py-1 rounded-full border">
            {category}
          </span>

          <span className="text-xs text-blue-400">
            {status}
          </span>

        </div>

        <h3 className="text-xl font-semibold mb-4">
          {title}
        </h3>

        <p className="text-muted mb-5">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="border rounded-full px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

    </Link>
  );
}