/**
 * Blackbody spectrum vs wavelength.
 *
 * The Planck curve rises from zero at small λ, peaks (Wien's displacement
 * law), and falls toward zero at large λ. The classical Rayleigh–Jeans
 * formula B_λ ∝ kT/λ⁴ agrees with Planck at large λ but diverges as
 * λ → 0 — the "ultraviolet catastrophe."
 *
 * The two curves are co-plotted: they overlap on the right (long λ),
 * separate as λ shrinks, and the RJ branch shoots off the top of the
 * frame on the far left.
 */
export function PlanckQuantum() {
  // axes
  const x0 = 60,  x1 = 450;
  const y0 = 200, y1 = 30;

  // sample wavelength grid (arbitrary units, λ scaled into [0.1, 6])
  const N = 120;
  const lamMin = 0.5, lamMax = 6.0;
  const lams = Array.from({ length: N }, (_, i) =>
    lamMin + (lamMax - lamMin) * (i / (N - 1))
  );

  // Planck (h=1, kT=1, c=1; units arbitrary — we only need the shape):
  //   B_λ(λ) ∝ 1 / [ λ^5 ( exp(1/λ) − 1 ) ]
  const planck = (l: number) => 1 / (Math.pow(l, 5) * (Math.exp(1 / l) - 1));
  // Rayleigh–Jeans:  B_λ(λ) ∝ 1 / λ^4
  const rj = (l: number) => 1 / Math.pow(l, 4);

  // normalise both onto the same vertical scale, anchored to the Planck peak
  let pMax = 0;
  for (const l of lams) pMax = Math.max(pMax, planck(l));
  const yScale = (y0 - y1) / pMax * 0.92;

  const plotY = (val: number) => y0 - val * yScale;

  // x mapping
  const plotX = (l: number) => x0 + ((l - lamMin) / (lamMax - lamMin)) * (x1 - x0);

  // build paths
  const planckPath = lams
    .map((l, i) => `${i === 0 ? 'M' : 'L'} ${plotX(l).toFixed(2)} ${plotY(planck(l)).toFixed(2)}`)
    .join(' ');

  // RJ goes off the top at small λ — clip to top of frame
  const rjPoints = lams
    .map((l) => ({ x: plotX(l), y: plotY(rj(l)) }))
    .filter((p) => p.y > y1 - 4); // drop points above frame
  // start path from where the curve enters from above (high y = low on frame)
  const rjPath = rjPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(' ');

  return (
    <svg viewBox="0 0 480 230" className="w-full h-auto" role="img"
         aria-label="Blackbody spectrum: Planck distribution and the Rayleigh–Jeans ultraviolet catastrophe">

      {/* axes */}
      <line x1={x0} y1={y0} x2={x1} y2={y0} stroke="currentColor" strokeWidth="1" />
      <line x1={x0} y1={y0} x2={x0} y2={y1} stroke="currentColor" strokeWidth="1" />
      <polygon points={`${x1},${y0} ${x1 - 6},${y0 - 4} ${x1 - 6},${y0 + 4}`} fill="currentColor" />
      <polygon points={`${x0},${y1} ${x0 - 4},${y1 + 6} ${x0 + 4},${y1 + 6}`} fill="currentColor" />

      <text x={(x0 + x1) / 2} y="222" textAnchor="middle"
            className="text-[10px] fill-current font-sans">
        wavelength λ
      </text>
      <text x="22" y={(y0 + y1) / 2} textAnchor="middle"
            transform={`rotate(-90 22 ${(y0 + y1) / 2})`}
            className="text-[10px] fill-current font-sans">
        spectral radiance B_λ
      </text>

      {/* Rayleigh–Jeans (dashed, classical) */}
      <path d={rjPath} fill="none" stroke="currentColor"
            strokeWidth="1.2" strokeDasharray="4 3" opacity="0.85" />
      {/* "off the top" cue */}
      <text x={x0 + 12} y={y1 + 14} className="text-[10px] fill-current font-sans">
        Rayleigh–Jeans  ↑ ∞  (UV catastrophe)
      </text>

      {/* Planck */}
      <path d={planckPath} fill="none" stroke="var(--era-accent, currentColor)"
            strokeWidth="2" />
      <text x={plotX(2.0) + 6} y={plotY(planck(2.0)) - 8}
            className="text-[10px] fill-current font-sans"
            fill="var(--era-accent, currentColor)">
        Planck (h)
      </text>

      {/* peak marker (Wien) */}
      {(() => {
        // approximate peak λ for kT=1: λ_peak ≈ 0.2014 (from x e^x / (e^x −1) = 5)
        // but with our normalised units the peak is wherever planck() is max
        let lamPeak = lamMin, valPeak = 0;
        for (const l of lams) {
          const v = planck(l);
          if (v > valPeak) { valPeak = v; lamPeak = l; }
        }
        const px = plotX(lamPeak), py = plotY(valPeak);
        return (
          <>
            <line x1={px} y1={py} x2={px} y2={y0}
                  stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4" />
            <text x={px} y={y0 + 14} textAnchor="middle"
                  className="text-[9px] fill-current font-sans" opacity="0.7">
              λ_peak (Wien)
            </text>
          </>
        );
      })()}
    </svg>
  );
}
