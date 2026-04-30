import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import type { TimelineEra, FilterMode } from '../types';
import { EventCard } from './EventCard';
import { GlossaryText } from './GlossaryText';
import { CompareMode } from './CompareMode';

interface Props {
  era: TimelineEra;
  filter: FilterMode;
  /** Notify parent when this era enters the viewport (for nav highlight). */
  onEnter?: (eraId: string) => void;
  /** Notify parent when an event in this era is the active one. */
  onEventEnter?: (eventId: string) => void;
  highlightedEventId?: string;
  onCompareEventOpen?: (eventId: string) => void;
}

export function EraSection({
  era,
  filter,
  onEnter,
  onEventEnter,
  highlightedEventId,
  onCompareEventOpen,
}: Props) {
  const { ref } = useInView({
    threshold: 0.15,
    onChange: (inView) => {
      if (inView && onEnter) onEnter(era.id);
    },
  });

  // CSS vars used by descendant components for accent and bg tint.
  const sectionStyle = {
    ['--era-accent' as never]: era.accent,
    ['--era-bg' as never]: era.bgTint,
  } as React.CSSProperties;

  return (
    <section
      ref={ref}
      id={era.id}
      style={sectionStyle}
      className="relative scroll-mt-24"
      aria-labelledby={`${era.id}-title`}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 bottom-0 -z-10"
        style={{ background: era.bgTint }}
      />

      <header className="mx-auto max-w-wide px-6 pt-28 pb-10 lg:pt-40 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div
            className="ui-label"
            style={{ color: era.accent }}
          >
            Era {era.number} · {era.yearRange}
          </div>
          <h2
            id={`${era.id}-title`}
            className="mt-3 font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-800"
          >
            {era.title}
          </h2>
          <p className="mt-6 max-w-readable text-lg leading-relaxed text-ink-600 italic">
            <GlossaryText text={era.blurb} />
          </p>
        </motion.div>
      </header>

      <div
        className={[
          'mx-auto max-w-wide px-6 pb-16 lg:pb-24',
          filter === 'compare' ? '' : 'divide-y divide-rule',
        ].join(' ')}
      >
        {era.events.length === 0 ? (
          <p className="py-16 text-center text-ink-500 italic">
            Era content coming next.
          </p>
        ) : filter === 'compare' ? (
          <CompareMode era={era} onOpenEvent={onCompareEventOpen} />
        ) : (
          era.events.map((evt, i) => (
            <EventCard
              key={evt.id}
              event={evt}
              filter={filter}
              footnoteNumber={i + 1}
              onEnter={onEventEnter}
              highlighted={evt.id === highlightedEventId}
            />
          ))
        )}
      </div>
    </section>
  );
}
