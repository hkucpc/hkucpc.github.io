export interface Member {
  name: string;
  handle: string;
  year: string;
}

export interface Team {
  id: string;
  name: string;
  tier: string;
  rating: number;
  members: Member[];
  coach: string;
  focus: string;
  bestResult: string;
  blurb: string;
}

export const currentTeams: Team[] = [
  {
    id: 'monolith',
    name: 'Monolith',
    tier: 'Team A',
    rating: 2894,
    members: [
      { name: 'Chan Ka Ho', handle: 'kaho', year: 'Year 3' },
      { name: 'Wong Tsz Ying', handle: 'tszying', year: 'Year 3' },
      { name: 'Lee Chun Hei', handle: 'chunhei', year: 'Year 2' },
    ],
    coach: 'Dr. Miranda Lau',
    focus: 'Graphs · geometry · implementation',
    bestResult: 'Gold — ICPC Asia East Continent Final 2026',
    blurb:
      'The current flagship squad. Three years of shared contest history, a preference for hard constructive problems, and an unhealthy attachment to custom stress testers.',
  },
  {
    id: 'vector',
    name: 'Vector',
    tier: 'Team B',
    rating: 2641,
    members: [
      { name: 'Ngai Ho Yin', handle: 'hoyin', year: 'Year 3' },
      { name: 'Fung Sze Wing', handle: 'szewing', year: 'Year 2' },
      { name: 'Cheung Lok Yiu', handle: 'lokyiu', year: 'Year 2' },
    ],
    coach: 'Kenji Watanabe',
    focus: 'Data structures · number theory',
    bestResult: 'Gold — ICPC Asia Hong Kong Regional 2025',
    blurb:
      'A team that wins by accumulation: fast starts, low penalties, and a knack for finding the one line of algebra everyone else missed.',
  },
  {
    id: 'parabola',
    name: 'Parabola',
    tier: 'Team C',
    rating: 2418,
    members: [
      { name: 'Kwok Hoi Ching', handle: 'hoiching', year: 'Year 2' },
      { name: 'Tam Wai Lok', handle: 'wailok', year: 'Year 2' },
      { name: 'Yip Sum Yuet', handle: 'sumyuet', year: 'Year 1' },
    ],
    coach: 'Dr. Miranda Lau',
    focus: 'Dynamic programming · flows',
    bestResult: 'Silver — ICPC Asia Hong Kong Regional 2025',
    blurb:
      'Promoted from the development squad after a breakout regional. Young, fast, and learning to love the scoreboard freeze.',
  },
  {
    id: 'recursion',
    name: 'Recursion',
    tier: 'Development',
    rating: 2186,
    members: [
      { name: 'Ho Nga Man', handle: 'ngaman', year: 'Year 2' },
      { name: 'Lai Cheuk Hei', handle: 'cheukhei', year: 'Year 1' },
      { name: 'So Ka Wing', handle: 'kawing', year: 'Year 1' },
    ],
    coach: 'Kenji Watanabe',
    focus: 'Fundamentals · contest craft',
    bestResult: 'Bronze — ICPC Asia Hong Kong Regional 2025',
    blurb:
      'The first step on the ladder for most new members. Weekly virtual contests, heavy upsolving, and a firm rule against copying editorials before trying.',
  },
  {
    id: 'base-case',
    name: 'Base Case',
    tier: 'Development',
    rating: 1974,
    members: [
      { name: 'Ma Tsz Kwan', handle: 'tszkwan', year: 'Year 1' },
      { name: 'Tse Hoi Tung', handle: 'hoitung', year: 'Year 1' },
      { name: 'Yuen Chi Hang', handle: 'chihang', year: 'Year 1' },
    ],
    coach: 'Alumni coaching pool',
    focus: 'Search · greedy · math',
    bestResult: 'Top 30 — ICPC Asia Hong Kong Regional 2025',
    blurb:
      'A first-year squad built from the beginner bootcamp. Competing for experience this season, with an eye on the 2027 team formation test.',
  },
  {
    id: 'null-pointer',
    name: 'Null Pointer',
    tier: 'Novice',
    rating: 1732,
    members: [
      { name: 'Au Yeung King', handle: 'king', year: 'Year 1' },
      { name: 'Choi Yan Lam', handle: 'yanlam', year: 'Year 1' },
      { name: 'Tang Ho Yin', handle: 'hoyin.t', year: 'Year 1' },
    ],
    coach: 'Alumni coaching pool',
    focus: 'Learning · having fun',
    bestResult: 'First contest completed together',
    blurb:
      'Named before anyone checked the pun budget. The novice squad trains on easier sets, asks excellent questions, and has the best attendance record in the community.',
  },
];

export interface ArchiveTeam {
  season: string;
  team: string;
  members: string;
  result: string;
}

export const archive: ArchiveTeam[] = [
  {
    season: '2024–25',
    team: 'Monolith',
    members: 'Chan Ka Ho, Wong Tsz Ying, Lee Chun Hei',
    result: 'Bronze — 48th ICPC World Finals',
  },
  {
    season: '2024–25',
    team: 'Vector',
    members: 'Ngai Ho Yin, Fung Sze Wing, Cheung Lok Yiu',
    result: 'Bronze — ICPC Asia Kunming',
  },
  {
    season: '2024–25',
    team: 'Lattice',
    members: 'Kwok Hoi Ching, Tam Wai Lok, Yip Sum Yuet',
    result: 'Top 20 — ICPC Asia Hong Kong',
  },
  {
    season: '2023–24',
    team: 'Monolith',
    members: 'Chan Ka Ho, Ngai Ho Yin, Wong Tsz Ying',
    result: 'Silver — ICPC Asia East Continent Final',
  },
  {
    season: '2023–24',
    team: 'Vector',
    members: 'Lee Chun Hei, Fung Sze Wing, Cheung Lok Yiu',
    result: 'Silver — ICPC Asia Hong Kong',
  },
  {
    season: '2022–23',
    team: 'Monolith',
    members: 'Chan Ka Ho, Ngai Ho Yin, Wong Tsz Ying',
    result: 'Honourable Mention — 46th ICPC World Finals',
  },
];

export const coaches = [
  {
    name: 'Dr. Miranda Lau',
    role: 'Head coach',
    note: 'Algorithms, geometry and the annual reminder to read the constraints.',
  },
  {
    name: 'Prof. Adrian Cheng',
    role: 'Faculty advisor',
    note: 'Department liaison, contest logistics and occasional problem-setter.',
  },
  {
    name: 'Kenji Watanabe',
    role: 'Alumni coach',
    note: 'ICPC World Finals 2019. Runs the development squad’s virtual contests.',
  },
];
