import type { ReactNode } from 'react';
import type { VisualKey } from '../../types';

type FigureKey = Exclude<
  VisualKey,
  | 'thomson-crt'
  | 'planck-quantum'
  | 'photoelectric'
  | 'rutherford'
  | 'compton'
  | 'dirac-eq'
  | 'neutrino-letter'
  | 'positron-track'
  | 'mass-energy'
>;

interface Props {
  visualKey: FigureKey;
}

const FIGURE_LABELS: Record<FigureKey, string> = {
  'fermi-beta': 'Fermi point interaction for beta decay',
  yukawa: 'Yukawa meson exchange as a finite-range nuclear force',
  'muon-track': 'Muon cloud-chamber track passing through a lead absorber',
  'pion-emulsion': 'Pion decay chain in photographic emulsion',
  strangeness: 'Associated production of strange particles',
  'reines-cowan': 'Reines-Cowan inverse beta decay coincidence',
  wu: 'Wu cobalt-60 parity violation experiment',
  'goldhaber-helicity': 'Goldhaber neutrino helicity measurement',
  'glashow-electroweak': 'Glashow electroweak gauge mixing',
  'eightfold-way': 'Eightfold Way baryon decuplet',
  'quark-tensor': 'Quark color antisymmetry',
  'cp-klong': 'Neutral kaon mixing and rare CP-violating decay',
  'mexican-hat': 'Higgs Mexican-hat potential',
  'partons-dis': 'Deep inelastic scattering sees partons inside the proton',
  renormalizability: 'Renormalization absorbs infinities into measured parameters',
  'asymptotic-freedom': 'QCD coupling weakens at short distance',
  gargamelle: 'Gargamelle neutral-current event',
  'jpsi-peak': 'Narrow J psi resonance in an invariant-mass scan',
  'tau-missing-energy': 'Tau discovery with missing energy',
  'gluon-3jet': 'Three-jet event from gluon radiation',
  'ua1-event': 'UA1 proton-antiproton collision producing a weak boson',
  'top-event': 'Top quark pair event with b jets and leptons',
  'sk-oscillation': 'Super-Kamiokande zenith-angle neutrino oscillation',
  donut: 'DONUT tau neutrino emulsion kink',
  'higgs-diphoton': 'Higgs boson diphoton mass peak',
  'standard-model-open-questions': 'Standard Model map with open questions',
};

function accent() {
  return 'var(--era-accent, currentColor)';
}

function Frame({ visualKey, children }: Props & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 640 360"
      className="w-full h-auto overflow-visible"
      role="img"
      aria-label={FIGURE_LABELS[visualKey]}
    >
      <rect
        x="14"
        y="14"
        width="612"
        height="332"
        rx="10"
        fill="currentColor"
        opacity="0.035"
      />
      <rect
        x="14"
        y="14"
        width="612"
        height="332"
        rx="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.22"
      />
      {children}
    </svg>
  );
}

function Caption({ x = 42, y = 54, children }: { x?: number; y?: number; children: ReactNode }) {
  return (
    <text x={x} y={y} className="fill-current font-sans text-[13px] font-medium">
      {children}
    </text>
  );
}

function Note({ x, y, children, anchor = 'start' }: { x: number; y: number; children: ReactNode; anchor?: 'start' | 'middle' | 'end' }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      className="fill-current font-sans text-[11px]"
      opacity="0.58"
    >
      {children}
    </text>
  );
}

function ParticleLabel({ x, y, children, anchor = 'middle' }: { x: number; y: number; children: ReactNode; anchor?: 'start' | 'middle' | 'end' }) {
  return (
    <text x={x} y={y} textAnchor={anchor} className="fill-current font-sans text-[13px]">
      {children}
    </text>
  );
}

function ArrowLine({
  x1,
  y1,
  x2,
  y2,
  color = 'currentColor',
  width = 2,
  dash,
  opacity = 1,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
  dash?: string;
  opacity?: number;
}) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const size = 9;
  const p1x = x2 - size * Math.cos(angle - Math.PI / 7);
  const p1y = y2 - size * Math.sin(angle - Math.PI / 7);
  const p2x = x2 - size * Math.cos(angle + Math.PI / 7);
  const p2y = y2 - size * Math.sin(angle + Math.PI / 7);

  return (
    <g opacity={opacity}>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeDasharray={dash}
      />
      <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
    </g>
  );
}

function Blob({ cx, cy, r = 16, label }: { cx: number; cy: number; r?: number; label?: ReactNode }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="currentColor" opacity="0.05" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth="1.6" />
      {label ? (
        <text x={cx} y={cy + 4} textAnchor="middle" className="fill-current font-sans text-[11px]">
          {label}
        </text>
      ) : null}
    </g>
  );
}

