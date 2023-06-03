/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/*.{jsx, js, html}", "src/component/*.jsx"],
  theme: {
    extend: {
      colors: {
        background: "#4EACFA",
        gr1: "#1260ae",
        gr2: "#71b3f0",
        paper: "#6CB7FF"
      },
      fontFamily: {
        metropolis: "metropolis"
      },
      gridTemplateRows: {
        currentRow: "repeat(4, max-content)",
        currentRowLg: "repeat(2, max-content)"
      },
      gridTemplateColumns: {
        currentCol: "max-content auto max-content max-content"
      },
      dropShadow: {
        condition: "0 15px 15px rgba(0, 0, 0, 0.3)"
      }
    },
  },
  plugins: []
}