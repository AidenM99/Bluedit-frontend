/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ['"Noto Sans"', "sans-serif"],
      },
      backgroundImage: {
        art: "url(/src/media/images/art.webp)",
      },
    },
  },
  plugins: [],
};
