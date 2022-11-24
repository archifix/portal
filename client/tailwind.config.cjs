/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      container: {
        "3xl": "1780px",
        center: true,
      },
    },
  },
  plugins: [],
}
