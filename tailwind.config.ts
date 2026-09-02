import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "primary-container": "#1d4ed8",
        "on-primary": "#ffffff",
        "accent-gold-dark": "#d4b876",
        surface: "#fbf8fc",
        "surface-dim": "#dbd9dc",
        "surface-variant": "#e4e2e5",
        "surface-container": "#efedf0",
        "surface-container-low": "#f5f3f6",
        "surface-container-lowest": "#ffffff",
        "surface-bright": "#fbf8fc",
        "on-surface": "#1b1b1e",
        "on-surface-variant": "#44474e",
        "inverse-on-surface": "#f2f0f3",
        "inverse-primary": "#b7c6ee",
        background: "#fbf8fc",
        "on-background": "#1b1b1e",
        "outline-variant": "#c5c6cf",
      },
      fontFamily: {
        "display-lg": ["var(--font-playfair)", "serif"],
        "headline-md": ["var(--font-playfair)", "serif"],
        "headline-lg-mobile": ["var(--font-playfair)", "serif"],
        "label-md": ["var(--font-inter)", "sans-serif"],
        "body-md": ["var(--font-inter)", "sans-serif"],
        "body-lg": ["var(--font-inter)", "sans-serif"],
        "label-sm": ["var(--font-inter)", "sans-serif"],
        "headline-lg": ["var(--font-playfair)", "serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }]
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.4s ease-out",
        "count-up": "countUp 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      spacing: {
        "stack-md": "1rem",
        "stack-lg": "2rem",
        "margin-desktop": "2.5rem",
        "stack-sm": "0.5rem",
        "container-max": "1280px",
        "margin-mobile": "1rem",
        "gutter": "1.5rem"
      },
      boxShadow: {
        card: "0 4px 24px rgba(26, 39, 68, 0.08)",
        "card-hover": "0 8px 40px rgba(26, 39, 68, 0.16)",
        gold: "0 4px 20px rgba(201, 169, 97, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
