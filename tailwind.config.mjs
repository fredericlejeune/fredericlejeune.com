// tailwind.config.mjs
// Note: Tailwind v4 uses CSS-based configuration (@tailwindcss/vite plugin).
// This file is kept for documentation/tooling compatibility.
// Design tokens are defined in src/styles/global.css via @theme directive.
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navy: {
          deep: '#0d2233',
          DEFAULT: '#1a3a4a',
          mid: '#1f5068',
        },
        teal: '#7ecdc8',
        'light-bg': '#f7fafc',
        muted: '#667788',
      },
    },
  },
};
