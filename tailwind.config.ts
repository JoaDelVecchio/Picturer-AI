/** @type {import('tailwindcss').Config} */
module.exports = {
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

        primary: {
          DEFAULT: "#FF6B00", // Cool orange principal
          100: "#FFE5D1",
          200: "#FFC8A2",
          300: "#FFA66D",
          400: "#FF852D",
          500: "#FF6B00", // Principal
          600: "#CC5600",
          700: "#993F00",
          800: "#662900",
          900: "#331400",
          foreground: "#ffffff",
        },

        secondary: {
          DEFAULT: "#FFA600", // Un ámbar dorado suave
          100: "#FFF2CC",
          200: "#FFE199",
          300: "#FFCE66",
          400: "#FFBA33",
          500: "#FFA600", // Principal
          600: "#CC8400",
          700: "#996300",
          800: "#664200",
          900: "#332100",
          foreground: "#ffffff",
        },

        dark: {
          400: "#7A7A7A",
          500: "#525252",
          600: "#3A3A3A",
          700: "#222222",
        },

        accent: {
          DEFAULT: "#FF8500", // Toque extra de naranja más saturado
          foreground: "#ffffff",
        },

        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#6B7280",
        },

        destructive: {
          DEFAULT: "#D72638",
          foreground: "#ffffff",
        },

        popover: {
          DEFAULT: "#1A1A1A",
          foreground: "#ffffff",
        },

        card: {
          DEFAULT: "#282828",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(135deg, #FF6B00 0%, #FFA600 100%)",
        banner: "url('/assets/images/banner-bg.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
