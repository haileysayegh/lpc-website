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
          50: '#f4f7f7',
          100: '#e8efef',
          200: '#c9dcdc',
          300: '#a9c9c9',
          400: '#6aa3a3',
          500: '#2a7d7d',
          600: '#256f6f',
          700: '#1f5d5d',
          800: '#184b4b',
          900: '#133d3d'
        }
      }
    }
  },
  plugins: []
}


