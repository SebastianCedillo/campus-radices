/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'radices-darker': '#3A322B',
        'radices-dark':   '#A67C52',
        'radices-mid':    '#B08968',
        'radices-light':  '#C6A47A',
        'radices-cream':  '#EDE5DE',
        'radices-gray':   '#F5F0EB',
        'radices-text':   '#3A322B',
        'radices-btn-hover': '#9C7255',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sub':     ['Cormorant', 'serif'],
        'body':    ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card':       '0 2px 16px rgba(0,0,0,0.07)',
        'card-lg':    '0 8px 32px rgba(0,0,0,0.12)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.16)',
      },
    },
  },
  plugins: [],
};
