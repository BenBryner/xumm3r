import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        fg: "var(--color-text-on-bg)",
        yellow: "var(--color-nav-hover-yellow)",
        blue: "var(--color-link-hover-blue)",
        surface: "var(--color-surface-tint)",
        outline: "var(--color-surface-outline)",
        "outline-hover": "var(--color-surface-outline-hover)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        meta: ["var(--font-meta)"]
      }
    }
  },
  plugins: []
};

export default config;
