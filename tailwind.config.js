/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 2px 4px rgba(0, 0, 0, 0.2)'
      },
      colors: {
        'primary': '#1C597C',
        'secondary': '#E2EBF4',
        'secondary-light': '#E2EBF4',
        'third': '#1C597C',
        'secondary-dark': '#1C597C',
        'dark-blue': '#1C597C',
        'footer': '#1C597C',
        'gray': '#F0F1F8',
        'error': 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}