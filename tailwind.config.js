/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "jose-rizal": "url('/jose-rizal-1.jpeg')",
        "philippine-flag": "url('/philippine-flag.jpg')",
        volcano: "url('/volcano.jpg')",
      },
    },
  },
  plugins: [],
};
