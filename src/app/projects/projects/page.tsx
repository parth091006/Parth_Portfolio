import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="bg-[#0D1B2E] py-24">
      <div className="container-custom">

        <p className="section-label-bracket mb-3">{"// PROJECTS"}</p>
        <h1 className="section-title font-heading mb-12">
          <span className="gradient-text">Projects</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              {...project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
