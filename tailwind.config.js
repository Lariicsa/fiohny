
export default {
  content: ['./src/**/*.{html,js}',  './src/**/*.vue',],
  darkMode: 'class',
  theme: {
    colors: {
 
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}