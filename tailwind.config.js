/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:"rgb(252, 211, 77)"
      },
      textColor:{
        primary:"rgb(252, 211, 77)"
      }
    },
  },
  plugins: [],
}