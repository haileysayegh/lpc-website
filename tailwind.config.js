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
          50: '#FAF6EF',
          100: '#F3EDE0',
          200: '#E8DECA',
          300: '#D8C9A9',
          400: '#A9C2B4',
          500: '#3A6B59',
          600: '#2E5E4E',
          700: '#234C3E',
          800: '#1B3C31',
          900: '#132B23'
        },
        accent: {
          400: '#F6A64A',
          500: '#E9892A',
          600: '#CC6E12'
        }
      }
    }
  },
  plugins: []
}


