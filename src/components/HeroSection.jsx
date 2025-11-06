import { useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    const next = !muted;
    setMuted(next);
    audioRef.current.muted = next;
    if (!next) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/0CT1-dbOQTa-XJKt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          NovaCity: The Future Beyond Earth
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Where the Future Finds Its Orbit
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#explore"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Launch Exploration
          </a>
          <button
            onClick={toggleAudio}
            className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {muted ? 'Enable Ambient Music' : 'Mute Ambient Music'}
          </button>
          <audio
            ref={audioRef}
            src="https://cdn.pixabay.com/download/audio/2022/02/23/audio_4a14450650.mp3?filename=ambient-space-112199.mp3"
            autoPlay
            loop
            muted
          />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
        <div className="animate-bounce text-xs tracking-widest">SCROLL</div>
      </div>
    </section>
  );
}
