import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import { Reveal, SectionHeading } from "./Ornament";

function EventIcon({ icon }: { icon: string }) {
  if (icon === "church") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="1.3">
        <path d="M12 3v18M9 6h6M10 6v3M14 6v3M8 21h8M10 9h4v12h-4z" />
        <path d="M12 3L9.5 5.5M12 3l2.5 2.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="1.3">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  );
}

export default function Events() {
  return (
    <section id="eventos" className="relative px-5 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(143,31,46,0.12),transparent_60%)]" />

      <SectionHeading
        eyebrow="Eventos"
        title="Itinerario de la celebración"
        subtitle="Un día lleno de momentos que recordaremos por siempre."
      />

      <div className="relative mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
        {wedding.events.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.15}>
            <motion.article
              whileHover={{ y: -8 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-goldLight/25 bg-night/40 p-8 text-center backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <p className="font-display text-[10px] uppercase tracking-[0.4em] text-goldLight">
                  {e.kind}
                </p>
                <div className="mt-5 inline-flex items-center justify-center rounded-full border border-goldLight/30 p-4 text-goldLight">
                  <EventIcon icon={e.icon} />
                </div>
                <h3 className="mt-5 font-script text-3xl text-parchment sm:text-4xl">
                  {e.title}
                </h3>
                <p className="mt-4 font-display text-xs uppercase tracking-[0.3em] text-parchment/80">
                  {e.place}
                </p>
                <p className="mt-2 font-body text-base italic text-parchment/60">
                  {e.address}
                </p>
                <p className="mt-4 inline-block rounded-full bg-wax/20 px-4 py-1 font-display text-xs tracking-[0.25em] text-parchment">
                  {e.time}
                </p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      {/* Schedule */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-20 max-w-xl">
          <h3 className="text-center font-display text-xs uppercase tracking-[0.4em] text-goldLight">
            Horario
          </h3>
          <div className="mt-8 space-y-0">
            {wedding.schedule.map((s, i) => (
              <motion.div
                key={s.time}
                className="relative flex items-center gap-6 border-l border-goldLight/25 py-4 pl-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="absolute -left-[5px] h-2.5 w-2.5 rounded-full bg-goldLight ring-4 ring-night" />
                <span className="w-16 font-display text-sm tracking-widest text-goldLight">
                  {s.time}
                </span>
                <span className="font-body text-lg text-parchment/85">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}