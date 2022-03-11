module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Outfit': ['Outfit'],
      },
      colors: {
        'dark-blue-body': '#14253D',
        'dark-blue-card': '#1B335A', 
        'soft-blue': '#8BACDA',
        'cyan': '#00FFF7',
      },
      screens: {
        'sm': '375px',
        // => @media (min-width: 375px) { ... }
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      boxShadow: {
        'shadow-1': '0px 8px 2px 6px #000000',
      },
    }, 
  },
  plugins: [],
} 
