/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#ffd44c",
        second: "#e9c051",
      },
    },
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      courgette: ["Courgette", "cursive"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
