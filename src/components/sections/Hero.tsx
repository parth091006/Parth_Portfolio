"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center bg-[#030304]">

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Ambient orange glow — left */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Ambient gold glow — right */}
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,214,0,0.08) 0%, transparent 70%)",
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F7931A]/30 bg-[#F7931A]/5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-[#F7931A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F7931A]" />
              </span>
              <span className="font-mono text-xs text-[#F7931A] tracking-widest uppercase">
                AIML Student • Mumbai, India
              </span>
            </motion.div>

            {/* Main headline */}
            <h1 className="font-heading font-bold leading-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Building
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Intelligent
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl gradient-text">
                Systems
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-mono text-sm md:text-base tracking-[0.2em] text-[#94A3B8] mt-6 uppercase"
            >
              AI &nbsp;•&nbsp; Computer Vision &nbsp;•&nbsp; Robotics
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 text-base md:text-lg max-w-xl text-[#94A3B8] leading-relaxed font-body"
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
              <a href="/projects" className="btn-primary">
                View Projects
                <ArrowRight size={16} />
              </a>

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
                className="p-2.5 rounded-xl border border-white/10 text-[#94A3B8] hover:text-[#F7931A] hover:border-[#F7931A]/40 hover:shadow-[0_0_15px_-5px_rgba(247,147,26,0.4)] transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/parthbhirwandekar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl border border-white/10 text-[#94A3B8] hover:text-[#F7931A] hover:border-[#F7931A]/40 hover:shadow-[0_0_15px_-5px_rgba(247,147,26,0.4)] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <span className="font-mono text-xs text-[#94A3B8]/60 tracking-widest ml-2">
                @parth091006
              </span>
            </motion.div>

          </motion.div>

          {/* ── Right Column — Orbital Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[420px] md:h-[420px]">

              {/* Outer spinning orbital ring */}
              <div
                className="animate-spin-slow absolute inset-0 rounded-full"
                style={{
                  border: "1px solid transparent",
                  background: "linear-gradient(#030304, #030304) padding-box, linear-gradient(to right, #EA580C, transparent, #F7931A) border-box",
                }}
              />

              {/* Inner spinning orbital ring (reverse) */}
              <div
                className="animate-spin-slow-reverse absolute inset-[24px] rounded-full"
                style={{
                  border: "1px solid transparent",
                  background: "linear-gradient(#030304, #030304) padding-box, linear-gradient(to bottom, #FFD600, transparent, #F7931A) border-box",
                }}
              />

              {/* Third decorative ring */}
              <div
                className="absolute inset-[48px] rounded-full"
                style={{
                  border: "1px solid rgba(247, 147, 26, 0.15)",
                }}
              />

              {/* Profile photo */}
              <div className="absolute inset-[64px] rounded-full overflow-hidden shadow-[0_0_60px_rgba(247,147,26,0.3)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EA580C]/20 to-[#FFD600]/10 z-10" />
                <Image
                  src="/profile/profile-photo.jpg"
                  alt="Parth Bhirwandekar — AIML Student"
                  fill
                  priority
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 172px, 252px"
                />
              </div>

              {/* Floating stat — top right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 md:top-4 md:-right-8 glass-card px-3 py-2 z-20"
              >
                <p className="font-mono text-[10px] text-[#94A3B8] tracking-wider">Research</p>
                <p className="font-heading font-bold text-[#F7931A] text-base">Published</p>
              </motion.div>

              {/* Floating stat — bottom left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-8 glass-card px-3 py-2 z-20"
              >
                <p className="font-mono text-[10px] text-[#94A3B8] tracking-wider">Graduation</p>
                <p className="font-heading font-bold text-[#FFD600] text-base">2028</p>
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
            <span className="font-mono text-[10px] tracking-widest text-[#94A3B8]/50 uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#F7931A]/50 to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}