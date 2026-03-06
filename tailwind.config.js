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
        'radices-darker': '#1e3d0f',
        'radices-dark':   '#4a7d3e',
        'radices-mid':    '#5a8e2a',
        'radices-light':  '#8cc543',
        'radices-brown':  '#8b6535',
        'radices-gray':   '#f5f5f0',
        'radices-cream':  '#faf9f5',
        'radices-text':   '#333333',
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