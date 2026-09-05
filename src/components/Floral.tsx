type Props = {
  x?: number;
  y?: number;
  s?: number;
};

/* ─── Base Petals ──────────────────────────────────────── */

const petaRose = [
  "M30 26c-8-6-18-4-19 3s9 13 19 10 14-11 13-16-8-1-13 3z",
  "M36 26c6-8 18-6 19 1s-9 14-18 11S33 33 34 27 33 24 36 26z",
  "M30 42c-10-2-16 6-13 12s14 4 18-4 5-10 1-13-6 0-6 5z",
  "M44 42c10-2 16 6 13 12s-14 4-18-4-5-10-1-13 6 0 6 5z",
];

const petaBud = [
  "M20 16c-4-6-12-5-12 1s8 10 12 9c4-2 6-7 4-10s-3 0-4 0z",
  "M24 16c4-6 12-5 12 1s-8 10-12 9-6-7-4-10 3 0 4 0z",
];

const petaSage = [
  "M14 24c-2-10 4-18 10-18s8 8 6 18c-4 2-12 2-16 0z",
  "M38 20c2-10-4-18-10-18s-8 8-6 18c4 2 12 2 16 0z",
];

/* ─── Basic Shapes ─────────────────────────────────────── */

export function Rose({ x = 0, y = 0, s = 1 }: Props) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      {[...petaRose].map((d, i) => (
        <path key={i} d={d} fill="#F2B5C4" fillOpacity={0.7 + (i % 2) * 0.15} stroke="#E89AB0" strokeWidth={0.6} />
      ))}
      <circle cx="37" cy="37" r="4" fill="#D97A8E" fillOpacity={0.6} />
    </g>
  );
}

export function RoseBud({ x = 0, y = 0, s = 1 }: Props) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      {[...petaBud].map((d, i) => (
        <path key={i} d={d} fill="#E8A3B7" fillOpacity={0.7 + i * 0.15} stroke="#D4879B" strokeWidth={0.6} />
      ))}
    </g>
  );
}

export function SageLeaf({ x = 0, y = 0, s = 1 }: Props) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      {[...petaSage].map((d, i) => (
        <path key={i} d={d} fill="#B7D4B0" fillOpacity={0.55 + i * 0.1} stroke="#9ABF93" strokeWidth={0.5} />
      ))}
    </g>
  );
}

export function EucalyptusBranch({ x = 0, y = 0, s = 1 }: Props) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d="M0 50 Q20 40, 24 20 Q26 10, 30 0" stroke="#9ABF93" strokeWidth={1.4} fill="none" opacity={0.55} />
      {[
        { cx: 16, cy: 36, rx: 5.5, ry: 3.5, a: -35 },
        { cx: 10, cy: 30, rx: 5, ry: 3, a: 45 },
        { cx: 22, cy: 26, rx: 6, ry: 3.2, a: -40 },
        { cx: 15, cy: 20, rx: 5, ry: 2.8, a: 50 },
        { cx: 24, cy: 14, rx: 5.2, ry: 2.8, a: -45 },
        { cx: 18, cy: 8, rx: 4.2, ry: 2.4, a: 55 },
        { cx: 26, cy: 4, rx: 3.5, ry: 2.0, a: -42 },
      ].map((l, i) => (
        <ellipse key={i} cx={l.cx} cy={l.cy} rx={l.rx} ry={l.ry}
          transform={`rotate(${l.a} ${l.cx} ${l.cy})`}
          fill="#B7D4B0" fillOpacity={0.45 + (i % 3) * 0.07}
          stroke="#9ABF93" strokeWidth={0.4} />
      ))}
    </g>
  );
}

/* ─── Compound: CornerSpray ────────────────────────────── */

export function CornerSpray({ position = "top-left" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const transform =
    position === "bottom-right" ? "rotate(180 50 50)" :
    position === "top-right" ? "scale(-1,1) translate(-100,0)" :
    position === "bottom-left" ? "scale(1,-1) translate(0,-100)" :
    undefined;

  return (
    <svg viewBox="0 0 100 100" fill="none" className="pointer-events-none absolute h-40 w-40 text-gold opacity-20 sm:h-56 sm:w-56"
      style={{
        ...(position.includes("top") ? { top: 0 } : { bottom: 0 }),
        ...(position.includes("left") ? { left: 0 } : { right: 0 }),
      }}>
      <g transform={transform}>
        <Rose x={2} y={2} s={0.45} />
        <RoseBud x={45} y={2} s={0.48} />
        <RoseBud x={62} y={18} s={0.38} />
        <SageLeaf x={22} y={6} s={0.55} />
        <SageLeaf x={50} y={16} s={0.48} />
      </g>
    </svg>
  );
}

/* ─── Icons ────────────────────────────────────────────── */

export function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function RingsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="15" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CutleryIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8 2v6a3 3 0 003 3v11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 2v6a2 2 0 01-2 2h0a2 2 0 012-2v0a2 2 0 012 2v6c0 4-3 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function BalloonsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="8" cy="8" rx="4" ry="5.5" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="16" cy="8" rx="4" ry="5.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 13.5l1 10M16 13.5l-1 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M9 14h6" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  );
}

export function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3l1.9 5.7L20 11l-6.1 2.3L12 19l-1.9-5.7L4 11l6.1-2.3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M18 15l.7 2.1L21 18l-2.3.9L18 21l-.7-2.1L15 18l2.3-.9z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

export function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function HeartPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor" fillOpacity={0.12} stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="8.5" r="2.2" stroke="currentColor" strokeWidth="1.1" />
      <path d="M12 10.7V15" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Decorations ──────────────────────────────────────── */

export function GoldArc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <circle cx="0" cy="0" r="350" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </svg>
  );
}

export function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mx-auto h-5 w-5 text-gold" aria-hidden="true">
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 9h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function GoldOrnament() {
  return (
    <svg viewBox="0 0 120 20" fill="none" className="mx-auto h-4 w-24 text-gold" aria-hidden="true">
      <path d="M5 10h35M80 10h35" stroke="currentColor" strokeWidth="0.8" />
      <path d="M50 7c-1-3-4-3-5 0s1 5 5 8c4-3 6-5 5-8s-4-3-5 0z" fill="currentColor" opacity="0.5" />
      <path d="M62 7c-1-3-4-3-5 0s1 5 5 8c4-3 6-5 5-8s-4-3-5 0z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function HeartDot() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto mt-3 h-3 w-3 text-waxLight" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function InlineHeart() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="mx-1 inline h-3 w-3 text-waxLight align-middle" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
