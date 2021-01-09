const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.warmGray,
      'gray-dark': colors.warmGray[800],

      yellow: colors.amber,
      pink: colors.pink,
      indigo: colors.indigo,
      blue: colors.blue,
      green: colors.green,
      red: colors.red,

      primary: '#e01f1f',
      red: '#e01f1f',
      'red-dark': '#900808',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
