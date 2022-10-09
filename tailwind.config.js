/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./toolkit/assets/hero-bg.jpg')",
        heroMobi: "url('./toolkit/assets/hero-mobi.jpg')",
      },
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