function FermiBeta() {
  return (
    <Frame visualKey="fermi-beta">
      <Caption>Point-like weak interaction</Caption>
      <ArrowLine x1={76} y1={104} x2={286} y2={156} width={2.2} />
      <ArrowLine x1={76} y1={256} x2={286} y2={204} width={2.2} />
      <ArrowLine x1={354} y1={156} x2={564} y2={104} color={accent()} width={2.2} />
      <ArrowLine x1={354} y1={204} x2={564} y2={256} color={accent()} width={2.2} dash="7 7" />
      <Blob cx={320} cy={180} r={24} label="G_F" />
      <path d="M 306 180 C 311 168, 317 168, 322 180 S 333 192, 338 180" fill="none" stroke="currentColor" strokeWidth="2" />
      <ParticleLabel x={66} y={96} anchor="end">p</ParticleLabel>
      <ParticleLabel x={66} y={264} anchor="end">n</ParticleLabel>
      <ParticleLabel x={578} y={96} anchor="start">e<tspan baselineShift="super" fontSize="9">-</tspan></ParticleLabel>
      <ParticleLabel x={578} y={264} anchor="start">ν<tspan baselineShift="super" fontSize="9">-</tspan><tspan baselineShift="sub" fontSize="9">e</tspan></ParticleLabel>
      <Note x={320} y={232} anchor="middle">contact vertex, no intermediate W yet</Note>
      <Note x={540} y={180} anchor="middle">time</Note>
      <ArrowLine x1={510} y1={182} x2={586} y2={182} width={1.2} opacity={0.45} />
    </Frame>
  );
}

function Yukawa() {
  return (
    <Frame visualKey="yukawa">
      <Caption>Finite range from massive exchange</Caption>
      <circle cx={130} cy={180} r={34} fill="currentColor" opacity="0.06" />
      <circle cx={510} cy={180} r={34} fill="currentColor" opacity="0.06" />
      <circle cx={130} cy={180} r={28} fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx={510} cy={180} r={28} fill="none" stroke="currentColor" strokeWidth="2" />
      <ParticleLabel x={130} y={185}>N</ParticleLabel>
      <ParticleLabel x={510} y={185}>N</ParticleLabel>
      <path d="M 165 180 C 218 124, 282 236, 335 180 S 442 124, 475 180" fill="none" stroke={accent()} strokeWidth="2.8" />
      <ParticleLabel x={320} y={126}>π</ParticleLabel>
      <Note x={320} y={236} anchor="middle">force falls as e<tspan baselineShift="super" fontSize="8">-mr</tspan> / r</Note>
      <line x1={130} y1={270} x2={510} y2={270} stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <line x1={130} y1={264} x2={130} y2={276} stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <line x1={510} y1={264} x2={510} y2={276} stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <Note x={320} y={296} anchor="middle">range ≈ ℏ / m<tspan baselineShift="sub" fontSize="8">π</tspan>c</Note>
    </Frame>
  );
}

function MuonTrack() {
  return (
    <Frame visualKey="muon-track">
      <Caption>Penetrating cosmic-ray track</Caption>
      <rect x="64" y="92" width="512" height="36" fill="currentColor" opacity="0.18" />
      <Note x={552} y={116} anchor="end">lead absorber</Note>
      <path d="M 82 286 C 164 270, 224 226, 284 178 C 348 128, 430 94, 548 70" fill="none" stroke={accent()} strokeWidth="3" strokeLinecap="round" />
      <ArrowLine x1={508} y1={78} x2={548} y2={70} color={accent()} width={3} />
      <path d="M 82 286 C 164 270, 224 226, 284 178" fill="none" stroke="currentColor" strokeWidth="6" opacity="0.08" strokeLinecap="round" />
      <ParticleLabel x={560} y={64} anchor="start">μ</ParticleLabel>
      <Note x={96} y={66}>curvature changes only slightly after the plate</Note>
      <Note x={92} y={318}>B ⊙</Note>
    </Frame>
  );
}

function PionEmulsion() {
  return (
    <Frame visualKey="pion-emulsion">
      <Caption>Emulsion decay chain</Caption>
      <g opacity="0.16">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1={54} y1={82 + i * 22} x2={586} y2={82 + i * 22} stroke="currentColor" strokeWidth="1" />
        ))}
      </g>
      <line x1={82} y1={210} x2={238} y2={210} stroke={accent()} strokeWidth="5" strokeLinecap="round" />
      <circle cx={238} cy={210} r={5} fill={accent()} />
      <line x1={238} y1={210} x2={404} y2={150} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx={404} cy={150} r={4} fill="currentColor" />
      <line x1={404} y1={150} x2={544} y2={92} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
      <ArrowLine x1={238} y1={210} x2={332} y2={268} width={1.3} dash="6 6" opacity={0.4} />
      <ArrowLine x1={404} y1={150} x2={502} y2={214} width={1.3} dash="6 6" opacity={0.4} />
      <ParticleLabel x={150} y={194}>π<tspan baselineShift="super" fontSize="9">+</tspan></ParticleLabel>
      <ParticleLabel x={326} y={144}>μ<tspan baselineShift="super" fontSize="9">+</tspan></ParticleLabel>
      <ParticleLabel x={552} y={88} anchor="start">e<tspan baselineShift="super" fontSize="9">+</tspan></ParticleLabel>
      <Note x={238} y={238} anchor="middle">kink</Note>
      <Note x={404} y={178} anchor="middle">kink</Note>
    </Frame>
  );
}

