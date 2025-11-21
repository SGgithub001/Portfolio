/** @type {import('tailwindcss').Config} */
import clipPath from "tailwind-clip-path";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        }
      },
      animation: {
        blob: 'blob 8s ease-in-out infinite',
      },
      clipPath: {
        custom: 'polygon(0 0,100% 0, 100% 98%, 75% 95%, 0 100%)',
        custom2: 'polygon(0 0,100% 0, 100% 98%, 25% 95%, 0 100%)',
        custom3: 'polygon(0 0,100% 0, 100% 98%, 75% 96%, 0 100%)',
      },
      backgroundImage: {
        'skills-gradient': `
          linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
          linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)
        `
      }
    },
  },
  plugins: [clipPath],
}

