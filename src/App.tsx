import { useCallback, useMemo, useState, useEffect } from 'react';
import { ERAS } from './data/timeline';
import { PARTICLE_ALIASES, SM_PARTICLES } from './data/standardModel';
import type { FilterMode } from './types';
import { EraSection } from './components/EraSection';
import { EraNavigation } from './components/EraNavigation';
import { ReadingProgress } from './components/ReadingProgress';
import { FilterToggle } from './components/FilterToggle';
import { StandardModelTracker } from './components/StandardModelTracker';
import { KeyboardHelp } from './components/KeyboardHelp';
import { ParticlePassport } from './components/ParticlePassport';

/** Build a lookup: particle id → the event that discovered it. */
function buildParticleEventMap() {
  const map: Record<string, { eventId: string; headline: string; yearLabel: string }> = {};
  for (const era of ERAS) {
    for (const evt of era.events) {
      if (!evt.particles) continue;
      for (const p of evt.particles) {
        const mapped = PARTICLE_ALIASES[p] ?? p;
        if (!map[mapped]) {
          map[mapped] = { eventId: evt.id, headline: evt.headline, yearLabel: evt.yearLabel };
        }
      }
    }
  }
  // Also map from SM particle IDs directly
  for (const p of SM_PARTICLES) {
    if (p.discoveredByEventId && !map[p.id]) {
      for (const era of ERAS) {
        const evt = era.events.find((e) => e.id === p.discoveredByEventId);
        if (evt) {
          map[p.id] = { eventId: evt.id, headline: evt.headline, yearLabel: evt.yearLabel };
          break;
        }
      }
    }
  }
  return map;
}

const PARTICLE_EVENT_MAP = buildParticleEventMap();

function App() {
  const [filter, setFilter] = useState<FilterMode>('all');
  const [activeEraId, setActiveEraId] = useState<string>(ERAS[0].id);
  const [activeEventId, setActiveEventId] = useState<string | undefined>(undefined);
  const [showHelp, setShowHelp] = useState(false);
  const [selectedParticleId, setSelectedParticleId] = useState<string | undefined>(undefined);
  const [highlightedEventId, setHighlightedEventId] = useState<string | undefined>(undefined);

  const onEraEnter = useCallback((id: string) => setActiveEraId(id), []);

  const onEventEnter = useCallback((id: string) => {
    setActiveEventId(id);
  }, []);

  const activeEra = useMemo(
    () => ERAS.find((e) => e.id === activeEraId) ?? ERAS[0],
    [activeEraId],
  );

  const particleById = useMemo(
    () => Object.fromEntries(SM_PARTICLES.map((particle) => [particle.id, particle])),
    [],
  );

  const discoveredParticles = useMemo(() => {
    const discovered = new Set<string>();
    let reachedCurrentPosition = false;

    for (const era of ERAS) {
      if (!activeEventId && era.id === activeEraId) break;

      for (const evt of era.events) {
        if (evt.particles) {
          for (const p of evt.particles) {
            discovered.add(PARTICLE_ALIASES[p] ?? p);
          }
        }

        if (evt.id === activeEventId) {
          reachedCurrentPosition = true;
          break;
        }
      }

      if (reachedCurrentPosition) break;
      if (!activeEventId && era.id === activeEraId) break;
    }

    return discovered;
  }, [activeEraId, activeEventId]);

  const handleParticleSelect = useCallback((
    particleId: string,
    info?: { eventId: string; headline: string; yearLabel: string },
  ) => {
    setSelectedParticleId(particleId);
    setHighlightedEventId(info?.eventId);
    if (info?.eventId) {
      window.setTimeout(() => {
        setHighlightedEventId((current) => (current === info.eventId ? undefined : current));
      }, 5000);
    }
  }, []);

  const handleCompareEventOpen = useCallback((eventId: string) => {
    setFilter('all');
    setHighlightedEventId(eventId);
    window.setTimeout(() => {
      document.getElementById(eventId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
    window.setTimeout(() => {
      setHighlightedEventId((current) => (current === eventId ? undefined : current));
    }, 5000);
  }, []);

  // Keyboard shortcuts: T = theory, E = experiment, A = all, C = compare, ? = help
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const key = e.key.toLowerCase();
      if (key === 't') setFilter('theory');
      else if (key === 'e') setFilter('experiment');
      else if (key === 'a') setFilter('all');
      else if (key === 'c') setFilter('compare');
      else if (key === '?') setShowHelp((s) => !s);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink-700">
      <KeyboardHelp open={showHelp} onClose={() => setShowHelp(false)} />
      <ReadingProgress activeAccent={activeEra.accent} />
      {filter !== 'compare' ? (
        <EraNavigation
          eras={ERAS}
          activeEraId={activeEraId}
          activeEventId={activeEventId}
        />
      ) : null}
      {filter !== 'compare' ? (
        <StandardModelTracker
          discovered={discoveredParticles}
          particleEventMap={PARTICLE_EVENT_MAP}
          selectedParticleId={selectedParticleId}
          onParticleSelect={handleParticleSelect}
        />
      ) : null}
      <ParticlePassport
        particle={selectedParticleId ? particleById[selectedParticleId] : undefined}
        discovery={selectedParticleId ? PARTICLE_EVENT_MAP[selectedParticleId] : undefined}
        onClose={() => {
          setSelectedParticleId(undefined);
          setHighlightedEventId(undefined);
        }}
      />

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
          150 years of particle physics.
        </p>
        <p className="mt-10 max-w-readable text-ink-600">
          Scroll to begin, or switch to Compare to see predictions and tests as paired case studies.
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
            highlightedEventId={highlightedEventId}
            onCompareEventOpen={handleCompareEventOpen}
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
