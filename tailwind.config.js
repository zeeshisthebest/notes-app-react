/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/build/**/*.html",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swanwhite: "#f7f1e3",
        'hot-stone': "#aaa69d",
        mandarin: '#ffb142',
        'synthetic-pumkin': "#ff793f",
        'chilean-fire': "#cd6133",
        'fluorescent-red': '#ff5252',
        'eye-of-new': "#b33939",
        'jackson-purple': "#40407a",
        'lucky-point': "#2c2c54",
        'c64-purple': "#706fd3",
        ochre: "#cc8e35",
        butter: "#ffda79"
      }
    },
  },
  plugins: [],
}
