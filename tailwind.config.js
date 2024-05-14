/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "media",
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

