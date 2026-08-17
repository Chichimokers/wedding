import { useEffect, useState } from "react";
import { wedding } from "../data/wedding";

function diff(target: number) {
  const total = Math.max(0, target - Date.now());
  return {
    days: Math.floor(total / 86400000),
    hours: Math.floor((total / 3600000) % 24),
    minutes: Math.floor((total / 60000) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export default function Countdown() {
  const target = new Date(wedding.dateISO).getTime();
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = window.setInterval(() => setT(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const cells = [
    { value: t.days, label: "Días" },
    { value: t.hours, label: "Horas" },
    { value: t.minutes, label: "Min" },
    { value: t.seconds, label: "Seg" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      {cells.map((c) => (
        <div
          key={c.label}
          className="flex min-w-[70px] flex-col items-center rounded-lg border border-goldLight/30 bg-night/40 px-3 py-3 backdrop-blur-sm sm:min-w-[92px] sm:px-5 sm:py-4"
        >
          <span className="font-display text-3xl font-semibold tabular-nums text-goldLight sm:text-4xl">
            {String(c.value).padStart(2, "0")}
          </span>
          <span className="mt-1 font-display text-[9px] uppercase tracking-[0.3em] text-parchment/60 sm:text-[10px]">
            {c.label}
          </span>
        </div>
      ))}
    </div>
  );
}