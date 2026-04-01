import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#0d0f14",
          secondary: "#13151c",
          tertiary: "#1a1d27",
          quaternary: "#1f2235",
        },
        border: {
          subtle: "rgba(255,255,255,0.08)",
          default: "rgba(255,255,255,0.14)",
        },
        accent: {
          DEFAULT: "#3b6ef5",
          light: "#5d8aff",
        },
        text: {
          primary: "#e8eaf2",
          secondary: "#8b90a8",
          muted: "#555a72",
        },
        tag: {
          bg: "rgba(59,110,245,0.12)",
          text: "#7ba3ff",
        },
        success: "#22c78a",
        danger: "#f0614e",
        warning: "#f0a832",
        orange: "#e8521a",
      },
    },
  },
  plugins: [],
};

export default config;
