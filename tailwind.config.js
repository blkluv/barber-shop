/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "var(--color-bg-main)",
        secondary: "var(--color-bg-secondary)",
        overlay: "var(--color-bg-overlay)",
        "btn-hover": "var(--color-btn-hover)",
      },
      textColor: {
        bright: "var(--color-text-bright)",
        dark: "var(--color-text-dark)",
        muted: "var(--color-text-muted)",
        hover: "var(--color-text-hover)",
        accent: "var(--color-text-accent)",
        "accent-secondary": "var(--color-text-accent-secondary)",
      },
      borderColor: {
        "clr-accent": "var(--color-btn-accent)",
        "clr-muted": "var(--color-border-muted)",
        "clr-dark": "var(--color-border-dark)",
      },
      fontFamily: {
        cabin: ["var(--font-cabin)"],
      },
      height: {
        140: "560px",
      },
    },
  },
  plugins: [],
};
