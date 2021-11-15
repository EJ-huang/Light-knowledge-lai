module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundColor: theme => ({
       ...theme('colors'),
       'secondary': '#46AFB0',
       'danger': '#e3342f',
       'dark_black': '#3C4A57',
       'advantage': '#E2EEEC',
       'orange': '#EE7E00',
       'pink-light': '#FE8A8A',
      }),
      textColor: theme => theme('colors'),
      textColor: {
       'buffett': '#FA8888',
       'secondary': '#46AFB0',
       'dark_black': '#3C4A57',
       'pink-light': '#FE8A8A',
     },
     width: {
       '400': '25rem'
     },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
