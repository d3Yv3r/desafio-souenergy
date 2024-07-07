/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        gray: {
          100: "#e5e5e5",
          200: "#403d39",
          300: "#252422",
        },
        black: {
          100: "#0a0908",
          200: "#000000",
        },
        primary: {
          100: "#3da5d9",
          200: "#2364aa",
        },
        secondary: {
          100: "#fec601",
          200: "#ea7317",
        },
      },
    },
  },
  plugins: [],
};
