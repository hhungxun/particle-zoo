// Domain model for The Particle Zoo timeline.
// All content lives in src/data/timeline.ts and is typed via these interfaces.

export type DisciplineTag = 'theory' | 'experiment' | 'both';

export interface PaperCitation {
  authors: string;                 // e.g. "Thomson, J.J."
  title: string;
  journal: string;
  volume?: string;
  pages?: string;
  year: number;
  doi?: string;
  arxiv?: string;
  url?: string;                    // open-access link if any
  abstractParaphrase?: string;     // our paraphrase, NOT the original abstract verbatim
  notes?: string;                  // e.g. "rejected by Nature; published in Italian"
  /**
   * Mark false when a specific bibliographic detail (page numbers, exact title)
   * was not independently verified. UI renders a [VERIFY] flag in red.
   */
  verified: boolean;
}

export interface Anecdote {
  text: string;                    // narrative paragraph
  source?: string;                 // citation or "commonly told but unverified"
  verified: boolean;
}

export interface Discoverer {
  name: string;
  affiliation: string;             // affiliation at time of discovery
}

/**
 * Stable keys for inline SVG visuals. Components read these via a switch
 * in EventCard so we can ship visuals incrementally; an unknown key just
 * renders nothing.
 */
export type VisualKey =
  | 'thomson-crt'
  | 'rutherford'
  | 'dirac-eq'
  | 'yukawa'
  | 'pion-emulsion'
  | 'strangeness'
  | 'eightfold-way'
  | 'quark-tensor'
  | 'wu'
  | 'cp-klong'
  | 'mexican-hat'
  | 'asymptotic-freedom'
  | 'jpsi-peak'
  | 'ua1-event'
  | 'higgs-diphoton'
  | 'mass-energy'
  | 'photoelectric'
  | 'compton'
  | 'neutrino-letter'
  | 'fermi-beta'
  | 'partons-dis'
  | 'gargamelle'
  | 'gluon-3jet'
  | 'top-event'
  | 'sk-oscillation'
  | 'donut'
  | 'positron-track'
  | 'planck-quantum';

export interface TimelineEvent {
  id: string;                      // slug, used for anchors and react keys
  year: number;                    // primary anchor for sorting
  yearLabel: string;               // display string ("1897", "1900–1905")
  headline: string;
  shortTitle: string;              // for nav scrubber
  discipline: DisciplineTag;
  discoverers: Discoverer[];
  narrative: string[];             // 2–4 paragraphs
  whyItMattered: string;
  paper?: PaperCitation;           // single primary paper
  papers?: PaperCitation[];        // simultaneous/parallel papers (BEH/GHK, BNL/SLAC, etc.)
  anecdote?: Anecdote;
  visual?: VisualKey;
  equationsLatex?: string[];       // hover-revealed equations
  particles?: string[];            // particle ids tied to this event (used by ParticleFamilyTree)
}

export interface TimelineEra {
  id: string;                      // "era-1"
  number: number;
  title: string;
  yearRange: string;
  startYear: number;
  endYear: number;
  blurb: string;                   // era-opening paragraph
  /** Tailwind color token mapped in App.tsx into a CSS var. */
  accent: string;                  // e.g. "#9c5a2c"
  bgTint: string;                  // very pale tint for section background
  events: TimelineEvent[];
}

export type FilterMode = 'all' | 'theory' | 'experiment';
