// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '700': '#22262e',
          '800': '#1e2129',
          '900': '#181b21',
        }
      }
    }
  }
}
