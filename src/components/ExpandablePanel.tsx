import { useState, useId, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  label: string;          // collapsed label, e.g. "Read the paper context"
  openLabel?: string;     // optional alternate label when open
  children: ReactNode;
  initialOpen?: boolean;
}

export function ExpandablePanel({ label, openLabel, children, initialOpen = false }: Props) {
  const [open, setOpen] = useState(initialOpen);
  const id = useId();

  return (
    <div className="my-6 border-l-2 border-rule pl-4">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="ui-label flex items-center gap-2 hover:text-ink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm"
      >
        <span
          aria-hidden
          className="inline-block transition-transform duration-200"
          style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          ▸
        </span>
        <span>{open && openLabel ? openLabel : label}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pt-3 pb-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
