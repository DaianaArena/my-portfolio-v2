/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  variants: {
    display: ['group-focus'],
    opacity: ['group-focus'],
    inset: ['group-focus']
  },
  plugins: [],
}
