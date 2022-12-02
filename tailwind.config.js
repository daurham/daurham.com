/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moond: "#4a4622",
        moonl: "#bdac65",
      },
      // For adding my own fonts / colors / etc.
    },
  },
  plugins: [],
};
