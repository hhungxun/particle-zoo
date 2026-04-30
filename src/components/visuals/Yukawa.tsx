/**
 * Yukawa potential: nucleon-nucleon attraction via pion exchange.
 *
 * Two nucleons (solid lines) exchange a pion (dashed line).
 * The dashed propagator represents the massive boson; the Yukawa
 * potential falls off exponentially with range ℏ/(m_π c).
 */
export function Yukawa() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-auto" role="img"
         aria-label="Yukawa nucleon-nucleon interaction mediated by pion exchange">
      {/* nucleon 1 (left, solid line) */}
      <line x1="40" y1="100" x2="160" y2="100"
            stroke="currentColor" strokeWidth="2" />
      <text x="30" y="105" textAnchor="end" className="text-[11px] fill-current font-sans">N</text>

      {/* nucleon 2 (right, solid line) */}
      <line x1="240" y1="100" x2="360" y2="100"
            stroke="currentColor" strokeWidth="2" />
      <text x="375" y="105" className="text-[11px] fill-current font-sans">N</text>

      {/* pion exchange (dashed, wiggly) */}
      <path d="M 160 100 Q 200 60 200 100 Q 200 140 240 100"
            fill="none" stroke="var(--era-accent, currentColor)" strokeWidth="1.5"
            strokeDasharray="5 3" />
      <text x="200" y="80" textAnchor="middle"
            className="text-[10px] fill-current font-sans"
            style={{ color: 'var(--era-accent, currentColor)' }}>
        π
      </text>

      {/* range annotation */}
      <line x1="160" y1="150" x2="240" y2="150"
            stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
      <line x1="160" y1="145" x2="160" y2="155" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <line x1="240" y1="145" x2="240" y2="155" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <text x="200" y="168" textAnchor="middle"
            className="text-[9px] fill-current font-sans opacity-60">
        range ~ ℏ / (m_π c) ≈ 1 fm
      </text>
    </svg>
  );
}
