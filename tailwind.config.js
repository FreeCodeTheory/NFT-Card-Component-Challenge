module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-blue-body': '#14253D',
        'dark-blue-card': '#1B335A',
      },
      screens: {
        'mobile': '375px',
        // => @media (min-width: 375px) { ... }
  
        'desktop': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      boxShadow: {
        'shadow-1': '0px 8px 2px 6px #000000',
      }
    },
  },
  plugins: [],
}
