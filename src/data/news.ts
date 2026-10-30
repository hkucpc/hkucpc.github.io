export type NewsTag =
  | 'Competition'
  | 'World Finals'
  | 'Regional'
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
  body: string[];
}

export const posts: Post[] = [
  {
    slug: 'team-formation-test-2026',
    title: '2026–27 Team Formation Test opens for registration',
    date: '2026-08-18',
    displayDate: '18 Aug 2026',
    tags: ['Announcement', 'Training'],
    excerpt:
      'Registration is now open for the annual team formation test. All HKU students are welcome — no prior contest experience required.',
    body: [
      'The 2026–27 season begins with our annual Team Formation Test on Saturday, 5 September 2026, in the Chow Yei Ching Building. The test is open to every HKU student, from first-year undergraduates to research students.',
      'The format is a five-hour, nine-problem contest completed individually. Results are used to place competitors into training squads; they are not used to exclude anyone from the community. Last season, more than half of our current team members first joined through this test.',
      '## What to expect',
      'Problems span the standard ICPC syllabus: implementation, data structures, graph theory, dynamic programming, number theory and geometry. Partial scores are not awarded, but the scoreboard is frozen for the final hour — just like a regional.',
      '> You do not need to be fast. You need to be curious enough to come back after the contest and read the editorials.',
      '## Registration',
      'Sign up with your HKU email address before 1 September. Bring your student card, a laptop and a valid ICPC-compatible language environment. We will provide lunch, coffee and a short orientation for first-time competitors.',
      'A beginner-focused practice session will run on 29 August for anyone who wants a gentler introduction to contest format and judging.',
    ],
  },
  {
    slug: 'east-continent-final-silver-2025',
    title: 'Hot Kpop Union takes silver at the ICPC Asia East Continent Final',
    date: '2025-12-21',
    displayDate: '21 Dec 2025',
    tags: ['Competition', 'Regional'],
    featured: true,
    excerpt:
      'A silver medal in Hangzhou caps a season that also brought gold at the Hong Kong Regional and a place at the World Finals.',
    body: [
      'HKU Hot Kpop Union earned a silver medal at the ICPC Asia East Continent Final in Hangzhou, adding to the team’s gold medal at the Hong Kong Regional earlier in the season.',
      'The East Continent Final brings together the strongest teams from across the region. Hot Kpop Union’s silver is the latest result in a record that now spans 26 seasons.',
      '## A season in context',
      'Earlier in 2025, Hot Kpop Union won gold at the Hong Kong Regional with a seventh-place finish, and went on to place 40th at the 49th ICPC World Finals in Baku.',
      '> The scoreboard rewards the team that keeps making good decisions, not the team with the cleverest idea.',
      '## What comes next',
      'The squads will take a short break before the next training block. Team formation for the new season will be announced on the mailing list.',
      'The community congratulates Hot Kpop Union and coach Qipeng Kuang.',
    ],
  },
  {
    slug: 'hong-kong-regional-2025',
    title: 'Hot Kpop Union wins gold at the 2025 Hong Kong Regional',
    date: '2025-12-14',
    displayDate: '14 Dec 2025',
    tags: ['Competition', 'Regional'],
    excerpt:
      'Hot Kpop Union finishes seventh and takes gold, while Team name ddl today earns silver at the Hong Kong Regional.',
    body: [
      'Hot Kpop Union won gold at the 2025 ICPC Asia Hong Kong Regional, finishing seventh. Team name ddl today added a silver medal, giving HKU two teams on the podium.',
      'The Hong Kong result was one part of a strong season across the region: Waiguoren earned silver in Nanjing and bronze in Shanghai, while Team name ddl today also took bronze in Nanjing.',
      '## At home',
      'The regional brought university teams from across the region together for a full day of competition. HKU fielded four squads in the 2025 season, with twelve competitors representing computer science, bioinformatics, quantitative finance and engineering.',
      'Hot Kpop Union’s gold follows a seventh-place finish at the same contest and a 40th-place result at the 49th ICPC World Finals.',
      'The teams now turn to the East Continent Final and the next training block.',
    ],
  },
  {
    slug: 'nanjing-regional-2025',
    title: 'Waiguoren and Team name ddl today medal in Nanjing',
    date: '2025-11-02',
    displayDate: '2 Nov 2025',
    tags: ['Competition', 'Regional'],
    excerpt:
      'Waiguoren takes silver and Team name ddl today bronze at the ICPC Asia Nanjing Regional.',
    body: [
      'Waiguoren earned a silver medal and Team name ddl today took bronze at the ICPC Asia Nanjing Regional, continuing a productive autumn for HKU’s 2025 squads.',
      'The Nanjing result came alongside Waiguoren’s bronze medal in Shanghai and Team name ddl today’s silver at the Hong Kong Regional.',
      '## Building depth',
      'Four HKU squads competed through the 2025 season, with members drawn from computer science, bioinformatics, quantitative finance and engineering. Results are tracked across every regional, continental and local contest on the achievements page.',
      'The teams travel next to the Hong Kong Regional in December.',
    ],
  },
  {
    slug: 'summer-camp-2025',
    title: 'Summer training camp closes a ten-week block',
    date: '2025-08-24',
    displayDate: '24 Aug 2025',
    tags: ['Training', 'Community'],
    excerpt:
      'Forty-two students spent the summer on graph theory, geometry and five-hour simulations — with a 90% attendance record.',
    body: [
      'The community’s summer training camp concluded with a full five-hour simulation and a long overdue pizza dinner. Forty-two students took part across ten weeks, meeting three evenings a week in the Department of Computer Science.',
      'The curriculum covered advanced graph algorithms, computational geometry, dynamic programming on trees, and the fine art of debugging under a scoreboard. Each week paired a theory session with a curated problem set and a group upsolving review.',
      '## By the numbers',
      'Attendance held at 90% across the block. Twenty-three participants solved at least one problem they had previously classified as out of reach. Nine joined the community for the first time.',
      'The camp is deliberately free and open to all HKU students. Materials remain available to members, and the teaching notes are being cleaned up for a public release later this year.',
    ],
  },
  {
    slug: 'alumni-spotlight-2025',
    title: 'Alumni spotlight: from contest rooms to compiler teams',
    date: '2025-06-12',
    displayDate: '12 Jun 2025',
    tags: ['Community'],
    excerpt:
      'Three former captains on what competitive programming gave them — and what they wish they had learned sooner.',
    body: [
      'This month we spoke with three alumni who now work on compilers, distributed systems and developer tooling. All three competed for HKU within the last eight years; two served as team captains.',
      'The common thread was not a particular algorithm. It was the habit of reading a problem carefully, stating assumptions out loud, and treating a wrong answer as information rather than a verdict.',
      '## On training',
      '“The scoreboard is a very honest teacher,” one alumna said. “It does not care how elegant your idea is. It cares whether the code is correct. That lesson transfers directly to production systems.”',
      'All three recommended that current members spend more time on implementation discipline and less on collecting advanced techniques. “A well-tested solution to the problem in front of you beats an unfinished clever one,” another added.',
      'The community runs an alumni mentoring programme each semester. If you would like to help, get in touch.',
    ],
  },
  {
    slug: 'beginner-bootcamp-2025',
    title: 'Beginner bootcamp returns for the spring semester',
    date: '2025-04-05',
    displayDate: '5 Apr 2025',
    tags: ['Training', 'Announcement'],
    excerpt:
      'A six-week introduction to competitive programming for students with little or no contest background.',
    body: [
      'The beginner bootcamp returns on 16 April with six weekly sessions on the fundamentals of competitive programming. No prior contest experience is assumed; familiarity with any programming language is enough.',
      'Sessions cover input and output, complexity analysis, sorting, binary search, prefix sums, basic graph traversal and simple dynamic programming. Each session ends with a short contest and a guided upsolve.',
      '## Who it is for',
      'First- and second-year students are especially welcome, but the bootcamp is open to all HKU students and staff. Around a third of last year’s cohort went on to compete in a regional within twelve months.',
      'Places are limited to forty to keep the teaching ratio useful. Registration opens two weeks before the first session.',
    ],
  },
];

export const featuredPost = posts.find((post) => post.featured) ?? posts[0];
