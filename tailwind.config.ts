import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06090A",
        surface: {
          DEFAULT: "#0B1012",
          card: "#0D1316",
          elevated: "#121A1E",
          hover: "#172227",
        },
        primary: {
          DEFAULT: "#B62C2C",
          hover: "#0C6791",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0C6791",
          hover: "#095375",
          foreground: "#E6F1F0",
        },
        muted: {
          DEFAULT: "#8B9C9B",
          foreground: "#8B9C9B",
        },
        text: {
          primary: "#E6F1F0",
          secondary: "#C2D1D0",
          muted: "#8B9C9B",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.05)",
          hover: "rgba(255, 255, 255, 0.15)",
          accent: "#B62C2C",
          blue: "#0C6791",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(182, 44, 44, 0.15)",
        "glow-blue": "0 0 25px -5px rgba(12, 103, 145, 0.2)",
        subtle: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.85)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config;