function Strangeness() {
  return (
    <Frame visualKey="strangeness">
      <Caption>Associated production conserves strangeness</Caption>
      <ArrowLine x1={70} y1={128} x2={282} y2={170} width={2.4} />
      <ArrowLine x1={70} y1={232} x2={282} y2={190} width={2.4} />
      <Blob cx={320} cy={180} r={22} label="S=0" />
      <ArrowLine x1={358} y1={168} x2={558} y2={112} color={accent()} width={2.4} />
      <ArrowLine x1={358} y1={192} x2={558} y2={248} color={accent()} width={2.4} />
      <ParticleLabel x={62} y={120} anchor="end">π<tspan baselineShift="super" fontSize="9">-</tspan></ParticleLabel>
      <ParticleLabel x={62} y={240} anchor="end">p</ParticleLabel>
      <ParticleLabel x={572} y={108} anchor="start">K<tspan baselineShift="super" fontSize="9">0</tspan>  S=+1</ParticleLabel>
      <ParticleLabel x={572} y={252} anchor="start">Λ<tspan baselineShift="super" fontSize="9">0</tspan>  S=-1</ParticleLabel>
      <Note x={320} y={248} anchor="middle">strong production makes strange particles in balancing pairs</Note>
    </Frame>
  );
}

function ReinesCowan() {
  return (
    <Frame visualKey="reines-cowan">
      <Caption>Delayed coincidence signature</Caption>
      <ArrowLine x1={70} y1={178} x2={164} y2={178} color={accent()} width={2.2} />
      <ParticleLabel x={64} y={170} anchor="end">ν<tspan baselineShift="super" fontSize="9">-</tspan><tspan baselineShift="sub" fontSize="9">e</tspan></ParticleLabel>
      <circle cx={200} cy={178} r={24} fill="currentColor" opacity="0.06" />
      <ParticleLabel x={200} y={183}>p</ParticleLabel>
      <ArrowLine x1={226} y1={164} x2={340} y2={104} color={accent()} width={2.2} />
      <ArrowLine x1={226} y1={192} x2={340} y2={252} width={2.2} />
      <ParticleLabel x={356} y={104} anchor="start">e<tspan baselineShift="super" fontSize="9">+</tspan></ParticleLabel>
      <ParticleLabel x={356} y={256} anchor="start">n</ParticleLabel>
      <path d="M 374 104 L 424 82 M 374 104 L 424 126" stroke={accent()} strokeWidth="1.8" strokeLinecap="round" />
      <ParticleLabel x={438} y={84} anchor="start">511 keV γ</ParticleLabel>
      <ParticleLabel x={438} y={130} anchor="start">511 keV γ</ParticleLabel>
      <rect x={448} y={224} width={68} height={48} rx={8} fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1.3" />
      <ParticleLabel x={482} y={253}>Cd</ParticleLabel>
      <ArrowLine x1={370} y1={252} x2={448} y2={248} width={1.8} />
      <path d="M 518 248 C 542 230, 562 230, 586 248" fill="none" stroke={accent()} strokeWidth="1.8" />
      <Note x={482} y={306} anchor="middle">prompt annihilation, then delayed neutron capture</Note>
    </Frame>
  );
}

function Wu() {
  return (
    <Frame visualKey="wu">
      <Caption>Mirror symmetry fails in beta decay</Caption>
      <rect x={86} y={102} width={168} height={156} rx={8} fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="1.2" />
      <rect x={386} y={102} width={168} height={156} rx={8} fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="1.2" />
      <ParticleLabel x={170} y={146}>Co-60</ParticleLabel>
      <ParticleLabel x={470} y={146}>mirror</ParticleLabel>
      <ArrowLine x1={170} y1={206} x2={170} y2={154} width={2} />
      <ArrowLine x1={470} y1={206} x2={470} y2={154} width={2} />
      <ArrowLine x1={170} y1={184} x2={106} y2={224} color={accent()} width={3} />
      <ArrowLine x1={170} y1={184} x2={126} y2={212} color={accent()} width={2} opacity={0.55} />
      <ArrowLine x1={470} y1={184} x2={534} y2={224} color={accent()} width={3} opacity={0.28} />
      <Note x={170} y={284} anchor="middle">observed: electrons prefer one side</Note>
      <Note x={470} y={284} anchor="middle">mirror distribution not equivalent</Note>
      <line x1={320} y1={92} x2={320} y2={272} stroke="currentColor" strokeWidth="1" opacity="0.2" />
    </Frame>
  );
}

function GoldhaberHelicity() {
  return (
    <Frame visualKey="goldhaber-helicity">
      <Caption>Neutrino handedness</Caption>
      <circle cx={184} cy={180} r={38} fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="1.5" />
      <ParticleLabel x={184} y={185}>Eu</ParticleLabel>
      <ArrowLine x1={222} y1={180} x2={382} y2={180} color={accent()} width={2.4} />
      <ParticleLabel x={302} y={166}>ν</ParticleLabel>
      <path d="M 396 180 C 422 132, 490 132, 516 180 C 490 228, 422 228, 396 180 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 414 180 C 444 158, 468 158, 500 180" fill="none" stroke={accent()} strokeWidth="2.3" />
      <ArrowLine x1={462} y1={158} x2={500} y2={180} color={accent()} width={2.3} />
      <ParticleLabel x={456} y={254}>γ polarization</ParticleLabel>
      <Note x={320} y={292} anchor="middle">spin is opposite the neutrino momentum: left-handed ν</Note>
    </Frame>
  );
}

