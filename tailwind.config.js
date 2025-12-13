/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', "sans-serif"],
        hind: ['"Hind"', "sans-serif"],
      },
      keyframes: {
        'float-bob-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        cir36: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'float-bob-y': 'float-bob-y 3s ease-in-out infinite',
        cir36: 'cir36 10s linear infinite',
      },
      screens: {
        sm: "320px",
        sm1: "375px",
        md1: "479px",
        md2: "639px",
        md: "767px",
        lg1: "991px",
        lg: "1024px",
        xl: "1199px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
