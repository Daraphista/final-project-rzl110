/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "jose-rizal": "url('../public/jose-rizal-1.jpeg')",
        "philippine-flag": "url('../public/philippine-flag.jpg')",
        volcano: "url('../public/volcano.jpg')",
      },
    },
  },
  plugins: [],
};
