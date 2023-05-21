/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      inter: "Inter",
    },
    colors: {
      astra: "#931F6A",
      description: "#797979",
      darkDesc: "#C7C7C7",
      heroBG: "#F4F4F4",
      black: "#000000",
      white: "#FFFFFF",
      feature: "#F2F3F4",
      gray: "#A4A4A4",
      darkMode: "#0E0F1D",
      mainBG: "#F8F8F8",
    },
  },
  plugins: [],
};
