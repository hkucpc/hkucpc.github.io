/** Format a season start year as an academic-year label, e.g. 2026 → 2026–27. */
export function formatSeason(season: string): string {
  const start = Number.parseInt(season, 10);

  if (!Number.isFinite(start)) return season;

  return `${start}–${String((start + 1) % 100).padStart(2, '0')}`;
}
