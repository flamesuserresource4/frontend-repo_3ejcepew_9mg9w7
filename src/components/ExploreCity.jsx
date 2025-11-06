import { useState } from 'react';
import { Brain, Sun, Rocket, Leaf, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const zones = [
  {
    id: 'ai-hospital',
    name: 'AI Hospital',
    icon: Brain,
    desc:
      'Autonomous diagnostics, nanobot surgery, and real‑time health twins keep citizens thriving.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'solar-dome',
    name: 'Solar Dome',
    icon: Sun,
    desc:
      'A lattice of quantum solar sails powers NovaCity with clean, abundant energy.',
    color: 'from-amber-300 to-yellow-500',
  },
  {
    id: 'rocket-port',
    name: 'Rocket Port',
    icon: Rocket,
    desc:
      'Reusable launch pads and ion ferries connect Earth, Mars, and deep‑space colonies.',
    color: 'from-fuchsia-400 to-purple-500',
  },
  {
    id: 'hydro-farm',
    name: 'Hydro Farm',
    icon: Leaf,
    desc:
      'Vertical hydroponics and algae bioreactors feed the city with near‑zero waste.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'education-tower',
    name: 'Education Tower',
    icon: Building2,
    desc:
      'Holographic classrooms and AI mentors accelerate human potential at every age.',
    color: 'from-indigo-400 to-cyan-500',
  },
];

export default function ExploreCity() {
  const [active, setActive] = useState(zones[0].id);
  const current = zones.find((z) => z.id === active);

  return (
    <section id="explore" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(236,72,153,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Explore the City
          </h2>
          <p className="mt-3 text-white/70">
            Tap a glowing zone to uncover the tech shaping life in orbit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {zones.map(({ id, name, icon: Icon, color }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                active === id ? 'ring-2 ring-cyan-400' : 'hover:bg-white/10'
              }`}
            >
              <div className={`absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-br ${color}`} />
              <div className="relative z-10 flex flex-col gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/60 text-white shadow-inner shadow-black/40">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm tracking-wider text-white/60">ZONE</div>
                  <div className="text-lg font-semibold">{name}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 sm:p-10"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <h3 className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                {current.name}
              </h3>
              <p className="mt-3 max-w-3xl text-white/80">{current.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
