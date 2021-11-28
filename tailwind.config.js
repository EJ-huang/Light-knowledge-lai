module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundColor: theme => ({
       ...theme('colors'),
       'secondary': '#056077',
       'third' : '#324C5D',
       'danger': '#e3342f',
       'dark_black': '#3C4A57',
       'advantage': '#E2EEEC',
       'orange': '#EB8E4E',
       'pink-light': '#FE8A8A',
       'fifth': ' #CBCBCB',
       'sixth': ' #F5F6F6',
       'seventh': ' #3E3A39'
      }),
      textColor: theme => theme('colors'),
      textColor: {
       'buffett': '#FA8888',
       'secondary': '#056077',
       'third' : '#324C5D',
       'dark_black': '#3C4A57',
       'pink-light': '#FE8A8A',
       'fifth': ' #CBCBCB',
       'gold': ' #F8CA7D'
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
