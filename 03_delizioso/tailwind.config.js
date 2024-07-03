/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF8A00",
        green: "#3FA72F",
        dark: "#311F09",
        brown: "#5C4529",
        light: "#D0CCC7",
      },
      fontFamily: {
        tinos: ["Tinos", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
    screens: {
      xs: "425px",
      ss: "575px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
