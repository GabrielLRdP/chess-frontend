/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}', './index.html'];
export const theme = {
  extend: {
    colors: {
      primary: {
        lighter: '#2A567D', // Version plus claire de #0D3B66
        DEFAULT: '#0D3B66', // Couleur principale
        darker: '#092A4D', // Version plus foncée de #0D3B66
      },
      secondary: {
        lighter: '#FCF5DF', // Version plus claire de #FAF0CA
        DEFAULT: '#FAF0CA', // Couleur principale
        darker: '#D7D0A8', // Version plus foncée de #FAF0CA
      },
      tertiary: {
        lighter: '#F8E1A2', // Version plus claire de #F4D35E
        DEFAULT: '#F4D35E', // Couleur principale
        darker: '#C7AA4B', // Version plus foncée de #F4D35E
      },
      quaternary: {
        lighter: '#F3B589', // Version plus claire de #EE964B
        DEFAULT: '#EE964B', // Couleur principale
        darker: '#C07839', // Version plus foncée de #EE964B
      },
      quinary: {
        lighter: '#FA7B62', // Version plus claire de #F95738
        DEFAULT: '#F95738', // Couleur principale
        darker: '#C7432A', // Version plus foncée de #F95738
      },
    },
  },
};
export const plugins = [];
