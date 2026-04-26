import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#2dd4bf",
        accent: "#f0fdfa",
        background: "#ffffff",
        foreground: "#134e4a",
      },
    },
  },
  plugins: [],
};

export default config;
