/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "body_image":
        "url('/src/Weather/media/bg1.jpg')",
      "left":"url('/src/Weather/media/right.jpg')"}
    },
  },
  plugins: [],
}