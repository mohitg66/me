/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#061245",
        "blue": "#050E38",
        "dark-blue": "#020D29",
        "darker-blue": "#020512",
        "darkest-blue": "#030A26"
      },
      fontFamily: {
        "lato": ["Lato", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}