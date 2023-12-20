/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-font": ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        "btn-blue": "#4036A9",
        "custom-black": "#111729",
        placeholder: "#CDD5E0",
        "box-bg": "#F8FAFC",
      },
    },
  },
  plugins: [],
};
