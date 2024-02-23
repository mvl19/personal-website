/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeup: {
          '0%':{
            opacity: 0,
            transform: 'translateY(25px)',
          },
          '50%':{
            opacity:0,
          },
          '100%':{
            opacity: 1,
            transform: 'translateY(0px)'
          }
        },
        popout: {
          '0%':{
            opacity:0,
            transform: 'scale(0.9,0.9)'
          },
          '100%':{
            opacity:1,
            transform: 'scale(1,1)'
          }
        }
      },
    },
  },
  plugins: [],
}

