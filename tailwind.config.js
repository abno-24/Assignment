/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'curious-blue': '#2487ce',
        'dark-blue': '#124265',
        'btn': '#2487ce',
      },
      fontFamily:{
        'poppins': 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
}