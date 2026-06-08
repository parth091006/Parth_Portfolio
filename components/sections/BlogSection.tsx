import { blogPosts } from "@/data/blog";

export default function BlogSection() {
  return (
    <section className="container-custom py-24">

      <h1 className="text-5xl font-bold mb-12">
        Blog
      </h1>

      <div className="grid gap-6">

        {blogPosts.map((post) => (
          <div
            key={post.title}
            className="glass-card p-6"
          >
            <h2 className="text-2xl font-semibold">
              {post.title}
            </h2>

            <p className="text-blue-400 mt-2">
              {post.date}
            </p>

            <p className="text-muted mt-4">
              {post.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}