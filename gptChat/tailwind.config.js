/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        //text color
        secondarytxt: "#424242",
        tertiarytxt: "#676767",
        placeholderTxt: "rgba(0,0,0,.5)", // also textareaBorder(lite)

        //background color

        sidebarDark: "#b4b4b4",
        mainDark: "#242424",

        //border
        border: "#AEB1B0",
        borderDark: "#5d605f",
      },
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontSize: {
        normal: "0.875rem",
      },
    },
  },
  plugins: [],
};
