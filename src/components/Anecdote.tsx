import type { Anecdote as AnecdoteT } from '../types';

interface Props {
  anecdote: AnecdoteT;
  /** Pre-assigned footnote number for the source pop-over. */
  footnoteNumber?: number;
}

export function Anecdote({ anecdote, footnoteNumber }: Props) {
  const { text, source, verified } = anecdote;
  return (
    <aside
      className="my-8 rounded-sm border-l-4 pl-5 pr-4 py-3"
      style={{ borderColor: 'var(--era-accent, currentColor)' }}
    >
      <div className="ui-label mb-1" style={{ color: 'var(--era-accent, currentColor)' }}>
        Anecdote
      </div>
      <p className="text-[0.98rem] leading-relaxed text-ink-700">
        {text}
        {footnoteNumber ? <sup className="ml-0.5 text-era-accent text-[0.7em]">{footnoteNumber}</sup> : null}
      </p>
      {source ? (
        <p className="mt-2 text-xs text-ink-500">
          <span className="ui-label mr-2">source</span>
          <span className="italic">{source}</span>
          {!verified && (
            <span className="ml-2 font-mono text-red-700">[VERIFY]</span>
          )}
        </p>
      ) : null}
    </aside>
  );
}
