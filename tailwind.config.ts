import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: "#F4F0E8",
        ink: "#131210",
        brass: "#C2882B",
        concrete: "#E5E0D6",
        steel: "#6B6560",
        "stone-dark": "#E8E3D9",
        "ink-light": "#2A2824",
        "brass-light": "#D4A04A",
        "brass-dark": "#9E6E1E",
      },
      fontFamily: {
        display: ["var(--font-big-shoulders)", "sans-serif"],
        feature: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-epilogue)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 9rem)", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2rem, 4vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        "feature-lg": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 8rem)",
        "section-sm": "clamp(3rem, 6vw, 5rem)",
      },
      maxWidth: {
        site: "1400px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "word-reveal": {
          "0%": { clipPath: "inset(0 0 100% 0)" },
          "100%": { clipPath: "inset(0 0 0% 0)" },
        },
        "scale-x": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "word-reveal": "word-reveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-x": "scale-x 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-ring": "pulse-ring 1.8s ease-out infinite",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      fontWeight: {
        "300": "300",
        "800": "800",
        "900": "900",
      },
    },
  },
  plugins: [forms],
};

export default config;
