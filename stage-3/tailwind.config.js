/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/comp/**/*.{html,js}",
    "./src/pages/**/*.{html,js}",
    "./src/**/*.{html,js}"],
  theme: {
    colors:{
      primary : "#A02279",
      modal: "hsla(0, 0%, 25%, 0.3)",
      white: "#ffffff",
      borderColor:"hsla(198, 16%, 84%, 1)",
      inputBorder:"hsla(0, 0%, 64%, 1)",
      imgBorder:"hsla(0, 0%, 84%, 1)",
      settingBorder: "hsla(0, 0%, 70%, 1)"
    },
    extend: {
      spacing: {
        '7vw': '7vw',
        '5vw': '5vw',
        '3vw': '3vw'
      }
    },
  },
  plugins: [],
  
}
