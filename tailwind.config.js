/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8b5cf6",
          foreground: "#ffffff",
        },
        background: "#0b0b12",
        card: "#111118",
        border: "#1f1f2a",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139, 92, 246, 0.15), 0 8px 30px rgba(0, 0, 0, 0.45)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
