import TechStack from "./TechStack";

interface Props {
  title: string;
  category: string;
  description: string;
  technologies: string[];
}

export default function ProjectHero({
  title,
  category,
  description,
  technologies,
}: Props) {
  return (
    <section className="container-custom py-24">

      <span className="text-blue-400">
        {category}
      </span>

      <h1 className="text-5xl font-bold mt-4">
        {title}
      </h1>

      <p className="mt-6 text-lg text-muted max-w-3xl">
        {description}
      </p>

      <TechStack
        technologies={technologies}
      />

    </section>
  );
}