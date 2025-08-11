/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.html',
    './docs/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF6EF',   /* cream */
          100: '#F3EDE0',  /* light cream */
          200: '#E8DECA',  /* warmer cream */
          300: '#D8C9A9',  /* medium cream */
          400: '#87CEEB',  /* baby blue */
          500: '#6BA5D1',  /* medium baby blue */
          600: '#5B8FC1',  /* darker baby blue */
          700: '#4A7AB0',  /* deep baby blue */
          800: '#3A659F',  /* very dark baby blue */
          900: '#2A508E'   /* darkest baby blue */
        },
        accent: {
          400: '#E6E6FA',  /* light lilac */
          500: '#D8BFD8',  /* medium lilac */
          600: '#C8A2C8'   /* darker lilac */
        }
      }
    }
  },
  plugins: []
}


