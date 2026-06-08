import { profile } from "@/data/profile";

export default function AboutPreview() {
  return (
    <section className="container-custom py-24">

      <div className="max-w-4xl">

        <h2 className="section-title">
          About Me
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-muted">

          I am a BTech student in Artificial Intelligence
          and Machine Learning at Vijaybhoomi University.

          My interests span Computer Vision, Robotics,
          Drones, Embedded Systems and Research.

        </p>

        <p className="mt-6 text-lg leading-relaxed text-muted">

          Beyond academics, I enjoy exploring emerging
          technologies, working on robotics systems,
          contributing to research, and building
          intelligent solutions that solve real-world
          problems.

        </p>

        <p className="mt-6 text-lg leading-relaxed text-muted">

          My long-term goal is to pursue higher education,
          conduct impactful research, and eventually build
          technology-driven products and companies.

        </p>

      </div>

    </section>
  );
}