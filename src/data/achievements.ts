export type Category = 'World Finals' | 'Regional';

export interface Achievement {
  year: number;
  contest: string;
  team: string;
  award: 'Gold' | 'Silver' | 'Bronze' | 'Honourable Mention' | 'Finalist';
  rank: string;
  category: Category;
}

export const achievements: Achievement[] = [
  {
    year: 2026,
    contest: '50th ICPC World Finals, Baku',
    team: 'Monolith',
    award: 'Bronze',
    rank: '19th',
    category: 'World Finals',
  },
  {
    year: 2026,
    contest: 'ICPC Asia East Continent Final, Xi’an',
    team: 'Monolith',
    award: 'Gold',
    rank: '4th',
    category: 'Regional',
  },
  {
    year: 2025,
    contest: 'ICPC Asia Hong Kong Regional',
    team: 'Monolith',
    award: 'Gold',
    rank: '1st',
    category: 'Regional',
  },
  {
    year: 2025,
    contest: 'ICPC Asia Hong Kong Regional',
    team: 'Vector',
    award: 'Gold',
    rank: '3rd',
    category: 'Regional',
  },
  {
    year: 2025,
    contest: 'ICPC Asia Nanjing Regional',
    team: 'Monolith',
    award: 'Silver',
    rank: '9th',
    category: 'Regional',
  },
  {
    year: 2025,
    contest: 'ICPC Asia East Continent Final, Shanghai',
    team: 'Vector',
    award: 'Bronze',
    rank: '18th',
    category: 'Regional',
  },
  {
    year: 2025,
    contest: '49th ICPC World Finals, Astana',
    team: 'Monolith',
    award: 'Honourable Mention',
    rank: '41st',
    category: 'World Finals',
  },
  {
    year: 2024,
    contest: 'ICPC Asia Hong Kong Regional',
    team: 'Monolith',
    award: 'Gold',
    rank: '2nd',
    category: 'Regional',
  },
  {
    year: 2024,
    contest: 'ICPC Asia Kunming Regional',
    team: 'Vector',
    award: 'Bronze',
    rank: '14th',
    category: 'Regional',
  },
  {
    year: 2024,
    contest: '48th ICPC World Finals, Luxor',
    team: 'Monolith',
    award: 'Bronze',
    rank: '22nd',
    category: 'World Finals',
  },
  {
    year: 2023,
    contest: 'ICPC Asia East Continent Final',
    team: 'Monolith',
    award: 'Silver',
    rank: '11th',
    category: 'Regional',
  },
  {
    year: 2023,
    contest: 'ICPC Asia Hong Kong Regional',
    team: 'Vector',
    award: 'Silver',
    rank: '5th',
    category: 'Regional',
  },
  {
    year: 2022,
    contest: '46th ICPC World Finals, Dhaka',
    team: 'Monolith',
    award: 'Honourable Mention',
    rank: '38th',
    category: 'World Finals',
  },
  {
    year: 2021,
    contest: '45th ICPC World Finals Invitational, Moscow',
    team: 'Monolith',
    award: 'Honourable Mention',
    rank: '29th',
    category: 'World Finals',
  },
  {
    year: 2021,
    contest: 'ICPC Asia Hong Kong Regional',
    team: 'Monolith',
    award: 'Gold',
    rank: '1st',
    category: 'Regional',
  },
  {
    year: 2019,
    contest: '44th ICPC World Finals, Porto',
    team: 'Monolith',
    award: 'Finalist',
    rank: '52nd',
    category: 'World Finals',
  },
  {
    year: 2019,
    contest: 'ICPC Asia Hong Kong Regional',
    team: 'Monolith',
    award: 'Bronze',
    rank: '7th',
    category: 'Regional',
  },
  {
    year: 2018,
    contest: 'ICPC Asia Hong Kong Regional',
    team: 'Vector',
    award: 'Bronze',
    rank: '9th',
    category: 'Regional',
  },
];

export const achievementStats = [
  { value: '6', label: 'World Finals appearances', note: '2019 — 2026' },
  { value: '2', label: 'World Finals medals', note: 'Bronze, 2024 & 2026' },
  { value: '12+', label: 'Regional medals', note: 'ICPC Asia' },
  { value: '10', label: 'Seasons competing', note: 'Since 2016' },
];
