const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans' : ['Montserrat', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      backgroundImage: {
        'flatirons': "url('./assets/img/flatirons.jpg')",
        'bookProject': "url('./assets/img/bookProject.png')",
        'bookProject2': "url('./assets/img/bookProject2.png')",
        'mapProject': "url('./assets/img/mapProject.png')",
        'mapProject2': "url('./assets/img/mapProject2.png')",
        'chatProject': "url('./assets/img/chatProject.png')",
        'chatProject2': "url('./assets/img/chatProject2.png')",
      },
      screens: {
        'xs': '350px'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
