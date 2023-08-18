/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "source-serif-pro": ['"Source Serif Pro"', "serif"],
      },
    },
  },
  plugins: [],
};
