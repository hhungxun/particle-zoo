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
}

export const SM_PARTICLES: SMParticle[] = [
  // Quarks — generation 1
  { id: 'up',      name: 'up',    symbol: 'u',  category: 'quark', generation: 1, discoveredByEventId: null },
  { id: 'down',    name: 'down',  symbol: 'd',  category: 'quark', generation: 1, discoveredByEventId: null },
  // Quarks — generation 2
  { id: 'charm',   name: 'charm', symbol: 'c',  category: 'quark', generation: 2, discoveredByEventId: null },
  { id: 'strange', name: 'strange', symbol: 's', category: 'quark', generation: 2, discoveredByEventId: null },
  // Quarks — generation 3
  { id: 'top',     name: 'top',    symbol: 't', category: 'quark', generation: 3, discoveredByEventId: null },
  { id: 'bottom',  name: 'bottom', symbol: 'b', category: 'quark', generation: 3, discoveredByEventId: null },

  // Leptons — generation 1
  { id: 'electron',  name: 'electron', symbol: 'e', category: 'lepton', generation: 1, discoveredByEventId: 'thomson-1897' },
  { id: 'neutrino-e', name: 'e neutrino', symbol: 'νₑ', category: 'lepton', generation: 1, discoveredByEventId: 'pauli-1930' },
  // Leptons — generation 2
  { id: 'muon',      name: 'muon',     symbol: 'μ', category: 'lepton', generation: 2, discoveredByEventId: 'muon-1937' },
  { id: 'neutrino-mu', name: 'μ neutrino', symbol: 'νμ', category: 'lepton', generation: 2, discoveredByEventId: null },
  // Leptons — generation 3
  { id: 'tau',       name: 'tau',      symbol: 'τ', category: 'lepton', generation: 3, discoveredByEventId: null },
  { id: 'neutrino-tau', name: 'τ neutrino', symbol: 'ντ', category: 'lepton', generation: 3, discoveredByEventId: null },

  // Gauge bosons
  { id: 'photon',  name: 'photon', symbol: 'γ', category: 'gauge-boson', discoveredByEventId: 'planck-1900' },
  { id: 'gluon',   name: 'gluon',  symbol: 'g', category: 'gauge-boson', discoveredByEventId: null },
  { id: 'z-boson', name: 'Z',      symbol: 'Z', category: 'gauge-boson', discoveredByEventId: null },
  { id: 'w-boson', name: 'W',      symbol: 'W', category: 'gauge-boson', discoveredByEventId: null },

  // Higgs
  { id: 'higgs', name: 'Higgs', symbol: 'H', category: 'higgs', discoveredByEventId: null },
];

/** Map timeline particle names (which may include composite / antimatter ids)
 *  to their fundamental SM counterparts. */
export const PARTICLE_ALIASES: Record<string, string> = {
  positron: 'electron',   // antiparticle of electron
  // proton / neutron are composite — intentionally omitted
};
