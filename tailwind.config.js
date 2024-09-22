/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Jakarta"],
        geist: ["Geist"],
        bebas: ["Bebas"],
      },
      aspectRatio: {
        "1.5/1": "1.5/1",
      },
    },
  },
  plugins: [],
};
