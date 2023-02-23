/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "var(--barlow-font)",
    },
    extend: {
      backgroundImage: {
        homepage: "url('/hero-bkg.png')",
        'dark-glow': 'radial-gradient(50% 75% at 50% 75%, rgba(0, 0, 0, 0.65) 0%, rgba(29, 26, 44, 0) 100%);',
      },
      colors: {
        "main-purple": {
          darker: "#1D1A2C",
          DEFAULT: "#442F6D",
          lighter: "#4B4665",
        },
        "gold": {
          darker: "#726253",
          DEFAULT: "#C6AE98",
        },
        "shadow": {
          black: '#161616',
          grey1: '#222222',
          grey2: '#484848',
          grey3: '#656565',
          grey4: '#909090',
          grey5: '#9E9E9E',
          white: '#ffffff',
        }
      },
    },
  },

  plugins: [],
};
