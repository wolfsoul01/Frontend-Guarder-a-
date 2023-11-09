/** @type {import('tailwindcss').Config} */
import flow from 'flowbite/plugin'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#FFD700',
        dashboard: {
          100: '#FFF4F4',
          200: '#F7E6C4',
          300: '#F1C376',
          400: '#606C5D'
        },
        dashboard2: {
          100: '#CCD0CF',
          200: '#9BA8AB',
          300: '#253745',
          400: '#06141B'
        }
      },
      textColor: {
        primary: '#FFD700'
      }
    }
  },
  plugins: [flow]
}
