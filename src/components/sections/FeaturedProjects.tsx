import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="bg-[#030304] py-24">
      <div className="container-custom">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="section-label mb-3">// FEATURED_PROJECTS</p>
            <h2 className="section-title font-heading">
              What I&apos;ve{" "}
              <span className="gradient-text">Built</span>
            </h2>
          </div>

          <a
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#F7931A] hover:text-[#FFD600] transition-colors duration-200 tracking-wider group"
          >
            All Projects
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

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