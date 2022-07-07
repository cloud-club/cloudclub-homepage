/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{jsx,js}', './public/**/*.html'],
  darkMode: true,
  theme: {
    extend: {},
    minWidth: {
      logo: '8rem',
    },
    minHeight: {
      logo: '2rem',
    },
  },
  variants: {},
  plugins: [],
};
