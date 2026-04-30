import { motion, AnimatePresence } from 'framer-motion';
import type { TimelineEra } from '../types';

interface Props {
  eras: TimelineEra[];
  activeEraId: string;
  activeEventId?: string;
}

/**
 * Vertical era scrubber, sticky on the left at lg+.
 *
 * Every era and every event is listed so the reader can jump to any
 * subsection. The active era and its events are emphasised; others
 * are subdued but still visible and clickable.
 *
 * Keyboard: Arrow Up/Down moves through the flat list of all targets.
 */
export function EraNavigation({ eras, activeEraId, activeEventId }: Props) {
  // Build the flat list of all nav targets for keyboard traversal.
  type Target = { id: string; kind: 'era' | 'event'; eraId: string };
  const flat: Target[] = [];
  for (const era of eras) {
    flat.push({ id: era.id, kind: 'era', eraId: era.id });
    for (const evt of era.events) {
      flat.push({ id: evt.id, kind: 'event', eraId: era.id });
    }
  }

  const focusTarget = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    (document.querySelector(`a[data-nav-id="${id}"]`) as HTMLAnchorElement | null)?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, idx: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const next = flat[Math.min(idx + 1, flat.length - 1)];
      if (next) focusTarget(next.id);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = flat[Math.max(idx - 1, 0)];
      if (prev) focusTarget(prev.id);
    }
  };

  return (
    <nav
      aria-label="Timeline navigation"
      className="hidden lg:block fixed left-6 top-24 z-20 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2"
    >
      <ol className="space-y-3">
        {eras.map((era) => {
          const eraActive = era.id === activeEraId;
          const eraFlatIdx = flat.findIndex((t) => t.id === era.id);
          return (
            <li key={era.id}>
              <a
                href={`#${era.id}`}
                data-nav-id={era.id}
                onKeyDown={(e) => onKeyDown(e, eraFlatIdx)}
                aria-current={eraActive ? 'true' : undefined}
                aria-label={`Era ${era.number}: ${era.title}, ${era.yearRange}`}
                className="group flex items-center gap-3 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-400 rounded-sm"
              >
                <span
                  aria-hidden
                  className="block rounded-full transition-all duration-300 shrink-0"
                  style={{
                    width: eraActive ? 14 : 10,
                    height: eraActive ? 14 : 10,
                    background: eraActive ? era.accent : 'transparent',
                    border: `1.5px solid ${era.accent}`,
                  }}
                />
                <span
                  className={[
                    'font-sans text-xs tracking-wide whitespace-nowrap transition-opacity duration-200',
                    eraActive
                      ? 'opacity-100 text-ink-800 font-medium'
                      : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 text-ink-600',
                  ].join(' ')}
                >
                  {era.yearRange} · {era.title}
                </span>
              </a>

              {/* Sub-list of events — always visible but quieter for inactive eras */}
              <AnimatePresence initial={false}>
                {era.events.length > 0 ? (
                  <motion.ol
                    key={`${era.id}-events`}
                    initial={false}
                    animate={{ height: 'auto', opacity: eraActive ? 1 : 0.55 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden ml-[5px] mt-2 space-y-1 border-l border-rule pl-4"
                    style={{ borderColor: era.accent + (eraActive ? '40' : '25') }}
                  >
                    {era.events.map((evt) => {
                      const evtActive = activeEventId === evt.id;
                      const evtFlatIdx = flat.findIndex((t) => t.id === evt.id);
                      return (
                        <li key={evt.id}>
                          <a
                            href={`#${evt.id}`}
                            data-nav-id={evt.id}
                            onKeyDown={(e) => onKeyDown(e, evtFlatIdx)}
                            aria-current={evtActive ? 'true' : undefined}
                            aria-label={`${evt.yearLabel}: ${evt.headline}`}
                            className="group/event flex items-center gap-2 no-underline py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-400 rounded-sm"
                          >
                            <span
                              aria-hidden
                              className="block rounded-full shrink-0 transition-all duration-200"
                              style={{
                                width: evtActive ? 8 : 5,
                                height: evtActive ? 8 : 5,
                                background: evtActive
                                  ? era.accent
                                  : eraActive
                                    ? era.accent + '60'
                                    : era.accent + '35',
                              }}
                            />
                            <span
                              className={[
                                'font-sans text-[11px] leading-snug whitespace-nowrap transition-colors',
                                evtActive
                                  ? 'text-ink-800 font-medium'
                                  : eraActive
                                    ? 'text-ink-500 group-hover/event:text-ink-700'
                                    : 'text-ink-400 group-hover/event:text-ink-600',
                              ].join(' ')}
                            >
                              <span className="text-ink-400 mr-1.5 tabular-nums">
                                {evt.yearLabel}
                              </span>
                              {evt.shortTitle}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </motion.ol>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
