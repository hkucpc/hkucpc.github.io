export interface Member {
  name: string;
  program: string;
  handle?: string;
}

export interface Team {
  id: string;
  name: string;
  alternate?: string;
  coach: string;
  members: Member[];
  honors: string[];
}

export interface ArchiveTeam {
  season: string;
  team: string;
  members: string;
  result: string;
}

export interface CoachLink {
  label: string;
  href: string;
}

export interface Coach {
  name: string;
  role: string;
  note: string;
  email?: string;
  links?: CoachLink[];
}

// Source: https://i.cs.hku.hk/~provinci/contact.html (2025 squads)
export const currentTeams: Team[] = [
  {
    id: 'hot-kpop-union',
    name: 'Hot Kpop Union',
    alternate: '热门流行音乐联盟',
    coach: 'Qipeng Kuang',
    members: [
      { name: 'Mingfei Xia', program: 'BEng(CompSc) 4' },
      { name: 'Yuchen Wu', program: 'BEng(CompSc) 2', handle: 'BeyondHeaven' },
      { name: 'Qixuan Li', program: 'Bioinformatics 2', handle: 'lqx2005' },
    ],
    honors: [
      'Silver Medal — ICPC Asia East Continent Final, Hangzhou',
      'Gold Medal (7th Place) — ICPC Asia Hong Kong Regional',
    ],
  },
  {
    id: 'team-name-ddl-today',
    name: 'Team name ddl today',
    alternate: '今天必须取个队名',
    coach: 'Qipeng Kuang',
    members: [
      { name: 'Mingtian Yang', program: 'PhD 1' },
      { name: 'Jian Luo', program: 'BSc 1' },
      { name: 'Yancheng Liu', program: 'BSc(QFin) 1' },
    ],
    honors: [
      '3rd Place — ACM-HK Programming Contest',
      'Silver Medal — ICPC Asia Hong Kong Regional',
      'Bronze Medal — ICPC Asia Nanjing Regional',
    ],
  },
  {
    id: 'waiguoren',
    name: 'Waiguoren',
    alternate: '外国人',
    coach: 'Qipeng Kuang',
    members: [
      { name: 'Christivan Komah', program: 'BEng 1' },
      { name: 'Owen Sidarta', program: 'BEng 1' },
      { name: 'Akhmet Issa', program: 'BEng 1' },
    ],
    honors: [
      'Bronze Medal — ICPC Asia Shanghai Regional',
      'Silver Medal — ICPC Asia Nanjing Regional',
    ],
  },
  {
    id: 'kfc-enjoyers',
    name: 'kfc_enjoyers',
    coach: 'Qipeng Kuang',
    members: [
      { name: 'Ismayil Maharramov', program: 'BEng(CompSc) 3' },
      { name: 'Richie Wilynnton', program: 'BEng(CompSc) 4' },
      { name: 'Shah Jahan Ishaq', program: 'BEng(CompSc) 4' },
    ],
    honors: [],
  },
];

export const coaches: Coach[] = [
  {
    name: 'Weiming Feng',
    role: 'Coordinator',
    note: 'Faculty coordinator for the HKU ICPC teams. Office CB 409.',
    email: 'wfeng@hku.hk',
    links: [{ label: 'Homepage', href: 'https://fwm94.github.io/' }],
  },
  {
    name: 'Mingtian Yang',
    role: 'Coach',
    note: 'Coach for the 2025 squads.',
    email: 'skylee03@connect.hku.hk',
  },
  {
    name: 'Qipeng Kuang',
    role: 'Team coach',
    note: 'PhD 4. Team coach for the 2025 squads.',
    email: 'kuangqipeng@connect.hku.hk',
    links: [
      { label: 'Codeforces', href: 'https://codeforces.com/profile/kqp' },
      { label: 'AtCoder', href: 'https://atcoder.jp/users/kqp' },
      { label: 'GitHub', href: 'https://github.com/l2l7l9p' },
    ],
  },
];

// Recent squads reconstructed from the same source.
export const archive: ArchiveTeam[] = [
  {
    season: '2024',
    team: 'Hot Kpop Union',
    members: 'Qiyue Xu, Yuchen Wu, Qixuan Li',
    result: 'Gold — Hong Kong & Nanjing Regionals; Bronze — East Continent Final',
  },
  {
    season: '2024',
    team: 'Team name ddl today',
    members: 'Mingtian Yang, Haoyuan Wu, Mingfei Xia',
    result: 'Silver — Hong Kong Regional; Bronze — Nanjing Regional',
  },
  {
    season: '2024',
    team: 'Gojo Teacher',
    members: 'Jingyu Luo, Yufei Li, Yuchen Zhang',
    result: 'Bronze — East Continent Final & Hangzhou Regional',
  },
  {
    season: '2024',
    team: 'Cheeky Chubbies',
    members: 'Po Wa Lee, Yerdaulet Mussabek, Dorjderem Namsraijav',
    result: 'Bronze — Hangzhou Regional',
  },
  {
    season: '2023',
    team: 'huawei 15 pro max',
    members: 'Che Liu, Anzhe Wang, Junkai Song',
    result: 'Gold — East Continent Final & Macau Regional; Silver — Hefei Regional',
  },
  {
    season: '2023',
    team: 'Better rua turtle',
    members: 'Haoyuan Wu, Jiannan Wang, Shengyao Sun',
    result: 'Silver — East Continent Final; Bronze — Macau & Hefei Regionals',
  },
  {
    season: '2023',
    team: '404 Not Found',
    members: 'Ching Wai Justin Yim, Yufei Li, Jingyu Luo',
    result: 'Bronze — Jinan & Hefei Regionals',
  },
  {
    season: '2023',
    team: 'Cant enter HW 312',
    members: 'Xinzhuang Xiong, Tsz Ching Chan, Yerdaulet Mussabek',
    result: 'Bronze — Hefei Regional',
  },
];
