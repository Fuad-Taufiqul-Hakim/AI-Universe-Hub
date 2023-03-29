/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#97f4c1",

          secondary: "#fff877",

          accent: "#fc847e",

          neutral: "#28303E",

          "base-100": "#F3F4F7",

          info: "#99D2E1",

          success: "#1EA976",

          warning: "#B6720C",

          error: "#EC416C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
