import { wedding } from "../data/wedding";
import { Reveal, SectionHeading } from "./Ornament";

export default function Story() {
  return (
    <section id="historia" className="relative px-5 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Nuestra Historia"
        title="Dos almas, un camino"
        subtitle="Cada historia de amor es única; la nuestra comenzó con una sonrisa y sigue creciendo con cada día a tu lado."
      />

      <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-2">
        {wedding.story.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.15}>
            <article className="parchment relative h-full rounded-2xl p-8 text-center">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-wax px-4 py-1 font-display text-[10px] uppercase tracking-[0.3em] text-parchment shadow-lg">
                Capítulo {i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold uppercase tracking-widest text-ink">
                {s.title}
              </h3>
              <p className="mt-4 font-body text-base leading-relaxed text-inkSoft">
                {s.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}