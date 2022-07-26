/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{jsx,js}', './public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            ul: {
              'li::marker': {
                color: 'black',
              },
            },
            strong: {
              color: 'rgb(33, 136, 243)',
            },
            hr: {
              marginTop: '3em',
              marginBottom: '1em',
              border: '1px solid rgb(228, 227, 226)',
            },
          },
        },
      },
      maxWidth: {
        logo: '200px',
      },
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
