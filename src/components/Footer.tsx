import { wedding } from "../data/wedding";
import { Flourish } from "./Ornament";

export default function Footer() {
  return (
    <footer className="border-t border-goldLight/20 px-5 py-14 text-center">
      <div className="mx-auto max-w-xl">
        <p className="font-script text-5xl text-parchment">
          {wedding.groom} & {wedding.bride}
        </p>
        <Flourish className="mt-4 text-goldLight/70" />
        <p className="mt-4 font-display text-[10px] uppercase tracking-[0.4em] text-parchment/50">
          {wedding.dateLine}
        </p>
        <p className="mt-6 font-body italic text-parchment/60">
          Gracias por ser parte de nuestra historia. Con amor, {wedding.groom} y {wedding.bride}.
        </p>
        <p className="mt-8 font-display text-[10px] uppercase tracking-[0.3em] text-parchment/40">
          {wedding.hashtag} · {wedding.emails}
        </p>
      </div>
    </footer>
  );
}