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
          pink: {
            primary: "#FF00CC",
            hover: "#FF1AD4",
            active: "#E600B8",
          },
          purple: {
            primary: "#333399",
            hover: "#3D3DB2",
            active: "#2D2D87",
          },
          grey: "#F0F0F0",
          dark: "#1A1F2C",
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
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #FF00CC, #333399)',
        'gradient-hover': 'linear-gradient(to right, #FF1AD4, #3D3DB2)',
        'gradient-active': 'linear-gradient(to right, #E600B8, #2D2D87)',
        'gradient-muted': 'linear-gradient(to right, rgba(255, 0, 204, 0.1), rgba(51, 51, 153, 0.1))',
        'pattern-dots': 'radial-gradient(circle, #FF00CC 1px, transparent 1px)',
        'pattern-lines': 'repeating-linear-gradient(45deg, #FF00CC 0, #FF00CC 1px, transparent 0, transparent 50%)',
      },
      boxShadow: {
        glow: "0 0 15px rgba(255, 0, 204, 0.3)",
        'sponsor-card': "0 2px 4px rgba(51, 51, 153, 0.05)",
        'sponsor-hover': "0 4px 6px rgba(255, 0, 204, 0.1)",
      },
      typography: {
        'gradient': {
          css: {
            background: 'linear-gradient(to right, #FF00CC, #333399)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            'background-clip': 'text',
            'color': 'transparent',
          },
        },
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;