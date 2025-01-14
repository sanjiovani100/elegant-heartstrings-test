import type { Config } from "tailwindcss";
import { colors } from "./src/config/tailwind/colors";
import { fontFamily } from "./src/config/tailwind/fonts";
import { keyframes, animation } from "./src/config/tailwind/animations";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors,
      fontFamily,
      boxShadow: {
        glow: "0 0 15px rgba(255, 193, 193, 0.5)",
      },
      keyframes,
      animation,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;