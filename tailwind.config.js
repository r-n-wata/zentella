/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'homepage': "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/public/images/homepage.JPG')",
        'about': "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/public/images/background-wood.avif')",
      }
    },
    screens:{
      'tablet': '500px',
      'desktop': '1024px'
    },
    fontFamily: {
      'inter': ['"Inter"', 'ui-serif'],
      'italiana': ['"Italiana"'],
      'mink': ['"Mink"']
    }
  },
  plugins: [],
}
