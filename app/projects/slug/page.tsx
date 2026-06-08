import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import ProjectHero from "@/components/project/ProjectHero";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero
        title={project.title}
        category={project.category}
        description={project.description}
        technologies={project.technologies}
      />

      <section className="container-custom pb-24">

        <div className="glass-card p-8">

          <h2 className="text-3xl font-bold mb-6">
            Project Overview
          </h2>

          <p className="text-muted leading-relaxed">
            {project.description}
          </p>

        </div>

      </section>
    </>
  );
}