/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'imgFundo': "url('./assets/img/ceu_nublado.jpg')",
      },
      backgroundColor: {
        'cinzapadrao': 'rgb(37, 51, 71)',
        'hoverButton': 'rgba(18, 24, 34)',
        
        
      },
      screens: {
        mc: '312px',
      },
      fontFamily:{
        roboto1: ['Roboto', 'sans-serif'],
      },
      width: {
        'px410': '410px'
      },
      borderColor:{
        'cinzaClaro': '#c7c7c7'
      },
      letterSpacing: {
        'wide': '2px',
      },
      colors:{
        'cinzaPlaceholcer': 'rgb(218, 212, 212),'
      }

    },
  },
  plugins: [],
}

