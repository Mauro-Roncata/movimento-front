
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Essencial para o React
  ],
  theme: {
    extend: {
      colors: {
        'jade-green': '#5d714a', // Verde oliva extraído da imagem
        'jade-light': '#f3f4f0', // Tom off-white para os campos
        'jade-accent': '#FBE2BF',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}