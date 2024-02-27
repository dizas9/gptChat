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
        sidebarDark: "#f9f9f9",
        sidebarDark: "#b4b4b4",
        mainDark: "#242424",
      },
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      fontSize: {
        normal: "0.875rem",
      },
    },
  },
  plugins: [
    require("tailwind-typewriter")({
      wordsets: {
        typewriter: {
          words: [],
          repeat: 0,
        },
      },
    }),
  ],
};
