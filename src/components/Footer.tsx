import { wedding } from "../data/wedding";
import { CornerSpray, GoldArc, GoldOrnament, HeartDot } from "./Floral";

export default function Footer() {
  const { groom, bride, dateLineFull } = wedding;

  return (
    <section id="cierre" className="relative overflow-hidden bg-parchment py-24 sm:py-32">
      <CornerSpray position="top-left" />
      <CornerSpray position="bottom-right" />
      <GoldArc className="absolute -right-[150px] top-0 h-[300px] w-[300px] text-gold opacity-30" />

      <div className="mx-auto max-w-lg px-6 text-center">
        <HeartDot />

        <div className="mt-4 flex flex-col items-center gap-1">
          <span className="font-display text-4xl font-black text-gold sm:text-5xl">
            {groom}
          </span>
          <span className="font-script text-3xl text-gold">&amp;</span>
          <span className="font-display text-4xl font-black text-gold sm:text-5xl">
            {bride}
          </span>
        </div>

        <HeartDot />

        <p className="mt-6 font-script text-xl text-waxLight">
          Nuestra historia continúa...
        </p>

        <div className="mt-6">
          <GoldOrnament />
        </div>

        <p className="mt-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {dateLineFull}
        </p>

        <HeartDot />

        <a
          href="#portada"
          className="mt-6 inline-flex items-center gap-3 rounded-xl border-[1.5px] border-waxLight px-8 py-3 font-display text-sm font-semibold tracking-wider text-waxLight transition-all hover:bg-waxLight hover:text-white active:scale-95"
        >
          Abrir Invitación
        </a>

        <div className="mt-3">
          <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-3 w-3 text-gold/60">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="mt-8">
          <GoldOrnament />
        </div>
      </div>
    </section>
  );
}
