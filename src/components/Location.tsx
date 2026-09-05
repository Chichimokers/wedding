import { wedding } from "../data/wedding";
import { CornerSpray, GoldArc, GoldOrnament, HeartDot, CrossIcon } from "./Floral";

export default function Location() {
  const { venue, venueAddress, mapQuery } = wedding;

  return (
    <section id="ubicacion" className="relative overflow-hidden bg-parchment py-24 sm:py-32">
      <CornerSpray position="top-left" />
      <CornerSpray position="bottom-right" />
      <GoldArc className="absolute -right-[200px] top-1/4 h-[400px] w-[400px] text-gold opacity-30" />

      <div className="mx-auto max-w-lg px-6 text-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-6 w-6 text-gold">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
        </svg>

        <div className="mt-3">
          <GoldOrnament />
        </div>
        <HeartDot />

        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          <span className="text-waxLight">¿Dónde Nos </span>
          <span className="text-gold">Encontramos?</span>
        </h2>

        <div className="mt-6">
          <HeartDot />
        </div>

        <p className="mt-6 font-display text-2xl font-bold text-waxLight">
          {venue}
        </p>

        <HeartDot />

        <p className="mx-auto mt-4 max-w-[260px] leading-relaxed text-inkSoft">
          {venueAddress.split(" ").map((word: string, i: number) => {
            const clean = word.replace(/[.,]/g, "").toLowerCase();
            const isPink = ["línea", "final"].includes(clean);
            return (
              <span key={i}>
                {isPink ? (
                  <span className="font-semibold text-waxLight">{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            );
          })}
        </p>

        <div className="mt-4 flex flex-col items-center gap-2">
          <GoldOrnament />
          <HeartDot />
        </div>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-waxLight px-8 py-3 font-body text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-waxDark hover:shadow-lg active:scale-95"
        >
          Cómo Llegar
        </a>

        <p className="mt-3 text-sm text-inkSoft">
          Toca el botón para abrir la ubicación en tu mapa{" "}
          <span className="text-waxLight">❤</span>
        </p>

        <div className="mt-6">
          <CrossIcon />
        </div>

        <div className="mt-4">
          <GoldOrnament />
        </div>

        <p className="mt-4 font-display text-2xl font-bold text-waxLight">
          Te Esperamos
        </p>

        <HeartDot />
      </div>
    </section>
  );
}
