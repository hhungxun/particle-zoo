import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          '"Source Serif 4"',
          '"Source Serif Pro"',
          'Charter',
          'Georgia',
          'serif',
        ],
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          50:  '#f7f5f1',
          100: '#ece8e0',
          200: '#d6cfc1',
          300: '#b9af9b',
          400: '#8e8470',
          500: '#5e5645',
          600: '#3d3729',
          700: '#2a2519',
          800: '#1c1810',
          900: '#100d08',
        },
        paper: '#f8f5ee',
        rule:  '#d6cfc1',
        era1: '#9c5a2c',
        era2: '#6e4a7a',
        era3: '#4a6b6e',
        era4: '#5b6e3a',
        era5: '#a8492c',
        era6: '#3b5a78',
        era7: '#5a5142',
      },
      maxWidth: {
        readable: '38rem',
        wide: '64rem',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: '#2a2519',
            fontFamily: '"Source Serif 4", Charter, Georgia, serif',
            'p, li': { lineHeight: '1.75' },
          },
        },
      }),
    },
  },
  plugins: [typography],
}
