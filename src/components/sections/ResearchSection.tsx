import { researchPapers } from "@/data/research";

export default function ResearchSection() {
  return (
    <section className="bg-[#0D1B2E] py-24">
      <div className="container-custom">

        <p className="section-label-bracket mb-3">{"// RESEARCH"}</p>
        <h1 className="section-title font-heading mb-12">
          <span className="gradient-text">Research</span>
        </h1>

        {researchPapers.map((paper) => (
          <div
            key={paper.title}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-4">

              <span className="text-[#00D4FF] font-medium">
                {paper.status}
              </span>

              <span className="text-[#5B7A91]">
                • {paper.year}
              </span>

            </div>

            <h2 className="font-heading text-3xl font-bold text-[#E2F4FF]">
              {paper.title}
            </h2>

            <p className="text-[#5B7A91] mt-6 leading-relaxed">
              {paper.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-8">

              {paper.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="border border-[#00D4FF]/20 bg-[#00D4FF]/5 px-3 py-1 rounded-full text-sm text-[#5B7A91]"
                >
                  {keyword}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
