/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float':    'float 6s ease-in-out infinite',
        'fade-in':  'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
      },
    },
  },
  plugins: [],
}