/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/**.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#26C06A",
        buttons: "#E38B29",
        grey1: "#43484d",
        grey2: "#5e6977",
        grey3: "#86939e",
        grey4: "#bdc6cf",
        grey5: "#e1e8ee",
        cardComment: "#86939e",
        cardBackground: "#fff",
        headerText: "#fff",
        lightgreen: "#66DF48",
      },
    },
  },
  plugins: [],
};
