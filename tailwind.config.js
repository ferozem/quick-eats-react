/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // ✅ REQUIRED for class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
