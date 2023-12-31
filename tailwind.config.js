module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: "Roboto, Arial, sans-serif",
      serif: "Merriweather, Georgia, serif",
    },
    extend: {
      fontFamily:{
        'anton': ['Anton' , 'sans-serif'],
        'heebo':['Heebo' , 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [],
};
