
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: '2px 2px rgba(0, 0, 0, 0.25)', // Default shadow
        sm: '1px 1px rgba(0, 0, 0, 0.1)',       // Small shadow
        lg: '4px 4px rgba(0, 0, 0, 0.35)',       // Large shadow
      },
      boxShadow:{
        'custom-lg':'inset 0 2px 4px blue,0 4px 6px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-sm': {
          textShadow: '1px 1px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '2px 2px 10px blue',
        },
        '.text-shadow-xl': {
          textShadow: '8px 8px rgba(0, 0, 0, 0.35)',
        },
        '.text-shadow-2xl': {
          textShadow: '12px 12px rgba(0, 0, 0, 0.35)',
        },
        '.box-shadow-lg-light': { // Corrected class name
        boxShadow: 'inset 0 0  25px 5px lightblue,5px 10px 10px 2px gray',
      },
      '.box-shadow-lg-dark': { // Corrected class name
        boxShadow: 'inset 0 0  100px 0px #1f1f1f,2px 2px 10px blueviolet',
      },
      });
    },
  ],
}

