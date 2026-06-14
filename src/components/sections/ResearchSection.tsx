import { researchPapers } from "@/data/research";

export default function ResearchSection() {
  return (
    <section className="container-custom py-24">

      <h1 className="text-5xl font-bold mb-12">
        Research
      </h1>

      {researchPapers.map((paper) => (
        <div
          key={paper.title}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-4">

            <span className="text-blue-400 font-medium">
              {paper.status}
            </span>

            <span className="text-muted">
              • {paper.year}
            </span>

          </div>

          <h2 className="text-3xl font-bold">
            {paper.title}
          </h2>

          <p className="text-muted mt-6 leading-relaxed">
            {paper.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">

            {paper.keywords.map((keyword) => (
              <span
                key={keyword}
                className="border px-3 py-1 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}

          </div>

        </div>
      ))}

    </section>
  );
}