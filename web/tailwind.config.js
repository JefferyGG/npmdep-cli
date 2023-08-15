/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  daisyui: {
    themes: [
     "light"
    ],
  },
  plugins: [require("daisyui")],
};

