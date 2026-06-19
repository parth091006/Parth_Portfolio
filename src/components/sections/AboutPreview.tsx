import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section id="about" className="bg-[#0D1B2E] py-24">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <p className="section-label-bracket mb-3">01 / ABOUT</p>
            <h2 className="section-title font-heading mb-8">
              The Person{" "}
              <span className="gradient-text">Behind the Code</span>
            </h2>

            <div className="space-y-5 text-[#5B7A91] leading-relaxed font-body text-base md:text-lg">
              <p>
                I&apos;m a B.Tech student in{" "}
                <span className="text-[#E2F4FF] font-medium">
                  Artificial Intelligence & Machine Learning
                </span>{" "}
                at Vijaybhoomi University, with a Minor in{" "}
                <span className="text-[#E2F4FF] font-medium">
                  Sound Engineering
                </span>{" "}
                from the True School of Music.
              </p>
              <p>
                Currently interning at AiGENThix, I build computer vision systems for real-world object detection and tracking. My core interests lie in autonomous systems, drone technology, and edge AI deployment.
              </p>
              <p>
                I am actively looking for opportunities in Computer Vision, Deep Learning, Robotics, IoT and Research. Building at the intersection of AI and physical systems? Let&apos;s talk.
              </p>
            </div>


          </div>

          {/* Right — Stats panel */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Education", value: "B.Tech AIML", sub: "Vijaybhoomi '28" },
              { label: "Minor", value: "Sound Engineering", sub: "True School of Music" },
              { label: "Internship", value: "AiGENThix", sub: "Computer Vision & Robotics" },
              { label: "Location", value: "Mumbai", sub: "India" },
            ].map((item) => (
              <div
                key={item.label}
                className="crypto-card p-5 group cursor-default"
              >
                <p className="font-mono text-[10px] text-[#5B7A91] tracking-widest uppercase mb-1">
                  {item.label}
                </p>
                <p className="font-heading font-semibold text-[#E2F4FF] text-lg group-hover:text-[#00D4FF] transition-colors duration-200">
                  {item.value}
                </p>
                <p className="font-mono text-sm text-[#5B7A91]/80 mt-1">
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
