import { achievements } from '../src/data/achievements';
import { posts } from '../src/data/news';
import { people } from '../src/data/people';
import { teamById } from '../src/data/teamRegistry';
import {
  coachBySeason,
  coordinatorsBySeason,
  seasonMembersBySeason,
  teamSeasons,
} from '../src/data/teams';

const errors: string[] = [];
const warnings: string[] = [];

const fail = (message: string) => errors.push(message);
const warn = (message: string) => warnings.push(message);

const yearPattern = /^\d{4}$/;
const datePattern = /^\d{4}(?:-\d{2}-\d{2})?$/;
const rankPattern = /^\d+(?:st|nd|rd|th)$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const categories = new Set(['World Finals', 'Regional', 'Local', 'CCPC', 'Other']);
const awards = new Set([
  'Gold',
  'Silver',
  'Bronze',
  'Champion',
  'Highest Honours',
  'High Honours',
  'First Prize',
  'Honours',
  'Honourable Mention',
  'Position',
]);

const isRealDate = (value: string) => {
  if (value.length === 4) return true;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
};

// Teams and people ---------------------------------------------------------
const teamIds = new Set<string>();

for (const team of teamSeasons) {
  if (!team.id) fail('Team with empty id');
  if (teamIds.has(team.id)) fail(`Duplicate team id: ${team.id}`);
  teamIds.add(team.id);

  if (!yearPattern.test(team.season)) {
    fail(`Team ${team.id}: invalid season "${team.season}"`);
  }

  const roster = new Set<string>();
  for (const slug of team.members) {
    if (roster.has(slug)) fail(`Team ${team.id}: duplicate member "${slug}"`);
    roster.add(slug);
    if (!people[slug]) fail(`Team ${team.id}: unknown person "${slug}"`);
  }
}

for (const [season, slugs] of Object.entries(seasonMembersBySeason)) {
  if (!yearPattern.test(season)) fail(`seasonMembersBySeason: invalid season "${season}"`);
  for (const slug of slugs) {
    if (!people[slug]) fail(`seasonMembersBySeason ${season}: unknown person "${slug}"`);
  }
}

for (const [season, slug] of Object.entries(coachBySeason)) {
  if (!yearPattern.test(season)) fail(`coachBySeason: invalid season "${season}"`);
  if (!people[slug]) fail(`coachBySeason ${season}: unknown person "${slug}"`);
}

for (const [season, slug] of Object.entries(coordinatorsBySeason)) {
  if (!yearPattern.test(season)) fail(`coordinatorsBySeason: invalid season "${season}"`);
  if (!people[slug]) fail(`coordinatorsBySeason ${season}: unknown person "${slug}"`);
}

for (const [slug, person] of Object.entries(people)) {
  if (person.slug !== slug) fail(`people["${slug}"]: slug is "${person.slug}"`);
  if (!slugPattern.test(slug)) fail(`Person "${slug}": invalid slug format`);
  if (!person.name.trim()) fail(`Person "${slug}": empty name`);
  for (const season of Object.keys(person.notes)) {
    if (!yearPattern.test(season)) fail(`Person "${slug}": invalid note season "${season}"`);
  }
}

// Achievements -------------------------------------------------------------
const contestDates = new Map<string, Set<string>>();
const contestRows = new Map<string, number>();

for (const [index, item] of achievements.entries()) {
  const label = `Achievement #${index + 1} (${item.year} ${item.contest})`;

  if (!Number.isInteger(item.year) || item.year < 1900 || item.year > 2100) {
    fail(`${label}: invalid year`);
  }
  if (!item.contest.trim()) fail(`${label}: empty contest`);
  if (!categories.has(item.category)) fail(`${label}: invalid category "${item.category}"`);
  if (!awards.has(item.award)) fail(`${label}: invalid award "${item.award}"`);

  if (item.rank !== '—' && !rankPattern.test(item.rank)) {
    fail(`${label}: invalid rank "${item.rank}"`);
  }

  if (item.date) {
    if (!datePattern.test(item.date) || !isRealDate(item.date)) {
      fail(`${label}: invalid date "${item.date}"`);
    }
  }

  if (item.teamId !== null) {
    if (!teamById.has(item.teamId)) fail(`${label}: unknown teamId "${item.teamId}"`);
  }

  const key = `${item.year}|${item.contest}`;
  contestRows.set(key, (contestRows.get(key) ?? 0) + 1);
  if (item.date) {
    const dates = contestDates.get(key) ?? new Set<string>();
    dates.add(item.date);
    contestDates.set(key, dates);
  }
}

for (const [key, dates] of contestDates) {
  if (dates.size > 1) {
    fail(`Contest "${key}" has conflicting dates: ${[...dates].join(', ')}`);
  }
}

for (const [key, count] of contestRows) {
  if (count > 1 && !contestDates.has(key)) {
    warn(`Contest "${key}" has ${count} rows but no date`);
  }
}

// News ---------------------------------------------------------------------
const postSlugs = new Set<string>();
let featuredCount = 0;

for (const post of posts) {
  if (postSlugs.has(post.slug)) fail(`Duplicate news slug: ${post.slug}`);
  postSlugs.add(post.slug);
  if (!slugPattern.test(post.slug)) fail(`News "${post.slug}": invalid slug format`);
  if (!isRealDate(post.date) || post.date.length !== 10) {
    fail(`News "${post.slug}": invalid date "${post.date}"`);
  }
  if (!post.displayDate.trim()) fail(`News "${post.slug}": empty displayDate`);
  if (post.tags.length === 0) fail(`News "${post.slug}": no tags`);
  if (post.body.length === 0) fail(`News "${post.slug}": empty body`);
  if (post.featured) featuredCount += 1;
}

if (featuredCount > 1) {
  fail(`News has ${featuredCount} featured posts; expected at most one`);
}

// Summary ------------------------------------------------------------------
console.log(
  `Checked ${teamSeasons.length} teams, ${Object.keys(people).length} people, ` +
    `${achievements.length} achievements and ${posts.length} news posts.`,
);

for (const message of warnings) console.warn(`warning: ${message}`);

if (errors.length > 0) {
  for (const message of errors) console.error(`error: ${message}`);
  console.error(`\nData validation failed with ${errors.length} error(s).`);
  process.exitCode = 1;
} else {
  console.log('Data validation passed.');
}
