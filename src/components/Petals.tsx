import { useMemo } from "react";
import { motion } from "framer-motion";

const COLORS = ["#d97a8e", "#e8a1b0", "#f0a98f", "#e8c4c9", "#c9a96e"];

export default function Petals({ count = 5 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: 15 + Math.random() * 70,
        size: 5 + Math.random() * 5,
        duration: 12 + Math.random() * 9,
        delay: -Math.random() * 20,
        sway: 30 + Math.random() * 60,
        rotate: 120 + Math.random() * 240,
        color: COLORS[i % COLORS.length],
        opacity: 0.25 + Math.random() * 0.2,
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
            height: p.size * 1.4,
            backgroundColor: p.color,
            opacity: p.opacity,
            borderRadius: "82% 8% 62% 42% / 60% 18% 82% 38%",
            boxShadow: "inset -1px -1px 3px rgba(0,0,0,0.12)",
          }}
          initial={{ y: "-6vh", x: 0, rotate: 0 }}
          animate={{
            y: ["-6vh", "112vh"],
            x: [0, p.sway, -p.sway * 0.6, p.sway * 0.4, 0],
            rotate: [0, p.rotate, p.rotate * 0.4, p.rotate * 1.3, p.rotate],
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