import type { Config } from "tailwindcss";

// Design tokens for the Sunshine Youth Association / Ganesh Utsav site.
// Palette drawn from the festival's own materials rather than generic
// "AI web app" defaults: marigold garlands, sindoor/vermillion, temple
// brass, banana-leaf green, and a warm cloth-ivory background.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#241708",        // near-black warm brown — primary text
        cloth: "#F6EEDD",      // warm ivory background (pandal drape)
        clothdeep: "#EEE1C6",  // slightly deeper ivory for section bands
        marigold: {
          DEFAULT: "#E8A33D",
          dark: "#C77F1F",
          light: "#F4C878",
        },
        vermillion: {
          DEFAULT: "#C1432E",
          dark: "#9C3222",
        },
        brass: "#A9822C",
        leaf: "#4C6444",
        dusk: "#241830",       // deep indigo-plum for night/hero sections
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
