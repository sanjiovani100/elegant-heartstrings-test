export const animations = {
  keyframes: {
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
    "fade-up": {
      "0%": {
        opacity: "0",
        transform: "translateY(20px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
    "gradient-shift": {
      "0%, 100%": {
        "background-position": "0% 50%",
      },
      "50%": {
        "background-position": "100% 50%",
      },
    },
    "pulse-gradient": {
      "0%, 100%": {
        opacity: "1",
      },
      "50%": {
        opacity: "0.5",
      },
    },
    "scale-click": {
      "0%, 100%": {
        transform: "scale(1)",
      },
      "50%": {
        transform: "scale(0.95)",
      },
    },
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    "fade-up": "fade-up 0.5s ease-out forwards",
    "gradient-shift": "gradient-shift 3s ease infinite",
    "pulse-gradient": "pulse-gradient 2s ease-in-out infinite",
    "scale-click": "scale-click 0.2s ease-in-out",
  },
};