function GlashowElectroweak() {
  return (
    <Frame visualKey="glashow-electroweak">
      <Caption>Gauge fields mix into photon and Z</Caption>
      <rect x={70} y={112} width={172} height={136} rx={10} fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1.3" />
      <rect x={398} y={112} width={172} height={136} rx={10} fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1.3" />
      <ParticleLabel x={156} y={166}>W<tspan baselineShift="super" fontSize="9">3</tspan></ParticleLabel>
      <ParticleLabel x={156} y={210}>B</ParticleLabel>
      <ArrowLine x1={246} y1={160} x2={394} y2={138} color={accent()} width={2.2} />
      <ArrowLine x1={246} y1={204} x2={394} y2={222} color={accent()} width={2.2} />
      <path d="M 302 136 C 328 172, 328 200, 302 238" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <ParticleLabel x={484} y={152}>γ</ParticleLabel>
      <ParticleLabel x={484} y={226}>Z<tspan baselineShift="super" fontSize="9">0</tspan></ParticleLabel>
      <Note x={320} y={286} anchor="middle">weak mixing angle θ<tspan baselineShift="sub" fontSize="8">W</tspan> rotates the neutral fields</Note>
    </Frame>
  );
}

function EightfoldWay() {
  const points = [
    [320, 74, 'Δ'],
    [226, 130, 'Σ*'],
    [414, 130, 'Σ*'],
    [162, 194, 'Ξ*'],
    [320, 194, 'Ξ*'],
    [478, 194, 'Ξ*'],
    [112, 272, 'Ω⁻'],
    [252, 272, ''],
    [388, 272, ''],
    [528, 272, ''],
  ] as const;
  return (
    <Frame visualKey="eightfold-way">
      <Caption>Baryon decuplet predicts a missing corner</Caption>
      <path d="M 320 74 L 112 272 L 528 272 Z M 226 130 L 252 272 M 414 130 L 388 272 M 162 194 L 478 194" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.22" />
      {points.map(([x, y, label], i) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r={i === 6 ? 14 : 10} fill={i === 6 ? accent() : 'currentColor'} opacity={i === 6 ? 0.22 : 0.12} />
          <circle cx={x} cy={y} r={i === 6 ? 14 : 10} fill="none" stroke={i === 6 ? accent() : 'currentColor'} strokeWidth="1.5" />
          {label ? <ParticleLabel x={x} y={y - 18}>{label}</ParticleLabel> : null}
        </g>
      ))}
      <Note x={112} y={310} anchor="middle">predicted Ω⁻</Note>
      <Note x={548} y={88} anchor="end">charge →</Note>
      <Note x={92} y={88}>strangeness ↓</Note>
    </Frame>
  );
}

function QuarkTensor() {
  return (
    <Frame visualKey="quark-tensor">
      <Caption>Color makes three identical quarks possible</Caption>
      <circle cx={218} cy={172} r={42} fill="#c0392b" opacity="0.14" stroke="#c0392b" strokeWidth="2" />
      <circle cx={320} cy={172} r={42} fill="#2878b5" opacity="0.14" stroke="#2878b5" strokeWidth="2" />
      <circle cx={422} cy={172} r={42} fill="#2d8f57" opacity="0.14" stroke="#2d8f57" strokeWidth="2" />
      <ParticleLabel x={218} y={177}>u<tspan baselineShift="super" fontSize="9">r</tspan></ParticleLabel>
      <ParticleLabel x={320} y={177}>u<tspan baselineShift="super" fontSize="9">g</tspan></ParticleLabel>
      <ParticleLabel x={422} y={177}>u<tspan baselineShift="super" fontSize="9">b</tspan></ParticleLabel>
      <path d="M 218 220 C 260 276, 380 276, 422 220" fill="none" stroke={accent()} strokeWidth="2.4" />
      <ParticleLabel x={320} y={292}>ε<tspan baselineShift="sub" fontSize="9">rgb</tspan> u<tspan baselineShift="super" fontSize="9">r</tspan>u<tspan baselineShift="super" fontSize="9">g</tspan>u<tspan baselineShift="super" fontSize="9">b</tspan></ParticleLabel>
      <Note x={320} y={92} anchor="middle">antisymmetric color wavefunction restores Fermi statistics</Note>
    </Frame>
  );
}

