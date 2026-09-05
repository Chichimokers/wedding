import { wedding } from "../data/wedding";
import { CornerSpray, GoldArc, GoldOrnament, HeartDot } from "./Floral";

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function GuestsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="16" cy="7" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M15 20c0-3.3 2.7-6 6-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function RingsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="15" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function BuffetIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 18h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5 18V8a7 7 0 0114 0v10" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 4V2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function GamesIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="8" cy="8" rx="4" ry="5.5" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="16" cy="8" rx="4" ry="5.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 13.5l1 10M16 13.5l-1 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M9 14h6" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  );
}

function ClosingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3l1.9 5.7L20 11l-6.1 2.3L12 19l-1.9-5.7L4 11l6.1-2.3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  welcome: GuestsIcon,
  rings: RingsIcon,
  buffet: BuffetIcon,
  games: GamesIcon,
  closing: ClosingIcon,
};

export default function Events() {
  const { schedule } = wedding;

  return (
    <section id="cronograma" className="relative overflow-hidden bg-parchment py-24 sm:py-32">
      <CornerSpray position="top-left" />
      <CornerSpray position="bottom-right" />
      <GoldArc className="absolute -right-[200px] top-1/3 h-[400px] w-[400px] text-gold opacity-30" />

      <div className="mx-auto max-w-lg px-6 text-center">
        <GoldOrnament />
        <HeartDot />

        <h2 className="mt-4 font-display text-4xl font-bold text-gold sm:text-5xl">
          Celebremos
        </h2>
        <h2 className="font-display text-4xl font-bold text-waxLight sm:text-5xl">
          Juntos
        </h2>

        <div className="mt-6">
          <HeartDot />
        </div>

        <div className="mt-8 grid grid-cols-[auto_1px_1fr] gap-x-5 gap-y-8 text-left">
          {schedule.map((s: { time: string; label: string; icon: string }, i: number) => {
            const Icon = iconMap[s.icon] || ClockIcon;
            return (
              <div key={i} className="contents">
                <div className="flex flex-col items-center pt-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-waxLight/10 ring-1 ring-waxLight/30">
                    <Icon className="h-5 w-5 text-waxLight" />
                  </span>
                </div>

                <div className="relative flex flex-col items-center">
                  <span className="mt-3 h-2.5 w-2.5 rounded-full border-[1.5px] border-gold bg-parchment" />
                  {i < schedule.length - 1 && (
                    <span className="w-px flex-1 bg-gold/40" />
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <span className="font-display text-xl font-bold text-gold">
                    {s.time}
                  </span>
                  <span className="mt-0.5 font-body text-sm text-inkSoft">
                    {s.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <GoldOrnament />
          <HeartDot />
        </div>
      </div>
    </section>
  );
}
