import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./data/**/*.{ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        void: "#030304",
        surface: "#0F1115",
        foreground: "#FFFFFF",
        muted: "#94A3B8",
        border: "#1E293B",
        "bitcoin-orange": "#F7931A",
        "burnt-orange": "#EA580C",
        "digital-gold": "#FFD600",
      },

      fontFamily: {
        heading: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },

      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        xl: "0.75rem",
        lg: "0.5rem",
        full: "9999px",
      },

      boxShadow: {
        "glow-orange": "0 0 20px -5px rgba(234, 88, 12, 0.5)",
        "glow-orange-lg": "0 0 40px -10px rgba(247, 147, 26, 0.4)",
        "glow-gold": "0 0 20px rgba(255, 214, 0, 0.3)",
        "card-hover": "0 0 30px -10px rgba(247, 147, 26, 0.2)",
      },

      animation: {
        "spin-slow": "spin 12s linear infinite",
        "spin-slow-reverse": "spin 18s linear infinite reverse",
        "float": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "pulse-glow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      backgroundImage: {
        "bitcoin-gradient": "linear-gradient(to right, #EA580C, #F7931A)",
        "gold-gradient": "linear-gradient(to right, #F7931A, #FFD600)",
        "void-gradient": "linear-gradient(to bottom, #030304, #0F1115)",
      },
    }
  },

  plugins: []
};

export default config;