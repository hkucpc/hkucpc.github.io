export type NewsTag =
  | 'Competition'
  | 'World Finals'
  | 'Regional'
  | 'CCPC'
  | 'Training'
  | 'Announcement'
  | 'Community';

export interface Post {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  tags: NewsTag[];
  excerpt: string;
  featured?: boolean;
  host?: string;
  links?: { label: string; href: string }[];
  body: string[];
}

export const posts: Post[] = [
  {
    slug: 'ccpc-jingzhou-2026',
    host: 'Yangtze University and Wuhan University',
    title: 'HKU returns to CCPC with silver and bronze in Jingzhou',
    date: '2026-11-15',
    displayDate: '15 Nov 2026',
    tags: ['Competition', 'CCPC'],
    excerpt:
      'Beginner Sophomore Team 0 wins silver and RIA takes bronze at the 12th CCPC Jingzhou, marking HKU’s return to the CCPC series.',
    body: [
      'HKU returned to the China Collegiate Programming Contest at the 12th CCPC Jingzhou, hosted by Yangtze University and Wuhan University, earning one silver and one bronze medal.',
      '[Beginner Sophomore Team 0](/people/2026-beginner-sophomore-team-0/) finished 55th for silver, while [RIA](/people/2026-ria/) took bronze in 178th.',
      '## Back in the CCPC',
      'The result marks HKU’s first CCPC appearance since the 2018–19 season, when GMT+7 won gold and finished 5th at the CCPC Final in Shenzhen. After several years away from the series, HKU squads are competing in the CCPC again.',
    ],
  },
  {
    slug: 'nanjing-regional-2026',
    host: 'Nanjing University of Aeronautics and Astronautics',
    title: 'HKU takes silver and bronze in Nanjing',
    date: '2026-11-08',
    displayDate: '8 Nov 2026',
    tags: ['Competition', 'Regional'],
    excerpt:
      'A wine still dominates the tomb wins silver and WeShowSpeed takes bronze at the 51st ICPC Asia Nanjing Regional.',
    body: [
      'HKU added two medals at the 51st ICPC Asia Nanjing Regional on 8 November. The contest was hosted by Nanjing University of Aeronautics and Astronautics.',
      '[A wine still dominates the tomb](/people/2026-a-wine-still-dominates-the-tomb/) finished 63rd for silver, while [WeShowSpeed](/people/2026-weshowspeed/) took bronze in 190th.',
      'The results follow the season’s Chengdu and Xi’an regionals, where HKU won six medals across the two contests.',
    ],
  },
  {
    slug: 'new-website-2026',
    title: 'The new HKU CPC website is live',
    date: '2026-11-01',
    displayDate: '1 Nov 2026',
    tags: ['Announcement', 'Community'],
    featured: true,
    excerpt:
      'A new home for the community’s record, people and joining information. The original site remains online as an archive.',
    body: [
      'The HKU Competitive Programming Community has a new website. It brings the contest record, season-by-season squads, member profiles and joining information into one place.',
      '## What is here',
      'The [People](/people/) section lists every recorded squad from 1990–91 to 2026–27, with coordinators, coaches and contestants. [Achievements](/achievements/) covers ICPC World Finals, regional and local results, including the 1990–91 Hong Kong title.',
      'The [Join](/join/) section explains how to subscribe to the community channels, attend an info session, take the selection contest and start training.',
      '## The original site',
      'The previous site remains online as an archive and is still available at the address below.',
    ],
    links: [
      {
        label: 'Visit the original site',
        href: 'https://i.cs.hku.hk/~provinci/',
      },
    ],
  },
  {
    slug: 'chengdu-regional-2026',
    host: 'University of Electronic Science and Technology of China',
    title: 'HKU adds three medals in Chengdu',
    date: '2026-10-25',
    displayDate: '25 Oct 2026',
    tags: ['Competition', 'Regional'],
    excerpt:
      'Team name ddl today and Hot Kpop Union take silver, while A wine still dominates the tomb earns bronze at the 51st ICPC Asia Chengdu Regional.',
    body: [
      'HKU added three more medals at the 51st ICPC Asia Chengdu Regional on 24–25 October. The contest was hosted by the University of Electronic Science and Technology of China.',
      '[Team name ddl today](/people/2026-team-name-ddl-today/) finished 41st for silver, [Hot Kpop Union](/people/2026-hot-kpop-union-b/) finished 43rd for silver, and [A wine still dominates the tomb](/people/2026-a-wine-still-dominates-the-tomb/) took bronze in 137th.',
      'The Chengdu result follows three medals at the Xi’an Regional the previous weekend, giving HKU six regional medals from the two contests.',
    ],
  },
  {
    slug: 'xian-regional-2026',
    host: 'Northwestern Polytechnical University',
    title: 'HKU takes three medals in Xi’an',
    date: '2026-10-18',
    displayDate: '18 Oct 2026',
    tags: ['Competition', 'Regional'],
    excerpt:
      'Team name ddl today wins silver, with sysmss_hku and WeShowSpeed taking bronze at the 51st ICPC Asia Xi’an Regional.',
    body: [
      'HKU opened its 2026–27 regional campaign with three medals at the 51st ICPC Asia Xi’an Regional on 17–18 October. The contest was hosted by Northwestern Polytechnical University.',
      '[Team name ddl today](/people/2026-team-name-ddl-today/) finished 90th for silver, [sysmss_hku](/people/2026-sysmss-hku/) took bronze in 155th, and [WeShowSpeed](/people/2026-weshowspeed/) took bronze in 161st.',
      'The result gives HKU one silver and two bronze medals from the first regional weekend of the season.',
    ],
  },
];

export const featuredPost = posts.find((post) => post.featured) ?? posts[0];
