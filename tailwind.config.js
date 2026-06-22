/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#0B0B0D",
        charcoal: "#161618",
        charcoal2: "#1F1F22",
        ivory: "#F7F5F0",
        ivory2: "#EDE9E0",
        gold: {
          DEFAULT: "#C9A227",
          light: "#E0C158",
          muted: "#8C7333",
          dark: "#9C7E1E",
        },
        crimson: "#7A1F1F",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "coord-grid":
          "linear-gradient(to right, rgba(201,162,39,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,162,39,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "coord-grid": "64px 64px",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,162,39,0.35)",
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
};
