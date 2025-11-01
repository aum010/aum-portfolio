/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F4F6F9",
          dark: "#0E1116",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#1A1F27",
        },
        accent: {
          DEFAULT: "#3895D3", // your blue
          light: "#7FC8F8",
        },
        text: {
          light: "#1A1F27",
          dark: "#E9EEF6",
        },
        secondary: {
          light: "#555B66",
          dark: "#9AA4B3",
        },
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};