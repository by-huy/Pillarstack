/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'display': ['clamp(2.75rem, 4.25vw, 4.5rem)', {
        lineHeight: '96.5%',
        letterSpacing: '-3.5%',
        fontWeight: '700'
      }],
      'h1': '3.5rem',
      'h2': '3rem',
      'h3': '2.5rem',
      'h4': '2rem',
      'h5': '1.5rem',
      'h6': '1.25rem',
      'base': '1.125rem',
      'sm': '1rem',
      'xs': '0.875rem',
      'xxs': '0.75rem',
    },
    colors: {
      'transparent': 'transparent',
      'bg': '#0C0D0E',
      'dark-charcoal': '#101214',
      'super-dark-gray': '#1A1A1A',
      'dim-gray': '#555555',
      'light-gray': '#878787',
      'gray': '#D1D1D1',
      'accent': '#F7F7F7',
      'text': '#CCCCCC',
      'primary': '#EFECE6',
      'outline': '#D1D1D1',
      'gradient': '#D0C7B3',
      'gradient2': '#968A73',
      'gradient3': '#675E4C',
    },
    extend: {
      fontFamily: {
        overused_grotesk: ['var(--font-overused_grotesk)'],
      },

      letterSpacing: {
        'close': '-3.5%',
        'base': '-1%'
      },
      lineHeight: {
        'base': '150%'
      },
      boxShadow: {
        'shine': '0px 0px 58px 20px rgba(85, 85, 85, 0.20)',
        'bright': '0px 0px 58px 20px rgba(85, 85, 85, 0.35)'
      },
      borderOpacity: {
        '15': '0.15'
      },
      transitionTimingFunction: {
        'in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
