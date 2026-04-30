/**
 * Geiger–Marsden geometry. A collimated beam of α-particles arrives from
 * the left; most pass straight through the foil with no deflection because
 * they miss the (point-like) gold nuclei entirely. A small fraction whose
 * impact parameter is small enough to feel the Coulomb field of a nucleus
 * scatter at finite angles. One unlucky α with near-zero impact parameter
 * is back-scattered nearly along its path of incidence.
 *
 * Each trajectory is drawn with its own incoming line — they do NOT all
 * converge on the same point on the foil. The single nucleus drawn in
 * the foil is illustrative; in reality the scattering one shown comes
 * from a single nucleus near that line.
 */
export function RutherfordScattering() {
  const sourceX = 30;
  const foilX = 240;
  const exitX = 460;

  // y-coordinates of incoming trajectories (impact parameters relative to the
  // single illustrative nucleus at (foilX, 110))
  const tracks = [
    { y0: 60,  outAngle: 0,    style: 'straight' },     // miss high
    { y0: 80,  outAngle: -10,  style: 'small' },        // small deflection up
    { y0: 100, outAngle: 0,    style: 'straight' },     // straight through
    { y0: 110, outAngle: 175,  style: 'back' },         // direct hit → back-scatter
    { y0: 120, outAngle: 8,    style: 'small' },        // small deflection down
    { y0: 140, outAngle: 30,   style: 'wide' },         // wider
    { y0: 160, outAngle: 0,    style: 'straight' },     // miss low
  ];

  // helper: degrees to radians
  const r = (deg: number) => (deg * Math.PI) / 180;

  return (
    <svg viewBox="0 0 480 230" className="w-full h-auto" role="img"
         aria-label="Rutherford gold-foil scattering: most α-particles pass straight, a few deflect, and one back-scatters">

      {/* α source */}
      <rect x={sourceX - 10} y="60" width="20" height="100" fill="currentColor" opacity="0.85" />
      <text x={sourceX} y="175" textAnchor="middle" className="text-[10px] fill-current font-sans">
        α source
      </text>

      {/* foil */}
      <line x1={foilX} y1="30" x2={foilX} y2="200" stroke="currentColor" strokeWidth="3" />
      <text x={foilX} y="220" textAnchor="middle" className="text-[10px] fill-current font-sans">
        gold foil
      </text>

      {/* one illustrative nucleus */}
      <circle cx={foilX} cy="110" r="3" fill="var(--era-accent, currentColor)" />
      <text x={foilX + 6} y="106" className="text-[9px] fill-current font-sans" opacity="0.6">
        Au nucleus
      </text>

      {/* trajectories */}
      {tracks.map((t, i) => {
        // incoming segment from source to foil
        const inLine = (
          <line
            key={`in-${i}`}
            x1={sourceX + 10} y1={t.y0}
            x2={foilX} y2={t.y0}
            stroke="var(--era-accent, currentColor)"
            strokeWidth={t.style === 'back' ? 1.6 : 1}
            opacity={t.style === 'back' ? 1 : 0.85}
          />
        );

        if (t.style === 'back') {
          // back-scatter: outgoing path returns leftward, slightly off the
          // incoming line so it stays visible
          return (
            <g key={i}>
              {inLine}
              <line
                x1={foilX} y1={t.y0}
                x2={sourceX + 12} y2={t.y0 - 28}
                stroke="var(--era-accent, currentColor)"
                strokeWidth="1.6"
              />
              <text x="120" y={t.y0 - 32} className="text-[10px] fill-current font-sans">
                ~1 in 8000 → back-scattered
              </text>
            </g>
          );
        }

        // forward outgoing segment, deflected by t.outAngle from horizontal
        const len = exitX - foilX;
        const x2 = foilX + len * Math.cos(r(t.outAngle));
        const y2 = t.y0 + len * Math.sin(r(t.outAngle));
        return (
          <g key={i}>
            {inLine}
            <line
              x1={foilX} y1={t.y0}
              x2={x2} y2={y2}
              stroke="var(--era-accent, currentColor)"
              strokeWidth="1"
              opacity={t.style === 'wide' ? 1 : t.style === 'small' ? 0.85 : 0.55}
            />
          </g>
        );
      })}

      {/* most pass straight label */}
      <text x="380" y="105" className="text-[10px] fill-current font-sans" opacity="0.7">
        most pass through
      </text>
    </svg>
  );
}
