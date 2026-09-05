import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import IntroLetter from "./components/IntroLetter";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Events from "./components/Events";
import Location from "./components/Location";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";
import Petals from "./components/Petals";

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });

    const handleAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.4 });
      }
    };
    document.addEventListener("click", handleAnchor);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", handleAnchor);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Soft rose-gold vignette */}
      <div className="pointer-events-none fixed inset-0 z-[5] bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(201,169,110,0.16))]" />

      <AnimatePresence>
        {!open && <IntroLetter onOpen={handleOpen} />}
      </AnimatePresence>

      {open && <Petals />}

      <main>
        <Footer />
        <Hero />
        <Events />
        <Story />
        <Location />
        <Rsvp />
      </main>
    </div>
  );
}