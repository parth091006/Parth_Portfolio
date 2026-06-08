import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="container-custom py-24">

      <h1 className="text-5xl font-bold mb-12">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            {...project}
          />
        ))}

      </div>

    </section>
  );
}