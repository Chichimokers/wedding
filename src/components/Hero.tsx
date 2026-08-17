import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-24 text-center"
    >
      {/* Decorative rotating rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 600 600"
          className="h-[110vmin] w-[110vmin] opacity-40"
          fill="none"
          aria-hidden
        >
          <motion.circle
            cx="300"
            cy="300"
            r="270"
            stroke="rgba(212,175,55,0.25)"
            strokeWidth="1"
            strokeDasharray="3 10"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
            style={{ originX: "300px", originY: "300px" }}
          />
          <motion.circle
            cx="300"
            cy="300"
            r="230"
            stroke="rgba(212,175,55,0.15)"
            strokeWidth="1.2"
            strokeDasharray="1 8"
            initial={{ rotate: 360 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            style={{ originX: "300px", originY: "300px" }}
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative"
      >
        <p className="font-display text-[11px] uppercase tracking-[0.5em] text-goldLight sm:text-xs">
          Nos casamos
        </p>
      </motion.div>

      <motion.h1
        className="relative mt-5 font-script text-7xl leading-none text-parchment sm:text-8xl md:text-9xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
      >
        Héctor <span className="text-goldLight">&amp;</span> Richeyla
      </motion.h1>

      <motion.p
        className="relative mt-6 font-display text-sm uppercase tracking-[0.4em] text-parchment/80 sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        {wedding.dateLine}
      </motion.p>

      <motion.p
        className="relative mt-4 max-w-xl font-body text-lg italic text-parchment/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {wedding.tagline}
      </motion.p>

      <motion.div
        className="relative mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
      >
        <Countdown />
      </motion.div>

      <motion.a
        href="#historia"
        className="relative mt-14 flex flex-col items-center gap-2 text-parchment/60 transition-colors hover:text-goldLight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <span className="font-display text-[10px] uppercase tracking-[0.4em]">
          Descubre nuestra historia
        </span>
        <motion.svg
          width="18"
          height="26"
          viewBox="0 0 18 26"
          fill="none"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M9 1v20m0 0l-7-7m7 7l7-7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </motion.svg>
      </motion.a>
    </section>
  );
}