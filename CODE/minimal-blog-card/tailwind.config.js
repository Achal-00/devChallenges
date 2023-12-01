/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-sora": ["Sora", "sans-serif"],
      },
      colors: {
        "tag-bg": "#883AE1",
        "body-bg": "#FAFAF9",
        heading: "#20293A",
        "sub-text": "#6C727F",
      },
      fontSize: {
        "tag-text": ["10px", "0.625rem"],
      },
    },
  },
  plugins: [],
};
