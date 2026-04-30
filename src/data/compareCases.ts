export interface CompareCase {
  id: string;
  eraId: string;
  title: string;
  theoryEventIds: string[];
  experimentEventIds: string[];
  status: 'confirmed' | 'misidentified' | 'resolved later' | 'still open';
  dateGap: string;
  connectorLabel: string;
  whatChanged: string;
}

export const COMPARE_CASES: CompareCase[] = [
  {
    id: 'quantum-light-tests',
    eraId: 'era-1',
    title: 'Light stopped being just a wave once two experiments forced the quantum picture.',
    theoryEventIds: ['planck-1900', 'einstein-1905'],
    experimentEventIds: ['compton-1923'],
    status: 'confirmed',
    dateGap: '1900–1905 → 1923',
    connectorLabel: 'energy quantum becomes particle-like light',
    whatChanged:
      'Planck introduced energy quanta to fit blackbody radiation, and Einstein made the stronger claim that light itself behaved as if it came in localized packets. Compton scattering then showed that light carried momentum like a particle, making the photon much harder to treat as a mere calculational trick.',
  },
  {
    id: 'dirac-positron',
    eraId: 'era-1',
    title: 'A relativistic equation predicted a mirror particle before anyone saw one.',
    theoryEventIds: ['dirac-1928'],
    experimentEventIds: ['anderson-1932'],
    status: 'confirmed',
    dateGap: '1928 → 1932',
    connectorLabel: 'antimatter track found',
    whatChanged:
      'Dirac’s equation made negative-energy solutions unavoidable. Reinterpreting them led to the positron prediction; Anderson’s cloud-chamber track then turned antimatter from a theoretical embarrassment into a physical particle.',
  },
  {
    id: 'neutrino-beta-detection',
    eraId: 'era-2',
    title: 'The neutrino began as a bookkeeping rescue and became a detected particle.',
    theoryEventIds: ['pauli-1930', 'fermi-1934'],
    experimentEventIds: ['reines-cowan-1956'],
    status: 'confirmed',
    dateGap: '1930–1934 → 1956',
    connectorLabel: 'missing energy becomes an event signature',
    whatChanged:
      'Pauli proposed the neutrino to save energy conservation in beta decay, and Fermi built it into a quantitative weak-interaction theory. Reines and Cowan used the inverse beta process to detect reactor antineutrinos directly, converting an invisible accounting device into an experimental object.',
  },
  {
    id: 'yukawa-muon-pion',
    eraId: 'era-2',
    title: 'Yukawa predicted the right kind of particle. The first candidate was the wrong one.',
    theoryEventIds: ['yukawa-1935'],
    experimentEventIds: ['muon-1937', 'pion-1947'],
    status: 'resolved later',
    dateGap: '1935 → 1937 → 1947',
    connectorLabel: 'false lead, then confirmation',
    whatChanged:
      'The muon first looked like Yukawa’s nuclear-force carrier because its mass was in the right range. Its weak interaction with nuclei broke that interpretation. The pion, found in emulsions a decade later, kept the mass scale but had the strong nuclear behavior Yukawa’s theory required.',
  },
  {
    id: 'strangeness-taxonomy',
    eraId: 'era-3',
    title: 'Strange particles forced theorists to invent a new internal quantum number.',
    theoryEventIds: ['nishijima-gellmann-1953'],
    experimentEventIds: ['strange-particles-1947'],
    status: 'resolved later',
    dateGap: '1947–1953 → 1953–1954',
    connectorLabel: 'pattern becomes quantum number',
    whatChanged:
      'The V-particles were produced strongly but decayed slowly, which made no sense using only charge, baryon number, and isospin. Strangeness organized the contradiction: strong production conserved the new number, weak decay violated it, and the later quark model explained what the bookkeeping had been counting.',
  },
  {
    id: 'parity-lee-yang-wu',
    eraId: 'era-3',
    title: 'A theoretical loophole became an experimental demolition of mirror symmetry.',
    theoryEventIds: ['lee-yang-1956'],
    experimentEventIds: ['wu-1957'],
    status: 'confirmed',
    dateGap: '1956 → Jan 1957',
    connectorLabel: 'prediction tested directly',
    whatChanged:
      'Lee and Yang did not simply guess that parity failed; they showed that weak interactions had never actually been tested for mirror symmetry. Wu’s cobalt-60 experiment supplied the decisive test and forced weak interactions to be understood as chiral.',
  },
  {
    id: 'chirality-after-parity',
    eraId: 'era-3',
    title: 'Parity violation became a statement about handed weak interactions.',
    theoryEventIds: ['lee-yang-1956'],
    experimentEventIds: ['goldhaber-1957'],
    status: 'confirmed',
    dateGap: '1956 → 1957–1958',
    connectorLabel: 'mirror failure becomes helicity',
    whatChanged:
      'Wu showed that weak decay was not mirror-symmetric. Goldhaber’s helicity measurement sharpened the interpretation: the neutrino produced in weak decay was left-handed, making chirality a structural feature rather than a one-off asymmetry.',
  },
  {
    id: 'eightfold-way-omega',
    eraId: 'era-4',
    title: 'A classification scheme earned its keep by predicting a missing particle.',
    theoryEventIds: ['eightfold-way-1961'],
    experimentEventIds: ['omega-minus-1964'],
    status: 'confirmed',
    dateGap: '1961 → 1964',
    connectorLabel: 'empty slot filled',
    whatChanged:
      'The Eightfold Way was not just a tidy diagram. It left a specific empty place for the Ω⁻ with predicted charge, strangeness, and mass. Finding that particle turned SU(3) flavor symmetry from taxonomy into a tested guide to hadron structure.',
  },
  {
    id: 'quarks-partons-charm',
    eraId: 'era-4',
    title: 'Quarks moved from mathematical constituents to hard scattering centers and new resonances.',
    theoryEventIds: ['quarks-1964', 'color-1964'],
    experimentEventIds: ['partons-1969', 'jpsi-1974'],
    status: 'confirmed',
    dateGap: '1964–1965 → 1968–1969 → 1974',
    connectorLabel: 'model becomes substructure',
    whatChanged:
      'The quark model explained hadron multiplets, but quarks were initially treated cautiously because isolated quarks were not seen. Deep inelastic scattering showed point-like constituents inside the proton, and the J/ψ revealed charm as a real quark degree of freedom in a narrow bound state.',
  },
  {
    id: 'cp-km-third-generation',
    eraId: 'era-4',
    title: 'A tiny kaon asymmetry pointed toward a third generation of matter.',
    theoryEventIds: ['km-1973'],
    experimentEventIds: ['cp-violation-1964', 'tau-1975', 'upsilon-1977', 'top-1995'],
    status: 'confirmed',
    dateGap: '1964 → 1973 → 1975–1995',
    connectorLabel: 'CP violation demands more quarks',
    whatChanged:
      'CP violation was discovered first, without a Standard Model explanation. Kobayashi and Maskawa showed that a complex quark-mixing phase required at least three generations; tau, bottom, and top discoveries then filled out the family structure their argument needed.',
  },
  {
    id: 'qcd-color-gluon',
    eraId: 'era-4',
    title: 'Color and QCD turned the strong force into a gauge theory with its own carrier.',
    theoryEventIds: ['color-1964', 'qcd-1973'],
    experimentEventIds: ['partons-1969', 'gluon-1979'],
    status: 'confirmed',
    dateGap: '1964–1973 → 1968–1979',
    connectorLabel: 'color becomes three jets',
    whatChanged:
      'Color solved the quark-statistics problem and QCD made it a dynamical gauge charge. Scaling in deep inelastic scattering supported weakly interacting constituents at short distances, while three-jet events at PETRA supplied the clean experimental signature of gluon radiation.',
  },
  {
    id: 'electroweak-neutral-wz',
    eraId: 'era-4',
    title: 'Electroweak theory predicted new weak processes and massive weak bosons.',
    theoryEventIds: ['glashow-1961', 'weinberg-1967', 'thoofft-veltman-1971'],
    experimentEventIds: ['neutral-currents-1973', 'wz-1983'],
    status: 'confirmed',
    dateGap: '1961–1971 → 1973 → 1983',
    connectorLabel: 'neutral current, then W/Z',
    whatChanged:
      'Glashow supplied the gauge structure, Weinberg and Salam embedded it in a broken symmetry theory, and ’t Hooft and Veltman made it calculable. Neutral currents then showed the Z-like interaction was real, and the W and Z discoveries confirmed the massive carriers directly.',
  },
  {
    id: 'higgs-mechanism-boson',
    eraId: 'era-4',
    title: 'A mechanism for mass waited nearly half a century for its particle.',
    theoryEventIds: ['higgs-1964', 'weinberg-1967'],
    experimentEventIds: ['higgs-2012'],
    status: 'confirmed',
    dateGap: '1964–1967 → 2012',
    connectorLabel: 'mechanism gets a particle',
    whatChanged:
      'The Higgs mechanism explained how electroweak gauge bosons could become massive without destroying the theory. The 2012 boson did not prove every detail of the Higgs sector, but it confirmed that the Standard Model’s symmetry-breaking field has a real excitation.',
  },
  {
    id: 'november-revolution-confirmations',
    eraId: 'era-5',
    title: 'The November Revolution and the late-1970s discoveries filled in the Standard Model’s missing pieces.',
    theoryEventIds: ['quarks-1964', 'km-1973', 'qcd-1973'],
    experimentEventIds: ['jpsi-1974', 'tau-1975', 'upsilon-1977', 'gluon-1979'],
    status: 'confirmed',
    dateGap: '1964–1973 → 1974–1979',
    connectorLabel: 'generations and QCD become experimental',
    whatChanged:
      'The mid-1970s changed the quark model from a persuasive framework into a rapidly confirmed architecture. Charm, tau, bottom, and the gluon made the second and third generations and the QCD force carrier visible in experimental data.',
  },
  {
    id: 'weak-boson-direct-discovery',
    eraId: 'era-5',
    title: 'The weak force carriers moved from required fields to observed particles.',
    theoryEventIds: ['glashow-1961', 'weinberg-1967', 'thoofft-veltman-1971'],
    experimentEventIds: ['neutral-currents-1973', 'wz-1983'],
    status: 'confirmed',
    dateGap: '1961–1971 → 1973 → 1983',
    connectorLabel: 'indirect current, direct bosons',
    whatChanged:
      'Neutral currents showed that the electroweak neutral interaction existed before the bosons themselves were produced. The UA1 and UA2 W and Z discoveries then put the massive weak carriers on the same footing as other particles in the detector record.',
  },
  {
    id: 'third-generation-completion',
    eraId: 'era-6',
    title: 'The third generation became complete only after the hardest particles were found.',
    theoryEventIds: ['km-1973'],
    experimentEventIds: ['tau-1975', 'upsilon-1977', 'top-1995', 'tau-neutrino-2000'],
    status: 'confirmed',
    dateGap: '1973 → 1975–2000',
    connectorLabel: 'six-quark logic, full family found',
    whatChanged:
      'The CKM explanation of CP violation required three quark generations, but the full family arrived slowly. Tau and bottom revealed the third generation, top completed the quark sector, and DONUT directly observed the tau neutrino.',
  },
  {
    id: 'neutrino-mass-oscillation',
    eraId: 'era-6',
    title: 'Neutrino oscillations showed that the minimal Standard Model was not quite enough.',
    theoryEventIds: ['pauli-1930', 'fermi-1934'],
    experimentEventIds: ['neutrino-oscillations-1998'],
    status: 'resolved later',
    dateGap: '1930–1934 → 1998',
    connectorLabel: 'neutral lepton gains mass clue',
    whatChanged:
      'The original weak-interaction picture treated neutrinos as nearly invisible participants in beta decay. Atmospheric neutrino oscillations showed that neutrino flavor changes over distance, which requires physics beyond massless neutrinos and opened one of the Standard Model’s cleanest cracks.',
  },
  {
    id: 'precision-era-higgs',
    eraId: 'era-6',
    title: 'The last missing Standard Model particle was tied to decades of consistency checks.',
    theoryEventIds: ['higgs-1964', 'weinberg-1967', 'thoofft-veltman-1971'],
    experimentEventIds: ['top-1995', 'wz-1983', 'higgs-2012'],
    status: 'confirmed',
    dateGap: '1964–1971 → 1983–2012',
    connectorLabel: 'mass pattern closes',
    whatChanged:
      'The electroweak theory related W, Z, top, and Higgs physics through radiative corrections and symmetry breaking. By the time the Higgs boson appeared, the rest of the Standard Model had already constrained where it should plausibly be.',
  },
  {
    id: 'standard-model-open-questions',
    eraId: 'era-7',
    title: 'The completed Standard Model immediately exposes what it does not explain.',
    theoryEventIds: ['qcd-1973', 'weinberg-1967', 'higgs-1964'],
    experimentEventIds: ['neutrino-oscillations-1998', 'higgs-2012', 'open-questions'],
    status: 'still open',
    dateGap: '2012 →',
    connectorLabel: 'success leaves gaps',
    whatChanged:
      'The Standard Model accounts for a huge range of accelerator data, but it does not explain neutrino masses, dark matter, gravity, the matter-antimatter imbalance, or the hierarchy of parameters. After the Higgs discovery, the question shifted from whether the model works to why it has this particular shape.',
  },
];
