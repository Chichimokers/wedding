import { useState } from "react";
import { motion } from "framer-motion";
import { playLetterOpen } from "../lib/sound";

type Phase = "idle" | "breaking" | "opening";

const FRAGMENTS = [
  { x: -70, y: -60, r: -120, s: 0.7 },
  { x: 65, y: -75, r: 90, s: 0.6 },
  { x: 90, y: 8, r: 140, s: 0.8 },
  { x: -80, y: 24, r: -160, s: 0.65 },
  { x: 24, y: 90, r: 220, s: 0.55 },
  { x: -32, y: -92, r: 180, s: 0.6 },
  { x: 48, y: 74, r: 260, s: 0.5 },
  { x: -60, y: -16, r: -200, s: 0.6 },
];

type FlapProps = {
  clip: string;
  origin: string;
  rotate: { rotateX?: number; rotateY?: number };
  shade: string;
  delay: number;
  opened: boolean;
};

function Flap({ clip, origin, rotate, shade, delay, opened }: FlapProps) {
  return (
    <motion.div
      className="parchment absolute inset-0"
      style={{ clipPath: clip, transformOrigin: origin }}
      initial={false}
      animate={
        opened
          ? { ...rotate, opacity: 0 }
          : { rotateX: 0, rotateY: 0, opacity: 1 }
      }
      transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1], delay }}
    >
      <div
        className="absolute inset-0"
        style={{ background: shade, clipPath: clip }}
      />
    </motion.div>
  );
}

export default function IntroLetter({ onOpen }: { onOpen: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");

  const handleClick = () => {
    if (phase !== "idle") return;
    playLetterOpen();
    setPhase("breaking");
    window.setTimeout(() => setPhase("opening"), 620);
    window.setTimeout(onOpen, 1500);
  };

  const opened = phase === "opening";

  return (
    <motion.div
      className="fixed inset-0 z-[100] cursor-pointer overflow-hidden"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(14px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Full-screen envelope made of four flaps meeting at the seal */}
      <div
        className="absolute inset-0"
        style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
      >
        <Flap
          opened={opened}
          delay={0}
          clip="polygon(0% 0%, 100% 0%, 50% 50%)"
          origin="50% 0%"
          rotate={{ rotateX: -150 }}
          shade="linear-gradient(to bottom, rgba(0,0,0,0.10), rgba(0,0,0,0.02) 55%)"
        />
        <Flap
          opened={opened}
          delay={0.08}
          clip="polygon(100% 0%, 100% 100%, 50% 50%)"
          origin="100% 50%"
          rotate={{ rotateY: 150 }}
          shade="linear-gradient(to left, rgba(0,0,0,0.12), rgba(0,0,0,0.03) 60%)"
        />
        <Flap
          opened={opened}
          delay={0.16}
          clip="polygon(0% 100%, 100% 100%, 50% 50%)"
          origin="50% 100%"
          rotate={{ rotateX: 150 }}
          shade="linear-gradient(to top, rgba(0,0,0,0.16), rgba(0,0,0,0.05) 55%)"
        />
        <Flap
          opened={opened}
          delay={0.08}
          clip="polygon(0% 0%, 0% 100%, 50% 50%)"
          origin="0% 50%"
          rotate={{ rotateY: -150 }}
          shade="linear-gradient(to right, rgba(0,0,0,0.10), rgba(0,0,0,0.03) 60%)"
        />

        {/* Crease lines from each corner meeting at the seal */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <line x1="0" y1="0" x2="50" y2="50" stroke="rgba(139,101,45,0.45)" strokeWidth="0.35" />
          <line x1="100" y1="0" x2="50" y2="50" stroke="rgba(139,101,45,0.45)" strokeWidth="0.35" />
          <line x1="0" y1="100" x2="50" y2="50" stroke="rgba(139,101,45,0.45)" strokeWidth="0.35" />
          <line x1="100" y1="100" x2="50" y2="50" stroke="rgba(139,101,45,0.45)" strokeWidth="0.35" />
        </svg>
      </div>

      {/* Ambient glow behind the seal */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.22), rgba(143,31,46,0.1) 45%, transparent 70%)",
        }}
        initial={false}
        animate={opened ? { opacity: 0, scale: 1.4 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      {/* Floating dust */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-goldLight/50 blur-[1px]"
          style={{
            width: 3 + (i % 3) * 2,
            height: 3 + (i % 3) * 2,
            left: `${(i * 37 + 8) % 100}%`,
            top: `${(i * 53 + 10) % 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0] }}
          transition={{
            duration: 6 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}

      {/* Letter content: only the wax seal */}
      <motion.div
        className="relative z-10 flex min-h-full items-center justify-center"
        initial={false}
        animate={
          opened
            ? { opacity: 0, scale: 0.95, filter: "blur(6px)" }
            : { opacity: 1, scale: 1, filter: "blur(0px)" }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <WaxSeal phase={phase} />
      </motion.div>
    </motion.div>
  );
}

function WaxSeal({ phase }: { phase: Phase }) {
  const breaking = phase === "breaking";
  const opening = phase === "opening";

  return (
    <div className="relative flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
      {/* Glow when the seal lights up */}
      <motion.div
        className="pointer-events-none absolute -inset-6 rounded-full sm:-inset-8"
        style={{
          background:
            "radial-gradient(circle, rgba(255,228,170,0.95) 0%, rgba(212,175,55,0.5) 45%, transparent 70%)",
        }}
        animate={
          breaking
            ? { opacity: [0, 1, 1], scale: [0.7, 1.25, 1.7] }
            : { opacity: 0, scale: 0.7 }
        }
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Light ring burst */}
      {breaking && (
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-full border-2 border-goldLight"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 2.2, opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}

      <motion.div
        className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
        animate={
          breaking
            ? { scale: [1, 1.16, 1.22], rotate: [0, 4, -6], filter: "brightness(1.7)" }
            : opening
              ? { scale: 0.2, opacity: 0 }
              : { scale: [1, 1.02, 1], rotate: [0, -1, 1, 0] }
        }
        transition={
          breaking
            ? { duration: 0.6, ease: [0.4, 0, 0.6, 1] }
            : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
        }
        whileHover={phase === "idle" ? { scale: 1.06 } : undefined}
      >
        <img
          src="/sello.png"
          alt="Sello de cera"
          draggable={false}
          className="h-full w-full select-none object-contain"
        />
      </motion.div>

      {/* Wax fragments */}
      {breaking &&
        FRAGMENTS.map((f, i) => (
          <motion.span
            key={i}
            className="absolute h-2.5 w-2.5 rounded-[40%] bg-wax sm:h-3 sm:w-3"
            style={{ left: "50%", top: "50%" }}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{ x: f.x, y: f.y, scale: f.s, opacity: 0, rotate: f.r }}
            transition={{ duration: 0.7, ease: [0.2, 0.6, 0.3, 1] }}
          />
        ))}

      {/* Golden sparks */}
      {breaking &&
        [...Array(8)].map((_, i) => (
          <motion.span
            key={`s${i}`}
            className="absolute h-1 w-1 rounded-full bg-goldLight"
            style={{ left: "50%", top: "50%" }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{
              x: Math.cos((i / 8) * Math.PI * 2) * 60,
              y: Math.sin((i / 8) * Math.PI * 2) * 60,
              opacity: 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
    </div>
  );
}