function CPKlong() {
  return (
    <Frame visualKey="cp-klong">
      <Caption>Rare decay reveals CP violation</Caption>
      <ParticleLabel x={98} y={184}>K<tspan baselineShift="super" fontSize="9">0</tspan></ParticleLabel>
      <ParticleLabel x={98} y={234}>K<tspan baselineShift="super" fontSize="9">0</tspan><tspan baselineShift="super" fontSize="9">-</tspan></ParticleLabel>
      <path d="M 138 178 C 190 126, 248 126, 300 178" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M 138 228 C 190 280, 248 280, 300 228" fill="none" stroke="currentColor" strokeWidth="2" />
      <Blob cx={326} cy={203} r={28} label="K_L" />
      <ArrowLine x1={356} y1={194} x2={510} y2={144} color={accent()} width={2.2} />
      <ArrowLine x1={356} y1={212} x2={510} y2={262} color={accent()} width={2.2} />
      <ParticleLabel x={526} y={144} anchor="start">π<tspan baselineShift="super" fontSize="9">+</tspan></ParticleLabel>
      <ParticleLabel x={526} y={266} anchor="start">π<tspan baselineShift="super" fontSize="9">-</tspan></ParticleLabel>
      <Note x={430} y={110} anchor="middle">forbidden if CP were exact</Note>
      <Note x={320} y={304} anchor="middle">small impurity in K<tspan baselineShift="sub" fontSize="8">L</tspan> changes the symmetry story</Note>
    </Frame>
  );
}

function MexicanHat() {
  return (
    <Frame visualKey="mexican-hat">
      <Caption>Vacuum chooses a nonzero field value</Caption>
      <path d="M 112 250 C 170 104, 250 102, 302 204 C 320 238, 320 238, 338 204 C 390 102, 470 104, 528 250" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <path d="M 170 250 C 230 300, 410 300, 470 250" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
      <circle cx={246} cy={158} r={8} fill={accent()} />
      <line x1={320} y1={244} x2={320} y2={82} stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <line x1={90} y1={250} x2={550} y2={250} stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <ParticleLabel x={320} y={74}>V(φ)</ParticleLabel>
      <ParticleLabel x={554} y={254} anchor="start">φ</ParticleLabel>
      <Note x={246} y={132} anchor="middle">chosen vacuum</Note>
      <Note x={320} y={310} anchor="middle">gauge bosons gain mass around this vacuum</Note>
    </Frame>
  );
}

function PartonsDIS() {
  return (
    <Frame visualKey="partons-dis">
      <Caption>Hard scattering inside the proton</Caption>
      <ArrowLine x1={76} y1={102} x2={250} y2={164} color={accent()} width={2.4} />
      <ArrowLine x1={250} y1={164} x2={86} y2={260} color={accent()} width={2.4} />
      <path d="M 250 164 C 306 112, 398 112, 454 164 C 398 216, 306 216, 250 164 Z" fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1.6" />
      {[310, 358, 406].map((x, i) => (
        <circle key={x} cx={x} cy={i === 1 ? 166 : 148 + i * 18} r={14} fill={accent()} opacity="0.18" stroke={accent()} strokeWidth="1.5" />
      ))}
      <ArrowLine x1={404} y1={164} x2={548} y2={110} width={2} />
      <ArrowLine x1={404} y1={164} x2={560} y2={206} width={1.6} opacity={0.7} />
      <ArrowLine x1={404} y1={164} x2={520} y2={274} width={1.6} opacity={0.45} />
      <ParticleLabel x={68} y={98} anchor="end">e</ParticleLabel>
      <ParticleLabel x={70} y={268} anchor="end">e′</ParticleLabel>
      <ParticleLabel x={354} y={246}>proton</ParticleLabel>
      <Note x={320} y={304} anchor="middle">large-angle electron recoil implies point-like constituents</Note>
    </Frame>
  );
}

function Renormalizability() {
  return (
    <Frame visualKey="renormalizability">
      <Caption>Prediction survives the loop expansion</Caption>
      <rect x={78} y={126} width={154} height={108} rx={10} fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1.4" />
      <ParticleLabel x={155} y={174}>bare theory</ParticleLabel>
      <ParticleLabel x={155} y={202}>∞</ParticleLabel>
      <ArrowLine x1={238} y1={180} x2={318} y2={180} color={accent()} width={2.2} />
      <circle cx={374} cy={180} r={44} fill="none" stroke={accent()} strokeWidth="2.4" />
      <path d="M 340 180 C 362 140, 386 140, 408 180 S 386 220, 340 180" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.65" />
      <ArrowLine x1={426} y1={180} x2={520} y2={180} color={accent()} width={2.2} />
      <rect x={526} y={126} width={54} height={108} rx={10} fill="currentColor" opacity="0.05" stroke="currentColor" strokeWidth="1.4" />
      <ParticleLabel x={553} y={184}>finite</ParticleLabel>
      <Note x={374} y={256} anchor="middle">counterterms absorb divergences into measured g, v, masses</Note>
    </Frame>
  );
}

function AsymptoticFreedom() {
  return (
    <Frame visualKey="asymptotic-freedom">
      <Caption>The strong force weakens at short distance</Caption>
      <line x1={104} y1={276} x2={548} y2={276} stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <line x1={104} y1={276} x2={104} y2={80} stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <path d="M 120 104 C 192 112, 262 142, 334 190 C 404 236, 476 266, 538 272" fill="none" stroke={accent()} strokeWidth="3" />
      <ParticleLabel x={82} y={86} anchor="end">α<tspan baselineShift="sub" fontSize="9">s</tspan></ParticleLabel>
      <ParticleLabel x={552} y={292} anchor="start">distance</ParticleLabel>
      <Note x={176} y={132}>short distance</Note>
      <Note x={428} y={248}>long distance / confinement</Note>
      <circle cx={176} cy={118} r={18} fill={accent()} opacity="0.1" stroke={accent()} strokeWidth="1.5" />
      <circle cx={466} cy={258} r={30} fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="1.5" />
    </Frame>
  );
}

