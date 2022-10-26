// tailwind.config.js
module.exports = {
  mode: 'jit', // Optionally use just in time engine
  purge: ['./src/**/*.{js,jsx,ts,tsx,css}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#FF8A6A',
        'secondary': '#26373E',
        'variants': '#F5F5F5',
        'yellow': '#F9F871',
      },
      fontFamily: {
        'primary': ['sourceSansProBold', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}