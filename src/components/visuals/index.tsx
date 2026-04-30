import type { VisualKey } from '../../types';
import { ThomsonCRT } from './ThomsonCRT';
import { RutherfordScattering } from './RutherfordScattering';
import { Compton } from './Compton';
import { PlanckQuantum } from './PlanckQuantum';
import { Photoelectric } from './Photoelectric';
import { DiracEquation } from './DiracEquation';
import { NeutrinoLetter } from './NeutrinoLetter';
import { PositronTrack } from './PositronTrack';

interface Props {
  visualKey?: VisualKey;
}

/**
 * Dispatch on visualKey. Unknown / not-yet-built keys render nothing —
 * this keeps the data layer ahead of the visual layer without blocking.
 */
export function Visual({ visualKey }: Props) {
  if (!visualKey) return null;
  switch (visualKey) {
    case 'thomson-crt':      return <ThomsonCRT />;
    case 'rutherford':       return <RutherfordScattering />;
    case 'compton':          return <Compton />;
    case 'planck-quantum':   return <PlanckQuantum />;
    case 'photoelectric':    return <Photoelectric />;
    case 'dirac-eq':         return <DiracEquation />;
    case 'neutrino-letter':  return <NeutrinoLetter />;
    case 'positron-track':   return <PositronTrack />;
    default: return null;
  }
}
