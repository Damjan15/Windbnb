/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EB5757",
        dark: "#333333",
        light: "#F2F2F2",
        gray: "#828282",
        darkGray: "#4F4F4F"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif']
      }
    },
  },
  plugins: [],
}
