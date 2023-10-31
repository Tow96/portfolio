import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bianca: {
          50: 'hsl(54, 100%, 96%)',
          100: 'hsl(51, 21%, 88%)',
          200: 'hsl(60, 10%, 80%)',
          300: 'hsl(73, 6%, 72%)',
          400: 'hsl(120, 3%, 64%)',
          500: 'hsl(154, 3%, 55%)',
          600: 'hsl(175, 5%, 46%)',
          700: 'hsl(180, 8%, 38%)',
          800: 'hsl(192, 14%, 29%)',
          900: 'hsl(202, 23%, 21%)',
          950: 'hsl(213, 18%, 10%)',
        },
      },
      fontFamily: {
        sans: ['var(--font-raleway)'],
        mono: ['var(--font-chivo-mono)'],
      },
      screens: {
        widescreen: { raw: '(max-aspect-ratio: 3/2)' },
        tallscreen: { raw: '(max-aspect-ratio: 13/20)' },
      },
    },
  },
  plugins: [],
};
export default config;
