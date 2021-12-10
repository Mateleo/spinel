module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "dmserif": ["DM Serif Display", "serif"],
        "dm": ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}