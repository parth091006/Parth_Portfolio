import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="container-custom py-24">

      <h2 className="section-title mb-12">
        Featured Projects
      </h2>

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