import { teamSeasons } from './teams';

export interface TeamRef {
  id: string;
  season: string;
  name: string;
  hasPage: boolean;
}

const legacyTeams: TeamRef[] = [];

export const teamRefs: TeamRef[] = [
  ...teamSeasons.map((team) => ({
    id: team.id,
    season: team.season,
    name: team.name,
    hasPage: true,
  })),
  ...legacyTeams,
];

export const teamById = new Map(teamRefs.map((team) => [team.id, team]));

export function getTeamRef(id: string | null): TeamRef | undefined {
  return id ? teamById.get(id) : undefined;
}
