/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#FFFFFF",
        borderColor: "#CCCCCC",
        textDisabledColor: "#666666",
        textColor: "#333333",
        shadingColor: "#F4F4F4",
        errorColor: "#EB5757",
        accentColor: "#7A5CFA"
      },
    },
  },
  plugins: [],
};
