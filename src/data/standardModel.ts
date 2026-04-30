/**
 * Standard Model particle definitions.
 *
 * Each particle maps to the timeline event ID that discovered it.
 * `discoveredByEventId: null` means the discovery event hasn't been
 * added to the timeline yet (eras 2–7 are still stubs).
 *
 * Composite particles (proton, neutron) are omitted — only fundamental
 * SM particles are listed.
 */

export type ParticleCategory = 'quark' | 'lepton' | 'gauge-boson' | 'higgs';

export interface SMParticle {
  id: string;                // matches timeline `particles[]` IDs where possible
  name: string;              // display name
  symbol: string;            // single-character or short symbol
  category: ParticleCategory;
  generation?: number;       // 1|2|3 for quarks and leptons
  discoveredByEventId: string | null;
  mass: string;
  charge: string;
  spin: string;
  role: string;
}

export const SM_PARTICLES: SMParticle[] = [
  // Quarks — generation 1
  { id: 'up',      name: 'up',    symbol: 'u',  category: 'quark', generation: 1, discoveredByEventId: null, mass: '~2.2 MeV', charge: '+2/3', spin: '1/2', role: 'First-generation quark; builds protons and neutrons with down quarks.' },
  { id: 'down',    name: 'down',  symbol: 'd',  category: 'quark', generation: 1, discoveredByEventId: null, mass: '~4.7 MeV', charge: '-1/3', spin: '1/2', role: 'First-generation quark; builds protons and neutrons with up quarks.' },
  // Quarks — generation 2
  { id: 'charm',   name: 'charm', symbol: 'c',  category: 'quark', generation: 2, discoveredByEventId: null, mass: '~1.27 GeV', charge: '+2/3', spin: '1/2', role: 'Second-generation up-type quark; confirmed by charmonium and weak-interaction consistency.' },
  { id: 'strange', name: 'strange', symbol: 's', category: 'quark', generation: 2, discoveredByEventId: null, mass: '~93 MeV', charge: '-1/3', spin: '1/2', role: 'Second-generation down-type quark; explains strange particles and strangeness.' },
  // Quarks — generation 3
  { id: 'top',     name: 'top',    symbol: 't', category: 'quark', generation: 3, discoveredByEventId: null, mass: '~172.7 GeV', charge: '+2/3', spin: '1/2', role: 'Third-generation up-type quark; the heaviest known elementary particle.' },
  { id: 'bottom',  name: 'bottom', symbol: 'b', category: 'quark', generation: 3, discoveredByEventId: null, mass: '~4.18 GeV', charge: '-1/3', spin: '1/2', role: 'Third-generation down-type quark; completed the quark generations before top was found.' },

  // Leptons — generation 1
  { id: 'electron',  name: 'electron', symbol: 'e', category: 'lepton', generation: 1, discoveredByEventId: 'thomson-1897', mass: '0.511 MeV', charge: '-1', spin: '1/2', role: 'First charged lepton; the first subatomic particle discovered.' },
  { id: 'neutrino-e', name: 'electron neutrino', symbol: 'νₑ', category: 'lepton', generation: 1, discoveredByEventId: 'pauli-1930', mass: '< 1 eV', charge: '0', spin: '1/2', role: 'Neutral lepton emitted in beta processes; detected through inverse beta decay.' },
  // Leptons — generation 2
  { id: 'muon',      name: 'muon',     symbol: 'μ', category: 'lepton', generation: 2, discoveredByEventId: 'muon-1937', mass: '105.7 MeV', charge: '-1', spin: '1/2', role: 'Second-generation charged lepton; like a heavy electron with no nuclear-force role.' },
  { id: 'neutrino-mu', name: 'muon neutrino', symbol: 'νμ', category: 'lepton', generation: 2, discoveredByEventId: null, mass: '< 1 eV', charge: '0', spin: '1/2', role: 'Neutral partner of the muon; central to atmospheric-neutrino oscillation evidence.' },
  // Leptons — generation 3
  { id: 'tau',       name: 'tau',      symbol: 'τ', category: 'lepton', generation: 3, discoveredByEventId: null, mass: '1.777 GeV', charge: '-1', spin: '1/2', role: 'Third-generation charged lepton; revealed the third lepton generation.' },
  { id: 'neutrino-tau', name: 'tau neutrino', symbol: 'ντ', category: 'lepton', generation: 3, discoveredByEventId: null, mass: '< 1 eV', charge: '0', spin: '1/2', role: 'Neutral partner of the tau; directly observed by DONUT.' },

  // Gauge bosons
  { id: 'photon',  name: 'photon', symbol: 'γ', category: 'gauge-boson', discoveredByEventId: 'planck-1900', mass: '0', charge: '0', spin: '1', role: 'Carrier of electromagnetism; the quantum of light.' },
  { id: 'gluon',   name: 'gluon',  symbol: 'g', category: 'gauge-boson', discoveredByEventId: null, mass: '0', charge: 'color charge', spin: '1', role: 'Carrier of the strong interaction in QCD.' },
  { id: 'z-boson', name: 'Z boson', symbol: 'Z', category: 'gauge-boson', discoveredByEventId: null, mass: '91.19 GeV', charge: '0', spin: '1', role: 'Neutral weak-force carrier; mediates neutral currents.' },
  { id: 'w-boson', name: 'W boson', symbol: 'W', category: 'gauge-boson', discoveredByEventId: null, mass: '80.38 GeV', charge: '±1', spin: '1', role: 'Charged weak-force carrier; mediates beta decay and flavor change.' },

  // Higgs
  { id: 'higgs', name: 'Higgs boson', symbol: 'H', category: 'higgs', discoveredByEventId: null, mass: '125.25 GeV', charge: '0', spin: '0', role: 'Excitation of the Higgs field; confirms the symmetry-breaking mechanism.' },
];

/** Map timeline particle names (which may include composite / antimatter ids)
 *  to their fundamental SM counterparts. */
export const PARTICLE_ALIASES: Record<string, string> = {
  positron: 'electron',   // antiparticle of electron
  'up-quark': 'up',
  'down-quark': 'down',
  'strange-quark': 'strange',
  'charm-quark': 'charm',
  'bottom-quark': 'bottom',
  'top-quark': 'top',
  'W-boson': 'w-boson',
  'Z-boson': 'z-boson',
  // proton / neutron are composite — intentionally omitted
};
