/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "custom-font": ["Sora", "sans-serif"],
      },
      colors: {
        "star-bg": "#F5C044",
        "checklist-bg": "#4CA154",
        "main-text": "#18181B",
        "sub-text": "#52525A",
        "unfill-star": "#D4D4D8",
        "body-bg": "#FAFAF9",
      },
    },
  },
  plugins: [],
};
