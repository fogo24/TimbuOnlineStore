/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: { min: "225px", max: "425px" },
      // =>@media (min-width: 640px and max-width: 767px) { ... }
      sm: { min: "426px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px )
      lg: { min: "1024px" },
    },
    extend: {
      colors: {
        "custom-yellow": "#FFECD0",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
