/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#080B14',
          light: '#F8FAFC',
        },
        surface: {
          DEFAULT: '#0F172A',
          card: 'rgba(15, 23, 42, 0.75)',
          light: '#FFFFFF',
          cardLight: 'rgba(255, 255, 255, 0.85)',
        },
        primary: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          glow: 'rgba(99, 102, 241, 0.35)',
        },
        accent: {
          DEFAULT: '#22D3EE',
          hover: '#06B6D4',
          glow: 'rgba(34, 211, 238, 0.35)',
        },
        dark: {
          900: '#080B14',
          800: '#0F172A',
          700: '#1E293B',
          600: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-primary': '0 0 25px -5px rgba(99, 102, 241, 0.5)',
        'neon-accent': '0 0 25px -5px rgba(34, 211, 238, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

