/** @type {import('tailwindcss').Config} */
export default {
  content: 
    ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#FAFAFCCC',
        'secondary': '#282828'
      },
      textColor: {
        'primary': "#1d1d1f",
        'Secondary': "#0066CC"
      }
    },
  },
  plugins: [],
}

