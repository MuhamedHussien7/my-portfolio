import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#1F1D26",
          card: "#25232E",
          surface: "#2B2935",
          primary: "#F5F5F5",
          secondary: "#A7A5AE",
          border: "rgba(255, 255, 255, 0.10)",
          borderHover: "rgba(255, 255, 255, 0.22)",
        },
        accent: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
          cyan: "#06B6D4",
          green: "#10B981",
          orange: "#F97316",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.35)",
        cardHover: "0 10px 30px -5px rgba(0, 0, 0, 0.55)",
        glowBlue: "0 0 25px -5px rgba(59, 130, 246, 0.25)",
        glowPurple: "0 0 25px -5px rgba(139, 92, 246, 0.25)",
        glowCyan: "0 0 25px -5px rgba(6, 182, 212, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
