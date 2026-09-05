import { motion } from "framer-motion";
import { wedding } from "../data/wedding";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cronograma", href: "#cronograma" },
  { label: "Mensaje", href: "#mensaje" },
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
      <div className="border-b border-gold/30 bg-white/80 shadow-[0_10px_30px_-20px_rgba(74,59,58,0.35)] backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a
            href="#inicio"
            className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-waxDark sm:text-sm sm:tracking-[0.3em]"
          >
            {wedding.monogram}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-[11px] uppercase tracking-[0.25em] text-inkSoft/80 transition-colors hover:text-wax"
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
                  ? "border-wax/70 bg-wax/10 text-wax"
                  : "border-gold text-inkSoft/70 hover:text-wax"
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
              className="rounded-full bg-wax px-4 py-1.5 font-display text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-waxLight"
            >
              Confirmar
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}