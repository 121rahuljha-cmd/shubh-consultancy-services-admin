import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edf6ff',
          100: '#d9ebff',
          200: '#b9d9ff',
          300: '#8bbfff',
          400: '#5da5ff',
          500: '#2d7ff7',
          600: '#1d6dd8',
          700: '#1d58b1',
          800: '#1f4b8e',
          900: '#1e3f73',
        },
        navy: {
          900: '#081b2d',
          800: '#102942',
          700: '#163b5d',
        },
        success: '#16a34a',
        warning: '#f59e0b',
        danger: '#ef4444',
        purple: '#8b5cf6',
        panel: '#f3f8ff',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 35, 58, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config
