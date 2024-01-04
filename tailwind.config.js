/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true
  },
  content: ["./public/index.html", "./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Titillium Web", "sans-serif"]
      },
      colors: {
        primary: {
          50: "#edf3ff",
          100: "#deeaff",
          200: "#c4d7ff",
          300: "#a0bdff",
          400: "#7a96ff",
          500: "#4c65f9",
          600: "#3c47ef",
          700: "#2f36d3",
          800: "#2931aa",
          900: "#293186",
          950: "#181c4e"
        },
        secondary: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#242424"
        }
      }
    }
  },
  plugins: ["prettier-plugin-tailwindcss"]
};
