let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let timer: number | null = null;
let playing = false;

function getCtx(): AudioContext | null {
  try {
    if (!ctx) {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      ctx = new AC();
    }
    return ctx;
  } catch {
    return null;
  }
}

function ensureMaster(): GainNode | null {
  const audio = getCtx();
  if (!audio) return null;
  if (!master) {
    master = audio.createGain();
    master.gain.setValueAtTime(0.0001, audio.currentTime);
    master.connect(audio.destination);
  }
  return master;
}

// Progresión romántica: C – Am – F – G
const CHORDS: number[][] = [
  [261.63, 329.63, 392.0], // C
  [220.0, 261.63, 329.63], // Am
  [174.61, 220.0, 261.63], // F
  [196.0, 246.94, 293.66], // G
];
const ORDER = [0, 1, 2, 1];
const STEP = 0.46; // segundos por nota
const BASS_DIV = 4;

function pluck(freq: number, vel: number) {
  const audio = ctx;
  const bus = master;
  if (!audio || !bus) return;
  const t = audio.currentTime + 0.03;

  const osc = audio.createOscillator();
  osc.type = "triangle";
  osc.frequency.value = freq;

  const warm = audio.createOscillator();
  warm.type = "sine";
  warm.frequency.value = freq * 2;

  const g = audio.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.14 * vel, t + 0.04);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);

  const g2 = audio.createGain();
  g2.gain.setValueAtTime(0.0001, t);
  g2.gain.exponentialRampToValueAtTime(0.04 * vel, t + 0.04);
  g2.gain.exponentialRampToValueAtTime(0.0001, t + 1.5);

  osc.connect(g).connect(bus);
  warm.connect(g2).connect(bus);
  osc.start(t);
  osc.stop(t + 2.5);
  warm.start(t);
  warm.stop(t + 1.6);
}

export function startMusic() {
  if (playing) return;
  const bus = ensureMaster();
  const audio = getCtx();
  if (!bus || !audio) return;
  if (audio.state === "suspended") void audio.resume();

  const t = audio.currentTime;
  bus.gain.cancelScheduledValues(t);
  bus.gain.setValueAtTime(Math.max(bus.gain.value, 0.0001), t);
  bus.gain.exponentialRampToValueAtTime(0.55, t + 1.2);

  playing = true;
  let chord = 0;
  let note = 0;

  const step = () => {
    if (!playing || !audio || !bus) return;
    const chordNotes = CHORDS[chord];
    const idx = ORDER[note % ORDER.length];
    if (idx === 0 && note % 4 === 0) {
      pluck(chordNotes[0] / BASS_DIV, 0.9); // bajo suave en cada acorde
    }
    pluck(chordNotes[idx], 0.7);
    note++;
    if (note % ORDER.length === 0) chord = (chord + 1) % CHORDS.length;
  };

  for (let i = 0; i < 4; i++) window.setTimeout(step, i * 60);
  timer = window.setInterval(step, STEP * 1000);
}

export function stopMusic() {
  if (!playing) return;
  playing = false;
  if (timer !== null) {
    window.clearInterval(timer);
    timer = null;
  }
  const audio = getCtx();
  if (audio && master) {
    const t = audio.currentTime;
    master.gain.cancelScheduledValues(t);
    master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), t);
    master.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
    window.setTimeout(() => {
      if (audio.state === "running") void audio.suspend();
    }, 950);
  }
}

export function isMusicPlaying() {
  return playing;
}