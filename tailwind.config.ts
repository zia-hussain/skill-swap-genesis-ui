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
          yellow: "#F5C738", // Set Primary
          blue: "#33A4EE",   // Set Secondary
          'yellow-light': 'hsl(var(--brand-yellow-light))',
          'yellow-dark': 'hsl(var(--brand-yellow-dark))',
          'blue-light': 'hsl(var(--brand-blue-light))',
          'blue-dark': 'hsl(var(--brand-blue-dark))',
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
        glass: 'rgba(255,255,255,0.96)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '1.25rem',
      },
      boxShadow: {
        soft: "0 2px 8px 0 rgba(0, 0, 0, 0.04)",
        'glass': '0 4px 24px 0 rgba(50, 175, 255, 0.08), 0 1.5px 6px 0 rgba(245,199,56,0.10)',
        'card': '0 10px 38px 0 rgba(51,164,238,0.06), 0 2px 8px 0 rgba(245,199,56,0.10)',
        'btn': '0 2px 8px 0 rgba(51,164,238,0.06), 0 2px 8px 0 rgba(245,199,56,0.06)',
        'neumorph': '0 6px 18px 0 rgba(51,164,238,0.11), 0 0.5px 3px 0 rgba(245,199,56,0.13)',
      },
      borderRadius: {
        xl: '1.5rem',
        'section': '1.1rem',
        'card': '1.2rem',
      },
      backgroundImage: {
        'gradient-brand': "linear-gradient(90deg, #e8f4fa 0%, #faf7e8 100%)",
        'gradient-section': "linear-gradient(110deg, #eaf6fd 0%, #f3f3e7 100%)",
        'gradient-soft-card': "linear-gradient(150deg, #f0fafd 0%, #fffbe9 100%)",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px hsl(var(--brand-yellow)), 0 0 10px hsl(var(--brand-yellow))' },
          '100%': { boxShadow: '0 0 10px hsl(var(--brand-blue)), 0 0 20px hsl(var(--brand-blue))' },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s cubic-bezier(.4,0,.2,1) both",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
