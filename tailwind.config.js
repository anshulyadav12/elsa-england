/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A6B', // navy blue
        accent: '#F5A623',  // gold
      },
    },
  },
  plugins: [],
}
