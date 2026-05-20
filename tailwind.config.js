/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#070710',
        bg2: '#0d0d1a',
        bg3: '#131325',
        border: '#1e1e35',
        accent: '#7c6aff',
        accent2: '#a78bfa',
        text: '#e8e6ff',
        muted: '#6b6a8a',
        green: '#4ade80',
        cyan: '#38bdf8',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      keyframes: {
        orbBreath: {
          '0%, 100%': { opacity: '0.8', transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1.12)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
      animation: {
        'orb-breath-main': 'orbBreath 7s ease-in-out infinite',
        'orb-breath-accent': 'orbBreath 9s ease-in-out infinite reverse',
        'blink': 'blink 2s infinite',

      }
    },
  },
  plugins: [],
}
