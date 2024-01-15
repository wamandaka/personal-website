/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#020948",
      secondary: "#75E6FF",
      tertiary: "#E8E9FF",
      accent: "#FB6B1A",
      dark: "#333333",
      light: "#FFFFFF",
      foreground: "#F6F6F6",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        portfolio: "url('src/assets/bg-portfolio.png')",
      },
    },
  },
  plugins: [],
};
