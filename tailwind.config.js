/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Poppins']
      },
      colors: {
        mainColor: '#212f49'
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



