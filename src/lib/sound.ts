let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  try {
    if (!ctx) {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      ctx = new AC();
    }
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

/** Suave sonido de carta abriéndose: crujido de papel + aire suave */
export function playLetterOpen() {
  const audio = getCtx();
  if (!audio) return;
  const t = audio.currentTime;

  // Crujido de papel: ruido filtrado con envolvente que va subiendo
  const bufferSize = Math.floor(audio.sampleRate * 1.3);
  const buffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
  const data = buffer.getChannelData(0);
  const attack = audio.sampleRate * 0.28;
  const release = audio.sampleRate * 0.55;
  for (let i = 0; i < bufferSize; i++) {
    const attackEnv = Math.min(1, i / attack);
    const releaseEnv = Math.min(1, (bufferSize - i) / release);
    data[i] = (Math.random() * 2 - 1) * attackEnv * releaseEnv * (0.35 + 0.65 * Math.random());
  }
  const src = audio.createBufferSource();
  src.buffer = buffer;

  const bandpass = audio.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.Q.value = 0.7;
  bandpass.frequency.setValueAtTime(700, t);
  bandpass.frequency.exponentialRampToValueAtTime(2600, t + 0.45);
  bandpass.frequency.exponentialRampToValueAtTime(750, t + 1.05);

  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.35, t + 0.32);
  gain.gain.exponentialRampToValueAtTime(0.12, t + 0.85);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.25);

  src.connect(bandpass).connect(gain).connect(audio.destination);
  src.start(t);

  // Aire suave: "whoosh" ascendente como cuando se abre la carta
  const osc = audio.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(160, t);
  osc.frequency.exponentialRampToValueAtTime(540, t + 0.4);
  const oscGain = audio.createGain();
  oscGain.gain.setValueAtTime(0.0001, t);
  oscGain.gain.exponentialRampToValueAtTime(0.1, t + 0.22);
  oscGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
  osc.connect(oscGain).connect(audio.destination);
  osc.start(t);
  osc.stop(t + 0.75);
}