/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent : "transparent",
      primary: {
        main: "#2393B0",
        dark: "#06355F"
      },
      secondary: {
        main: "#23B05B",
        dark: "#23B05B"
      },
      error: {
        main: "#FB2047"
      },
      text: {
        dark: "#01252E",
        main: "#294046",
        blue : "#003666"
      },
      white: {
        main: "#ffffff",
        dark: "#FAFAFA"
      },
      gray: {
        main: "#D4DADE",
        dark: "#A2AFB8"
      }
    }
  },
  plugins: [],
}