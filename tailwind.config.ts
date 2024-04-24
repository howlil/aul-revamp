import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "100": "#3ECF8E",
        "200": "#2F2F2F",
        "300": "#D9D9D9",
        "400": "#71DCAA",
        "500": "#BCBCBC",
        "600":"#1C1C1C",
      },
    },
  },
  plugins: [],
};
export default config;
