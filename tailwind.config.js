/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        txtColor :{
          100: "#C4C4C4",
          200: "#058B8C",
          300: "#e9e0e07d"
        }    
      }
    },
  },
  plugins: [],
}
