const TYPE_LABELS = {
  article: 'Journal',
  inproceedings: 'Conference',
  conference: 'Conference',
  incollection: 'Conference',
  phdthesis: 'Thesis',
  mastersthesis: 'Thesis',
};

const VENUE_TYPE_LABELS = {
  journal: 'Journal',
  conference: 'Conference',
  workshop: 'Conference',
  thesis: 'Thesis',
};

export const AREA_LABELS = {
  social: 'Social Media Analytics',
  nlp: 'NLP',
  health: 'Public Health',
  graph: 'Graph & Hypergraph Learning',
  ml: 'Machine Learning',
};

const AREA_ORDER = ['social', 'nlp', 'health', 'graph', 'ml'];

function readBracedValue(text, start) {
  if (text[start] !== '{') return null;
  let depth = 0;
  for (let i = start; i < text.length; i += 1) {
    if (text[i] === '{') depth += 1;
    if (text[i] === '}') {
      depth -= 1;
      if (depth === 0) return { value: text.slice(start + 1, i), end: i + 1 };
    }
  }
  return null;
}

function readQuotedValue(text, start) {
  if (text[start] !== '"') return null;
  const end = text.indexOf('"', start + 1);
  if (end === -1) return null;
  return { value: text.slice(start + 1, end), end: end + 1 };
}

function readFieldValue(text, start) {
  let i = start;
  while (i < text.length && /\s/.test(text[i])) i += 1;
  if (text[i] === '{') return readBracedValue(text, i);
  if (text[i] === '"') return readQuotedValue(text, i);
  const match = text.slice(i).match(/^(\d+)/);
  if (match) return { value: match[1], end: i + match[1].length };
  return null;
}

function parseFields(body) {
  const fields = {};
  let i = 0;
  while (i < body.length) {
    const fieldMatch = body.slice(i).match(/^\s*([a-zA-Z]+)\s*=\s*/);
    if (!fieldMatch) break;
    i += fieldMatch.index + fieldMatch[0].length;
    const parsed = readFieldValue(body, i);
    if (!parsed) break;
    fields[fieldMatch[1].toLowerCase()] = parsed.value.trim();
    i = parsed.end;
    while (i < body.length && /[\s,]/.test(body[i])) i += 1;
  }
  return fields;
}

function parseAreaList(value = '') {
  return value
    .split(/[,;]/)
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function areaToTopics(areaIds) {
  return areaIds.map((id) => AREA_LABELS[id] || id);
}

function formatAuthors(authorField) {
  return authorField
    .split(/\s+and\s+/i)
    .map((name) => name.trim().replace(/[{}]/g, ''))
    .filter(Boolean)
    .join(', ');
}

function parseEntry(chunk) {
  const header = chunk.match(/@(\w+)\s*\{\s*([^,\s]+)\s*,/);
  if (!header) return null;
  const rawType = header[1].toLowerCase();
  const key = header[2];
  const bodyStart = header.index + header[0].length;
  const closeBrace = chunk.lastIndexOf('}');
  if (closeBrace <= bodyStart) return null;
  const fields = parseFields(chunk.slice(bodyStart, closeBrace));

  const areaIds = [
    ...parseAreaList(fields.area),
    ...parseAreaList(fields.keywords),
  ];
  const uniqueAreaIds = [...new Set(areaIds)];
  const topics = areaToTopics(uniqueAreaIds);

  const venueType = fields.venuetype?.toLowerCase();
  const type = venueType
    ? (VENUE_TYPE_LABELS[venueType] || TYPE_LABELS[rawType] || 'Other')
    : (TYPE_LABELS[rawType] || 'Other');

  const venue = fields.booktitle || fields.journal || fields.school || '';
  const links = {
    pdf: fields.pdf || '',
    slides: fields.slides || '',
    poster: fields.poster || '',
    code: fields.code || '',
    url: fields.url || fields.doi || '',
  };

  return {
    id: key,
    key,
    rawType,
    type,
    title: fields.title || 'Untitled',
    authors: formatAuthors(fields.author || ''),
    year: fields.year || '',
    venue,
    areas: uniqueAreaIds,
    topics,
    award: fields.award || '',
    links,
    bib: chunk.trim(),
  };
}

export function parseBib(text) {
  const cleaned = text.replace(/%(?:[^\n]*\n?)/g, '');
  const chunks = cleaned.split(/(?=@)/).map((c) => c.trim()).filter((c) => c.startsWith('@'));
  return chunks.map(parseEntry).filter(Boolean).sort((a, b) => Number(b.year) - Number(a.year));
}

export function getUniqueYears(publications) {
  return [...new Set(publications.map((p) => p.year).filter(Boolean))].sort((a, b) => Number(b) - Number(a));
}

export function getUniqueTopics(publications) {
  const used = new Set();
  publications.forEach((p) => p.areas.forEach((id) => used.add(id)));
  return AREA_ORDER.filter((id) => used.has(id)).map((id) => AREA_LABELS[id]);
}

export function publicationMatchesTopic(pub, topicLabel) {
  if (topicLabel === 'All') return true;
  return pub.topics.includes(topicLabel);
}
