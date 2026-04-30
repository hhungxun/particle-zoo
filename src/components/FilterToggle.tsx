import type { FilterMode } from '../types';

interface Props {
  filter: FilterMode;
  onChange: (f: FilterMode) => void;
}

const OPTS: { id: FilterMode; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'theory', label: 'Theorists' },
  { id: 'experiment', label: 'Experimentalists' },
];

export function FilterToggle({ filter, onChange }: Props) {
  return (
    <div
      role="radiogroup"
      aria-label="Filter events by discipline"
      className="inline-flex rounded-full border border-rule bg-paper p-1 text-sm font-sans"
    >
      {OPTS.map((o) => {
        const active = filter === o.id;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o.id)}
            className={[
              'px-3 py-1 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-400',
              active ? 'bg-ink-700 text-paper' : 'text-ink-600 hover:text-ink-800',
            ].join(' ')}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
