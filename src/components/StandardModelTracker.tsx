import { SM_PARTICLES, PARTICLE_ALIASES } from '../data/standardModel';

interface Props {
  /** Set of particle IDs that have been discovered so far. */
  discovered: Set<string>;
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
 * their category colour.  The layout follows the familiar SM grid:
 *
 *   u  c  t   g
 *   d  s  b   γ
 *   e  μ  τ   Z
 *   νe νμ ντ  W
 *             H
 */
export function StandardModelTracker({ discovered }: Props) {
  const isLit = (id: string) =>
    discovered.has(id) || discovered.has(PARTICLE_ALIASES[id]);

  const total = SM_PARTICLES.length;
  const litCount = SM_PARTICLES.filter((p) => isLit(p.id)).length;

  // Grid order follows the user's reference screenshot:
  // Row 1: up charm top gluon
  // Row 2: down strange bottom photon
  // Row 3: electron muon tau Z
  // Row 4: e-nu mu-nu tau-nu W
  // Row 5: (gap gap gap Higgs)
  const gridOrder = [
    ['up', 'charm', 'top', 'gluon'],
    ['down', 'strange', 'bottom', 'photon'],
    ['electron', 'muon', 'tau', 'z-boson'],
    ['neutrino-e', 'neutrino-mu', 'neutrino-tau', 'w-boson'],
    [null, null, null, 'higgs'],
  ];

  return (
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
                // empty cell for alignment
                return <div key={`${ri}-${ci}`} />;
              }
              const p = SM_PARTICLES.find((x) => x.id === pid)!;
              const styles = CATEGORY_STYLES[p.category];
              const lit = isLit(p.id);

              return (
                <div
                  key={p.id}
                  className={[
                    'flex items-center justify-center rounded-md border aspect-square transition-all duration-500',
                    lit
                      ? `${styles.bg} ${styles.text} ${styles.border} opacity-100 shadow-sm`
                      : 'bg-ink-100 border-transparent opacity-25 grayscale',
                  ].join(' ')}
                  title={lit ? p.name : 'Not yet discovered'}
                >
                  <span className="text-base font-bold leading-none">{p.symbol}</span>
                </div>
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
      </div>
    </aside>
  );
}
