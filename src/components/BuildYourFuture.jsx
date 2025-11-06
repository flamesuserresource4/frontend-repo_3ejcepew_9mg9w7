import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BuildYourFuture() {
  const [name, setName] = useState('');
  const [idea, setIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !idea.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.07),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.07),transparent_40%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">Build Your Future</h2>
          <p className="mt-3 text-white/70">Share an invention you want to see in NovaCity.</p>
        </div>

        {!submitted ? (
          <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div>
              <label className="mb-2 block text-sm text-white/70">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-cyan-400/0 transition focus:ring-2"
                placeholder="Astra Nova"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/70">Your Futuristic Idea</label>
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="h-32 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-cyan-400/0 transition focus:ring-2"
                placeholder="Quantum transit tunnels that fold local space for instant travel..."
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/60">Entries may be featured on our community wall.</p>
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Submit Idea
              </button>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-8 text-center"
          >
            <h3 className="text-2xl font-semibold">Thank you, {name}!</h3>
            <p className="mt-2 text-white/80">
              Your idea has been added to NovaCity’s concept wall. Keep watching the stars.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
