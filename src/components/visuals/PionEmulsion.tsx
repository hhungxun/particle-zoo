/**
 * Pion decay chain in a photographic emulsion.
 *
 * A heavy track (the pion) enters from the left, slows, and decays into
 * a lighter track (the muon) which in turn decays into an electron.
 * The characteristic "kink" at each decay vertex is what Powell's group
 * identified under the microscope.
 */
export function PionEmulsion() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-auto" role="img"
         aria-label="Pion decay chain in photographic emulsion: π → μ → e">
      {/* emulsion frame */}
      <rect x="20" y="20" width="360" height="160" fill="none"
            stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <text x="30" y="35" className="text-[9px] fill-current font-sans opacity-50">
        photographic emulsion
      </text>

      {/* pion track: heavy, solid */}
      <line x1="40" y1="120" x2="160" y2="120"
            stroke="var(--era-accent, currentColor)" strokeWidth="3" opacity="0.9" />
      <text x="90" y="110" textAnchor="middle"
            className="text-[10px] fill-current font-sans"
            style={{ color: 'var(--era-accent, currentColor)' }}>
        π⁺
      </text>

      {/* first decay vertex */}
      <circle cx="160" cy="120" r="3" fill="var(--era-accent, currentColor)" />

      {/* muon track: medium, solid, slight angle */}
      <line x1="160" y1="120" x2="280" y2="90"
            stroke="currentColor" strokeWidth="1.8" />
      <text x="220" y="95" textAnchor="middle" className="text-[10px] fill-current font-sans">
        μ⁺
      </text>

      {/* second decay vertex */}
      <circle cx="280" cy="90" r="3" fill="currentColor" />

      {/* electron track: thin, light, larger angle */}
      <line x1="280" y1="90" x2="370" y2="50"
            stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <text x="375" y="48" className="text-[10px] fill-current font-sans">e⁺</text>

      {/* neutrinos (invisible, dashed) */}
      <line x1="160" y1="120" x2="240" y2="160"
            stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <text x="245" y="165" className="text-[9px] fill-current font-sans opacity-40">ν_μ</text>

      <line x1="280" y1="90" x2="360" y2="130"
            stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <text x="365" y="138" className="text-[9px] fill-current font-sans opacity-40">ν̄_e</text>

      {/* labels */}
      <text x="160" y="148" textAnchor="middle"
            className="text-[8px] fill-current font-sans opacity-60">
        decay 1
      </text>
      <text x="280" y="118" textAnchor="middle"
            className="text-[8px] fill-current font-sans opacity-60">
        decay 2
      </text>
    </svg>
  );
}
