/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('./public/img/sanFrancisco.jpg')",
        'bali': "url('./public/img/bali.jpg')",
        'chicago': "url('./public/img/chicago.jpg')",
        'europe': "url('./public/img/europe.jpg')",
        'iceland': "url('./public/img/iceland.jpg')",
        'LA': "url('./public/img/LA.jpg')",
        'miami': "url('./public/img/miami.jpg')",
        'new_york': "url('./public/img/new_york.jpg')",
        'norway': "url('./public/img/norway.jpg')",
        'sanFranciscoDesktop': "url('./public/img/sanFranciscoDesktop.jpg')",
        'seattle': "url('./public/img/seattle.jpg')",
        'switzerland': "url('./public/img/switzerland.jpg')",
        'sydney': "url('./public/img/sydney.jpg')",
        'yosemite': "url('./public/img/yosemite.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secundary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor:{
        'primary': '#CC2D4A',
        'secundary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {
    width: ["responsive","hover","focus"],
    extend: {},
  },
  plugins: [],
}

