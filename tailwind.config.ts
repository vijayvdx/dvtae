import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Design system tokens (Circle/Stripe approach)
        bg: { 
          0: "var(--bg-000)", 
          100: "var(--bg-100)" 
        },
        ink: { 
          900: "var(--ink-900)", 
          700: "var(--ink-700)", 
          500: "var(--ink-500)" 
        },
        line: { 
          200: "var(--line-200)" 
        },
        brand: { 
          700: "var(--brand-700)", 
          600: "var(--brand-600)", 
          500: "var(--brand-500)" 
        },
        accent: { 
          teal: "var(--accent-teal-600)" 
        },
        success: { 
          600: "var(--success-600)" 
        },
        warning: { 
          600: "var(--warning-600)" 
        },
        danger: { 
          600: "var(--danger-600)" 
        },
      },
      backgroundImage: {
        "brand-grad": "var(--brand-grad)",
      },
      borderRadius: {
        2: "var(--radius-2)",
        3: "var(--radius-3)",
      },
      boxShadow: {
        1: "var(--shadow-1)",
      },
      fontFamily: {
        sans: ['Sora', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;