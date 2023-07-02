/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "var(--color-bg-main)",
        secondary: "var(--color-bg-secondary)",
        accent: "var(--color-bg-accent)",
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
        "clr-accent": "var(--color-border-accent)",
        "clr-muted": "var(--color-border-muted)",
        "clr-dark": "var(--color-border-dark)",
      },
      fontFamily: {
        openSans: ["var(--font-openSans)"],
      },
      height: {
        140: "560px",
      },
      minHeight: {
        140: "560px",
      },
      screens: {
        xs: "400px",
        small: { raw: "(max-height: 375px)" },
        tall: { raw: "(max-height: 800px)" },
      },
    },
  },
  plugins: [],
};
