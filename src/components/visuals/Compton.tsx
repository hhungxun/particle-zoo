/**
 * Compton scattering kinematics. Incoming photon (wavelength λ) strikes a
 * stationary electron; outgoing photon leaves at angle θ above the original
 * line of flight with a longer wavelength λ + Δλ; the recoil electron leaves
 * below the line conserving momentum.
 */
export function Compton() {
  const ex = 240;
  const ey = 120;

  // outgoing photon angle, electron recoil angle
  const thetaPhotonDeg = -38;     // up-right
  const phiElectronDeg =  28;     // down-right

  // helper: build a wavy (sinusoidal) path of `n` half-wavelengths along
  // a direction vector, with amplitude `amp` perpendicular to that vector.
  function wavy(
    x0: number, y0: number,
    x1: number, y1: number,
    n: number, amp: number,
  ) {
    const dx = x1 - x0;
    const dy = y1 - y0;
    const L = Math.hypot(dx, dy);
    const ux = dx / L, uy = dy / L;            // along-direction unit
    const nx = -uy, ny = ux;                   // perpendicular unit
    const step = L / n;
    let d = `M ${x0} ${y0}`;
    for (let i = 1; i <= n; i++) {
      // control point lies perpendicular to the segment, alternating sides
      const sign = i % 2 === 0 ? -1 : 1;
      const cx = x0 + ux * step * (i - 0.5) + nx * amp * sign;
      const cy = y0 + uy * step * (i - 0.5) + ny * amp * sign;
      const ex_ = x0 + ux * step * i;
      const ey_ = y0 + uy * step * i;
      d += ` Q ${cx} ${cy} ${ex_} ${ey_}`;
    }
    return d;
  }

  const inStartX = 40, inStartY = ey;
  const r = (deg: number) => (deg * Math.PI) / 180;
  const outLen = 170;
  const outEndX = ex + outLen * Math.cos(r(thetaPhotonDeg));
  const outEndY = ey + outLen * Math.sin(r(thetaPhotonDeg));
  const eLen = 150;
  const eEndX = ex + eLen * Math.cos(r(phiElectronDeg));
  const eEndY = ey + eLen * Math.sin(r(phiElectronDeg));

  return (
    <svg viewBox="0 0 480 240" className="w-full h-auto" role="img"
         aria-label="Compton scattering: photon scatters off stationary electron">

      {/* dotted reference line: original photon direction */}
      <line x1={inStartX} y1={inStartY} x2={ex + 90} y2={inStartY}
            stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="2 3" />

      {/* incoming photon (wavy) */}
      <path
        d={wavy(inStartX, inStartY, ex - 6, ey, 10, 6)}
        fill="none"
        stroke="var(--era-accent, currentColor)"
        strokeWidth="1.5"
      />
      <text x="80" y={ey - 14} className="text-[10px] fill-current font-sans">
        γ  (λ)
      </text>

      {/* electron at rest */}
      <circle cx={ex} cy={ey} r="6" fill="currentColor" />
      <text x={ex - 8} y={ey + 18} textAnchor="end" className="text-[10px] fill-current font-sans">
        e⁻
      </text>

      {/* outgoing photon */}
      <path
        d={wavy(ex + 6, ey - 4, outEndX, outEndY, 9, 6)}
        fill="none"
        stroke="var(--era-accent, currentColor)"
        strokeWidth="1.5"
      />
      <text x={outEndX + 4} y={outEndY - 4} className="text-[10px] fill-current font-sans">
        γ′ (λ + Δλ)
      </text>

      {/* recoil electron */}
      <line x1={ex + 4} y1={ey + 4} x2={eEndX} y2={eEndY}
            stroke="currentColor" strokeWidth="1.5" />
      {(() => {
        // arrow head along the recoil direction
        const ang = r(phiElectronDeg);
        const ax = eEndX, ay = eEndY;
        const back1x = ax - 9 * Math.cos(ang) + 4 * Math.sin(ang);
        const back1y = ay - 9 * Math.sin(ang) - 4 * Math.cos(ang);
        const back2x = ax - 9 * Math.cos(ang) - 4 * Math.sin(ang);
        const back2y = ay - 9 * Math.sin(ang) + 4 * Math.cos(ang);
        return (
          <polygon
            points={`${ax},${ay} ${back1x},${back1y} ${back2x},${back2y}`}
            fill="currentColor"
          />
        );
      })()}
      <text x={eEndX + 4} y={eEndY + 4} className="text-[10px] fill-current font-sans">
        e⁻ recoil
      </text>

      {/* angle θ arc between dotted reference and outgoing photon */}
      <path
        d={`M ${ex + 40} ${ey} A 40 40 0 0 1 ${ex + 40 * Math.cos(r(thetaPhotonDeg))} ${ey + 40 * Math.sin(r(thetaPhotonDeg))}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <text x={ex + 50} y={ey - 16} className="text-[10px] fill-current font-sans">
        θ
      </text>
    </svg>
  );
}
