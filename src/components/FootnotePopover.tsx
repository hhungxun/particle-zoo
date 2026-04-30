import { useId, useState, type ReactNode } from 'react';

interface Props {
  number: number;
  source: string;          // citation text, may be markdown-light plain string
  /** Anchor content the superscript follows. */
  children?: ReactNode;
}

/**
 * Inline footnote: a superscript number that, on hover or focus, reveals a
 * popover with the source. Click to pin/unpin (touch-friendly).
 */
export function FootnotePopover({ number, source }: Props) {
  const [pinned, setPinned] = useState(false);
  const id = useId();

  return (
    <span className="relative inline-block">
      <button
        type="button"
        aria-describedby={id}
        aria-expanded={pinned}
        onClick={() => setPinned((p) => !p)}
        className="ml-0.5 align-super text-[0.65em] text-era-accent font-sans font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-400 rounded-sm"
      >
        {number}
      </button>
      <span
        id={id}
        role="tooltip"
        className={[
          'absolute z-30 left-1/2 top-full mt-1 w-72 -translate-x-1/2 rounded border border-rule bg-paper p-3 text-xs leading-relaxed text-ink-700 shadow-lg',
          'transition-opacity duration-150',
          pinned
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none group-hover:opacity-100',
        ].join(' ')}
        style={{ pointerEvents: pinned ? 'auto' : undefined }}
      >
        <span className="ui-label block mb-1">source</span>
        {source}
      </span>
    </span>
  );
}
