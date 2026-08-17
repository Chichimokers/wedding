import { motion } from "framer-motion";
import { wedding } from "../data/wedding";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Eventos", href: "#eventos" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Navbar({
  musicOn,
  onToggleMusic,
}: {
  musicOn: boolean;
  onToggleMusic: () => void;
}) {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <div className="border-b border-goldLight/20 bg-night/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a
            href="#inicio"
            className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-goldLight"
          >
            {wedding.monogram}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-[11px] uppercase tracking-[0.25em] text-parchment/80 transition-colors hover:text-goldLight"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleMusic}
              aria-label={musicOn ? "Pausar música" : "Reproducir música"}
              title={musicOn ? "Pausar música" : "Reproducir música"}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                musicOn
                  ? "border-goldLight/70 bg-goldLight/15 text-goldLight"
                  : "border-goldLight/30 text-parchment/60 hover:text-goldLight"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-4 w-4"
              >
                <path d="M9 18V6l10-2v12" />
                <circle cx="6.5" cy="18" r="2.5" />
                <circle cx="16.5" cy="16" r="2.5" />
              </svg>
            </button>

            <a
              href="#rsvp"
              className="rounded-full border border-goldLight/60 px-4 py-1.5 font-display text-[11px] uppercase tracking-[0.2em] text-goldLight transition-colors hover:bg-goldLight hover:text-night"
            >
              Confirmar
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}