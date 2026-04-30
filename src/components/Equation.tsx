import { useEffect, useRef } from 'react';
import katex from 'katex';

interface Props {
  /** LaTeX source. Display math by default. */
  tex: string;
  display?: boolean;
}

export function Equation({ tex, display = true }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '';
    try {
      katex.render(tex, ref.current, {
        displayMode: display,
        throwOnError: false,
        strict: 'ignore',
      });
    } catch {
      if (ref.current) ref.current.textContent = tex;
    }
  }, [tex, display]);
  return (
    <span
      ref={ref}
      className={display ? 'block my-3 text-center text-ink-800' : 'inline'}
    />
  );
}
