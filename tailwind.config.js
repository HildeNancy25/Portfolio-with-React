/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px'
    },
    extend: {
      backgroundImage:{
        'homebg': "url['bg.jpg']",
      },
      blur:{
        sm:'1px',
      },
    },
  },
  plugins: [],
}

