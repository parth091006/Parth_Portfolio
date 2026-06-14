import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-[#030304] py-24">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <p className="section-label mb-3">// ABOUT_ME</p>
            <h2 className="section-title font-heading mb-8">
              The Person{" "}
              <span className="gradient-text">Behind the Code</span>
            </h2>

            <div className="space-y-5 text-[#94A3B8] leading-relaxed font-body text-base md:text-lg">
              <p>
                I&apos;m a BTech student in{" "}
                <span className="text-white font-medium">
                  Artificial Intelligence and Machine Learning
                </span>{" "}
                at Vijaybhoomi University. My interests span Computer Vision,
                Robotics, Drones, Embedded Systems and Research.
              </p>
              <p>
                Beyond academics, I enjoy exploring emerging technologies,
                working on robotics systems, contributing to research, and
                building intelligent solutions that solve real-world problems.
              </p>
              <p>
                My long-term goal is to pursue higher education, conduct
                impactful research, and eventually build technology-driven
                products and companies.
              </p>
            </div>

            <a href="/about" className="inline-flex items-center gap-2 mt-8 btn-primary">
              More About Me
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right — Stats panel */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "University", value: "Vijaybhoomi", sub: "AIML Batch 2028" },
              { label: "Location", value: "Mumbai", sub: "India" },
              { label: "Internship", value: "AIGenThix", sub: "Mechatronics & IoT" },
              { label: "Research", value: "1 Paper", sub: "Accepted 2026" },
            ].map((item) => (
              <div
                key={item.label}
                className="crypto-card p-5 group cursor-default"
              >
                <p className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase mb-1">
                  {item.label}
                </p>
                <p className="font-heading font-semibold text-white text-lg group-hover:text-[#F7931A] transition-colors duration-200">
                  {item.value}
                </p>
                <p className="font-mono text-xs text-[#94A3B8]/60 mt-0.5">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}