function Gargamelle() {
  return (
    <Frame visualKey="gargamelle">
      <Caption>Neutral current: neutrino in, neutrino out</Caption>
      <rect x={86} y={92} width={468} height={176} rx={18} fill="currentColor" opacity="0.045" stroke="currentColor" strokeWidth="1.5" />
      <Note x={320} y={122} anchor="middle">bubble chamber</Note>
      <ArrowLine x1={100} y1={186} x2={250} y2={170} color={accent()} width={2.4} dash="8 6" />
      <ArrowLine x1={250} y1={170} x2={410} y2={150} color={accent()} width={2.4} dash="8 6" />
      <Blob cx={250} cy={170} r={12} />
      <path d="M 250 170 C 306 220, 390 238, 502 230" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M 258 178 C 318 206, 374 196, 464 184" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <ParticleLabel x={90} y={176} anchor="end">ν</ParticleLabel>
      <ParticleLabel x={424} y={146} anchor="start">ν</ParticleLabel>
      <Note x={368} y={272} anchor="middle">hadronic recoil, no charged lepton</Note>
    </Frame>
  );
}

function JpsiPeak() {
  return (
    <Frame visualKey="jpsi-peak">
      <Caption>A resonance too narrow to ignore</Caption>
      <line x1={92} y1={276} x2={558} y2={276} stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <line x1={92} y1={276} x2={92} y2={84} stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <path d="M 112 264 C 176 258, 230 250, 282 246 C 300 244, 308 92, 320 90 C 334 92, 340 242, 360 246 C 418 252, 486 260, 540 266" fill="none" stroke={accent()} strokeWidth="3" />
      <line x1={320} y1={90} x2={320} y2={276} stroke="currentColor" strokeWidth="1" strokeDasharray="5 6" opacity="0.35" />
      <ParticleLabel x={320} y={74}>J/ψ</ParticleLabel>
      <ParticleLabel x={552} y={296} anchor="end">mass</ParticleLabel>
      <ParticleLabel x={74} y={90} anchor="end">events</ParticleLabel>
      <Note x={320} y={312} anchor="middle">3.1 GeV charm-anticharm state</Note>
    </Frame>
  );
}

function TauMissingEnergy() {
  return (
    <Frame visualKey="tau-missing-energy">
      <Caption>Two leptons, missing energy</Caption>
      <ArrowLine x1={120} y1={180} x2={280} y2={180} width={2.1} />
      <ArrowLine x1={520} y1={180} x2={360} y2={180} width={2.1} />
      <Blob cx={320} cy={180} r={22} label="E" />
      <ArrowLine x1={342} y1={166} x2={512} y2={102} color={accent()} width={2.4} />
      <ArrowLine x1={342} y1={194} x2={508} y2={262} color={accent()} width={2.4} />
      <ArrowLine x1={300} y1={202} x2={210} y2={286} width={1.6} dash="7 7" opacity={0.42} />
      <ArrowLine x1={340} y1={202} x2={430} y2={286} width={1.6} dash="7 7" opacity={0.42} />
      <ParticleLabel x={104} y={172} anchor="end">e<tspan baselineShift="super" fontSize="9">+</tspan></ParticleLabel>
      <ParticleLabel x={536} y={172} anchor="start">e<tspan baselineShift="super" fontSize="9">-</tspan></ParticleLabel>
      <ParticleLabel x={526} y={102} anchor="start">e / μ</ParticleLabel>
      <ParticleLabel x={522} y={266} anchor="start">opposite lepton</ParticleLabel>
      <Note x={320} y={316} anchor="middle">unseen neutrinos carry away momentum</Note>
    </Frame>
  );
}

function Gluon3Jet() {
  return (
    <Frame visualKey="gluon-3jet">
      <Caption>Gluon appears as a third jet</Caption>
      <Blob cx={320} cy={180} r={18} label="e⁺e⁻" />
      <path d="M 338 176 C 412 112, 484 82, 560 58" fill="none" stroke={accent()} strokeWidth="12" strokeLinecap="round" opacity="0.22" />
      <path d="M 338 188 C 426 206, 500 244, 574 300" fill="none" stroke={accent()} strokeWidth="12" strokeLinecap="round" opacity="0.22" />
      <path d="M 304 194 C 250 248, 176 282, 84 304" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" opacity="0.14" />
      <ArrowLine x1={338} y1={176} x2={552} y2={60} color={accent()} width={2.2} />
      <ArrowLine x1={338} y1={188} x2={564} y2={296} color={accent()} width={2.2} />
      <ArrowLine x1={304} y1={194} x2={90} y2={302} width={2.2} />
      <ParticleLabel x={560} y={50}>q</ParticleLabel>
      <ParticleLabel x={584} y={314}>q<tspan baselineShift="super" fontSize="9">-</tspan></ParticleLabel>
      <ParticleLabel x={74} y={316}>g</ParticleLabel>
      <Note x={320} y={92} anchor="middle">planar three-jet topology at PETRA</Note>
    </Frame>
  );
}

