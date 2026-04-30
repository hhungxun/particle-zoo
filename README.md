# The Particle Zoo

An interactive long-form essay on the history of 20th-century particle physics — from Thomson's electron (1897) to the Higgs boson (2012). Designed to read like _The Atlantic_ longform meets a physics museum exhibit, not a Wikipedia timeline.

## Status

Era 1 (1897–1932) is fully populated as a working prototype: 9 events, primary-source citations, anecdotes with sources, inline SVG visuals, KaTeX equations. Eras 2–7 are scaffolded with their blurbs and accent colors but their `events` arrays are empty pending the next iteration.

## Stack

- **Vite + React 19 + TypeScript** — single-page app, no backend
- **Tailwind CSS 3** with `@tailwindcss/typography` and a small custom theme (`ink` neutrals, `paper` background, seven era accents)
- **Framer Motion** for scroll-triggered reveals and panel transitions
- **react-intersection-observer** for "this section is in view" hooks
- **KaTeX** for inline mathematics
- All copy in `src/data/timeline.ts`; the rest of the codebase is rendering chrome

## Run

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # static bundle in dist/
npm run preview
```

## Project Layout

```
src/
├── App.tsx                 # composition: hero, toolbar, era loop, footer
├── types.ts                # TimelineEra, TimelineEvent, PaperCitation, ...
├── data/timeline.ts        # ALL content lives here
├── hooks/useActiveEra.ts   # tracks which era is in view
└── components/
    ├── EraSection.tsx      # an era's title block + its events
    ├── EraNavigation.tsx   # sticky vertical scrubber, keyboard accessible
    ├── EventCard.tsx       # one event: header / narrative / visual / paper
    ├── PaperCitation.tsx   # bibliographic block with [VERIFY] flag
    ├── Anecdote.tsx        # the human-story aside
    ├── ExpandablePanel.tsx # collapsible "read the paper context"
    ├── FilterToggle.tsx    # all / theory / experiment dim filter
    ├── FootnotePopover.tsx # inline source popovers
    ├── ReadingProgress.tsx # the Medium-style top bar
    ├── Equation.tsx        # KaTeX wrapper
    └── visuals/            # inline SVG figures, dispatched by VisualKey
```

## Adding an Event

Open `src/data/timeline.ts`. Inside the relevant era's `events: []` array, append a `TimelineEvent`:

```ts
{
  id: 'wu-1957',                     // slug — used for anchors and react keys
  year: 1957,
  yearLabel: 'Jan 1957',
  headline: 'Parity Falls in Cobalt',
  shortTitle: 'Wu',
  discipline: 'experiment',          // 'theory' | 'experiment' | 'both'
  discoverers: [
    { name: 'Chien-Shiung Wu', affiliation: 'Columbia / NBS' },
  ],
  narrative: [
    'Paragraph one ...',
    'Paragraph two ...',
  ],
  whyItMattered: 'One sentence.',
  paper: {
    authors: 'Wu, C.S. et al.',
    title: 'Experimental Test of Parity Conservation in Beta Decay',
    journal: 'Physical Review',
    volume: '105',
    pages: '1413–1415',
    year: 1957,
    doi: '10.1103/PhysRev.105.1413',
    abstractParaphrase: 'Our paraphrase, NOT the original abstract verbatim.',
    verified: true,
  },
  anecdote: {
    text: 'The actual story.',
    source: 'Hammond, R. "Cold War Parity..." J. Hist. Phys. (2002).',
    verified: true,
  },
  visual: 'wu',                      // matches a VisualKey in types.ts
  equationsLatex: ['\\langle \\sigma \\cdot p \\rangle \\neq 0'],
  particles: ['electron', 'antineutrino-e'],
}
```

A new `VisualKey` requires (a) adding the key to the `VisualKey` union in `src/types.ts`, (b) creating `src/components/visuals/<Name>.tsx`, and (c) wiring it into the `switch` in `src/components/visuals/index.tsx`.

## Citation Rules

Every `PaperCitation` and `Anecdote` carries a `verified: boolean`. Mark `false` whenever a specific bibliographic detail (volume, page numbers, year) was not independently confirmed against a reputable secondary source. The UI renders a red `[VERIFY]` flag so reviewers can find unverified items in one pass before shipping.

The `abstractParaphrase` field is _our_ short summary, not the original abstract verbatim — to avoid copyright issues.

## Accessibility

- Every figure has a meaningful `aria-label`
- Era scrubber is a `<nav>` with up/down/left/right arrow navigation between eras
- Filter toggle is a `radiogroup` with proper `aria-checked`
- Reading progress is a `progressbar` with live `aria-valuenow`
- Focus rings are visible (`focus-visible:ring-2`)
- Reduced-motion respect is via Framer Motion's defaults; explicit `prefers-reduced-motion` styles are a TODO

## Roadmap (in order)

1. **Eras 2–7 content** — same shape as Era 1, ~30 events total
2. **Iconic visuals** — Eightfold Way SU(3) hexagon, Mexican-hat potential, J/ψ peak from Aubert 1974 Fig. 2, ATLAS/CMS diphoton plot, Wu apparatus, asymptotic-freedom running coupling
3. **Particle Family Tree** — clickable Standard-Model diagram that highlights every event tied to a particle (data already wired through `event.particles`)
4. **Footnote popover wiring** — connect numbered superscripts in `Anecdote` to the existing `FootnotePopover` (currently the number is rendered but the popover is not yet attached)
5. **Mobile polish** — sticky toolbar height, era nav as bottom drawer below `lg`
6. **Reduced-motion variants** for Framer animations
7. **Citation verification pass** — search the codebase for `verified: false` and confirm or remove

## License

Content TBD. Code MIT.
