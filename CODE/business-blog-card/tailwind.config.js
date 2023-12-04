/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-font-head": ["Poppins", "sans-serif"],
        "custom-font-sub": ["Lato", "sans-serif"],
      },
      colors: {
        "body-bg": "#F2F5F9",
        heading: "#111729",
        "sub-text": "#677489",
      },
    },
  },
  plugins: [],
};
