/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#342424",
        inkSoft: "#4A3B3A",
        parchment: "#FFFFFF",
        parchmentDark: "#FDF8F3",
        wax: "#C25A73",
        waxDark: "#A94A62",
        waxLight: "#D97A8E",
        gold: "#C9A96E",
        goldLight: "#DCC49A",
        night: "#FFFFFF",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Montserrat", "sans-serif"],
        script: ["Great Vibes", "cursive"],
      },
      boxShadow: {
        seal: "0 10px 30px rgba(52,36,36,0.35), inset 0 -6px 12px rgba(0,0,0,0.25), inset 0 6px 14px rgba(255,255,255,0.5)",
        card: "0 24px 60px -18px rgba(74,59,58,0.25)",
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
        sway: {
          "0%, 100%": { transform: "rotate(-1.5deg) translateY(0px)" },
          "50%": { transform: "rotate(2deg) translateY(-6px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        sway: "sway 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};