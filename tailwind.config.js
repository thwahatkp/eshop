/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5385D",
        secondary: "#e94560",
        background: "#f6f9fc",
        "primary-hover": "#f50057",
        // "linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
