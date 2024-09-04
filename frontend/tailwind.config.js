/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fill-blue": {
          "0%": { fill: "rgba(156, 163, 175, 1)" }, // text-gray-400
          "100%": { fill: "rgba(29, 78, 216, 1)" }, // text-blue-700
        },
        "unfill-blue": {
          "0%": { fill: "rgba(29, 78, 216, 1)" }, // text-blue-700
          "100%": { fill: "rgba(156, 163, 175, 1)" }, // text-gray-400
        },
      },
      animation: {
        "fill-blue": "fill-blue 0.3s ease-in-out forwards",
        "unfill-blue": "unfill-blue 0.3s ease-in-out forwards",
      },
      backgroundColor: {
        "primary-color": "#0565FF",
      },
    },
  },
  plugins: [],
};
