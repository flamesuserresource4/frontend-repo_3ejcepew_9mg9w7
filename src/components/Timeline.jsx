import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2035',
    title: 'Net‑Zero Earth Cities',
    desc: 'Urban grids run on renewables and adaptive AI reduces waste to near zero.',
  },
  {
    year: '2047',
    title: 'Lunar Power Stations',
    desc: 'Helium‑3 harvesting and beamed power enable off‑world infrastructure.',
  },
  {
    year: '2056',
    title: 'Mars Habitat Network',
    desc: 'Self‑healing domes and bio‑loops support permanent human presence.',
  },
  {
    year: '2072',
    title: 'NovaCity Deployed in Orbit',
    desc: 'A living city above Earth—sustainable, sentient, and interconnected.',
  },
];

export default function Timeline() {
  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">Space Innovation Timeline</h2>
          <p className="mt-3 text-white/70">From sustainable Earth to life among the stars.</p>
        </div>

        <ol className="relative border-l border-white/10 pl-6">
          {milestones.map((m, i) => (
            <motion.li
              key={m.year}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="mb-10 ml-2"
            >
              <span className="absolute -left-3 mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
              <div className="flex flex-wrap items-baseline gap-x-3">
                <div className="text-sm text-white/60">{m.year}</div>
                <h3 className="text-xl font-semibold">{m.title}</h3>
              </div>
              <p className="mt-2 max-w-3xl text-white/80">{m.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
