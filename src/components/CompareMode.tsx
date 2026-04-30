import { useMemo, useState } from 'react';
import { COMPARE_CASES } from '../data/compareCases';
import { ERAS } from '../data/timeline';
import type { TimelineEra, TimelineEvent } from '../types';
import { GlossaryText } from './GlossaryText';

interface Props {
  era: TimelineEra;
  onOpenEvent?: (eventId: string) => void;
}

function getSummary(event: TimelineEvent) {
  return event.summary ?? event.whyItMattered;
}

function EventMiniCard({
  event,
  side,
  onOpen,
}: {
  event: TimelineEvent;
  side: 'theory' | 'experiment';
  onOpen?: (eventId: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(event.id)}
      className="block w-full rounded-lg border border-rule bg-paper/70 p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className="font-sans text-[10px] uppercase tracking-[0.18em]"
          style={{ color: side === 'theory' ? 'var(--era-accent)' : undefined }}
        >
          {side === 'theory' ? 'Theory' : 'Experiment'}
        </span>
        <span className="font-sans text-xs tabular-nums text-ink-500">
          {event.yearLabel}
        </span>
      </div>
      <h4 className="mt-2 font-sans text-lg font-semibold leading-snug text-ink-800">
        {event.shortTitle}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">
        <GlossaryText text={getSummary(event)} />
      </p>
    </button>
  );
}

export function CompareMode({ era, onOpenEvent }: Props) {
  const [openCaseId, setOpenCaseId] = useState<string | null>(null);
  const allEventsById = useMemo(() => {
    const map = new Map<string, TimelineEvent>();
    for (const compareEra of ERAS) {
      for (const event of compareEra.events) {
        map.set(event.id, event);
      }
    }
    return map;
  }, []);

  const cases = COMPARE_CASES.filter((compareCase) => compareCase.eraId === era.id);

  if (cases.length === 0) {
    return (
      <div className="mx-auto max-w-readable py-14 text-center text-ink-500">
        No theory/experiment comparison pair is defined for this era yet.
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-4">
      {cases.map((compareCase) => {
        const theoryEvents = compareCase.theoryEventIds
          .map((id) => allEventsById.get(id))
          .filter((event): event is TimelineEvent => Boolean(event));
        const experimentEvents = compareCase.experimentEventIds
          .map((id) => allEventsById.get(id))
          .filter((event): event is TimelineEvent => Boolean(event));
        const open = openCaseId === compareCase.id;

        return (
          <article
            key={compareCase.id}
            className="rounded-xl border border-rule bg-white/35 p-5 md:p-6 shadow-sm"
          >
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <h3 className="max-w-3xl font-sans text-2xl font-semibold leading-tight text-ink-800">
                {compareCase.title}
              </h3>
              <span className="w-fit rounded-full border border-rule bg-paper px-3 py-1 font-sans text-xs uppercase tracking-wide text-ink-600">
                {compareCase.status}
              </span>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1fr_12rem_1fr] lg:items-center">
              <div className="space-y-3">
                {theoryEvents.map((event) => (
                  <EventMiniCard
                    key={event.id}
                    event={event}
                    side="theory"
                    onOpen={onOpenEvent}
                  />
                ))}
              </div>

              <div className="flex flex-col items-center justify-center gap-3 py-2">
                <div className="hidden h-16 w-px bg-rule lg:block" />
                <button
                  type="button"
                  onClick={() => setOpenCaseId(open ? null : compareCase.id)}
                  className="rounded-full border border-rule bg-paper px-4 py-2 text-center font-sans text-xs font-medium leading-snug text-ink-700 shadow-sm transition hover:border-ink-400 hover:text-ink-900"
                  aria-expanded={open}
                >
                  <span className="block uppercase tracking-wide text-ink-500">
                    {compareCase.dateGap}
                  </span>
                  <span>{compareCase.connectorLabel}</span>
                </button>
                <div className="hidden h-16 w-px bg-rule lg:block" />
              </div>

              <div className="space-y-3">
                {experimentEvents.map((event) => (
                  <EventMiniCard
                    key={event.id}
                    event={event}
                    side="experiment"
                    onOpen={onOpenEvent}
                  />
                ))}
              </div>
            </div>

            {open ? (
              <div className="mt-6 rounded-lg border border-rule bg-paper/75 p-4">
                <div className="ui-label" style={{ color: 'var(--era-accent)' }}>
                  What changed
                </div>
                <p className="mt-2 max-w-readable text-sm leading-relaxed text-ink-700">
                  <GlossaryText text={compareCase.whatChanged} />
                </p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
