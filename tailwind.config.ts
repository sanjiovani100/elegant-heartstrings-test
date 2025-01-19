import type { Config } from "tailwindcss";
import { colors } from "./src/styles/tailwind/colors";
import { typography } from "./src/styles/tailwind/typography";
import { backgrounds } from "./src/styles/tailwind/backgrounds";
import { effects } from "./src/styles/tailwind/effects";
import { animations } from "./src/styles/tailwind/animations";
import { container } from "./src/styles/tailwind/container";

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
    container,
    extend: {
      fontFamily: typography.fontFamily,
      colors,
      backgroundImage: backgrounds.backgroundImage,
      boxShadow: effects.boxShadow,
      typography: typography.gradient,
      keyframes: animations.keyframes,
      animation: animations.animation,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;