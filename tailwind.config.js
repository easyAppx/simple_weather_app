/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors
        skyBlue: '#87CEEB',
        lightBlue: '#85d6f6',
        darkBg: 'rgba(0, 0, 0, 0.4)',

        // Temperature Colors
        warm: '#FFD700',
        cool: '#4169E1',
        cold: '#00BFFF',

        // Weather Conditions
        sunny: '#FFD700',
        cloudy: '#778899',
        rainy: '#4682B4',
        snowy: '#FFFFFF',
        thunderstorm: '#800000',

        // Text Colors
        darkGray: '#333333',
        white: '#FFFFFF',

        // Button/Action Colors
        green: '#008000',
        red: '#FF4500',
      },

      boxShadow: {
        light_shadow: '8px 10px 6px rgba(0, 0, 0, 0.1)',
        dark_shadow: '8 10px 6px rgba(255, 255, 255, 0.1)',
      },
      
      fontFamily: {
        custom: ['Poppins', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

