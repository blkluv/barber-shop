/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: 'var(--color-bg-main)',
        secondary: 'var(--color-bg-secondary)',
        overlay: 'var(--color-bg-overlay)',
      },
      textColor: {
        bright: 'var(--color-text-bright)',
        dark: 'var(--color-text-dark)',
        hover: 'var(--color-text-hover)',
      },
    },
  },
  plugins: [],
}
