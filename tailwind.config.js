module.exports = {
  purge: ['./src/pages/**/*.{tsx}', './src/components/**/*.{tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#81B29A',
      secondary: '#F4F1DE',
      danger: '#E07A5F',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
