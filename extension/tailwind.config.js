/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{tsx,ts,html}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}