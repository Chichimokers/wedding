import { useMemo } from "react";
import { motion } from "framer-motion";

const COLORS = ["#d97b93", "#e8a1b0", "#c0506b", "#e8c4c9", "#b8860b", "#b13c52"];

export default function Petals({ count = 26 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        size: 12 + Math.random() * 16,
        duration: 10 + Math.random() * 10,
        delay: -Math.random() * 18,
        sway: 40 + Math.random() * 90,
        rotate: 200 + Math.random() * 400,
        color: COLORS[i % COLORS.length],
        opacity: 0.45 + Math.random() * 0.4,
      })),
    [count],
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[45] overflow-hidden"
      aria-hidden
    >
      {petals.map((p, i) => (
        <motion.span
          key={i}
          className="absolute block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.35,
            backgroundColor: p.color,
            opacity: p.opacity,
            borderRadius: "82% 8% 62% 42% / 60% 18% 82% 38%",
            boxShadow: "inset -2px -2px 6px rgba(0,0,0,0.18)",
          }}
          initial={{ y: "-8vh", x: 0, rotate: 0 }}
          animate={{
            y: ["-8vh", "114vh"],
            x: [0, p.sway, -p.sway * 0.6, p.sway * 0.4, 0],
            rotate: [0, p.rotate, p.rotate * 0.5, p.rotate * 1.4, p.rotate],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}