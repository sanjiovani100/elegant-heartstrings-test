import type { Config } from "tailwindcss";

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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        fashionista: {
          red: "#800000",
          pink: "#FFC1C1",
          grey: "#F0F0F0",
          dark: "#000000",
        },
        sponsor: {
          bg: {
            primary: "#FFFFFF",
            secondary: "#F8FAFC",
            header: "#1A1F2C",
            disabled: "#F1F5F9",
          },
          text: {
            primary: "#1E293B",
            secondary: "#64748B",
            label: "#475569",
          },
          accent: {
            success: "#10B981",
            error: "#EF4444",
            warning: "#F59E0B",
            info: "#3B82F6",
          },
          border: {
            input: "#E2E8F0",
            focus: "#800000",
          },
          button: {
            primary: "#800000",
            "primary-hover": "#660000",
            secondary: "#FFC1C1",
            "secondary-hover": "#FFB1B1",
          },
          progress: {
            completed: "#800000",
            current: "#FFC1C1",
            upcoming: "#E2E8F0",
          },
          shadow: {
            card: "rgba(0, 0, 0, 0.05)",
            modal: "rgba(0, 0, 0, 0.4)",
            hover: "rgba(128, 0, 0, 0.1)",
          },
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(255, 193, 193, 0.5)",
        "sponsor-card": "0 2px 4px rgba(0, 0, 0, 0.05)",
        "sponsor-hover": "0 4px 6px rgba(128, 0, 0, 0.1)",
      },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;