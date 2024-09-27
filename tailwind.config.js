/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
     'height':{
          '80':'340px'
      },
      'width':{
        '60':'225px',
        '120':'450px'
      },
      'fontfamily':{
        'romans':['"roboto Proxima Nova"']
      },
      'font-size':{
        sm:'0.5rem',
        base:'1.2rem'
      }
    },
  },
  plugins: [],
}

