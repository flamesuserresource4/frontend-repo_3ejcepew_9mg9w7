export default function AboutNovaCity() {
  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-3xl font-bold text-transparent sm:text-5xl">
            About NovaCity
          </h2>
          <p className="mt-4 text-white/80">
            NovaCity is humanity’s first orbital city — a symphony of AI, clean energy, and resilient design. 
            Every system is circular, every watt is renewable, and every citizen partners with ethical AI to 
            expand human potential. From hydro farms to quantum communications, NovaCity demonstrates that 
            sustainability and ambition can thrive beyond Earth.
          </p>
          <p className="mt-4 text-white/70">
            Built with modular habitats, transparent governance, and learning networks, the city welcomes 
            explorers, researchers, and creators who believe a better civilization is not just possible — 
            it’s already in orbit.
          </p>
        </div>
      </div>
    </section>
  );
}
