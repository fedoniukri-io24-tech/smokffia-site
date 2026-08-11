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
        sans: ["Inter", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
