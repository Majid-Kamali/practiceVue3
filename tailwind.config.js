const colors =require('tailwindcss/colors');

module.exports = {
  purge: {
    mode:'layers',
    content:['./public/**/*.html','./src/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        emerald:colors.emerald,
        gray:colors.trueGray
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce']
    },
  },
  plugins: [],
}
