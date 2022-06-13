module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['"Raleway"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif']
      },
      colors: {
        'main': 'hsl(218, 28%, 13%)',
        'cyan': 'hsl(176, 68%, 64%)',
        'n-blue': 'hsl(198, 60%, 50%)',
        'testi': 'hsl(219, 30%, 18%)'
      }
    },
  },
  plugins: [],
}