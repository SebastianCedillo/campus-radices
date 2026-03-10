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
        'radices-darker': '#2c1f14',
        'radices-dark':   '#6b4c30',
        'radices-mid':    '#a07850',
        'radices-light':  '#c8a97a',
        'radices-brown':  '#8b6535',
        'radices-gray':   '#f5efe8',
        'radices-cream':  '#faf6f0',
        'radices-text':   '#3d2b1f',
      },
      fontFamily: {
        'display': ['Lora', 'serif'],
        'body':    ['Crimson Text', 'serif'],
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