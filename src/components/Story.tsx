import { wedding } from "../data/wedding";
import { CornerSpray, GoldArc, GoldOrnament, HeartDot, CrossIcon } from "./Floral";

export default function Story() {
  const { blessing, invitation } = wedding;

  return (
    <section id="mensaje" className="relative overflow-hidden bg-parchment py-24 sm:py-32">
      <CornerSpray position="top-left" />
      <CornerSpray position="bottom-right" />
      <GoldArc className="absolute -right-[200px] top-1/4 h-[400px] w-[400px] text-gold opacity-30" />

      <div className="mx-auto max-w-lg px-6 text-center">
        <CrossIcon />

        <p className="mx-auto mt-6 max-w-xs leading-relaxed text-inkSoft">
          {blessing.split(" ").map((word: string, i: number) => {
            const clean = word.replace(/[.,]/g, "").toLowerCase();
            const isPink = ["dios", "amor"].includes(clean);
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

        <div className="mt-6 flex justify-center gap-3">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 text-waxLight">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <h2 className="mt-6 font-display text-4xl font-bold text-gold sm:text-5xl">
          Nos Casamos
        </h2>

        <div className="mt-4">
          <HeartDot />
        </div>

        <p className="mx-auto mt-6 max-w-xs leading-relaxed text-inkSoft">
          {invitation.split(" ").map((word: string, i: number) => {
            const clean = word.replace(/[.,¡!]/g, "").toLowerCase();
            const isPink = ["contigo"].includes(clean);
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

        <p className="mt-6 font-script text-2xl text-waxLight">
          ¡Te esperamos!
        </p>

        <div className="relative mx-auto mt-8 h-[280px] w-[240px] overflow-hidden border-2 border-gold/50 bg-parchmentDark" style={{ borderRadius: "50% 50% 0 0 / 35% 35% 0 0" }}>
          <img
            src="/pareja.jpg"
            alt="RY & Yttusi"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="mt-12">
          <GoldOrnament />
          <p className="mt-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-gold/60">
            Desliza para continuar
          </p>
          <svg viewBox="0 0 24 24" fill="none" className="mx-auto mt-2 h-4 w-4 text-gold/60">
            <path d="M12 5l0 14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
