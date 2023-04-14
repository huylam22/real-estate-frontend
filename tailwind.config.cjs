/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D5E80",
        secondary: "#454c5b",
      },
      backgroundImage: {
        "primary-gradient": `linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );`,
        "secondary-gradient": `linear-gradient(86.88deg, #20e3b2 1.38%, #2cccff 64.35%);`,
      },
    },
  },
  plugins: [],
};
