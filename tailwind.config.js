/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cars': "url('/build/img/cars.png')"
      },
      colors: {
        'fotter-neutral': '#282828',
        'dark-blue':'#0147FF',
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [require('daisyui'),],
}

