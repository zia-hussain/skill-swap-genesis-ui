
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        brand: {
          yellow: '#F5C738',
          blue: '#0072CE',
        },
        neutralBg: "#f9f9f9",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        'card-foreground': "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        'popover-foreground': "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        'primary-foreground': "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        'secondary-foreground': "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        'muted-foreground': "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        'accent-foreground': "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        'destructive-foreground': "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Sidebar colors, if needed in classes
        'sidebar-background': "hsl(var(--sidebar-background))",
        'sidebar-foreground': "hsl(var(--sidebar-foreground))",
        'sidebar-primary': "hsl(var(--sidebar-primary))",
        'sidebar-primary-foreground': "hsl(var(--sidebar-primary-foreground))",
        'sidebar-accent': "hsl(var(--sidebar-accent))",
        'sidebar-accent-foreground': "hsl(var(--sidebar-accent-foreground))",
        'sidebar-border': "hsl(var(--sidebar-border))",
        'sidebar-ring': "hsl(var(--sidebar-ring))",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '1.25rem',
      },
      boxShadow: {
        soft: "0 2px 8px 0 rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s cubic-bezier(.4,0,.2,1) both"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

