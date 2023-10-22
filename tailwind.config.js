/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'color': '#FFFFFF',     // Color blanco
        'color-uno': '#65AFFF',
        'color-dos': '#274060',
        'color-tres': '#5899E2',
        'color-cuatro': '#3139FF',  // Color #3139FF
        'color-cinco':'#6F73D2',
      },

      textColor: {
        'color-cuatro': '#3139FF',
      },
      
    },
  },
  variants: {},
  plugins: [],
};

