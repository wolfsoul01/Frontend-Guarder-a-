/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:"#FFD700"
      },
      textColor:{
        primary:"#FFD700"
      }
    },
  },
  plugins: [],
}