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
          400: '#2D501F',  /* forest green */
          500: '#1F3A15',  /* darker forest */
          600: '#1A3212',  /* deep forest */
          700: '#152A0F',  /* very dark forest */
          800: '#0F1F0B',  /* near black forest */
          900: '#0A1508'   /* black forest */
        },
        accent: {
          400: '#000000',  /* black */
          500: '#000000',  /* black */
          600: '#000000'   /* black */
        }
      }
    }
  },
  plugins: []
}


