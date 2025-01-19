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
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #FF00CC, #333399)',
        'gradient-hover': 'linear-gradient(to right, #FF1AD4, #3D3DB2)',
        'gradient-active': 'linear-gradient(to right, #E600B8, #2D2D87)',
        ...backgrounds.backgroundImage,
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 0, 204, 0.3)',
        'glow-hover': '0 0 20px rgba(255, 0, 204, 0.4)',
        'glow-active': '0 0 10px rgba(255, 0, 204, 0.2)',
        ...effects.boxShadow,
      },
      typography: typography.gradient,
      keyframes: animations.keyframes,
      animation: animations.animation,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;