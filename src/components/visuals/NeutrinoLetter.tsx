/**
 * Stylised opening of Pauli's 1930 letter, plus the beta-decay diagram with
 * the missing neutrino accounting for the continuous spectrum.
 */
export function NeutrinoLetter() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-full max-w-md border border-rule rounded-sm bg-ink-50 p-4 font-serif text-ink-700 italic text-sm leading-relaxed"
        aria-label="Pauli letter excerpt"
      >
        <span className="ui-label not-italic block mb-1">4 December 1930, Zürich</span>
        Liebe Radioaktive Damen und Herren …
        <br />
        <span className="text-ink-500">
          (Dear Radioactive Ladies and Gentlemen …)
        </span>
      </div>

      {/* beta decay diagram */}
      <svg viewBox="0 0 400 160" className="w-full max-w-md h-auto" role="img"
           aria-label="Beta decay producing electron and antineutrino">
        <circle cx="80" cy="80" r="22" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <text x="80" y="84" textAnchor="middle" className="text-[12px] fill-current font-sans">n</text>

        <line x1="105" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="200,80 192,76 192,84" fill="currentColor" />

        <circle cx="225" cy="80" r="22" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <text x="225" y="84" textAnchor="middle" className="text-[12px] fill-current font-sans">p</text>

        {/* electron */}
        <line x1="247" y1="78" x2="370" y2="40" stroke="var(--era-accent, currentColor)" strokeWidth="1.5" />
        <text x="378" y="40" className="text-[10px] fill-current font-sans">e⁻</text>

        {/* antineutrino (dashed) */}
        <line x1="247" y1="82" x2="370" y2="120" stroke="var(--era-accent, currentColor)"
              strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="378" y="124" className="text-[10px] fill-current font-sans">ν̄ₑ</text>
      </svg>
    </div>
  );
}
