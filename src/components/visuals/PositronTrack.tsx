/**
 * Anderson's cloud-chamber photograph (2 August 1932).
 *
 * A charged particle track passes through a 6 mm lead plate.  The track
 * is curved by a magnetic field pointing out of the page (B ⊙).  Because
 * the particle loses energy in the plate, the radius of curvature is
 * smaller above the plate than below it.  That fixes the direction of
 * motion: upward.
 *
 * Lorentz-force check:  q > 0 (positron), B out of page (+z).  For a
 * particle moving upward (+y),  v × B = +x  → force is to the right.
 * A positive charge therefore curves clockwise, which is what is drawn.
 */
export function PositronTrack() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-auto" role="img"
         aria-label="Anderson cloud-chamber positron track">
      {/* chamber outline */}
      <rect x="20" y="20" width="360" height="180" fill="none" stroke="currentColor" strokeWidth="1.5" />

      {/* lead plate */}
      <rect x="20" y="108" width="360" height="10" fill="currentColor" opacity="0.35" />
      <text x="370" y="140" textAnchor="end" className="text-[10px] fill-current font-sans">
        6 mm Pb
      </text>

      {/*
        Track drawn as two cubic Bézier segments meeting at the plate.
        Below the plate the curvature is gentle (higher energy).
        Above the plate the curvature is tighter (energy lost).
        Both segments bend to the right, consistent with a positron
        in a field pointing out of the page.
      */}
      <path
        d="M 50 200 C 110 190, 150 150, 190 113 C 230 80, 290 60, 350 35"
        fill="none"
        stroke="var(--era-accent, currentColor)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* direction arrow at the top of the track */}
      <polygon points="350,35 342,33 344,43" fill="var(--era-accent, currentColor)" />
      <text x="356" y="38" className="text-[10px] fill-current font-sans">
        direction of motion
      </text>

      {/* magnetic field label — bottom-left, clear of the track */}
      <text x="30" y="195" className="text-[10px] fill-current font-sans">
        B ⊙ (out of page)
      </text>

      {/* radius-of-curvature annotation */}
      <text x="60" y="60" className="text-[9px] fill-current font-sans opacity-60">
        tighter curve above plate → slower
      </text>
    </svg>
  );
}
