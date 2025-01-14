export const keyframes = {
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
  "float": {
    "0%, 100%": {
      transform: "translateY(0)",
      opacity: "0",
    },
    "50%": {
      transform: "translateY(-100vh)",
      opacity: "0.6",
    }
  }
}

export const animation = {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
  "fade-up": "fade-up 0.5s ease-out forwards",
  "float": "float 15s ease-in-out infinite",
}