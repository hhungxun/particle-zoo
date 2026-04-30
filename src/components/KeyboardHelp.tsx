import { useEffect } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const SHORTCUTS = [
  { key: 'T', desc: 'Show only theory events' },
  { key: 'E', desc: 'Show only experiment events' },
  { key: 'A', desc: 'Show all events' },
  { key: '?', desc: 'Toggle this help panel' },
  { key: '↑ / ↓', desc: 'Navigate left sidebar (when focused)' },
];

export function KeyboardHelp({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/30 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
    >
      <div
        className="bg-paper border border-rule rounded-xl shadow-xl p-6 w-80 max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-sans text-sm font-semibold text-ink-800 uppercase tracking-wide">
            Keyboard Shortcuts
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-ink-400 hover:text-ink-700 text-lg leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <dl className="space-y-2">
          {SHORTCUTS.map(({ key, desc }) => (
            <div key={key} className="flex items-center justify-between">
              <dt className="font-mono text-xs bg-ink-100 px-1.5 py-0.5 rounded text-ink-700">
                {key}
              </dt>
              <dd className="text-xs text-ink-600 text-right ml-4">{desc}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[10px] text-ink-400">
          Click a lit particle in the Standard Model tracker on the right to jump to its discovery event.
        </p>
      </div>
    </div>
  );
}
