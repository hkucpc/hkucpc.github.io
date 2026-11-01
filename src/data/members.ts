import type { Award } from './achievements';
import { awardFromHonor, honorDescription, positionRank } from '../lib/honors';
import { getLatestNote, getPerson, type Person } from './people';
import { seasonMembersBySeason, teamSeasons, type Team } from './teams';

export interface MemberHonor {
  text: string;
  award: Award;
  rank?: string;
}

export interface MemberAppearance {
  season: string;
  team: Team;
  honors: MemberHonor[];
}

export interface MemberProfile {
  slug: string;
  name: string;
  note?: string;
  appearances: MemberAppearance[];
  seasonMemberSeasons: string[];
  honors: MemberHonor[];
  medals: number;
  teammates: Person[];
}

const medals = new Set<Award>(['Gold', 'Silver', 'Bronze', 'Champion']);

function toHonor(text: string): MemberHonor {
  return {
    text: honorDescription(text),
    award: awardFromHonor(text),
    rank: positionRank(text),
  };
}

function buildProfiles(): MemberProfile[] {
  const profiles = new Map<string, MemberProfile>();

  const ensureProfile = (slug: string): MemberProfile => {
    let profile = profiles.get(slug);
    if (!profile) {
      const person = getPerson(slug);
      profile = {
        slug,
        name: person?.name ?? slug,
        note: person ? getLatestNote(person) : undefined,
        appearances: [],
        seasonMemberSeasons: [],
        honors: [],
        medals: 0,
        teammates: [],
      };
      profiles.set(slug, profile);
    }
    return profile;
  };

  for (const team of teamSeasons) {
    for (const slug of team.members) {
      ensureProfile(slug).appearances.push({
        season: team.season,
        team,
        honors: team.honors.map(toHonor),
      });
    }
  }

  for (const [season, members] of Object.entries(seasonMembersBySeason)) {
    for (const slug of members) {
      const profile = ensureProfile(slug);
      if (!profile.seasonMemberSeasons.includes(season)) {
        profile.seasonMemberSeasons.push(season);
      }
    }
  }

  for (const profile of profiles.values()) {
    profile.seasonMemberSeasons.sort((a, b) => Number(b) - Number(a));
    profile.honors = profile.appearances.flatMap((appearance) => appearance.honors);
    profile.medals = profile.honors.filter((honor) => medals.has(honor.award)).length;

    const teammates = new Map<string, Person>();
    for (const appearance of profile.appearances) {
      for (const slug of appearance.team.members) {
        if (slug === profile.slug) continue;
        const person = getPerson(slug);
        if (person) teammates.set(person.slug, person);
      }
    }
    profile.teammates = [...teammates.values()].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }

  return [...profiles.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export const memberProfiles = buildProfiles();

export function getMember(slug: string): MemberProfile | undefined {
  return memberProfiles.find((profile) => profile.slug === slug);
}
