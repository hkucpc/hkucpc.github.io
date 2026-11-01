import { memberProfiles } from './members';
import { getNote, getPerson, type PersonLink } from './people';
import { coachBySeason, coordinatorsBySeason } from './teams';

export interface StaffRole {
  season: string;
  role: string;
  note: string;
}

export interface StaffProfile {
  slug: string;
  name: string;
  email?: string;
  links: PersonLink[];
  roles: StaffRole[];
  playerSlug?: string;
}

function buildProfiles(): StaffProfile[] {
  const profiles = new Map<string, StaffProfile>();

  const add = (slug: string, season: string, role: string) => {
    const person = getPerson(slug);
    let profile = profiles.get(slug);

    if (!profile) {
      profile = {
        slug,
        name: person?.name ?? slug,
        email: person?.email,
        links: person?.links ?? [],
        roles: [],
      };
      profiles.set(slug, profile);
    }

    profile.roles.push({
      season,
      role,
      note: person ? getNote(person, season) ?? role : role,
    });
  };

  const years = Object.keys(coachBySeason).sort((a, b) => Number(b) - Number(a));

  for (const year of years) {
    const coach = coachBySeason[year];
    if (coach) add(coach, year, 'Coach');

    const coordinator = coordinatorsBySeason[year];
    if (coordinator) add(coordinator, year, 'Coordinator');
  }

  for (const profile of profiles.values()) {
    profile.roles.sort((a, b) => Number(b.season) - Number(a.season));
    profile.playerSlug = memberProfiles.find(
      (member) => member.name === profile.name,
    )?.slug;
  }

  return [...profiles.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export const staffProfiles = buildProfiles();

export function getStaff(slug: string): StaffProfile | undefined {
  return staffProfiles.find((profile) => profile.slug === slug);
}
