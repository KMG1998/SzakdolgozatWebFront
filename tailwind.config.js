module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'taxi-blue': '#57A3EF',
        'taxi-to-color':'#CAE2FA',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}