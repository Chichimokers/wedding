import { useState } from "react";
import type { FormEvent } from "react";
import confetti from "canvas-confetti";
import { wedding } from "../data/wedding";
import { Reveal, SectionHeading } from "./Ornament";

function fireConfetti() {
  const colors = ["#8f1f2e", "#d4af37", "#f4e9d2", "#c0392b"];
  confetti({ particleCount: 160, spread: 100, origin: { y: 0.6 }, colors });
  window.setTimeout(() => {
    confetti({ particleCount: 90, angle: 60, spread: 70, origin: { x: 0 }, colors });
    confetti({ particleCount: 90, angle: 120, spread: 70, origin: { x: 1 }, colors });
  }, 300);
}

export default function Rsvp() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    if (attending === "yes") fireConfetti();
  };

  return (
    <section id="rsvp" className="px-5 py-24 sm:py-32">
      <SectionHeading
        eyebrow="RSVP"
        title="Confirma tu asistencia"
        subtitle={`${wedding.rsvp.deadline} · ${wedding.rsvp.note}`}
      />

      <Reveal>
        <div className="parchment mx-auto mt-14 max-w-xl rounded-2xl px-6 py-10 sm:px-12">
          {sent ? (
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-wax text-3xl text-parchment shadow-seal">
                {attending === "yes" ? "❤" : "🙏"}
              </div>
              <h3 className="mt-6 font-script text-4xl text-ink">
                {attending === "yes"
                  ? "¡Nos vemos pronto!"
                  : "Te extrañaremos"}
              </h3>
              <p className="mt-4 font-body text-lg italic text-inkSoft">
                {attending === "yes"
                  ? `Gracias ${name || "amigo"} por confirmar. Ya tienes tu lugar reservado en la mesa.`
                  : `Lamentamos que no puedas acompañarnos, ${name || "amigo"}. Estarás en nuestros corazones.`}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setAttending(null);
                  setMessage("");
                }}
                className="mt-8 rounded-full border border-ink/40 px-6 py-2 font-display text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:bg-ink hover:text-parchment"
              >
                Enviar otra confirmación
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-display text-[11px] uppercase tracking-[0.3em] text-inkSoft">
                  Tu nombre
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nombre y apellido"
                  className="w-full rounded-lg border border-ink/25 bg-parchmentDark/40 px-4 py-3 font-body text-base text-ink outline-none transition-colors focus:border-gold"
                />
              </div>

              <div>
                <span className="mb-2 block font-display text-[11px] uppercase tracking-[0.3em] text-inkSoft">
                  ¿Podrás acompañarnos?
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttending("yes")}
                    className={`rounded-lg border px-4 py-3 font-display text-sm uppercase tracking-widest transition-all ${
                      attending === "yes"
                        ? "border-wax bg-wax text-parchment shadow-lg"
                        : "border-ink/25 text-inkSoft hover:border-wax"
                    }`}
                  >
                    ¡Acepto!
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttending("no")}
                    className={`rounded-lg border px-4 py-3 font-display text-sm uppercase tracking-widest transition-all ${
                      attending === "no"
                        ? "border-ink bg-ink text-parchment shadow-lg"
                        : "border-ink/25 text-inkSoft hover:border-ink"
                    }`}
                  >
                    Lo siento
                  </button>
                </div>
              </div>

              {attending === "yes" && (
                <div>
                  <label htmlFor="guests" className="mb-1.5 block font-display text-[11px] uppercase tracking-[0.3em] text-inkSoft">
                    Número de invitados (incluyéndote)
                  </label>
                  <select
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full rounded-lg border border-ink/25 bg-parchmentDark/40 px-4 py-3 font-body text-base text-ink outline-none transition-colors focus:border-gold"
                  >
                    {["1", "2", "3", "4"].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === "1" ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="message" className="mb-1.5 block font-display text-[11px] uppercase tracking-[0.3em] text-inkSoft">
                  Déjanos un mensaje
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Unos lindos deseos para nosotros…"
                  className="w-full resize-none rounded-lg border border-ink/25 bg-parchmentDark/40 px-4 py-3 font-body text-base text-ink outline-none transition-colors focus:border-gold"
                />
              </div>

              <button
                type="submit"
                disabled={!attending}
                className="w-full rounded-full bg-wax py-3.5 font-display text-sm uppercase tracking-[0.3em] text-parchment shadow-lg transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Enviar confirmación
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}