/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{html,js}",
    "./src/pages/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary: "hsla(246, 100%, 14%, 1)",
        grayPrimary: "#F9F9F9",
        brightBlue: "#0d60d8",
      },
    },
  },
  plugins: [],
};
