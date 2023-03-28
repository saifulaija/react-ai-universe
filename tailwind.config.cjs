/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#0099e5",
        
"secondary": "#ff4c4c",
        
"accent": "#34bf49",
        
"neutral": "#1B1D32",
        
"base-100": "#EEF0F1",
        
"info": "#34B3E5",
        
"success": "#77E9D8",
        
"warning": "#E8C126",
        
"error": "#DA462F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
