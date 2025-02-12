/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#A8DADC", // Light Teal
          DEFAULT: "#457B9D", // Steel Blue
          dark: "#1D3557", // Dark Blue
        },
        secondary: {
          light: "#F1FAEE", // Mint Cream
          DEFAULT: "#A8DADC", // Light Teal
          dark: "#457B9D", // Steel Blue
        },
        accent: {
          light: "#FFD700", // Gold
          DEFAULT: "#FFA500", // Orange
          dark: "#FF8C00", // Dark Orange
        },
        neutral: {
          light: "#F5F5F5", // White Smoke
          DEFAULT: "#D3D3D3", // Light Gray
          dark: "#A9A9A9", // Dark Gray
        },
        warning: {
          light: "#FFE4B5", // Moccasin
          DEFAULT: "#FF4500", // Orange Red
          dark: "#B22222", // Firebrick
        },
      },
    },
  },
  plugins: [],
};
