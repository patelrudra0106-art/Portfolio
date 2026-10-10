/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        dark: '#0C0C0C',
        lightText: '#D7E2EA',
        gradientStart: '#646973',
        gradientEnd: '#BBCCD7',
      },
      borderRadius: {
        'card': '40px',
        'card-sm': '50px',
        'card-md': '60px',
      },
    },
  },
  plugins: [],
}
