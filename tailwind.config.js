/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens:{
          xs: '375px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1140px',
          "2xl" :'1140px'
        },
      },
      colors: {
        headerBg: '#1f2427',
        btnBg: '#ffbe33',
        btnBgHover: '#e69c00',
        primary: '#ffbe33',
        secondary: '#222831',
        danger: "#ff0000"
      }
    },
  },
  plugins: [],
}
