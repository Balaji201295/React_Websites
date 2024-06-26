/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#274C5B",
        green: "#7EB693",
        yellow: "#EFD372",
        gray: "#D4D4D4",
        light: "#F9F8F8",
        teal: "#EFF6F1",
        dark: "#525C60",
      },
      fontFamily: {
        tail: ["Yellowtail", "cursive"],
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
