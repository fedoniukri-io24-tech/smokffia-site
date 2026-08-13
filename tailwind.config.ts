import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: "#CDFF00",
          300: "#d4ff4d",
        },
        pink: {
          DEFAULT: "#FF2D9B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        unbounded: ["var(--font-unbounded)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
