/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // All files in the `pages` folder
    "./components/**/*.{js,ts,jsx,tsx}", // All files in the `components` folder
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js 13+ `app` directory
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          green: "#00FF00",
          black: "#000000",
          gray: "#1E1E1E",
        },
      },
      fontFamily: {
        mono: ["Courier New", "monospace"],
      },
    },
  },  
  plugins: [],
}

