/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            "color": "#a88132",
         },
         backgroundImage: {
            "Banner-img": "url('/src/assets/main-qimg-995c2511c106e4f93d8f19172b0e66ce.png')",
         },
      },
   },
   plugins: [require("daisyui")],
};

