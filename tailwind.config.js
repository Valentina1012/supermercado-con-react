/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '10px 20px 12px rgba(0, 0, 0, 0.5)'
      },
      boxShadow: {
        'iconMenuOpen': '0px -8px 0px rgba(255, 255, 255, 1)',
        'iconMenuClosed': '0px 0x 0px rgba(255, 255, 255, 1)',
      },
      rotate: {
        'minus45': '-45deg',
      },
      inset: {
        'cuatroquintos': '105em'
      }
    },
  },
  plugins: [],
}