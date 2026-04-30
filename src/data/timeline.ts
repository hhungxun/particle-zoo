import type { TimelineEra } from '../types';

/**
 * The Particle Zoo — primary content source.
 *
 * Editing rules:
 *  - Every paper gets a citation with `verified: true` only when the bibliographic
 *    detail (volume / pages / year) has been independently confirmed against a
 *    reputable secondary source. Otherwise mark `verified: false` and the UI
 *    will render a [VERIFY] flag in red.
 *  - Quoted dialogue and anecdotes must include a `source` and `verified` flag.
 *    Use "commonly told but unverified" when the story circulates widely but a
 *    primary source has not been confirmed.
 *  - Keep narrative paragraphs in the voice of the project: confident,
 *    technically literate, willing to be opinionated where opinion is warranted.
 */

export const ERAS: TimelineEra[] = [
  // ==========================================================================
  // ERA 1: The Birth of Particles (1897–1932)
  // ==========================================================================
  {
    id: 'era-1',
    number: 1,
    title: 'The Birth of Particles',
    yearRange: '1897–1932',
    startYear: 1897,
    endYear: 1932,
    accent: '#9c5a2c',
    bgTint: '#faf6ed',
    blurb:
      'Until the end of the nineteenth century, the atom was the smallest thing. ' +
      'In thirty-five years, that picture broke open: light became granular, the ' +
      'atom acquired a nucleus, and matter was discovered to have a mirror image. ' +
      'By 1932 the experimentalists had an electron, a proton, a neutron, a photon, ' +
      'and a positron — and the theorists were already arguing about how many of ' +
      'these were really fundamental.',
    events: [
      {
        id: 'thomson-1897',
        year: 1897,
        yearLabel: '1897',
        headline: 'Cathode Rays and the First Particle',
        shortTitle: 'Electron',
        discipline: 'experiment',
        discoverers: [
          { name: 'J.J. Thomson', affiliation: 'Cavendish Laboratory, Cambridge' },
        ],
        narrative: [
          'Cathode rays — the faint glow inside an evacuated tube when a high voltage was applied — had been a curiosity for thirty years. Were they waves in the æther, like light, or were they tiny charged particles? German physicists, led by Heinrich Hertz, were sure they were waves. The British were sure they were not.',
          'J.J. Thomson, working in the Cavendish Laboratory in Cambridge, settled it. He showed that the rays bent in both magnetic and electric fields — something pure radiation could not do — and from the deflection he extracted a single number: the charge-to-mass ratio, e/m. The number was the same regardless of the gas in the tube or the metal of the cathode. And it was about two thousand times larger than the largest known value, that of the hydrogen ion.',
          'Whatever these things were, they were universal — present in every atom — and they were fantastically light. Thomson called them "corpuscles." The name "electron" had been coined by George Johnstone Stoney three years earlier for the unit of electric charge; it was the community, not Thomson, that eventually attached the word to the particle.',
        ],
        whyItMattered:
          'The first subatomic particle. Thomson\'s e/m measurement showed that atoms were not indivisible — there was something inside them, smaller and lighter than any chemical element.',
        paper: {
          authors: 'Thomson, J.J.',
          title: 'Cathode Rays',
          journal: 'Philosophical Magazine, Series 5',
          volume: '44',
          pages: '293–316',
          year: 1897,
          url: 'https://web.lemoyne.edu/~giunta/thomson1897.html',
          abstractParaphrase:
            'Cathode rays are deflected by electric and magnetic fields in a manner consistent with negatively charged particles whose mass is roughly one-thousandth that of hydrogen. The same particles are produced regardless of the gas filling the tube or the metal of the cathode, suggesting they are a constituent of all matter.',
          notes: 'Thomson followed with a 1899 paper measuring e and m separately.',
          verified: true,
        },
        anecdote: {
          text: 'Thomson refused to call them electrons for years. In his 1906 Nobel lecture he was still using "corpuscles." The word "electron" had been Stoney\'s (1894), introduced for the elementary unit of charge — not for any actual particle.',
          source:
            'Falconer, I. "Corpuscles, Electrons and Cathode Rays: J.J. Thomson and the Discovery of the Electron." British Journal for the History of Science 20 (1987): 241–276.',
          verified: true,
        },
        visual: 'thomson-crt',
        equationsLatex: ['\\frac{e}{m} \\approx 1.76 \\times 10^{11}\\ \\mathrm{C/kg}'],
        particles: ['electron'],
      },
      {
        id: 'planck-1900',
        year: 1900,
        yearLabel: '1900',
        headline: 'An Act of Desperation',
        shortTitle: 'The quantum',
        discipline: 'theory',
        discoverers: [
          { name: 'Max Planck', affiliation: 'University of Berlin' },
        ],
        narrative: [
          'The blackbody spectrum had defeated classical physics. The energy radiated by a hot object at each wavelength simply would not fit any formula derived from Maxwell\'s equations and ordinary thermodynamics. Wien\'s law worked at short wavelengths; the Rayleigh–Jeans law worked at long ones; nothing worked everywhere.',
          'Planck found a formula by interpolating between the two limits — and then, having found it, set out to derive it. The derivation required a step he later called "an act of desperation": treat the energy of the oscillators in the blackbody walls as coming in discrete chunks, E = hν, with h a new constant of nature. Planck did not believe the chunks were real. He thought they were a trick that would dissolve once the proper derivation was found. The proper derivation was never found.',
        ],
        whyItMattered:
          'The quantum hypothesis was the seed of all of quantum theory. Planck did not yet realise it; Einstein, five years later, would.',
        paper: {
          authors: 'Planck, M.',
          title: 'Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum',
          journal: 'Verhandlungen der Deutschen Physikalischen Gesellschaft',
          volume: '2',
          pages: '237–245',
          year: 1900,
          abstractParaphrase:
            'A derivation of the empirical blackbody spectrum based on the assumption that the energy of resonators is distributed in finite, equal elements proportional to their frequency.',
          verified: true,
        },
        anecdote: {
          text: 'Planck called the quantum hypothesis "an act of desperation" in a 1931 letter to Robert Williams Wood, looking back thirty years later. He had spent the intervening decades trying — and failing — to derive his radiation law without it.',
          source:
            'Planck to R.W. Wood, 7 October 1931. Reproduced in Hermann, A., "The Genesis of Quantum Theory" (MIT Press, 1971).',
          verified: true,
        },
        visual: 'planck-quantum',
        equationsLatex: ['E = h\\nu'],
        particles: ['photon'],
      },
      {
        id: 'einstein-1905',
        year: 1905,
        yearLabel: '1905',
        headline: 'Light Comes in Pieces',
        shortTitle: 'Photoelectric',
        discipline: 'theory',
        discoverers: [
          { name: 'Albert Einstein', affiliation: 'Swiss Patent Office, Bern' },
        ],
        narrative: [
          'In a single year — 1905, his annus mirabilis — Einstein published the special theory of relativity, the equivalence of mass and energy, the explanation of Brownian motion, and a paper on the photoelectric effect. It was the photoelectric paper, not relativity, that the Nobel committee cited in 1921.',
          'The experimental puzzle was simple. Shine ultraviolet light on a metal and electrons fly off. The brighter the light, the more electrons — but the energy of each electron depends only on the frequency, not the brightness. Below a threshold frequency, no electrons appear at all, even in blinding light.',
          'Einstein\'s explanation was that light itself comes in quanta of energy hν. An electron absorbs one quantum at a time. Below the threshold, no single quantum has enough energy to free it; above the threshold, what is left over after escape becomes the electron\'s kinetic energy. Planck\'s desperate trick had been right, and it was not just a trick about oscillators in walls. Light was granular.',
        ],
        whyItMattered:
          'Einstein took Planck\'s quantum seriously and made it physical. The photon — though it would not be named for two decades — entered physics here.',
        paper: {
          authors: 'Einstein, A.',
          title:
            'Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt',
          journal: 'Annalen der Physik',
          volume: '17',
          pages: '132–148',
          year: 1905,
          doi: '10.1002/andp.19053220607',
          abstractParaphrase:
            'A heuristic argument that light, when interacting with matter, behaves as if it consisted of localised energy quanta of magnitude hν. The kinetic energy of photoelectrons released from a metal surface should equal hν minus the work function — a prediction confirmed quantitatively by Millikan a decade later.',
          notes:
            'The word "photon" was coined by G.N. Lewis in 1926. Einstein never used it in this paper.',
          verified: true,
        },
        anecdote: {
          text: 'Einstein himself called the photoelectric paper "very revolutionary" — the only one of his 1905 papers he described that way. Relativity, for all its later fame, he considered a natural extension of existing electrodynamics. The light-quantum was the leap.',
          source:
            'Einstein to Conrad Habicht, May 1905. Collected Papers of Albert Einstein, Vol. 5, doc. 27.',
          verified: true,
        },
        visual: 'photoelectric',
        equationsLatex: ['E_{\\max} = h\\nu - \\phi'],
        particles: ['photon', 'electron'],
      },
      {
        id: 'rutherford-1911',
        year: 1911,
        yearLabel: '1911',
        headline: 'A Shell Through Tissue Paper',
        shortTitle: 'Nucleus',
        discipline: 'experiment',
        discoverers: [
          { name: 'Ernest Rutherford', affiliation: 'University of Manchester' },
          { name: 'Hans Geiger', affiliation: 'University of Manchester' },
          { name: 'Ernest Marsden', affiliation: 'University of Manchester' },
        ],
        narrative: [
          'By 1909, Thomson had a model of the atom: a diffuse positive jelly studded with electrons — the "plum pudding." Hans Geiger and Ernest Marsden, working under Rutherford in Manchester, were testing it. They fired alpha particles at a thin gold foil and counted, by hand, the flashes on a zinc-sulfide screen as each alpha ploughed through and landed on the other side.',
          'Marsden, on a whim, tried looking on the same side as the source — to see if any alphas bounced backward. They were not supposed to. A plum pudding has nothing dense enough to scatter a heavy alpha by ninety degrees, let alone return it. He saw them anyway, about one in eight thousand.',
          'Rutherford, when told, said: "It was quite the most incredible event that has ever happened to me in my life. It was almost as incredible as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you." His 1911 paper worked out the geometry. The deflections fit if all the positive charge of the atom — and almost all the mass — were concentrated in a region less than a thousandth of the atom\'s diameter. The atom had a nucleus.',
        ],
        whyItMattered:
          'The atom was suddenly mostly empty space, with a tiny dense core. Every later question about nuclear structure begins here.',
        paper: {
          authors: 'Rutherford, E.',
          title:
            'The Scattering of α and β Particles by Matter and the Structure of the Atom',
          journal: 'Philosophical Magazine, Series 6',
          volume: '21',
          pages: '669–688',
          year: 1911,
          abstractParaphrase:
            'Large-angle scattering of α-particles by thin metal foils is incompatible with the diffuse-positive-charge atom of Thomson but is well described by a point-like positive charge surrounded at large distances by compensating negative charge.',
          notes:
            'The experimental data were collected by Geiger and Marsden in 1909–1910. Rutherford\'s 1911 paper is the theoretical interpretation.',
          verified: true,
        },
        anecdote: {
          text: 'Rutherford\'s "fifteen-inch shell at tissue paper" line is from a public lecture in 1936, twenty-five years after the fact. It is the most quoted thing he ever said and almost certainly polished after the event.',
          source:
            'Rutherford, E. "The Development of the Theory of Atomic Structure," Cambridge lecture, 1936; reproduced in Andrade, E.N. da C., "Rutherford and the Nature of the Atom" (Doubleday, 1964).',
          verified: true,
        },
        visual: 'rutherford',
        particles: [],
      },
      {
        id: 'compton-1923',
        year: 1923,
        yearLabel: '1923',
        headline: 'The Photon Bounces',
        shortTitle: 'Compton',
        discipline: 'experiment',
        discoverers: [
          { name: 'Arthur H. Compton', affiliation: 'Washington University in St. Louis' },
        ],
        narrative: [
          'Einstein\'s photons had survived for eighteen years on the strength of one experiment — the photoelectric effect — and most physicists still treated the quantum as a calculational fiction. The classical picture of light as a wave was simply too useful to abandon.',
          'Compton scattered X-rays off graphite and measured the wavelength of the scattered light. It came back longer, by an amount that depended on the scattering angle exactly as if the X-ray had been a particle of energy hν and momentum hν/c colliding elastically with a stationary electron. Treat the X-ray as a wave and the result was inexplicable; treat it as a particle and the answer fell out of two lines of relativistic kinematics.',
          'The photon was now a thing that could carry momentum and bounce. Light was particles after all, in a way that no one yet understood.',
        ],
        whyItMattered:
          'The photoelectric effect showed that light could deposit energy in lumps; Compton showed it carried momentum like a billiard ball. The photon became a real particle.',
        paper: {
          authors: 'Compton, A.H.',
          title: 'A Quantum Theory of the Scattering of X-rays by Light Elements',
          journal: 'Physical Review',
          volume: '21',
          pages: '483–502',
          year: 1923,
          doi: '10.1103/PhysRev.21.483',
          abstractParaphrase:
            'X-rays scattered from graphite show a wavelength shift Δλ = (h/m_e c)(1 − cos θ) consistent with relativistic two-body collision between an X-ray quantum of energy hν and a free electron at rest.',
          verified: true,
        },
        anecdote: {
          text: 'Debye published the same calculation independently in 1923, weeks after Compton. The shift is sometimes called the Compton–Debye shift in older textbooks; the experiment, however, is unambiguously Compton\'s.',
          source:
            'Debye, P. "Zerstreuung von Röntgenstrahlen und Quantentheorie." Physikalische Zeitschrift 24 (1923): 161–166.',
          verified: true,
        },
        visual: 'compton',
        equationsLatex: ['\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)'],
        particles: ['photon', 'electron'],
      },
      {
        id: 'dirac-1928',
        year: 1928,
        yearLabel: '1928',
        headline: 'An Equation That Predicted Antimatter',
        shortTitle: 'Dirac equation',
        discipline: 'theory',
        discoverers: [
          { name: 'P.A.M. Dirac', affiliation: 'St John\'s College, Cambridge' },
        ],
        narrative: [
          'Schrödinger\'s equation was non-relativistic. Klein and Gordon had a relativistic version, but it gave negative probabilities and could not describe the spinning electron. Dirac wanted an equation that was first-order in time, like Schrödinger\'s, but Lorentz-invariant, like Maxwell\'s. He found that to make this work the wavefunction had to have four components, not one — and the coefficients had to be matrices that satisfied a peculiar anticommuting algebra.',
          'The equation came out right. It predicted the electron\'s spin and magnetic moment correctly to leading order — quantities that had been put in by hand in earlier theories. But it had a problem: half its solutions had negative energy. An ordinary electron in such a state would radiate forever, falling into a bottomless pit.',
          'Dirac\'s answer was that the negative-energy states were already filled. What we call the vacuum was a sea of occupied negative-energy electrons. Knock one out and you get a hole — which would behave, electromagnetically, like a particle with the opposite charge. Dirac initially thought the hole was the proton. By 1931, after Hermann Weyl pointed out a symmetry argument, he accepted that the hole had to have the electron\'s mass: a new particle, the positron.',
        ],
        whyItMattered:
          'The first prediction of antimatter, and the founding equation of relativistic quantum mechanics. Every modern theory of fermions descends from it.',
        paper: {
          authors: 'Dirac, P.A.M.',
          title: 'The Quantum Theory of the Electron',
          journal: 'Proceedings of the Royal Society of London A',
          volume: '117',
          pages: '610–624',
          year: 1928,
          doi: '10.1098/rspa.1928.0023',
          abstractParaphrase:
            'A first-order relativistic wave equation for the electron, requiring a four-component spinor, is constructed. The fine structure of hydrogen, the electron\'s spin, and its magnetic moment emerge automatically. The equation admits negative-energy solutions whose physical interpretation is deferred.',
          notes:
            'The explicit identification of the negative-energy holes with positrons of electronic mass appeared in Dirac, "Quantised Singularities in the Electromagnetic Field," Proc. R. Soc. A 133 (1931), 60–72.',
          verified: true,
        },
        anecdote: {
          text: 'Dirac, asked years later how he had found the equation, said he had been "playing with mathematics." He wrote in 1963: "It is more important to have beauty in one\'s equations than to have them fit experiment."',
          source:
            'Dirac, P.A.M. "The Evolution of the Physicist\'s Picture of Nature." Scientific American 208 (May 1963): 45–53.',
          verified: true,
        },
        visual: 'dirac-eq',
        equationsLatex: ['(i\\gamma^{\\mu}\\partial_{\\mu} - m)\\psi = 0'],
        particles: ['electron'],
      },
      {
        id: 'pauli-1930',
        year: 1930,
        yearLabel: 'Dec 1930',
        headline: 'A Desperate Remedy',
        shortTitle: 'Neutrino letter',
        discipline: 'theory',
        discoverers: [
          { name: 'Wolfgang Pauli', affiliation: 'ETH Zürich' },
        ],
        narrative: [
          'Beta decay was misbehaving. When a nucleus emitted an electron, the electron came out with a continuous range of energies — not the single, sharp value that energy conservation in a two-body decay demands. Niels Bohr was prepared to abandon energy conservation. Pauli was not.',
          'On December 4, 1930, he wrote a letter to a conference in Tübingen that he could not attend — he was, he explained, indispensable at a ball in Zürich. The letter begins, in German: "Dear Radioactive Ladies and Gentlemen." In it he proposed what he called "a desperate remedy": that beta decay produces a third particle, electrically neutral, very light, almost impossible to detect, which carries away the missing energy. He called it the "neutron." (Three years later, after Chadwick discovered the heavy neutron, Fermi renamed Pauli\'s particle the neutrino — Italian for "little neutral one.")',
          'Pauli told friends he had done a terrible thing: he had postulated a particle that could never be observed. He bet a case of champagne it would never be detected. Twenty-six years later he lost the bet.',
        ],
        whyItMattered:
          'Pauli rescued energy conservation by inventing a particle. The neutrino is the first of many particles in this timeline whose existence was theoretical for decades before experimentalists caught up.',
        paper: {
          authors: 'Pauli, W.',
          title:
            'Letter to L. Meitner et al., conference participants in Tübingen ("Dear Radioactive Ladies and Gentlemen")',
          journal: 'Open letter, 4 December 1930',
          year: 1930,
          url: 'https://cds.cern.ch/record/83282/files/meitner_0393.pdf',
          abstractParaphrase:
            'A "desperate remedy" for the continuous beta spectrum and the spin-statistics anomaly of nitrogen-14: a new neutral particle of small mass and spin 1/2, emitted in beta decay together with the electron. The mass should be of order the electron\'s, "in any case not larger than 0.01 proton masses."',
          notes:
            'Never published as a formal paper. The earliest printed discussion of Pauli\'s proposal is Pauli\'s remarks at the 1933 Solvay Conference.',
          verified: true,
        },
        anecdote: {
          text: 'The letter opens "Liebe Radioaktive Damen und Herren" — "Dear Radioactive Ladies and Gentlemen." Pauli explained he could not attend the Tübingen meeting because he was needed at a ball in Zürich the same night. The letter is now displayed in the CERN archive.',
          source:
            'Pauli to L. Meitner et al., 4 December 1930, Tübingen. Original in CERN Pauli Archive, doc. PLC 0393.',
          verified: true,
        },
        visual: 'neutrino-letter',
        particles: ['neutrino-e'],
      },
      {
        id: 'chadwick-1932',
        year: 1932,
        yearLabel: 'Feb 1932',
        headline: 'The Neutral Twin of the Proton',
        shortTitle: 'Neutron',
        discipline: 'experiment',
        discoverers: [
          { name: 'James Chadwick', affiliation: 'Cavendish Laboratory, Cambridge' },
        ],
        narrative: [
          'Bothe and Becker, in Germany, had bombarded beryllium with alpha particles and observed an extremely penetrating neutral radiation — they assumed it was high-energy gamma rays. The Joliot-Curies in Paris had taken this radiation and shown that it could knock protons out of paraffin. They, too, called it gamma rays.',
          'Chadwick, who had been looking for a neutral nuclear particle for over a decade — Rutherford had suggested the existence of one as early as 1920 — recognised that gamma rays could not transfer that much momentum to a proton. He repeated the experiment in Cambridge, measured the recoil energies in nitrogen and hydrogen, and showed that the radiation was a neutral particle with a mass close to the proton\'s.',
          'He published a one-page note in Nature ("Possible Existence of a Neutron") within weeks, then the full paper in the Proceedings of the Royal Society three months later. The atom now had its three classical building blocks: proton, neutron, electron. Heisenberg\'s nuclear model — protons and neutrons bound by exchange forces — followed within months.',
        ],
        whyItMattered:
          'The neutron made nuclei intelligible. Without it, isotopes were a mystery and the strong force had nothing to act on. Within a decade, neutrons would also produce the chain reaction.',
        papers: [
          {
            authors: 'Chadwick, J.',
            title: 'Possible Existence of a Neutron',
            journal: 'Nature',
            volume: '129',
            pages: '312',
            year: 1932,
            doi: '10.1038/129312a0',
            abstractParaphrase:
              'A short note proposing that the penetrating neutral radiation produced when beryllium is bombarded by polonium α-particles consists of neutral particles of approximately proton mass.',
            notes: 'The full analysis followed three months later in Proc. R. Soc. A.',
            verified: true,
          },
          {
            authors: 'Chadwick, J.',
            title: 'The Existence of a Neutron',
            journal: 'Proceedings of the Royal Society of London A',
            volume: '136',
            pages: '692–708',
            year: 1932,
            doi: '10.1098/rspa.1932.0112',
            abstractParaphrase:
              'Quantitative measurements of proton and nitrogen recoil energies under bombardment by the new radiation establish its mass at approximately 1.005–1.008 atomic mass units, ruling out a γ-ray interpretation.',
            verified: true,
          },
        ],
        anecdote: {
          text: 'Rutherford had publicly hypothesised a neutral particle of nuclear mass in his 1920 Bakerian Lecture. Chadwick spent the next twelve years quietly looking for it, in between other experiments, before the Bothe–Becker results gave him a target.',
          source:
            'Rutherford, E. "Nuclear Constitution of Atoms." Bakerian Lecture, Proc. R. Soc. A 97 (1920), 374–400.',
          verified: true,
        },
        visual: 'rutherford',
        particles: ['neutron'],
      },
      {
        id: 'anderson-1932',
        year: 1932,
        yearLabel: 'Aug 1932',
        headline: 'The Track That Curved the Wrong Way',
        shortTitle: 'Positron',
        discipline: 'experiment',
        discoverers: [
          { name: 'Carl D. Anderson', affiliation: 'California Institute of Technology' },
        ],
        narrative: [
          'Anderson, a graduate student at Caltech, was photographing cosmic rays in a cloud chamber sitting inside a strong magnetic field. The field bent charged particle tracks; the radius of the curve gave the momentum, and the direction of the curve gave the sign of the charge.',
          'On August 2, 1932, he photographed a track that curved exactly like an electron — same mass, same energy loss in a lead plate inserted across the chamber — but in the opposite direction. The plate told him which way the particle had been moving, which fixed the sign of the charge. It was positive.',
          'Dirac\'s 1928 equation had predicted exactly this particle. Anderson, however, had not been reading Dirac. He coined the name "positron" himself and, in his 1933 paper, mentioned the connection to Dirac\'s theory only in a closing paragraph. The Nobel Committee, less casual, gave him the prize in 1936.',
        ],
        whyItMattered:
          'The first antiparticle. Dirac\'s "holes" were real, and antimatter was a feature of the world.',
        paper: {
          authors: 'Anderson, C.D.',
          title: 'The Positive Electron',
          journal: 'Physical Review',
          volume: '43',
          pages: '491–494',
          year: 1933,
          doi: '10.1103/PhysRev.43.491',
          abstractParaphrase:
            'Cloud-chamber photographs of cosmic-ray events reveal tracks consistent with a particle of electronic mass and positive charge. The direction of motion is fixed by the energy loss in a lead plate traversing the chamber.',
          notes:
            'Discovery photograph dated 2 August 1932. The famous image is plate I in the published paper.',
          verified: true,
        },
        anecdote: {
          text: 'Patrick Blackett and Giuseppe Occhialini, working in Cambridge, had also seen positron tracks in cosmic-ray photographs at about the same time, but spent additional months gathering more data before publishing. Anderson published first; Blackett and Occhialini\'s paper, with its much larger statistical sample, is sometimes credited with confirming the discovery.',
          source:
            'Blackett, P.M.S. and Occhialini, G.P.S. "Some Photographs of the Tracks of Penetrating Radiation." Proc. R. Soc. A 139 (1933), 699–727.',
          verified: true,
        },
        visual: 'positron-track',
        particles: ['positron'],
      },
    ],
  },

  // ==========================================================================
  // ERAS 2–7: stubs to be filled in subsequent passes.
  // The schema is fully exercised by Era 1; the remaining eras keep the same
  // shape and will be populated event-by-event in the next iteration.
  // ==========================================================================
  {
    id: 'era-2',
    number: 2,
    title: 'Forces and Phantoms',
    yearRange: '1934–1947',
    startYear: 1934,
    endYear: 1947,
    accent: '#6e4a7a',
    bgTint: '#f6f1f7',
    blurb:
      'With the electron, proton, neutron, and photon in hand, the question turned to the forces. What held the nucleus together against the protons\' mutual repulsion? What rules governed beta decay? Theorists invented particles to mediate these forces; experimentalists, looking in cosmic rays, found particles that did not match.',
    events: [
      {
        id: 'fermi-1934',
        year: 1934,
        yearLabel: '1934',
        headline: 'Rejected by Nature',
        shortTitle: 'Fermi β decay',
        discipline: 'theory',
        discoverers: [
          { name: 'Enrico Fermi', affiliation: 'University of Rome' },
        ],
        narrative: [
          'Pauli\'s neutrino hypothesis had been circulating since 1930, but nobody had built a quantitative theory around it. Fermi did. He treated beta decay as a four-fermion interaction — a proton, neutron, electron, and neutrino meeting at a single spacetime point — with a coupling constant G_F chosen to fit the observed decay rates. The resulting Lagrangian was elegant: a product of four spinor fields, contracted to form a Lorentz scalar, multiplied by a single number. It was the first serious theory of the weak force.',
          'Fermi submitted the paper to Nature. They rejected it — it contained "speculations too remote from reality to be of interest to the reader." The paper was published in Italian in Nuovo Cimento and in German in Zeitschrift für Physik. The German version is the one everyone cited for decades; the Italian journal had limited international circulation during the 1930s.',
          'Fermi\'s theory predicted the shape of beta spectra correctly and gave a numerical value for the coupling constant (~10⁻⁵ in natural units — absurdly weak compared to electromagnetism). The theory was not complete; the coupling was point-like, which meant it broke down at high energies. But it was the correct low-energy limit of what would later become the electroweak theory.',
        ],
        whyItMattered:
          'The first quantitative theory of the weak force. Introduced the four-fermion interaction that would persist, with modifications, until the gauge-theory era.',
        paper: {
          authors: 'Fermi, E.',
          title: 'Tentativo di una teoria dei raggi beta',
          journal: 'Nuovo Cimento',
          volume: '11',
          pages: '1–19',
          year: 1934,
          doi: '10.1007/BF02959820',
          abstractParaphrase:
            'A theory of beta decay based on the emission of an electron and a neutrino (Pauli\'s particle) from the nucleus, with a contact interaction between the four fermion fields. The spectrum shape and half-lives of beta emitters are calculated and agree with experiment.',
          verified: true,
        },
        anecdote: {
          text: 'Nature\'s rejection letter has not survived, but Fermi himself recounted the episode. The story is widely told that the rejection contained the phrase about "speculations too remote from reality." Fermi did not wait; he immediately sent the paper to Italian and German journals. The German translation (Zeitschrift für Physik 88, 161–177, 1934) became the standard reference outside Italy.',
          source:
            'Segre, E. "Enrico Fermi, Physicist" (University of Chicago Press, 1970), p. 73. [VERIFY — exact wording of Nature\'s rejection]',
          verified: false,
        },
        visual: 'fermi-beta',
        equationsLatex: [
          '\\mathcal{L} = G_F (\\bar{p}\\,\\gamma^\\mu n)(\\bar{e}\\,\\gamma_\\mu \\nu) + \\text{h.c.}',
        ],
        particles: ['neutrino-e'],
      },
      {
        id: 'yukawa-1935',
        year: 1935,
        yearLabel: '1935',
        headline: 'A Force Carrier with Mass',
        shortTitle: 'Yukawa meson',
        discipline: 'theory',
        discoverers: [
          { name: 'Hideki Yukawa', affiliation: 'Osaka University' },
        ],
        narrative: [
          'The strong force holding the nucleus together had a range of about a femtometre — roughly the size of the nucleus itself. Yukawa\'s insight was to connect this range to the mass of the force-carrying particle. In quantum field theory, a force mediated by a massive particle falls off exponentially with a characteristic length ℏ/(mc). If you want a force of range ~1 fm, you need a mediator of mass ~ℏc/(1 fm) ≈ 200 MeV — about 200 times the electron\'s mass.',
          'Yukawa wrote down a field equation for a massive spin-0 boson — the "meson" — and showed that its exchange between nucleons produced a short-range attractive potential of exactly the right form. It was the first prediction of a new particle from dimensional analysis of a force range, and it was the first application of the idea that forces are mediated by particles to the nuclear domain.',
          'The paper was published in a Japanese journal with limited international circulation. It took two years before it was widely noticed outside Japan — and then, when a particle of roughly the right mass was found in cosmic rays, the identification seemed spectacularly confirmed. It wasn\'t. The particle in the cosmic rays was the muon.',
        ],
        whyItMattered:
          'The first prediction of a force carrier from the range of a force. Introduced the idea that nuclear forces are mediated by massive bosons — the template for all later gauge theories.',
        paper: {
          authors: 'Yukawa, H.',
          title: 'On the Interaction of Elementary Particles',
          journal: 'Proceedings of the Physico-Mathematical Society of Japan',
          volume: '17',
          pages: '48–57',
          year: 1935,
          abstractParaphrase:
            'A theory of nuclear forces in which the interaction between nucleons is mediated by a massive spin-0 field. The mass of the field quantum is estimated from the range of nuclear forces to be approximately 200 times the electron mass.',
          verified: true,
        },
        anecdote: {
          text: 'Yukawa later said that the idea came to him while watching the surf at Lake Biwa. The exponential fall-off of a Yukawa potential is sometimes described, in textbooks that love the metaphor, as a force that "damps like a wave." This is probably not what he was thinking about at the lake.',
          source: 'Commonly told but unverified',
          verified: false,
        },
        visual: 'yukawa',
        equationsLatex: [
          'V(r) = -\\frac{g^2}{4\\pi}\\frac{e^{-m_\\pi r}}{r}',
          '\\quad m_\\pi \\approx \\frac{\\hbar}{c \\cdot (1\\ \\text{fm})} \\approx 200\\ \\text{MeV}',
        ],
        particles: ['pion'],
      },
      {
        id: 'muon-1937',
        year: 1937,
        yearLabel: '1937',
        headline: 'Who Ordered That?',
        shortTitle: 'Muon',
        discipline: 'experiment',
        discoverers: [
          { name: 'Carl D. Anderson', affiliation: 'California Institute of Technology' },
          { name: 'Seth Neddermeyer', affiliation: 'California Institute of Technology' },
        ],
        narrative: [
          'In 1937, Anderson and Neddermeyer, still working with cloud chambers in cosmic rays, found a particle with mass between the electron and the proton — roughly 106 MeV, or about 200 times the electron mass. This was almost exactly what Yukawa had predicted. The discovery was headline news: the nuclear force mediator had been found.',
          'Over the next decade, it became clear that something was wrong. Conversi, Pancini, and Piccioni showed in 1945–47 that the cosmic-ray meson interacted extremely weakly with nuclei — it passed through dense matter almost as freely as an electron. A strong-force mediator should have been absorbed by nuclei within centimetres of iron. This particle was not Yukawa\'s meson. It was a heavy cousin of the electron, with no obvious role in the nuclear force, and no discernible reason to exist.',
          'Rabi\'s response — "Who ordered that?" — captured the bewilderment. The muon was the second-generation copy of the electron: same charge, same spin, same weak interactions, but 207 times heavier. Why nature should duplicate the electron in this way was a complete mystery in 1937 and remains one today.',
        ],
        whyItMattered:
          'The first hint of fermion generations. The muon looked like an electron but heavier, with no role in nuclear forces — and no explanation for its existence.',
        paper: {
          authors: 'Neddermeyer, S.H. and Anderson, C.D.',
          title: 'Note on the Nature of Cosmic Ray Particles',
          journal: 'Physical Review',
          volume: '51',
          pages: '884–886',
          year: 1937,
          doi: '10.1103/PhysRev.51.884',
          abstractParaphrase:
            'Cosmic-ray particles are observed with masses intermediate between the electron and the proton. Their penetrating power suggests they are not consistent with known electrons or protons; the authors propose they constitute a new particle type.',
          verified: true,
        },
        anecdote: {
          text: 'Rabi\'s "Who ordered that?" is universally quoted but its exact provenance is unclear. It appears in no published paper by Rabi; it was reportedly said at a seminar, possibly at Columbia in the late 1940s, and repeated orally until it entered the folklore. The closest published source is Rabi\'s autobiography, where he discusses the muon\'s puzzling nature without using this exact phrase.',
          source:
            'Commonly attributed to Rabi; exact wording and occasion unverified. See also Rigden, J.S. "Rabi: Scientist and Citizen" (Harvard, 2000).',
          verified: false,
        },
        visual: 'positron-track',
        particles: ['muon'],
      },
      {
        id: 'pion-1947',
        year: 1947,
        yearLabel: '1947',
        headline: "Yukawa's Particle, Twelve Years Late",
        shortTitle: 'Pion',
        discipline: 'experiment',
        discoverers: [
          { name: 'Cecil Powell', affiliation: 'University of Bristol' },
          { name: 'Giuseppe Occhialini', affiliation: 'University of Bristol' },
          { name: 'César Lattes', affiliation: 'University of Bristol / University of São Paulo' },
        ],
        narrative: [
          'The problem with the cosmic-ray "meson" was that it didn\'t interact strongly. Powell\'s group at Bristol had developed a technique using photographic emulsions — essentially, ultra-fine-grained photographic plates exposed to cosmic rays at high altitude. When a charged particle passes through the emulsion, it leaves a track of silver grains that can be measured under a microscope with micrometre precision.',
          'In 1947, Powell, Occhialini, and Lattes identified two events in which a heavier particle — the pi-meson, or pion — decayed into the lighter "meson" (the muon) plus an unseen neutral particle. The pion, at ~140 MeV, was slightly heavier than the muon, and it interacted strongly with nuclei, exactly as Yukawa\'s theory required. The muon was merely the pion\'s decay product — a spectator in nuclear physics.',
          'The discovery settled the confusion. Yukawa had been right about the mass and the role; he had been wrong only in that the first particle found at that mass scale turned out to be the wrong one. The pion was the real mediator of the nuclear force. The muon was something else entirely.',
        ],
        whyItMattered:
          "Confirmed Yukawa's prediction of a nuclear force mediator. Separated the pion (strong interaction) from the muon (weak interaction), ending a decade of confusion.",
        papers: [
          {
            authors: 'Lattes, C.M.G., Occhialini, G.P.S., and Powell, C.F.',
            title: 'Observations on the Tracks of Slow Mesons in Photographic Emulsions',
            journal: 'Nature',
            volume: '160',
            pages: '453–456',
            year: 1947,
            doi: '10.1038/160453a0',
            verified: true,
          },
          {
            authors: 'Lattes, C.M.G., Occhialini, G.P.S., and Powell, C.F.',
            title: 'Observations on the Tracks of Slow Mesons in Photographic Emulsions. Part II',
            journal: 'Nature',
            volume: '160',
            pages: '486–492',
            year: 1947,
            verified: true,
          },
        ],
        anecdote: {
          text: 'Lattes, a young Brazilian physicist, was the one who identified the decay events by painstakingly scanning emulsion plates under a microscope. He reportedly worked through the night. Powell won the 1950 Nobel Prize for the discovery; Lattes and Occhialini did not share it. Lattes was 23 at the time.',
          source:
            "Powell's Nobel lecture, 1950; widely reported in biographical accounts of Lattes.",
          verified: true,
        },
        visual: 'pion-emulsion',
        equationsLatex: ['\\pi^+ \\rightarrow \\mu^+ + \\nu_\\mu'],
        particles: ['pion', 'muon'],
      },
    ],
  },
  {
    id: 'era-3',
    number: 3,
    title: 'The Particle Zoo',
    yearRange: '1947–1961',
    startYear: 1947,
    endYear: 1961,
    accent: '#4a6b6e',
    bgTint: '#eef4f4',
    blurb:
      'Cloud chambers, emulsions, and the new accelerators began producing particles faster than anyone could classify them. By the late 1950s the proliferation was so embarrassing that Enrico Fermi reportedly told a student: "If I could remember the names of all these particles, I would have been a botanist."',
    events: [],
  },
  {
    id: 'era-4',
    number: 4,
    title: 'Order from Chaos',
    yearRange: '1961–1973',
    startYear: 1961,
    endYear: 1973,
    accent: '#5b6e3a',
    bgTint: '#f1f4ea',
    blurb:
      'In a single decade, the zoo became a periodic table. The Eightfold Way arranged the hadrons; quarks explained the arrangement; the Higgs mechanism showed how the gauge bosons could acquire mass; QCD explained why the quarks would not come out. By 1973 the Standard Model was almost finished.',
    events: [],
  },
  {
    id: 'era-5',
    number: 5,
    title: 'The November Revolution',
    yearRange: '1974–1983',
    startYear: 1974,
    endYear: 1983,
    accent: '#a8492c',
    bgTint: '#f8efe9',
    blurb:
      'Theory had predicted nearly everything. The next decade was about confirming it. Charm, bottom, the tau, gluons, W and Z — each discovery slotted neatly into a place that theorists had already prepared.',
    events: [],
  },
  {
    id: 'era-6',
    number: 6,
    title: 'Completing the Standard Model',
    yearRange: '1995–2012',
    startYear: 1995,
    endYear: 2012,
    accent: '#3b5a78',
    bgTint: '#edf2f7',
    blurb:
      'Top, tau neutrino, neutrino oscillations, Higgs. The last brick was set in place at CERN on July 4, 2012, by two collaborations of three thousand physicists each, looking at proton collisions in a 27-kilometre ring.',
    events: [],
  },
  {
    id: 'era-7',
    number: 7,
    title: 'Coda — What\'s Left',
    yearRange: '2012–',
    startYear: 2012,
    endYear: 9999,
    accent: '#5a5142',
    bgTint: '#f4f2ec',
    blurb:
      'The Standard Model is complete. It is also incomplete. It does not explain the hierarchy of masses, the existence of three generations, dark matter, dark energy, the matter–antimatter asymmetry, the mechanism behind neutrino mass, or how to reconcile any of it with gravity. The next chapter has not yet been written.',
    events: [],
  },
];
