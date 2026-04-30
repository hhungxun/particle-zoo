import type { ReactNode } from 'react';
import { GLOSSARY } from '../data/glossary';

const SORTED_ENTRIES = [...GLOSSARY].sort((a, b) => b.term.length - a.term.length);

const TERM_PATTERN = new RegExp(
  `\\b(${SORTED_ENTRIES.map((entry) =>
    entry.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  ).join('|')})\\b`,
  'gi',
);

const ENTRY_BY_TERM = new Map(
  SORTED_ENTRIES.map((entry) => [entry.term.toLowerCase(), entry]),
);

interface Props {
  text: string;
}

export function GlossaryText({ text }: Props) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(TERM_PATTERN)) {
    const term = match[0];
    const index = match.index ?? 0;
    const entry = ENTRY_BY_TERM.get(term.toLowerCase());
    if (!entry) continue;

    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }

    parts.push(
      <span key={`${term}-${index}`} className="glossary-term" tabIndex={0}>
        {term}
        <span className="glossary-tip" role="tooltip">
          {entry.definition}
        </span>
      </span>,
    );

    lastIndex = index + term.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
