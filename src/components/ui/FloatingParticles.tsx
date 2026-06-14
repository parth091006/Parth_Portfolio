"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => ({
        id: index,
        x: (index * 73) % 1600,
        y: (index * 53) % 900,
        duration: 6 + (index % 5),
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-blue-400/30"
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            y: [particle.y, particle.y - 80],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

    </div>
  );
}