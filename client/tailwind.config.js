/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 3px 2px 0px rgba(203,203,203,255)',
        '4xl': '0 3px 2px 0px rgba(203,203,203,0.6)',
      },
      colors: {
        deepblue: "#074576"
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"]
      },
      screens: {
        xs: "480px",
        s: "620px",
        sm: "768px",
        md: "1060px",
        xl: "1360px",
        xxl: "1440px"
      },
      backgroundImage: {
        'hero': "url('./src/assets/projects/project.jpg')",
      }
    },
  },
  plugins: [],
}