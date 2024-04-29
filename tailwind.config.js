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
        swanwhite: "#aaa69d",
      }
    },
  },
  plugins: [],
}
