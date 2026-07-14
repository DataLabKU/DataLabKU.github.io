import { useMemo } from 'react';
import publicationsBib from '../data/publications.bib?raw';
import { parseBib } from '../utils/parseBib';

export default function usePublications() {
  const publications = useMemo(() => parseBib(publicationsBib), []);

  return { publications, loading: false, error: null };
}
