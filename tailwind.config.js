/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#08111f',
          ocean: '#0f3d5e',
          seafoam: '#c6f5ee',
          gold: '#f0c56a',
        },
      },
      boxShadow: {
        glow: '0 30px 80px rgba(3, 105, 161, 0.28)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top, rgba(14,165,233,.18), transparent 36%), radial-gradient(circle at 20% 20%, rgba(240,197,106,.15), transparent 24%), linear-gradient(180deg, #020617 0%, #08111f 100%)',
      },
    },
  },
  plugins: [],
};
