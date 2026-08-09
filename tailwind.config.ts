import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          hover: "var(--color-border-hover)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          contrast: "var(--color-accent-contrast)",
        },
        magic: {
          DEFAULT: "var(--color-magic)",
          soft: "var(--color-magic-soft)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "SF Mono", "monospace"],
      },
      fontSize: {
        micro: "0.625rem",
        overline: "0.6875rem",
        label: "0.8125rem",
        "body-sm": "0.9375rem",
        lead: "1.0625rem",
      },
      spacing: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "40": "10rem",
        "64": "16rem",
      },
      maxWidth: {
        content: "1280px",
        narrow: "720px",
        editorial: "900px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.04)",
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.06)",
        focus: "0 0 0 3px rgba(217, 4, 122, 0.10)",
        "glow-sm": "0 0 12px rgba(217, 4, 122, 0.20)",
        "glow-md": "0 0 24px rgba(217, 4, 122, 0.15)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out": "cubic-bezier(0.45, 0, 0.55, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "400ms",
        slower: "600ms",
      },
      animation: {
        "pulse-dot": "pulse-dot 2s cubic-bezier(0.45, 0, 0.55, 1) infinite",
        "cursor-blink": "cursor-blink 1s step-end infinite",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "confetti-fall": "confetti-fall 2s linear forwards",
        "duck-swim": "duck-swim 10s linear forwards",
        "toast-in": "toast-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "toast-out": "toast-out 0.2s ease forwards",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "confetti-fall": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
        "duck-swim": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(100vw + 40px))" },
        },
        "toast-in": {
          "0%": { opacity: "0", transform: "translateX(-50%) translateY(10px)" },
          "100%": { opacity: "1", transform: "translateX(-50%) translateY(0)" },
        },
        "toast-out": {
          "0%": { opacity: "1", transform: "translateX(-50%) translateY(0)" },
          "100%": { opacity: "0", transform: "translateX(-50%) translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
