import type { Award } from './achievements';
import { teamSeasons, type Member, type Team } from './teams';

export interface MemberHonor {
  text: string;
  award: Award;
}

export interface MemberAppearance {
  season: string;
  team: Team;
  honors: MemberHonor[];
}

export interface MemberProfile {
  slug: string;
  name: string;
  program?: string;
  handle?: string;
  appearances: MemberAppearance[];
  honors: MemberHonor[];
  medals: number;
  teammates: Member[];
}

const medals = new Set<Award>(['Gold', 'Silver', 'Bronze', 'Champion']);

function parseAward(honor: string): Award {
  if (/Gold Medal/i.test(honor)) return 'Gold';
  if (/Silver Medal/i.test(honor)) return 'Silver';
  if (/Bronze Medal/i.test(honor)) return 'Bronze';
  if (/Champion/i.test(honor)) return 'Champion';
  if (/Honou?rable Mention/i.test(honor)) return 'Honourable Mention';
  return 'Position';
}

function toHonor(text: string): MemberHonor {
  return { text, award: parseAward(text) };
}

function buildProfiles(): MemberProfile[] {
  const profiles = new Map<string, MemberProfile>();

  // teamSeasons is ordered newest-first, so the first program/handle we see
  // is the most recent one on record.
  for (const team of teamSeasons) {
    for (const member of team.members) {
      let profile = profiles.get(member.slug);

      if (!profile) {
        profile = {
          slug: member.slug,
          name: member.name,
          program: member.program,
          handle: member.handle,
          appearances: [],
          honors: [],
          medals: 0,
          teammates: [],
        };
        profiles.set(member.slug, profile);
      }

      profile.handle ??= member.handle;
      profile.program ??= member.program;
      profile.appearances.push({
        season: team.season,
        team,
        honors: team.honors.map(toHonor),
      });
    }
  }

  for (const profile of profiles.values()) {
    profile.honors = profile.appearances.flatMap((appearance) => appearance.honors);
    profile.medals = profile.honors.filter((honor) => medals.has(honor.award)).length;

    const teammates = new Map<string, Member>();
    for (const appearance of profile.appearances) {
      for (const member of appearance.team.members) {
        if (member.slug !== profile.slug) teammates.set(member.slug, member);
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
