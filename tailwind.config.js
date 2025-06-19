/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}', './index.html'];
export const theme = {
  extend: {
    colors: {
      primary: {
        lighter: '#3A506B', // Light blue-gray
        DEFAULT: '#1C2541', // Main deep blue-gray
        darker: '#0B132B', // Very dark blue-gray
      },
      secondary: {
        lighter: '#F5F6FA', // Lightest gray
        DEFAULT: '#D9DBE1', // Cool gray
        darker: '#A3A8B8', // Medium gray
      },
      accent: {
        lighter: '#5BC0BE', // Light teal
        DEFAULT: '#3AAFA9', // Main teal
        darker: '#247672', // Dark teal
      },
      neutral: {
        lighter: '#F8F9FB', // Near white
        DEFAULT: '#E5E7EB', // Light neutral
        darker: '#6B7280', // Dark neutral
      },
      success: {
        DEFAULT: '#27ae60',
      },
      danger: {
        DEFAULT: '#e74c3c',
      },
    },
  },
};
export const plugins = [];
