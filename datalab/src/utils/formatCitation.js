export function formatApaCitation(pub) {
  const year = pub.year ? ` (${pub.year}).` : '.';
  const venue = pub.venue ? ` ${pub.venue}.` : '';
  return `${pub.authors}${year} ${pub.title}.${venue}`.replace(/\s+/g, ' ').trim();
}
