/** Photoelectric effect: photons hit metal surface, electrons fly off. */
export function Photoelectric() {
  return (
    <svg viewBox="0 0 480 200" className="w-full h-auto" role="img"
         aria-label="Photoelectric effect schematic">
      {/* metal slab */}
      <rect x="280" y="40" width="40" height="140" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <text x="300" y="195" textAnchor="middle" className="text-[10px] fill-current font-sans">
        metal
      </text>

      {/* incoming photons (3 wavy lines) */}
      {[60, 100, 140].map((y, i) => (
        <g key={i}>
          <path d={`M 40 ${y} q 8 -6 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0`}
                fill="none" stroke="var(--era-accent, currentColor)" strokeWidth="1.2" />
          <text x="40" y={y - 6} className="text-[9px] fill-current font-sans">hν</text>
        </g>
      ))}

      {/* ejected electrons */}
      {[60, 100, 140].map((y, i) => (
        <g key={`e${i}`}>
          <line x1="320" y1={y} x2={420 - i * 10} y2={y - 20 + i * 10}
                stroke="currentColor" strokeWidth="1.2" />
          <circle cx={420 - i * 10} cy={y - 20 + i * 10} r="3" fill="currentColor" />
        </g>
      ))}
      <text x="420" y="180" textAnchor="end" className="text-[10px] fill-current font-sans">
        e⁻  K = hν − φ
      </text>
    </svg>
  );
}
