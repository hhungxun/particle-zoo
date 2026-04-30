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
  selectedParticleId?: string;
  onParticleSelect?: (particleId: string, info?: DiscoveryInfo) => void;
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
export function StandardModelTracker({
  discovered,
  particleEventMap = {},
  selectedParticleId,
  onParticleSelect,
}: Props) {
  const isLit = useCallback((id: string) =>
    discovered.has(id) || discovered.has(PARTICLE_ALIASES[id]), [discovered]);

  const total = SM_PARTICLES.length;
  const litCount = SM_PARTICLES.filter((p) => isLit(p.id)).length;

  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    content: string;
  } | null>(null);

  const handleClick = useCallback((particleId: string) => {
    const info = particleEventMap[particleId];
    onParticleSelect?.(particleId, info);
    if (!info) return;
    const el = document.getElementById(info.eventId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [onParticleSelect, particleEventMap]);

  const handleMouseEnter = useCallback((
    e: React.MouseEvent,
    particleId: string,
    particleName: string,
  ) => {
    const info = particleEventMap[particleId];
    const lines = info
      ? [
          `${particleName} — ${isLit(particleId) ? 'reached' : 'first appears'} ${info.yearLabel}`,
          info.headline,
        ]
      : [particleName, 'No timeline event yet'];
    setTooltip({
      x: e.clientX,
      y: e.clientY - 8,
      content: lines.join('\n'),
    });
  }, [isLit, particleEventMap]);

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
        className="hidden xl:block fixed right-8 top-24 z-20 w-72"
      >
        <div className="bg-paper/90 backdrop-blur-md border border-rule rounded-lg p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-ink-700 uppercase">
              Standard Model
              </h3>
              <p className="mt-0.5 text-[10px] leading-snug text-ink-500">
                Particles reached so far
              </p>
            </div>
            <span className="text-xs tabular-nums text-ink-600 font-sans">
              {litCount}/{total}
            </span>
          </div>

          <div className="h-1.5 rounded-full bg-ink-100 overflow-hidden mb-3">
            <div
              className="h-full rounded-full bg-ink-700 transition-all duration-500"
              style={{ width: `${(litCount / total) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {gridOrder.map((row, ri) =>
              row.map((pid, ci) => {
                if (!pid) {
                  return <div key={`${ri}-${ci}`} />;
                }
                const p = SM_PARTICLES.find((x) => x.id === pid)!;
                const styles = CATEGORY_STYLES[p.category];
                const lit = isLit(p.id);
                const clickable = Boolean(particleEventMap[p.id]);
                const selected = selectedParticleId === p.id;

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
                      selected ? 'ring-2 ring-ink-800 ring-offset-2 ring-offset-paper' : '',
                      clickable
                        ? 'cursor-pointer hover:scale-105 hover:shadow-md'
                        : 'cursor-default',
                    ].join(' ')}
                    aria-label={clickable ? `${p.name}, jump to first event` : `${p.name}, no timeline event yet`}
                  >
                    <span className="text-lg font-bold leading-none">{p.symbol}</span>
                  </button>
                );
              }),
            )}
          </div>

          {/* Mini legend */}
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
            {(
              [
                ['quark', 'Quarks', 'bg-violet-300'],
                ['lepton', 'Leptons', 'bg-emerald-300'],
                ['gauge-boson', 'Force carriers', 'bg-rose-300'],
                ['higgs', 'Higgs', 'bg-amber-300'],
              ] as const
            ).map(([key, label, dot]) => (
              <div key={key} className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${dot}`} />
                <span className="text-[10px] text-ink-500">{label}</span>
              </div>
            ))}
          </div>

          {/* Keyboard hint */}
          <div className="mt-3 text-[9px] text-ink-400 text-right">
            Click a lit particle to jump to its first event.
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
