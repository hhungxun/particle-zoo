/**
 * Fermi four-fermion interaction diagram.
 *
 * A horizontal four-fermion vertex: proton and neutron come in from the left,
 * electron and neutrino go out to the right.  The wiggly vertex represents
 * the point-like weak coupling G_F.
 */
export function FermiBeta() {
  const cx = 200;
  const cy = 120;

  return (
    <svg viewBox="0 0 400 240" className="w-full h-auto" role="img"
         aria-label="Fermi four-fermion vertex: proton and neutron transform into electron and neutrino">
      {/* incoming proton (top-left) */}
      <line x1="40" y1="60" x2={cx - 20} y2={cy - 20}
            stroke="currentColor" strokeWidth="1.5" />
      <text x="30" y="55" textAnchor="end" className="text-[11px] fill-current font-sans">p</text>

      {/* incoming neutron (bottom-left) */}
      <line x1="40" y1="180" x2={cx - 20} y2={cy + 20}
            stroke="currentColor" strokeWidth="1.5" />
      <text x="30" y="195" textAnchor="end" className="text-[11px] fill-current font-sans">n</text>

      {/* outgoing electron (top-right) */}
      <line x1={cx + 20} y1={cy - 20} x2="360" y2="60"
            stroke="var(--era-accent, currentColor)" strokeWidth="1.5" />
      <text x="370" y="55" className="text-[11px] fill-current font-sans">e⁻</text>

      {/* outgoing neutrino (bottom-right) */}
      <line x1={cx + 20} y1={cy + 20} x2="360" y2="180"
            stroke="var(--era-accent, currentColor)" strokeWidth="1.5"
            strokeDasharray="4 3" />
      <text x="370" y="195" className="text-[11px] fill-current font-sans">ν̄ₑ</text>

      {/* four-fermion vertex (wiggly blob) */}
      <circle cx={cx} cy={cy} r="18" fill="none"
              stroke="currentColor" strokeWidth="1.5" />
      <path d={`M ${cx - 12} ${cy} Q ${cx - 6} ${cy - 10} ${cx} ${cy} Q ${cx + 6} ${cy + 10} ${cx + 12} ${cy}`}
            fill="none" stroke="currentColor" strokeWidth="1.5" />

      {/* label */}
      <text x={cx} y={cy + 32} textAnchor="middle"
            className="text-[9px] fill-current font-sans opacity-70">
        G_F  (point-like weak coupling)
      </text>

      {/* arrow of time */}
      <polygon points="380,120 372,116 372,124" fill="currentColor" />
      <text x="385" y="124" className="text-[9px] fill-current font-sans opacity-60">time →</text>
    </svg>
  );
}
