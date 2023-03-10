/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        darkBlue: "#03045E",
        lightYellow: "#FBF8CC",
        darkYellow: "#F5EE84",
        darkBrown: "#474306",
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1500px",
      },
    },
  },

  plugins: [],
};
