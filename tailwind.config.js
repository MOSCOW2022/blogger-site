/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass"],
        ubuntu: ["Ubuntu"],
      },
    },
    colors: {
      Lightred: "hsl(356, 100%, 66%)",
      Verylightred2: "hsl(355, 100%, 74%)",
      Verydarkblue: "hsl(208, 49%, 24%)",

      White: "hsl(0, 0%, 100%)",
      Grayishblue: "hsl(240, 2%, 79%)",
      Verydarkgrayishblue: "hsl(207, 13%, 34%)",
      Verydarkblackblue: "hsl(240, 10%, 16%)",

      Verylightred: "hsl(13, 100%, 72%)",
      Lightred: "hsl(353, 100%, 62%)",

      Verydarkgrayblue: "hsl(237, 17%, 21%)",
      Verydarkdesaturatedblue: "hsl(237, 23%, 32%)",
    },
  },

  plugins: [],
};
