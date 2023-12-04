/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-font": ["Lato", "sans-serif"],
      },
      colors: {
        "body-bg": "#F2F5F9",
        headings: "#111729",
        "sub-text": "#677489",
      },
    },
  },
  plugins: [],
};
