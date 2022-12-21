/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#182327',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        cta_c:'#FFD36A',
        testtimonial_c:'#80E2FF',
        subtext:'#5D696D',
        text_c:'#464646',
      },
        fontFamily:{
          manrope:['Manrope','sans-serif'],
        },
    },
    screens:{
      xs:'420px',
      ss:'620px',
      sm:'768px',
      md:'1060px',
      lg:'1200px',
      xl:'1700px',
    }
  },
  plugins: [],
}
