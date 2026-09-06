import { wedding } from "../data/wedding";
import { CornerSpray, GoldArc, GoldOrnament, HeartDot, InlineHeart } from "./Floral";
import Countdown from "./Countdown";

export default function Hero() {
  const { dateDay, tagline, venueTag } = wedding;

  return (
    <section id="portada" className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-parchment text-center">
      <CornerSpray position="top-left" />
      <CornerSpray position="bottom-right" />
      <GoldArc className="absolute -right-[200px] top-1/4 h-[400px] w-[400px] text-gold opacity-30" />

      <div className="mx-auto max-w-lg px-6">
        <GoldOrnament />
        <HeartDot />

        <h2 className="mt-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-waxLight sm:text-sm">
          El Gran Día
        </h2>
        <HeartDot />

        <p className="mt-6 font-display text-[5rem] font-black leading-none text-gold sm:text-[6.5rem]">
          {dateDay}
        </p>

        <p className="mt-1 font-body text-xs font-semibold uppercase tracking-[0.25em] text-waxLight sm:text-sm">
          Septiembre
        </p>
        <HeartDot />
        <p className="mt-1 font-display text-xl font-bold text-gold">
          2026
        </p>
        <HeartDot />

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-waxLight">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
          </svg>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-waxLight">
            {venueTag}
          </span>
        </p>

        <div className="mx-auto mt-4 flex items-center justify-center gap-2 text-gold/60">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="M12 3v18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M6 9h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <InlineHeart />
        </div>

        <p className="mx-auto mt-4 max-w-xs leading-relaxed text-inkSoft">
          {tagline.split(" ").map((word, i) => {
            const clean = word.replace(/[.,]/g, "").toLowerCase();
            const isPink = ["amor", "familia"].includes(clean);
            const isGold = ["para", "siempre"].includes(clean);
            return (
              <span key={i}>
                {isPink ? (
                  <span className="font-semibold text-waxLight">{word}</span>
                ) : isGold ? (
                  <span className="font-semibold text-gold">{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            );
          })}
        </p>

        <div className="mt-8">
          <Countdown />
        </div>

        <div className="mt-6">
          <GoldOrnament />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gold/60">
          <path d="M12 5l0 14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
