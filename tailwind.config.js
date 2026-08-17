/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2b1d12",
        inkSoft: "#4a3624",
        parchment: "#f4e9d2",
        parchmentDark: "#e6d3ad",
        wax: "#8f1f2e",
        waxDark: "#6d1420",
        waxLight: "#c0392b",
        gold: "#b8860b",
        goldLight: "#d4af37",
        night: "#17100a",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        body: ["Cormorant Garamond", "serif"],
        script: ["Great Vibes", "cursive"],
      },
      boxShadow: {
        seal: "0 10px 30px rgba(0,0,0,0.55), inset 0 -6px 12px rgba(0,0,0,0.45), inset 0 6px 14px rgba(255,255,255,0.25)",
        card: "0 24px 60px -18px rgba(23,16,10,0.45)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};