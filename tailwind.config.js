/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      visibility: ["group-hover"],
      fontFamily: {
        optivenus: ["Optivenus", "sans-serif"],
        sgLight: ["sg-light", "sans-serif"],
        sgRegular: ["sg-regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
