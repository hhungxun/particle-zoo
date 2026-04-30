import { useState, useCallback } from 'react';

/**
 * Tracks which era id is currently most-visible in the viewport.
 * Era sections call setActive() on enter; we keep the latest one.
 *
 * The simple "last entered wins" rule works because era sections are tall
 * and don't overlap. If we wanted strict centering we would inspect
 * intersection ratios from the parent.
 */
export function useActiveEra(initial: string) {
  const [active, setActive] = useState(initial);
  const setActiveEra = useCallback((id: string) => setActive(id), []);
  return { active, setActiveEra };
}
