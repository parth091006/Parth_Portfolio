import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
    "./src/data/**/*.{ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        void: "#020B18",
        surface: "#0D1B2E",
        "surface-elevated": "#102034",
        foreground: "#E2F4FF",
        muted: "#5B7A91",
        border: "rgba(0, 212, 255, 0.12)",
        cyan: "#00D4FF",
        violet: "#7B2FFF",
        "success-green": "#39FF14",
      },

      fontFamily: {
        heading: ["var(--font-heading)", "Syne", "sans-serif"],
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
        "glow-cyan": "0 0 20px -5px rgba(0, 212, 255, 0.5)",
        "glow-cyan-lg": "0 0 40px -10px rgba(0, 212, 255, 0.4)",
        "glow-violet": "0 0 20px rgba(123, 47, 255, 0.3)",
        "card-hover": "0 0 30px -10px rgba(0, 212, 255, 0.2)",
      },

      animation: {
        "spin-slow": "spin 12s linear infinite",
        "spin-slow-reverse": "spin 18s linear infinite reverse",
        "float": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "pulse-glow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "orbit-dot": "orbit-dot 8s linear infinite",
        "orbit-dot-2": "orbit-dot-2 8s linear infinite",
        "orbit-dot-3": "orbit-dot-3 8s linear infinite",
      },

      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #00D4FF, #7B2FFF)",
        "cyan-gradient": "linear-gradient(to right, #00D4FF, #7B2FFF)",
        "void-gradient": "linear-gradient(to bottom, #020B18, #0D1B2E)",
      },
    }
  },

  plugins: []
};

export default config;
