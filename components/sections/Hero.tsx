"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import FloatingParticles from "@/components/ui/FloatingParticles";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <FloatingParticles />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="glass-card inline-flex px-4 py-2 mb-8 text-xl md:text-2xl font-bold leading-tight">
              Parth Sachin Bhirwandekar
            </div>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Building
              <br />
              Intelligent
              <br />
              Systems
            </h1>

            <h2 className="mt-8 text-2xl md:text-3xl text-blue-400 font-semibold">
              AI • Computer Vision • Robotics
            </h2>

            <p className="mt-8 text-lg max-w-xl text-muted leading-relaxed">
              AIML student passionate about AI Systems,
              Computer Vision, Robotics and Research.
              Building intelligent solutions that bridge
              software, hardware and automation.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

                  <a
                    href="/projects"
                    className="btn-primary"
                  >
                    View Projects
                  </a>

                  <a
                    href="/resume/Parth_Bhirwandekar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Resume
                  </a>

                  <a
                    href="https://github.com/parth091006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/parthbhirwandekar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    LinkedIn
                  </a>

                </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
            }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

              <Image
                src="/profile/profile-photo.jpg"
                alt="Parth Bhirwandekar"
                width={450}
                height={450}
                priority
                className="relative rounded-full shadow-glow object-cover w-[420px] h-[420px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}