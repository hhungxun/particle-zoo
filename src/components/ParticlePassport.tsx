import type { SMParticle } from '../data/standardModel';

interface DiscoveryInfo {
  eventId: string;
  headline: string;
  yearLabel: string;
}

interface Props {
  particle?: SMParticle;
  discovery?: DiscoveryInfo;
  onClose: () => void;
}

const CATEGORY_LABEL: Record<SMParticle['category'], string> = {
  quark: 'Quark',
  lepton: 'Lepton',
  'gauge-boson': 'Force carrier',
  higgs: 'Higgs sector',
};

export function ParticlePassport({ particle, discovery, onClose }: Props) {
  if (!particle) return null;

  return (
    <aside
      className="fixed right-6 top-24 z-40 w-[22rem] max-w-[calc(100vw-3rem)] rounded-xl border border-rule bg-paper/95 p-5 shadow-2xl backdrop-blur-md xl:right-[21rem]"
      aria-label={`${particle.name} particle passport`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="ui-label">{CATEGORY_LABEL[particle.category]}</div>
          <h3 className="mt-1 text-2xl font-semibold text-ink-800">
            {particle.name}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-rule font-sans text-lg leading-none text-ink-600 hover:bg-ink-100"
          aria-label="Close particle passport"
        >
          ×
        </button>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-rule bg-ink-100/60 font-sans text-4xl font-bold text-ink-800">
          {particle.symbol}
        </div>
        <div className="min-w-0 text-sm text-ink-600">
          <div>Mass: <span className="font-medium text-ink-800">{particle.mass}</span></div>
          <div>Charge: <span className="font-medium text-ink-800">{particle.charge}</span></div>
          <div>Spin: <span className="font-medium text-ink-800">{particle.spin}</span></div>
          {particle.generation ? (
            <div>Generation: <span className="font-medium text-ink-800">{particle.generation}</span></div>
          ) : null}
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-ink-700">
        {particle.role}
      </p>

      <div className="mt-5 rounded-lg border border-rule bg-white/45 p-3">
        <div className="ui-label">First timeline appearance</div>
        {discovery ? (
          <>
            <p className="mt-2 text-sm font-medium text-ink-800">
              {discovery.yearLabel} · {discovery.headline}
            </p>
            <a
              href={`#${discovery.eventId}`}
              className="mt-2 inline-block font-sans text-xs text-ink-600"
            >
              Jump to event
            </a>
          </>
        ) : (
          <p className="mt-2 text-sm text-ink-500">
            Not reached in the current timeline data yet.
          </p>
        )}
      </div>
    </aside>
  );
}
