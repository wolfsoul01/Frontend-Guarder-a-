/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
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
  plugins: [
    import('flowbite/plugin')
  ],
}