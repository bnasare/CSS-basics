/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Poppins']
      }
    },
    debugScreens: {
      position: ['top', 'left'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}



