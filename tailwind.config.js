/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sums: {
          green: '#006657',
          'green-dark': '#083c35',
          gold: '#bc955c',
          burgundy: '#691c32',
          paper: '#f7f5ee',
          mist: '#eef3ef',
          ink: '#202522',
          muted: '#5f6761',
          line: '#ded6c5',
          white: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        sums: '0 18px 46px rgba(20, 26, 23, 0.12)',
        'sums-sm': '0 12px 30px rgba(33, 38, 35, 0.08)',
        'sums-lg': '0 10px 30px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
