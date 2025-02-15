/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../node_modules/flowbite/**/*.js", 
  ],
  theme: {
     container:{
      center: true,
      // screens: {
      //   'sm': '640px',
  
      //   'md': '768px',
  
      //   'lg': '1024px',
  
      //   'xl': '1280px',
  
      //   '2xl': '1920px',
      // },
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

