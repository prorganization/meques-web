/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "var(--barlow-font)",
    },
    extend: {
      backgroundImage: {
        "membership": "url('/membership-bkg.png')",
        "quests": "url('/quests-bkg.png')",
        "homepage": "url('/hero-bkg.png')",
        "live-stream": "url('/live-stream-bkg.png')",
        "support-player": "url('/support-player-bkg.png')",
        "social-light-glow":
          "radial-gradient(50% 50% at 50% 100%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 30%, rgba(29, 26, 44, 0) 100%)",
        "social-dark-glow":
          "radial-gradient(50% 50% at 50% 100%, rgba(0, 0, 0, 0.65) 0%, rgba(29, 26, 44, 0) 100%)",
        "active-tab-glow":
          "radial-gradient(50% 50% at 50% 100%, rgba(198, 174, 152, 0.2) 0%, rgba(29, 26, 44, 0) 100%)",
        "player-center-gradient":
          "linear-gradient(180deg, rgba(34, 34, 34, 0) 0%, #211E2E 100%);"
      },
      boxShadow: {
        "auth-container": "1px 1px 20px 0px rgba(255, 255, 255, 0.1)",
      },
      borderRadius: {
        input: "5px",
        button: "5px",
      },
      maxWidth: {
        input: "310px",
      },
      height: {
        header: "58px",
        input: "30px",
        button: "30px",
      },
      spacing: {
        header: "58px",
      },
      colors: {
        "main-purple": {
          darker: "#1D1A2C",
          DEFAULT: "#442F6D",
          lighter: "#4B4665",
        },
        "accent-green": {
            lighter: "#499A6E"
        },
        gold: {
          darker: "#726253",
          DEFAULT: "#C6AE98",
        },
        shadow: {
          black: "#161616",
          grey1: "#222222",
          grey2: "#484848",
          grey3: "#656565",
          grey4: "#909090",
          grey5: "#9E9E9E",
          white: "#ffffff",
        },
      },
    },
  },
};
