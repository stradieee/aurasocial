/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aura: {
          50: '#f9f9fb',
          100: '#f1f1f4',
          800: '#18181b',
          900: '#09090b',
        }
      }
    },
  },
  plugins: [],
}
