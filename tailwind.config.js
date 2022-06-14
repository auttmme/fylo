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
        'testi': 'hsl(219, 30%, 18%)',
        'intro-blue': 'hsl(217, 28%, 15%)',
        'footer': 'hsl(216, 53%, 9%)'
      }
    },
  },
  plugins: [],
}