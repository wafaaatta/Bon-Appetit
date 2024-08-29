/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors : {
        'first-color' : "#87500D" ,
        'second-color' : "#87500Db3" ,}
    },
  },
  plugins: [],
}

