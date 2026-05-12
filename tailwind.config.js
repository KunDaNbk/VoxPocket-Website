export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C4DFF",
          light: "#B388FF",
          dark: "#6200EA",
        },
        accent: {
          cyan: "#00E5FF",
          pink: "#FF4081",
          green: "#00E676",
          orange: "#FF9100",
          red: "#FF5252",
          yellow: "#FFD740",
        },
        surface: {
          dark: "#0A0A0F",
          card: "rgba(30, 30, 40, 0.8)",
          elevated: "rgba(40, 40, 55, 0.6)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
