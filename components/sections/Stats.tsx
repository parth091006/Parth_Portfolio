export default function Stats() {
  const stats = [
    {
      label: "Projects",
      value: "3+",
    },
    {
      label: "Research Papers",
      value: "1",
    },
    {
      label: "Industry Internship",
      value: "1",
    },
    {
      label: "Graduation",
      value: "2028",
    },
  ];

  return (
    <section className="container-custom py-16">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card p-6 text-center"
          >
            <h3 className="text-4xl font-bold text-blue-400">
              {stat.value}
            </h3>

            <p className="mt-2 text-muted">
              {stat.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}