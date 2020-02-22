// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
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
