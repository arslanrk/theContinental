import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        cutomBlack: '#1C1C1C',
        cutomGold: '#f3cc8a',
        gold: {
          500: '#d4af37',
          400: '#c2a236',
          300: '#a68f32',
        },
      },
      fontFamily:{
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
