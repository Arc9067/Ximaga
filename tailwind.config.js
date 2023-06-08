/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        primary: ["Roboto Condensed", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
        action: ["Geologica", "sans-serif"],
        Header: ["Header", "sans-serif"],
      },
      colors: {
        bg: "#181C28",
      },
    },
  },
  plugins: [],
};
