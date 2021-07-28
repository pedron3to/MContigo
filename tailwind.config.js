module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      primary: '#265e6c',
      text: '#183D46',
      title: '#419fb9',
      white: '#fff',
      secondary: '#d4649a',
      quote: '#fff1f7',
      pquote: '#7e3b5b',
      black: '#414141',
      figurecaption: '#7d8791',
      figure: '#f1f2f3',
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
