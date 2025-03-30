/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#00FF00",
        tertiary: "#0000FF",
        light: {
          100: "#F0F0F0",
          200: "#E0E0E0",
          300: "#D0D0D0",
        }
      }
    },
  },
  plugins: [],
}