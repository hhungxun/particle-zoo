import { useCallback, useMemo, useState } from 'react';
import { ERAS } from './data/timeline';
import { PARTICLE_ALIASES } from './data/standardModel';
import type { FilterMode } from './types';
import { EraSection } from './components/EraSection';
import { EraNavigation } from './components/EraNavigation';
import { ReadingProgress } from './components/ReadingProgress';
import { FilterToggle } from './components/FilterToggle';
import { StandardModelTracker } from './components/StandardModelTracker';

function App() {
  const [filter, setFilter] = useState<FilterMode>('all');
  const [activeEraId, setActiveEraId] = useState<string>(ERAS[0].id);
  const [activeEventId, setActiveEventId] = useState<string | undefined>(undefined);
  const [discoveredParticles, setDiscoveredParticles] = useState<Set<string>>(new Set());

  const onEraEnter = useCallback((id: string) => setActiveEraId(id), []);

  const onEventEnter = useCallback((id: string) => {
    setActiveEventId(id);
    // Accumulate any newly-discovered fundamental particles from this event.
    for (const era of ERAS) {
      const evt = era.events.find((e) => e.id === id);
      if (evt?.particles) {
        setDiscoveredParticles((prev) => {
          const next = new Set(prev);
          for (const p of evt.particles!) {
            // Composite particles (proton, neutron) have no SM entry and
            // are silently skipped.  Antimatter aliases map to their
            // fundamental partner.
            const mapped = PARTICLE_ALIASES[p] ?? p;
            next.add(mapped);
          }
          return next;
        });
      }
    }
  }, []);

  const activeEra = useMemo(
    () => ERAS.find((e) => e.id === activeEraId) ?? ERAS[0],
    [activeEraId],
  );

  return (
    <div className="min-h-screen bg-paper text-ink-700">
      <ReadingProgress activeAccent={activeEra.accent} />
      <EraNavigation
        eras={ERAS}
        activeEraId={activeEraId}
        activeEventId={activeEventId}
      />
      <StandardModelTracker discovered={discoveredParticles} />

      {/* Top toolbar */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-paper/80 border-b border-rule">
        <div className="mx-auto max-w-wide px-6 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="no-underline">
            <span className="font-sans font-semibold tracking-tight text-ink-800">
              The Particle Zoo
            </span>
            <span className="ml-2 ui-label hidden sm:inline">1897 — 2012</span>
          </a>
          <FilterToggle filter={filter} onChange={setFilter} />
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto max-w-wide px-6 pt-24 pb-20 lg:pt-40 lg:pb-32"
      >
        <p className="ui-label" style={{ color: ERAS[0].accent }}>
          A timeline · in seven eras
        </p>
        <h1 className="mt-4 font-sans text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] tracking-tight text-ink-800">
          The Particle Zoo
        </h1>
        <p className="mt-6 max-w-readable text-xl md:text-2xl leading-snug text-ink-600 font-serif italic">
          One hundred and fifteen years of particle physics — from the corpuscle
          in a glass tube in Cambridge to the boson in a 27-kilometre ring under
          the French–Swiss border.
        </p>
        <p className="mt-10 max-w-readable text-ink-600">
          Scroll to begin. The bar above tracks how far you have come; the dots
          on the left mark where you are. A discovery in <em>theory</em> is set
          beside a discovery in <em>experiment</em>; you can dim either with
          the toggle in the toolbar.
        </p>
      </section>

      {/* Era sections */}
      <main>
        {ERAS.map((era) => (
          <EraSection
            key={era.id}
            era={era}
            filter={filter}
            onEnter={onEraEnter}
            onEventEnter={onEventEnter}
          />
        ))}
      </main>

      <footer className="mx-auto max-w-wide px-6 py-12 text-sm text-ink-500 border-t border-rule">
        <p>
          The Particle Zoo · A reading project. Citations marked{' '}
          <span className="font-mono text-red-700">[VERIFY]</span> need
          independent confirmation before shipping.
        </p>
      </footer>
    </div>
  );
}

export default App;
