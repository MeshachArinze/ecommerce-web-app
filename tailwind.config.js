/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 
  "./src/components/Navbar/**/*.{js,jsx}",
  "./src/components/Home/**/*.{js,jsx}",
  "./src/components/Products/**/*.{js,jsx}",
  "./src/components/Page/**/*.{js,jsx}",
],
  theme: {
    extend: {
      spacing: {
        sm: "3px",
        md: "5px",
        lg: "16px",
        xl: "24px",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        lightOrange: "rgb(249 115 22)",
        darkBlue: "hsl(228,39%, 23%)",
        darkGreyBlack: "#000",
        lightCream: "#fef9f8",
        bgZinc: "rgb(24 24 27)",
        bgBlue900: "rgb(30 58 138)",
        bgBlue800: "rgb(30 64 175)",
        bgBlue700: "rgb(29 78 216)",
        fushia: "rgb(134 25 143)",
      },
      fontsize: {
        xs: ".75rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2.0rem",
        xl: "2.5rem",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        layout: "url('./src/interior/layout.jpg')",
        speaker: "url('./src/interior/speakerset.jpg')",
        bedwhite: "url('./src/interior/bedwhite.jpg')",
      },
      animation: {
        wiggle: "pulse 3s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { backgroundColor: "#001F3F" },
          "50%": { backgroundColor: "#FF4136" },
          "100%": {},
        },
      },
    },
  },
  plugins: [],
};
