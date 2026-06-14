import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

import { projects } from "@/data/projects";
import ProjectHero from "@/components/project/ProjectHero";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // We still use data/projects.ts for the basic info (like description, technologies)
  // that might be used in the hero, but we load the MDX for the deep content.
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Load the MDX file from content/project/[slug].mdx
  const contentDir = path.join(process.cwd(), "src", "content", "project");
  const filePath = path.join(contentDir, `${slug}.mdx`);

  let content = "";
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { content: mdxContent } = matter(fileContents);
    content = mdxContent;
  } catch (error) {
    console.error(`Failed to load MDX for ${slug}:`, error);
    // Fallback if MDX file doesn't exist yet
    content = `## Overview\n\n${project.description}`;
  }

  // Custom MDX components to match the Bitcoin DeFi aesthetic
  const components = {
    h1: (props: any) => <h1 className="font-heading font-bold text-3xl text-white mt-12 mb-6" {...props} />,
    h2: (props: any) => <h2 className="font-heading font-semibold text-2xl text-[#F7931A] mt-10 mb-4" {...props} />,
    h3: (props: any) => <h3 className="font-heading font-medium text-xl text-white mt-8 mb-3" {...props} />,
    p: (props: any) => <p className="font-body text-[#94A3B8] leading-relaxed mb-6 text-lg" {...props} />,
    ul: (props: any) => <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-[#94A3B8] text-lg marker:text-[#F7931A]" {...props} />,
    li: (props: any) => <li className="font-body leading-relaxed" {...props} />,
    strong: (props: any) => <strong className="font-semibold text-white" {...props} />,
    pre: (props: any) => (
      <div className="my-8 rounded-xl overflow-hidden border border-white/10 bg-[#0F1115] p-4">
        <pre className="overflow-x-auto" {...props} />
      </div>
    ),
    code: (props: any) => <code className="font-mono text-sm text-[#FFD600]" {...props} />,
  };

  return (
    <>
      <ProjectHero
        title={project.title}
        category={project.category}
        description={project.shortDescription || project.description}
        technologies={project.technologies}
      />

      <section className="bg-[#0F1115] pt-16 pb-32">
        <div className="container-custom max-w-4xl mx-auto">
          <article className="crypto-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EA580C] via-[#F7931A] to-[#FFD600]" />

            <MDXRemote source={content} components={components} />

          </article>
        </div>
      </section>
    </>
  );
}