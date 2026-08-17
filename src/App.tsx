import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import IntroLetter from "./components/IntroLetter";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Events from "./components/Events";
import Location from "./components/Location";
import DressCode from "./components/DressCode";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";
import Petals from "./components/Petals";
import { startMusic, stopMusic } from "./lib/music";

export default function App() {
  const [open, setOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

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
    startMusic();
    setMusicOn(true);
  };

  const toggleMusic = () => {
    if (musicOn) {
      stopMusic();
      setMusicOn(false);
    } else {
      startMusic();
      setMusicOn(true);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Film vignette */}
      <div className="pointer-events-none fixed inset-0 z-[5] bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(10,6,3,0.55))]" />

      <AnimatePresence>
        {!open && <IntroLetter onOpen={handleOpen} />}
      </AnimatePresence>

      {open && <Petals />}

      <Navbar musicOn={musicOn} onToggleMusic={toggleMusic} />
      <main>
        <Hero />
        <Story />
        <Events />
        <Location />
        <DressCode />
        <Rsvp />
      </main>
      <Footer />
    </div>
  );
}