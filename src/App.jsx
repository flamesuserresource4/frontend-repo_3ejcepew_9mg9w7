import HeroSection from './components/HeroSection';
import ExploreCity from './components/ExploreCity';
import Timeline from './components/Timeline';
import BuildYourFuture from './components/BuildYourFuture';
import AboutNovaCity from './components/AboutNovaCity';

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#top" className="text-sm font-semibold tracking-widest text-white/90">
          NOVACITY
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#explore" className="hover:text-white">Explore</a>
          <a href="#timeline" className="hover:text-white">Timeline</a>
          <a href="#build" className="hover:text-white">Build</a>
          <a href="#about" className="hover:text-white">About</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-black font-sans antialiased">
      <Navbar />
      <main className="space-y-0">
        <HeroSection />
        <div id="timeline">
          <ExploreCity />
        </div>
        <div>
          <Timeline />
        </div>
        <div id="build">
          <BuildYourFuture />
        </div>
        <div id="about">
          <AboutNovaCity />
        </div>
        <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} NovaCity • Designed for a sustainable future among the stars
        </footer>
      </main>
    </div>
  );
}
