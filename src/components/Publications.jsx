import { useMemo, useState } from 'react';
import usePublications from '../hooks/usePublications';
import { getUniqueTopics, getUniqueYears, publicationMatchesTopic } from '../utils/parseBib';
import { formatApaCitation } from '../utils/formatCitation';

const TYPES = ['All', 'Journal', 'Conference', 'Thesis'];
const PREVIEW_COUNT = 5;

const LINK_BUTTONS = [
  { key: 'pdf', label: 'PDF' },
  { key: 'slides', label: 'Slides' },
  { key: 'poster', label: 'Poster' },
  { key: 'code', label: 'Code' },
  { key: 'url', label: 'Link' },
];

function FilterChip({ label, active, onClick }) {
  return (
    <button type="button" className={`pub-chip${active ? ' is-active' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default function Publications() {
  const { publications, loading, error } = usePublications();
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('All');
  const [type, setType] = useState('All');
  const [year, setYear] = useState('All');
  const [awardOnly, setAwardOnly] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const topics = useMemo(() => ['All', ...getUniqueTopics(publications)], [publications]);
  const years = useMemo(() => ['All', ...getUniqueYears(publications)], [publications]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((pub) => {
      if (!publicationMatchesTopic(pub, topic)) return false;
      if (type !== 'All' && pub.type !== type) return false;
      if (year !== 'All' && pub.year !== year) return false;
      if (awardOnly && !pub.award) return false;
      if (!q) return true;
      const haystack = [pub.title, pub.authors, pub.venue, pub.year, pub.type, ...pub.topics]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [publications, query, topic, type, year, awardOnly]);

  const preview = useMemo(() => publications.slice(0, PREVIEW_COUNT), [publications]);
  const visible = showAll ? filtered : preview;
  const canExpand = publications.length > PREVIEW_COUNT;

  const clearFilters = () => {
    setQuery('');
    setTopic('All');
    setType('All');
    setYear('All');
    setAwardOnly(false);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    clearFilters();
  };

  const handleCite = async (pub) => {
    const citation = formatApaCitation(pub);
    try {
      await navigator.clipboard.writeText(citation);
      setCopiedId(pub.id);
      window.setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <section id="publications" className="section--light">
      <div className="pub-header">
        <span className="section-label">Research Output</span>
        <div className="pub-header-row">
          <h2 className="section-title pub-page-title">Publications</h2>
          <p className="pub-results-count">
            {loading
              ? 'Loading…'
              : showAll
                ? `${filtered.length} of ${publications.length} results`
                : `Showing ${Math.min(PREVIEW_COUNT, publications.length)} most recent`}
          </p>
        </div>
      </div>

      {showAll && (
      <div className="pub-panel">
        <div className="pub-search-row">
          <div className="pub-search-wrap">
            <i className="ti ti-search" aria-hidden="true" />
            <input
              type="search"
              className="pub-search-input"
              placeholder="Search titles, authors, venues…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search publications"
            />
          </div>
          <button type="button" className="pub-clear-btn" onClick={clearFilters}>
            Clear
          </button>
        </div>

        {topics.length > 1 && (
          <div className="pub-filter-group">
            <span className="pub-filter-label">Research areas</span>
            <div className="pub-chip-row">
              {topics.map((item) => (
                <FilterChip
                  key={item}
                  label={item}
                  active={topic === item}
                  onClick={() => setTopic(item)}
                />
              ))}
              <FilterChip
                label="Award-winning"
                active={awardOnly}
                onClick={() => setAwardOnly((value) => !value)}
              />
            </div>
          </div>
        )}

        <div className="pub-filter-group">
          <span className="pub-filter-label">Type</span>
          <div className="pub-chip-row">
            {TYPES.map((item) => (
              <FilterChip
                key={item}
                label={item}
                active={type === item}
                onClick={() => setType(item)}
              />
            ))}
          </div>
        </div>

        {years.length > 1 && (
          <div className="pub-filter-group">
            <span className="pub-filter-label">Year</span>
            <div className="pub-chip-row">
              {years.map((item) => (
                <FilterChip
                  key={item}
                  label={item}
                  active={year === item}
                  onClick={() => setYear(item)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      )}

      {error && <p className="pub-status pub-status--error">{error}</p>}
      {loading && <p className="pub-status">Loading publications…</p>}

      {!loading && !error && (
        <div className="pub-list">
          {showAll && filtered.length === 0 ? (
            <p className="pub-status">No publications match your filters.</p>
          ) : (
            visible.map((pub) => (
              <article key={pub.id} className="pub-card">
                <div className="pub-card-main">
                  <div className="pub-card-title-row">
                    <h3 className="pub-card-title">{pub.title}</h3>
                    {pub.award && <span className="pub-award">{pub.award}</span>}
                  </div>
                  <p className="pub-card-authors">{pub.authors}</p>
                  <p className="pub-card-meta">
                    {pub.venue}
                    {pub.venue && ' · '}
                    {pub.type}
                    {pub.year && ` · ${pub.year}`}
                  </p>
                </div>
                <div className="pub-card-actions">
                  {LINK_BUTTONS.map(({ key, label }) =>
                    pub.links[key] ? (
                      <a
                        key={key}
                        href={pub.links[key]}
                        className="pub-link-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                      </a>
                    ) : null
                  )}
                  <button
                    type="button"
                    className="pub-cite-btn"
                    onClick={() => handleCite(pub)}
                  >
                    {copiedId === pub.id ? 'Copied' : 'Cite'}
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      )}

      {!loading && !error && canExpand && (
        <div className="pub-expand-row">
          {showAll ? (
            <button type="button" className="pub-expand-btn" onClick={handleShowLess}>
              Show fewer
            </button>
          ) : (
            <button type="button" className="pub-expand-btn" onClick={handleShowAll}>
              View all publications ({publications.length})
            </button>
          )}
        </div>
      )}
    </section>
  );
}
