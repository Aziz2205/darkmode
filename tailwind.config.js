/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        bodybgLight: "#F6F8FF",
        titleClr: "#2B3442",
        darkTextClr: "#697C9A",
        lightWhite: "#FEFEFE",
        textClr: "#4B6A9B",
        btnUsernameClr: "#0079FF",
        bodybgDark: "#141D2F",
        whiteClr: "#FFFFFF",
        hoverDarkClr: "#222731",
        lightRed: "#F74646",
        darkBgClr: "#1E2A47",
      }
    },
    container: {
      padding: "2rem",
    }, 
    screens: {
      lg: "730px",
    },
  },
  plugins: [],
}