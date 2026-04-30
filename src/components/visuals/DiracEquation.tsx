/**
 * Dirac sea schematic. The equation itself is rendered separately by
 * KaTeX from event.equationsLatex; this visual shows the negative-energy
 * sea, one excited electron above, and one hole that becomes the positron.
 */
export function DiracEquation() {
  // Sea row: 12 electrons, with index 7 missing → that's the hole.
  const seaY = 142;
  const seaXs = Array.from({ length: 12 }, (_, i) => 56 + i * 28);
  const HOLE_INDEX = 7;

  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-auto max-w-md"
      role="img"
      aria-label="Dirac sea: filled negative-energy states with one hole representing a positron"
    >
      {/* energy axis */}
      <line x1="40" y1="20" x2="40" y2="200" stroke="currentColor" strokeWidth="1" />
      <polygon points="40,18 36,28 44,28" fill="currentColor" />
      <text x="48" y="22" className="text-[10px] fill-current font-sans">+E</text>
      <text x="48" y="200" className="text-[10px] fill-current font-sans">−E</text>

      {/* zero line */}
      <line x1="40" y1="100" x2="380" y2="100"
            stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <text x="48" y="96" className="text-[10px] fill-current font-sans">E = 0</text>

      {/* mass-gap shading: ±mc^2 forbidden region (between the bands) */}
      <rect x="40" y="78" width="340" height="44" fill="currentColor" opacity="0.04" />
      <text x="380" y="86" textAnchor="end" className="text-[9px] fill-current font-sans">
        +mc²
      </text>
      <text x="380" y="120" textAnchor="end" className="text-[9px] fill-current font-sans">
        −mc²
      </text>

      {/* one positive-energy electron */}
      <g>
        <circle cx="220" cy="50" r="5" fill="var(--era-accent, currentColor)" />
        <text x="232" y="54" className="text-[10px] fill-current font-sans">e⁻ (E &gt; 0)</text>
      </g>

      {/* filled negative-energy sea */}
      {seaXs.map((x, i) =>
        i === HOLE_INDEX ? (
          <circle
            key={i}
            cx={x}
            cy={seaY}
            r="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
        ) : (
          <circle key={i} cx={x} cy={seaY} r="5" fill="currentColor" />
        ),
      )}

      {/* hole annotation */}
      <line
        x1={seaXs[HOLE_INDEX]}
        y1={seaY + 9}
        x2={seaXs[HOLE_INDEX] + 18}
        y2={seaY + 36}
        stroke="var(--era-accent, currentColor)"
        strokeWidth="1"
      />
      <text
        x={seaXs[HOLE_INDEX] + 22}
        y={seaY + 40}
        className="text-[10px] fill-current font-sans"
      >
        hole = e⁺ (positron)
      </text>

      <text x="44" y="170" className="text-[10px] fill-current font-sans">
        filled sea of negative-energy electrons
      </text>
    </svg>
  );
}
