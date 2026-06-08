export default function ResearchHighlight() {
  return (
    <section className="container-custom py-24">

      <div className="glass-card p-8 md:p-12">

        <span className="text-primary font-medium">
          Research
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Applications of Autonomous Mobile Robots in Defence
        </h2>

        <p className="mt-6 text-muted leading-relaxed">
          Accepted for Publication.
          Research focused on autonomous robotics,
          navigation systems, SLAM, UAVs and future
          defence applications.
        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          <span className="border px-3 py-1 rounded-full text-sm">
            Robotics
          </span>

          <span className="border px-3 py-1 rounded-full text-sm">
            Autonomous Systems
          </span>

          <span className="border px-3 py-1 rounded-full text-sm">
            UAV
          </span>

          <span className="border px-3 py-1 rounded-full text-sm">
            SLAM
          </span>

        </div>

      </div>

    </section>
  );
}