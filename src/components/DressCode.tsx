import { wedding } from "../data/wedding";
import { Reveal } from "./Ornament";

export default function DressCode() {
  return (
    <section className="px-5 pb-24 sm:pb-32">
      <Reveal>
        <div className="parchment mx-auto max-w-2xl rounded-2xl px-8 py-12 text-center sm:px-14">
          <p className="font-display text-[11px] uppercase tracking-[0.45em] text-gold">
            Dress Code
          </p>
          <h2 className="mt-3 font-script text-4xl text-ink sm:text-5xl">
            {wedding.dressCode.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-base italic text-inkSoft">
            {wedding.dressCode.description}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            {wedding.dressCode.colors.map((c, i) => (
              <Reveal key={c} delay={i * 0.1}>
                <div
                  className="h-12 w-12 rounded-full border-2 border-ink/20 shadow-md transition-transform hover:scale-110"
                  style={{ backgroundColor: c }}
                  title={c}
                />
              </Reveal>
            ))}
          </div>

          <p className="mt-8 font-display text-[10px] uppercase tracking-[0.3em] text-inkSoft">
            Formal · Tono: paleta de la celebración
          </p>
        </div>
      </Reveal>
    </section>
  );
}