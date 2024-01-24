/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,js}"],
  theme: {
    extend: {
      colors: {
        "purple" : "#6A4C93",
        "yellow" : "#FFCA3A",
        "green" : "#8AC926",
        "blue" : "#1982C4",
        "pink" : "#FF595E",
        "yellow-blur" : "rgba(255, 202, 58, 0.5)",
        "green-blur" : "rgba(138, 201, 38, 0.5)"
      }
    },
  },
  plugins: [],
}

