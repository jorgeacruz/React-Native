/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/App/**/*{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#ff0",
        "secondary":"#068372"
      },
    },
  },
  plugins: [],
}

