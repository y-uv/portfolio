/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        consolas: ["Consolas", "monospace"],
      },
      colors: {
        yuvbg: "#A6ABBD",
        yuvhover: "#CB707F",
        yuvactive: "#923D4E",
      },
    },
  },
  plugins: [],
};
