/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0466C8',
        'deep-blue': '#0353A4',
        'dark-blue': '#023E7D',
        'navy-blue': '#002855',
        'dark-1': '#001845',
        'dark-2': '#001233',
        'gray-1': '#33415C',
        'gray-2': '#5C677D',
        'accent-1': '#7D8597',
        'accent-2': '#979DAC',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};