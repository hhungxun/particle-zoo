import { useState, useCallback } from 'react';
import { SM_PARTICLES, PARTICLE_ALIASES } from '../data/standardModel';

interface DiscoveryInfo {
  eventId: string;
  headline: string;
  yearLabel: string;
}

interface Props {
  /** Set of particle IDs that have been discovered so far. */
  discovered: Set<string>;
  /** Map from particle id → the event that discovered it. */
  particleEventMap?: Record<string, DiscoveryInfo>;
}

const CATEGORY_STYLES: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  quark: {
    bg: 'bg-violet-100',
    text: 'text-violet-800',
    border: 'border-violet-200',
  },
  lepton: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-800',
    border: 'border-emerald-200',
  },
  'gauge-boson': {
    bg: 'bg-rose-100',
    text: 'text-rose-800',
    border: 'border-rose-200',
  },
  higgs: {
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    border: 'border-amber-200',
  },
};

/**
 * Fixed right-hand card that tracks which Standard-Model particles have
 * been "discovered" as the reader scrolls through the timeline.
 *
 * Undiscovered particles are heavily dimmed; discovered ones light up in
 * their category colour.  Clicking a lit cell scrolls to the event that
 * discovered it.
 */
export function StandardModelTracker({ discovered, particleEventMap = {} }: Props) {
  const isLit = (id: string) =>
    discovered.has(id) || discovered.has(PARTICLE_ALIASES[id]);

  const total = SM_PARTICLES.length;
  const litCount = SM_PARTICLES.filter((p) => isLit(p.id)).length;

  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    content: string;
  } | null>(null);

  const handleClick = useCallback((particleId: string) => {
    const info = particleEventMap[particleId];
    if (!info) return;
    const el = document.getElementById(info.eventId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [particleEventMap]);

  const handleMouseEnter = useCallback((
    e: React.MouseEvent,
    particleId: string,
    particleName: string,
  ) => {
    const info = particleEventMap[particleId];
    const lines = info
      ? [`${particleName} — discovered ${info.yearLabel}`, info.headline]
      : [particleName, 'Not yet discovered'];
    setTooltip({
      x: e.clientX,
      y: e.clientY - 8,
      content: lines.join('\n'),
    });
  }, [particleEventMap]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setTooltip((prev) => (prev ? { ...prev, x: e.clientX, y: e.clientY - 8 } : prev));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  // Grid order follows the user's reference screenshot:
  const gridOrder = [
    ['up', 'charm', 'top', 'gluon'],
    ['down', 'strange', 'bottom', 'photon'],
    ['electron', 'muon', 'tau', 'z-boson'],
    ['neutrino-e', 'neutrino-mu', 'neutrino-tau', 'w-boson'],
    [null, null, null, 'higgs'],
  ];

  return (
    <>
      <aside
        aria-label="Standard Model tracker"
        className="hidden xl:block fixed right-6 top-24 z-20 w-56"
      >
        <div className="bg-paper/90 backdrop-blur-md border border-rule rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-semibold tracking-wide text-ink-700 uppercase">
              Standard Model
            </h3>
            <span className="text-[10px] tabular-nums text-ink-500">
              {litCount}/{total}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {gridOrder.map((row, ri) =>
              row.map((pid, ci) => {
                if (!pid) {
                  return <div key={`${ri}-${ci}`} />;
                }
                const p = SM_PARTICLES.find((x) => x.id === pid)!;
                const styles = CATEGORY_STYLES[p.category];
                const lit = isLit(p.id);
                const clickable = lit && particleEventMap[p.id];

                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleClick(p.id)}
                    onMouseEnter={(e) => handleMouseEnter(e, p.id, p.name)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    disabled={!clickable}
                    className={[
                      'flex items-center justify-center rounded-md border aspect-square transition-all duration-500 select-none',
                      lit
                        ? `${styles.bg} ${styles.text} ${styles.border} opacity-100 shadow-sm`
                        : 'bg-ink-100 border-transparent opacity-25 grayscale',
                      clickable
                        ? 'cursor-pointer hover:scale-105 hover:shadow-md'
                        : 'cursor-default',
                    ].join(' ')}
                    aria-label={lit ? `${p.name}, discovered` : `${p.name}, not yet discovered`}
                  >
                    <span className="text-base font-bold leading-none">{p.symbol}</span>
                  </button>
                );
              }),
            )}
          </div>

          {/* Mini legend */}
          <div className="mt-2 flex flex-wrap gap-x-2 gap-y-0.5">
            {(
              [
                ['quark', 'Quarks', 'bg-violet-300'],
                ['lepton', 'Leptons', 'bg-emerald-300'],
                ['gauge-boson', 'Force carriers', 'bg-rose-300'],
                ['higgs', 'Higgs', 'bg-amber-300'],
              ] as const
            ).map(([key, label, dot]) => (
              <div key={key} className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                <span className="text-[9px] text-ink-500">{label}</span>
              </div>
            ))}
          </div>

          {/* Keyboard hint */}
          <div className="mt-2 text-[8px] text-ink-400 text-right">
            Keys: T · E · A
          </div>
        </div>
      </aside>

      {/* Floating tooltip */}
      {tooltip && (
        <div
          className="hidden xl:block fixed z-30 pointer-events-none px-2 py-1.5 rounded bg-ink-800 text-paper text-[10px] leading-snug shadow-lg whitespace-pre-line"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, -100%)',
          }}
        >
          {tooltip.content}
        </div>
      )}
    </>
  );
}
