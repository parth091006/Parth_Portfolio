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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "#2563EB",
          foreground: "#FFFFFF"
        },

        secondary: {
          DEFAULT: "#1E293B",
          foreground: "#FFFFFF"
        },

        accent: {
          DEFAULT: "#3B82F6",
          foreground: "#FFFFFF"
        }
      },

      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem"
      },

      boxShadow: {
        glow: "0 0 30px rgba(37,99,235,0.25)"
      }
    }
  },

  plugins: []
};

export default config;