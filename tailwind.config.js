/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./views/**/*.{html,js,ejs}`],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['cupcake'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

