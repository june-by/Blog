/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      keyframes: {
        boundLeft: {
          "0%, 100%": { transform: "translate(0)" },
          "50%": { transform: "translate(-7px)" },
        },
        bounceRight: {
          "0%, 100%": { transform: "translate(0)" },
          "50%": { transform: "translate(7px)" },
        },
        rotate: {
          "0%": { transform: "scale(0) rotate(-180deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
