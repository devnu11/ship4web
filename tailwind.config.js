/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./sea-scout-ship-4.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'ship4-blue': '#00205B',
        'ship4-red': '#C81010',
      }
    },
  },
  plugins: [],
}