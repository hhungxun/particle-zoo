import { motion } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import type { TimelineEvent, FilterMode } from '../types';
import { PaperCitation } from './PaperCitation';
import { Anecdote } from './Anecdote';
import { ExpandablePanel } from './ExpandablePanel';
import { Visual } from './visuals';
import { Equation } from './Equation';
import { GlossaryText } from './GlossaryText';

interface Props {
  event: TimelineEvent;
  filter: FilterMode;
  /** Counter for footnote numbering, optional. */
  footnoteNumber?: number;
  /** Fired when this event is in view (for nav active-event tracking). */
  onEnter?: (eventId: string) => void;
  highlighted?: boolean;
}

const REVEAL_TRANSITION: Transition = {
  duration: 0.6,
  ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number],
};
const DIM_TRANSITION: Transition = { duration: 0.35, ease: 'easeOut' };
const PROTECTED_DOT = '<dot>';

function getEventSummary(event: TimelineEvent) {
  if (event.summary) return event.summary;

  const source = event.narrative[0] ?? event.whyItMattered;
  const protectedSource = source
    .replace(/\b([A-Z])\./g, `$1${PROTECTED_DOT}`)
    .replace(/\b(e|i)\.g\./gi, (match) => match.replace(/\./g, PROTECTED_DOT))
    .replace(/\b(vs|Mr|Mrs|Ms|Dr|Prof|St)\./g, (match) =>
      match.replace('.', PROTECTED_DOT),
    );

  const sentences = protectedSource
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.replaceAll(PROTECTED_DOT, '.').trim())
    .filter(Boolean);

  return sentences.slice(0, 2).join(' ') || source;
}

export function EventCard({ event, filter, footnoteNumber, onEnter, highlighted }: Props) {
  // Reveal-on-scroll uses a single-shot observer.
  const { ref: revealRef, inView: revealInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
  });

  // Active-event tracking uses a separate, repeating observer that fires
  // when the card sits near the middle of the viewport. Repeat-firing is
  // needed so the nav updates as the user scrolls back and forth.
  const { ref: activeRef, inView: activeInView } = useInView({
    threshold: 0,
    // shrink the observation band to a horizontal stripe through the upper
    // third of the viewport — whatever crosses that is "what's being read"
    rootMargin: '-30% 0px -55% 0px',
  });

  useEffect(() => {
    if (activeInView && onEnter) onEnter(event.id);
  }, [activeInView, onEnter, event.id]);

  // Combine the two refs.
  const setRefs = (node: HTMLElement | null) => {
    revealRef(node);
    activeRef(node);
  };

  const collapsed =
    filter !== 'all' &&
    event.discipline !== filter &&
    event.discipline !== 'both';

  const papers = event.papers ?? (event.paper ? [event.paper] : []);
  const summary = getEventSummary(event);

  // Single animate target merges reveal state and dim state. Opacity
  // transitions are short so the filter feels responsive; the initial
  // y reveal uses the longer ease.
  const targetOpacity = revealInView ? 1 : 0;
  const targetY = revealInView ? 0 : 32;

  return (
    <motion.article
      ref={setRefs}
      id={event.id}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: targetOpacity, y: targetY }}
      transition={!revealInView ? REVEAL_TRANSITION : DIM_TRANSITION}
      className={[
        'relative grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-6 scroll-mt-24',
        highlighted ? 'rounded-xl bg-white/55 ring-2 ring-[var(--era-accent)] ring-offset-8 ring-offset-[var(--era-bg)]' : '',
        collapsed ? 'py-8' : 'py-14 first:pt-8',
      ].join(' ')}
      aria-labelledby={`${event.id}-headline`}
    >
      {/* Year + meta column */}
      <header className="lg:col-span-3 lg:sticky lg:top-32 lg:self-start">
        <div
          className="font-sans text-sm font-medium tracking-wide"
          style={{ color: 'var(--era-accent, currentColor)' }}
        >
          {event.yearLabel}
        </div>
        <div className="ui-label mt-1">
          {event.discipline === 'theory'
            ? 'Theory'
            : event.discipline === 'experiment'
              ? 'Experiment'
              : 'Theory · Experiment'}
        </div>
        {!collapsed ? (
          <ul className="mt-3 text-sm text-ink-600 leading-snug">
            {event.discoverers.map((d) => (
              <li key={d.name} className="mb-1">
                <span className="font-medium text-ink-700">{d.name}</span>
                <span className="block text-xs text-ink-500">{d.affiliation}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      {/* Body column */}
      <div className="lg:col-span-9">
        <h3
          id={`${event.id}-headline`}
          className="font-sans text-2xl md:text-3xl font-semibold leading-tight text-ink-800"
        >
          {event.headline}
        </h3>

        {collapsed ? (
          <p className="mt-4 max-w-readable text-ink-600 leading-relaxed">
            <GlossaryText text={summary} />
          </p>
        ) : (
          <>
            <div className="prose-essay mt-5 max-w-readable">
              {event.narrative.map((para, i) => (
                <p key={i} className={i === 0 ? 'drop-cap' : 'mt-5'}>
                  <GlossaryText text={para} />
                </p>
              ))}
            </div>

            {event.equationsLatex && event.equationsLatex.length > 0 ? (
              <div className="mt-6 max-w-readable">
                {event.equationsLatex.map((tex, i) => (
                  <Equation key={i} tex={tex} />
                ))}
              </div>
            ) : null}

            {event.visual ? (
              <figure className="mt-8 max-w-readable mx-0 text-ink-700">
                <Visual visualKey={event.visual} />
              </figure>
            ) : null}

            <p className="mt-8 max-w-readable text-ink-700">
              <span className="ui-label mr-2" style={{ color: 'var(--era-accent, currentColor)' }}>
                Why it mattered
              </span>
              <span className="italic">
                <GlossaryText text={event.whyItMattered} />
              </span>
            </p>

            {event.anecdote ? (
              <Anecdote anecdote={event.anecdote} footnoteNumber={footnoteNumber} />
            ) : null}

            {papers.length > 0 ? (
              <ExpandablePanel
                label={
                  papers.length > 1 ? 'Read the parallel papers' : 'Read the paper context'
                }
                openLabel={
                  papers.length > 1 ? 'Hide the parallel papers' : 'Hide the paper context'
                }
              >
                <div className="space-y-6 max-w-readable">
                  {papers.map((p, i) => (
                    <PaperCitation key={i} citation={p} />
                  ))}
                </div>
              </ExpandablePanel>
            ) : null}
          </>
        )}
      </div>
    </motion.article>
  );
}