function UA1Event() {
  return (
    <Frame visualKey="ua1-event">
      <Caption>Collider event with a massive weak boson</Caption>
      <line x1={86} y1={180} x2={554} y2={180} stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <ArrowLine x1={98} y1={180} x2={278} y2={180} width={2.2} />
      <ArrowLine x1={542} y1={180} x2={362} y2={180} width={2.2} />
      <Blob cx={320} cy={180} r={24} label="p p̄" />
      <path d="M 336 164 C 404 88, 492 74, 558 104" fill="none" stroke={accent()} strokeWidth="2.8" strokeLinecap="round" />
      <ArrowLine x1={336} y1={164} x2={558} y2={104} color={accent()} width={2.8} />
      <ArrowLine x1={336} y1={196} x2={508} y2={284} width={1.8} dash="7 7" opacity={0.45} />
      <path d="M 306 204 C 242 260, 168 284, 92 276" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      <ParticleLabel x={568} y={104} anchor="start">e / μ</ParticleLabel>
      <ParticleLabel x={518} y={300} anchor="start">missing ν</ParticleLabel>
      <Note x={320} y={318} anchor="middle">high-p<tspan baselineShift="sub" fontSize="8">T</tspan> lepton plus missing transverse energy</Note>
    </Frame>
  );
}

function TopEvent() {
  return (
    <Frame visualKey="top-event">
      <Caption>Top pair decay topology</Caption>
      <Blob cx={320} cy={176} r={20} label="t t̄" />
      <ArrowLine x1={302} y1={168} x2={168} y2={94} color={accent()} width={2.2} />
      <ArrowLine x1={302} y1={184} x2={150} y2={256} width={2.2} />
      <ArrowLine x1={338} y1={168} x2={482} y2={94} color={accent()} width={2.2} />
      <ArrowLine x1={338} y1={184} x2={502} y2={256} width={2.2} />
      <circle cx={168} cy={94} r={18} fill={accent()} opacity="0.14" stroke={accent()} strokeWidth="1.6" />
      <circle cx={482} cy={94} r={18} fill={accent()} opacity="0.14" stroke={accent()} strokeWidth="1.6" />
      <ParticleLabel x={168} y={99}>b</ParticleLabel>
      <ParticleLabel x={482} y={99}>b̄</ParticleLabel>
      <ParticleLabel x={138} y={274}>W<tspan baselineShift="super" fontSize="9">+</tspan></ParticleLabel>
      <ParticleLabel x={516} y={274}>W<tspan baselineShift="super" fontSize="9">-</tspan></ParticleLabel>
      <path d="M 150 256 C 108 224, 90 184, 94 138" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
      <path d="M 502 256 C 548 224, 566 184, 560 138" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
      <Note x={320} y={316} anchor="middle">large mass inferred from b jets, W decays, and event kinematics</Note>
    </Frame>
  );
}

function SKOscillation() {
  return (
    <Frame visualKey="sk-oscillation">
      <Caption>Atmospheric neutrinos change flavor</Caption>
      <circle cx={320} cy={190} r={116} fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 220 248 C 250 300, 390 300, 420 248" fill="none" stroke={accent()} strokeWidth="2.5" />
      <path d="M 220 132 C 250 80, 390 80, 420 132" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.45" />
      <ArrowLine x1={320} y1={70} x2={320} y2={160} color={accent()} width={2.2} />
      <ArrowLine x1={320} y1={310} x2={320} y2={220} width={2.2} dash="7 7" opacity={0.55} />
      <ParticleLabel x={338} y={116}>ν<tspan baselineShift="sub" fontSize="9">μ</tspan></ParticleLabel>
      <ParticleLabel x={338} y={286}>ν<tspan baselineShift="sub" fontSize="9">τ</tspan>?</ParticleLabel>
      <Note x={162} y={118}>downward: short path</Note>
      <Note x={462} y={286}>upward: Earth-diameter path</Note>
      <Note x={320} y={340} anchor="middle">deficit depends on zenith angle</Note>
    </Frame>
  );
}

function Donut() {
  return (
    <Frame visualKey="donut">
      <Caption>Tau neutrino makes a visible kink</Caption>
      <g opacity="0.14">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1={78} y1={86 + i * 24} x2={562} y2={86 + i * 24} stroke="currentColor" strokeWidth="1" />
        ))}
      </g>
      <ArrowLine x1={84} y1={208} x2={272} y2={188} color={accent()} width={2.4} dash="8 6" />
      <Blob cx={288} cy={186} r={12} />
      <line x1={288} y1={186} x2={394} y2={138} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx={394} cy={138} r={5} fill="currentColor" />
      <line x1={394} y1={138} x2={532} y2={92} stroke={accent()} strokeWidth="2.2" strokeLinecap="round" />
      <ParticleLabel x={72} y={202} anchor="end">ν<tspan baselineShift="sub" fontSize="9">τ</tspan></ParticleLabel>
      <ParticleLabel x={344} y={128}>τ</ParticleLabel>
      <Note x={394} y={164} anchor="middle">decay kink</Note>
      <Note x={320} y={302} anchor="middle">micron-scale emulsion tracking identifies τ production</Note>
    </Frame>
  );
}

