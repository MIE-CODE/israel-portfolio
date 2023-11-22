/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e9e9e9",
          200: "#191919",
          300: "#757575",
        },
        secondary: {
          100: "#dac2ba",
          200: "#67b967",
        },
      },
      fontFamily: {
        body: ["Oxanium"],
      },
      gridTemplateColumns: {
        "2fr-1fr": "2fr 1fr",
      },
    },
  },
  plugins: [],
};
