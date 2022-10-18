/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"BadaBoom BB"'],
        'display': ['"KG HAPPY"']
      },
      colors: {
        'blue': '#5683c1',
        'gold': '#ddad3b',
        'fushia': '#db8dcb',
        'salmon': '#b43e3e',
        'cyan': '#88ccd2'
      }
    },
  },
  plugins: [],
}