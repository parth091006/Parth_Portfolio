export default function Stats() {
  const stats = [
    { label: "Projects Built", value: "3+", suffix: "" },
    { label: "Research Papers", value: "1", suffix: "" },
    { label: "Industry Internship", value: "1", suffix: "" },
    { label: "Graduation Year", value: "2028", suffix: "" },
  ];

  return (
    <section className="border-y border-white/10 bg-[#030304]">
      <div className="container-custom py-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center px-6"
            >
              <span className="font-mono font-bold text-4xl md:text-5xl text-[#F7931A]">
                {stat.value}{stat.suffix}
              </span>
              <span className="font-body text-sm text-[#94A3B8] mt-2 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}