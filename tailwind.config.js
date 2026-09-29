/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#E91E63',
        'primary-dark': '#AD1749',
        silver: '#C0C0C0',
        canvas: '#F6F6F8',
      },
    },
  },
  plugins: [],
};
