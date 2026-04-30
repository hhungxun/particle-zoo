import { useEffect, useState } from 'react';

/**
 * Slim progress bar fixed to the top of the viewport, tracks document
 * scroll. Color matches the active era via CSS var.
 */
export function ReadingProgress({ activeAccent }: { activeAccent?: string }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      setPct(max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct * 100)}
      className="fixed top-0 left-0 right-0 z-30 h-[3px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${pct * 100}%`,
          background: activeAccent ?? '#9c5a2c',
        }}
      />
    </div>
  );
}
