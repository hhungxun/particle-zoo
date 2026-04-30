/**
 * Schematic of Thomson's cathode-ray tube.
 *
 * Geometry, left to right:
 *   cathode → accelerating anode w/ slit → drift region →
 *   parallel deflection plates (top: +, bottom: −) →
 *   continues to fluorescent screen at far right.
 *
 * The beam travels straight through the slit, enters the plates and is
 * deflected upward (electrons attracted to the positive top plate), then
 * exits the field along a straight line determined by the deflection angle
 * and continues to the screen.
 */
export function ThomsonCRT() {
  // beam y-coordinate (axis of tube)
  const yAxis = 110;

  // plate geometry
  const platesX1 = 200;
  const platesX2 = 280;
  const plateTopY = 88;     // inner face of top plate (beam is below)
  const plateBotY = 132;    // inner face of bottom plate (beam is above)
  const plateThickness = 5;

  // beam exits the plates already deflected; project linearly to screen
  const exitY = 96;         // y at end of plates after upward deflection
  const screenX = 460;
  const screenTopY = 50;
  const screenBotY = 170;
  // linear extrapolation past the plates
  const slope = (exitY - yAxis) / (platesX2 - platesX1);
  const screenHitY = exitY + slope * (screenX - platesX2);

  return (
    <svg
      viewBox="0 0 480 200"
      className="w-full h-auto"
      role="img"
      aria-label="Thomson's cathode-ray tube: cathode, anode, deflection plates, fluorescent screen"
    >
      {/* tube envelope */}
      <rect x="20" y="60" width="430" height="100" rx="50" ry="50"
            fill="none" stroke="currentColor" strokeWidth="1.2" />

      {/* cathode (left) */}
      <line x1="40" y1="86" x2="40" y2="134" stroke="currentColor" strokeWidth="2.5" />
      <text x="40" y="180" textAnchor="middle"
            className="text-[10px] fill-current font-sans">
        cathode
      </text>

      {/* anode w/ slit at axis */}
      <line x1="100" y1="86" x2="100" y2={yAxis - 6}
            stroke="currentColor" strokeWidth="2.5" />
      <line x1="100" y1={yAxis + 6} x2="100" y2="134"
            stroke="currentColor" strokeWidth="2.5" />
      <text x="100" y="180" textAnchor="middle"
            className="text-[10px] fill-current font-sans">
        anode (slit)
      </text>

      {/* deflection plates */}
      <rect x={platesX1} y={plateTopY - plateThickness} width={platesX2 - platesX1}
            height={plateThickness} fill="currentColor" />
      <rect x={platesX1} y={plateBotY} width={platesX2 - platesX1}
            height={plateThickness} fill="currentColor" />
      <text x={(platesX1 + platesX2) / 2} y={plateTopY - 9}
            textAnchor="middle" className="text-[11px] fill-current font-sans">+</text>
      <text x={(platesX1 + platesX2) / 2} y={plateBotY + plateThickness + 12}
            textAnchor="middle" className="text-[11px] fill-current font-sans">−</text>

      {/* beam */}
      {/* segment 1: cathode → anode → into plates, axial */}
      <line x1="42" y1={yAxis} x2={platesX1} y2={yAxis}
            stroke="var(--era-accent, currentColor)" strokeWidth="1.5"
            strokeDasharray="4 3" />
      {/* segment 2: parabolic deflection inside plates (top is +, electron pulled up) */}
      <path
        d={`M ${platesX1} ${yAxis} Q ${(platesX1 + platesX2) / 2} ${yAxis} ${platesX2} ${exitY}`}
        fill="none"
        stroke="var(--era-accent, currentColor)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      {/* segment 3: straight line from plate exit to screen */}
      <line
        x1={platesX2} y1={exitY}
        x2={screenX} y2={screenHitY}
        stroke="var(--era-accent, currentColor)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      {/* spot on screen */}
      <circle cx={screenX} cy={screenHitY} r="3.5"
              fill="var(--era-accent, currentColor)" />

      {/* screen */}
      <line x1={screenX} y1={screenTopY} x2={screenX} y2={screenBotY}
            stroke="currentColor" strokeWidth="2" />
      <text x={screenX} y={screenBotY + 14} textAnchor="middle"
            className="text-[10px] fill-current font-sans">
        screen
      </text>
    </svg>
  );
}
