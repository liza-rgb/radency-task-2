/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E7EAF5",
        secondary: "#999",
        semiTransparent: "rgba(0, 0, 0, 0.267)"
      },
      fontFamily: {
        main: "Poppins, sans-serif"
      }
    },
  },
  plugins: [],
}
