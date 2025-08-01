/** @type {import('tailwindcss').Config} */
import react from '@vitejs/plugin-react'
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4299E1',
          DEFAULT: '#3182CE',
          dark: '#2B6CB0',
        },
        secondary: {
          light: '#9F7AEA',
          DEFAULT: '#805AD5',
          dark: '#6B46C1',
        },
      },
    },
  },
  plugins: [react()],
}