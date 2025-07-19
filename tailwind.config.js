/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,sass,scss}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        dark: "#3B3B3B",
        default: "#f1f0eb",
      },
      fontSize: {
        xs: "12px",
        sm: "18px",
        base: "20px",
        md: "32px",
        lg: "40px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
