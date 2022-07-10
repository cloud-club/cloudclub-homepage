/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{jsx,js}', './public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'default-cover': 'url("/assets/default-cover.jpeg")',
      },
    },
    minWidth: {
      logo: '8rem',
    },
    minHeight: {
      logo: '2rem',
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
