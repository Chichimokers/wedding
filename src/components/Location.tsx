import { wedding } from "../data/wedding";
import { Reveal, SectionHeading } from "./Ornament";

function mapsEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
}

function mapsLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function Location() {
  return (
    <section id="ubicacion" className="px-5 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Ubicación"
        title="Dónde nos espera el amor"
        subtitle="Estamos felices de compartir contigo estos dos lugares que guardan nuestro día."
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-goldLight/25 shadow-card">
            <iframe
              title="Mapa de la celebración"
              src={mapsEmbedUrl(wedding.mapQuery)}
              className="h-[420px] w-full border-0 grayscale-[0.2] contrast-[0.95] lg:h-full lg:min-h-[460px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          {wedding.events.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.12}>
              <div className="h-full rounded-2xl border border-goldLight/25 bg-night/40 p-6 backdrop-blur-sm">
                <p className="font-display text-[10px] uppercase tracking-[0.35em] text-goldLight">
                  {e.kind}
                </p>
                <h3 className="mt-2 font-script text-2xl text-parchment">{e.title}</h3>
                <p className="mt-3 font-body text-lg text-parchment/85">{e.place}</p>
                <p className="mt-1 font-body italic text-parchment/60">{e.address}</p>
                <a
                  href={mapsLink(e.address)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-goldLight/60 px-5 py-2 font-display text-[11px] uppercase tracking-[0.2em] text-goldLight transition-colors hover:bg-goldLight hover:text-night"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}