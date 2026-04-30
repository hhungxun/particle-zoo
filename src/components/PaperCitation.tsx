import type { PaperCitation as PaperCitationT } from '../types';

interface Props {
  citation: PaperCitationT;
}

/**
 * Renders one paper citation in editorial style. Shows a [VERIFY] flag when
 * `verified` is false so reviewers know to check a source manually.
 */
export function PaperCitation({ citation }: Props) {
  const {
    authors,
    title,
    journal,
    volume,
    pages,
    year,
    doi,
    arxiv,
    url,
    abstractParaphrase,
    notes,
    verified,
  } = citation;

  const linkHref =
    url ??
    (doi ? `https://doi.org/${doi}` : undefined) ??
    (arxiv ? `https://arxiv.org/abs/${arxiv}` : undefined);

  return (
    <div className="font-serif text-[0.95rem] text-ink-700">
      <p className="leading-relaxed">
        <span className="font-medium">{authors}</span>{' '}
        <span className="italic">&ldquo;{title}.&rdquo;</span>{' '}
        <span>{journal}</span>
        {volume ? <span> {volume}</span> : null}
        {pages ? <span> ({year}), {pages}.</span> : <span> ({year}).</span>}
        {doi ? (
          <>
            {' '}
            <a href={`https://doi.org/${doi}`} target="_blank" rel="noreferrer">
              doi:{doi}
            </a>
            .
          </>
        ) : null}
        {arxiv ? (
          <>
            {' '}
            <a href={`https://arxiv.org/abs/${arxiv}`} target="_blank" rel="noreferrer">
              arXiv:{arxiv}
            </a>
            .
          </>
        ) : null}
        {!verified && (
          <span
            className="ml-2 text-[0.75rem] font-mono uppercase tracking-wider text-red-700"
            title="Bibliographic detail not independently verified"
          >
            [VERIFY]
          </span>
        )}
      </p>
      {abstractParaphrase ? (
        <p className="mt-3 border-l-2 border-rule pl-4 text-ink-600 italic">
          {abstractParaphrase}
        </p>
      ) : null}
      {notes ? (
        <p className="mt-2 text-sm text-ink-500">
          <span className="ui-label mr-2">note</span>
          {notes}
        </p>
      ) : null}
      {linkHref ? (
        <p className="mt-2 text-sm">
          <a href={linkHref} target="_blank" rel="noreferrer">
            Read the paper →
          </a>
        </p>
      ) : null}
    </div>
  );
}