function HiggsDiphoton() {
  return (
    <Frame visualKey="higgs-diphoton">
      <Caption>Diphoton mass peak</Caption>
      <line x1={92} y1={276} x2={558} y2={276} stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <line x1={92} y1={276} x2={92} y2={84} stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <path d="M 106 258 C 170 248, 228 236, 282 218 C 300 212, 306 166, 320 150 C 336 166, 342 212, 362 218 C 426 238, 486 250, 544 260" fill="none" stroke={accent()} strokeWidth="3" />
      <path d="M 112 258 C 214 238, 426 238, 540 260" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.4" strokeDasharray="6 7" />
      <line x1={320} y1={150} x2={320} y2={276} stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <ParticleLabel x={320} y={132}>125 GeV</ParticleLabel>
      <ParticleLabel x={552} y={296} anchor="end">m<tspan baselineShift="sub" fontSize="9">γγ</tspan></ParticleLabel>
      <ParticleLabel x={72} y={90} anchor="end">events</ParticleLabel>
      <Note x={320} y={316} anchor="middle">small excess over a smooth background</Note>
    </Frame>
  );
}

function StandardModelOpenQuestions() {
  const cells = [
    [116, 112, 'u', '#c0392b'], [176, 112, 'c', '#c0392b'], [236, 112, 't', '#c0392b'],
    [116, 166, 'd', '#2878b5'], [176, 166, 's', '#2878b5'], [236, 166, 'b', '#2878b5'],
    [354, 112, 'e', '#7b4f91'], [414, 112, 'μ', '#7b4f91'], [474, 112, 'τ', '#7b4f91'],
    [354, 166, 'νe', '#7b4f91'], [414, 166, 'νμ', '#7b4f91'], [474, 166, 'ντ', '#7b4f91'],
  ] as const;
  return (
    <Frame visualKey="standard-model-open-questions">
      <Caption>Complete, but not final</Caption>
      {cells.map(([x, y, label, color]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 22} y={y - 22} width={44} height={44} rx={7} fill={color} opacity="0.11" stroke={color} strokeWidth="1.4" />
          <ParticleLabel x={x} y={y + 4}>{label}</ParticleLabel>
        </g>
      ))}
      <rect x={112} y={242} width={60} height={44} rx={7} fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1.4" />
      <rect x={204} y={242} width={60} height={44} rx={7} fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1.4" />
      <rect x={296} y={242} width={60} height={44} rx={7} fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1.4" />
      <rect x={388} y={242} width={60} height={44} rx={7} fill={accent()} opacity="0.14" stroke={accent()} strokeWidth="1.4" />
      <ParticleLabel x={142} y={270}>g</ParticleLabel>
      <ParticleLabel x={234} y={270}>γ</ParticleLabel>
      <ParticleLabel x={326} y={270}>W/Z</ParticleLabel>
      <ParticleLabel x={418} y={270}>H</ParticleLabel>
      <path d="M 514 104 L 560 104 M 537 82 L 537 126 M 518 230 L 562 274 M 562 230 L 518 274" stroke={accent()} strokeWidth="2.2" strokeLinecap="round" />
      <Note x={538} y={154} anchor="middle">gravity?</Note>
      <Note x={540} y={310} anchor="middle">dark sector?</Note>
    </Frame>
  );
}

export function PostEraOneFigure({ visualKey }: Props) {
  switch (visualKey) {
    case 'fermi-beta': return <FermiBeta />;
    case 'yukawa': return <Yukawa />;
    case 'muon-track': return <MuonTrack />;
    case 'pion-emulsion': return <PionEmulsion />;
    case 'strangeness': return <Strangeness />;
    case 'reines-cowan': return <ReinesCowan />;
    case 'wu': return <Wu />;
    case 'goldhaber-helicity': return <GoldhaberHelicity />;
    case 'glashow-electroweak': return <GlashowElectroweak />;
    case 'eightfold-way': return <EightfoldWay />;
    case 'quark-tensor': return <QuarkTensor />;
    case 'cp-klong': return <CPKlong />;
    case 'mexican-hat': return <MexicanHat />;
    case 'partons-dis': return <PartonsDIS />;
    case 'renormalizability': return <Renormalizability />;
    case 'asymptotic-freedom': return <AsymptoticFreedom />;
    case 'gargamelle': return <Gargamelle />;
    case 'jpsi-peak': return <JpsiPeak />;
    case 'tau-missing-energy': return <TauMissingEnergy />;
    case 'gluon-3jet': return <Gluon3Jet />;
    case 'ua1-event': return <UA1Event />;
    case 'top-event': return <TopEvent />;
    case 'sk-oscillation': return <SKOscillation />;
    case 'donut': return <Donut />;
    case 'higgs-diphoton': return <HiggsDiphoton />;
    case 'standard-model-open-questions': return <StandardModelOpenQuestions />;
  }
}
