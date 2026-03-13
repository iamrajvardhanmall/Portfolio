/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070a',
          900: '#0b1018',
          800: '#131b28',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(99, 102, 241, 0.25), 0 12px 36px rgba(56, 189, 248, 0.2)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
