import { blogPosts } from "@/data/blog";

export default function BlogSection() {
  return (
    <section className="bg-[#030304] py-24">
      <div className="container-custom">

        <p className="section-label mb-3">// BLOG</p>
        <h1 className="section-title font-heading mb-12">
          Technical <span className="gradient-text">Writings</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="crypto-card p-8 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-[#F7931A] px-3 py-1 rounded-full border border-[#F7931A]/30 bg-[#F7931A]/5">
                  {post.date}
                </span>
              </div>

              <h2 className="font-heading font-semibold text-2xl text-white group-hover:text-[#F7931A] transition-colors duration-200 mb-3">
                {post.title}
              </h2>

              <p className="font-body text-[#94A3B8] leading-relaxed flex-1">
                {post.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}