export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF3E8",
        maroon: "#5C1221",
        burgundy: "#7D1232",
        gold: "#C49A6C",
        smoke: "#4F4F4F",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
