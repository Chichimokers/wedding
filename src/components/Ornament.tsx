import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      fill="none"
      className={`mx-auto h-5 w-40 text-gold ${className}`}
      aria-hidden
    >
      <path
        d="M10 12h70M170 12h60"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M80 12c2-7 10-9 15-4 4 4 4 12 10 12 6 0 6-8 10-12 5-5 13-3 15 4"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="120" cy="12" r="2.4" fill="currentColor" />
      <circle cx="8" cy="12" r="2" fill="currentColor" />
      <circle cx="232" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      className="mx-auto max-w-2xl text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="font-display text-[11px] uppercase tracking-[0.45em] text-gold">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold italic text-ink sm:text-5xl">
        {title}
      </h2>
      <Flourish className="mt-5 text-gold" />
      {subtitle && (
        <p className="mt-4 font-body text-base italic leading-relaxed text-inkSoft sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 30,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}