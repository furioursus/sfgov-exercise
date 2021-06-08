module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Rubik", "Frutiger", "Frutiger Linotype", "Univers", "Calibri", "Gill Sans", "Gill Sans MT", "Myriad Pro", "Myriad", "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", "Tahoma", "Geneva", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"]
      },
      colors: {
        "slate-blue": "#1c3e57",
        "grey-l1": "#f8f8f8"
      },
      fontSize: {
        base: ['1.0625rem', '1.5rem']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
