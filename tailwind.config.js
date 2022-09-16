/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        optivenus: ["Optivenus", "sans-serif"],
        sgLight: ["sg-light", "sans-serif"],
        sgRegular: ["sg-regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
