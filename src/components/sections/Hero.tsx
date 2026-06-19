"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center bg-[#020B18]">

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Ambient cyan glow — left */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Ambient violet glow — right */}
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,47,255,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]" />
              </span>
              <span className="font-mono text-xs text-[#00D4FF] tracking-widest uppercase">
                AIML Student • Mumbai, India
              </span>
            </motion.div>

            {/* Main headline */}
            <h1 className="font-heading font-bold leading-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#E2F4FF]">
                Building
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#E2F4FF]">
                Intelligent
              </span>
              <span
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Systems
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-mono text-sm md:text-base tracking-[0.2em] text-[#5B7A91] mt-6 uppercase"
            >
              AI &nbsp;•&nbsp; Computer Vision &nbsp;•&nbsp; Robotics
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 text-base md:text-lg max-w-xl text-[#5B7A91] leading-relaxed font-body"
            >
              AIML student passionate about Computer Vision, Robotics, AI Systems,
              Drones and Research. Building intelligent solutions that bridge
              software, hardware and automation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link href="/projects" className="btn-primary">
                View Projects
                <ArrowRight size={16} />
              </Link>

              <a
                href="/resume/Parth_Bhirwandekar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText size={16} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href="https://github.com/parth091006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl border border-[#00D4FF]/10 text-[#5B7A91] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 hover:shadow-[0_0_15px_-5px_rgba(0,212,255,0.4)] transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/parthbhirwandekar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl border border-[#00D4FF]/10 text-[#5B7A91] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 hover:shadow-[0_0_15px_-5px_rgba(0,212,255,0.4)] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <span className="font-mono text-xs text-[#5B7A91]/60 tracking-widest ml-2">
                @parth091006
              </span>
            </motion.div>

          </motion.div>

          {/* ── Right Column — Glowing Ring Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[420px] md:h-[420px]">

              {/* Outer glowing ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px solid rgba(0, 212, 255, 0.3)",
                  boxShadow: "0 0 40px rgba(0, 212, 255, 0.5)",
                }}
              />

              {/* Inner subtle ring */}
              <div
                className="absolute inset-[20px] rounded-full"
                style={{
                  border: "1px solid rgba(123, 47, 255, 0.15)",
                }}
              />

              {/* Orbiting dot 1 */}
              <div
                className="absolute w-3 h-3 rounded-full animate-orbit-dot"
                style={{
                  background: "#00D4FF",
                  boxShadow: "0 0 10px rgba(0, 212, 255, 0.8)",
                }}
              />

              {/* Orbiting dot 2 */}
              <div
                className="absolute w-2.5 h-2.5 rounded-full animate-orbit-dot-2"
                style={{
                  background: "#7B2FFF",
                  boxShadow: "0 0 10px rgba(123, 47, 255, 0.8)",
                }}
              />

              {/* Orbiting dot 3 */}
              <div
                className="absolute w-2 h-2 rounded-full animate-orbit-dot-3"
                style={{
                  background: "#00D4FF",
                  boxShadow: "0 0 8px rgba(0, 212, 255, 0.6)",
                }}
              />

              {/* Profile photo */}
              <div className="absolute inset-[60px] md:inset-[80px] rounded-full overflow-hidden shadow-[0_0_60px_rgba(0,212,255,0.3)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-[#7B2FFF]/10 z-10" />
                <Image
                  src="/assets/profile_photo/profile-photo.jpg"
                  alt="Parth Bhirwandekar — AIML Student"
                  fill
                  priority
                  className="object-cover object-[25%_top] rounded-full"
                  sizes="(max-width: 768px) 180px, 260px"
                />
              </div>

              {/* Floating stat — top right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 md:top-4 md:-right-8 glass-card px-3 py-2 z-20"
              >
                <p className="font-mono text-[10px] text-[#5B7A91] tracking-wider">Research</p>
                <p className="font-heading font-bold text-[#00D4FF] text-base">Published</p>
              </motion.div>

              {/* Floating stat — bottom left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-8 glass-card px-3 py-2 z-20"
              >
                <p className="font-mono text-[10px] text-[#5B7A91] tracking-wider">Graduation</p>
                <p className="font-heading font-bold text-[#7B2FFF] text-base">2028</p>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center mt-16 md:mt-24"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] tracking-widest text-[#5B7A91]/50 uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#00D4FF]/50 to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
