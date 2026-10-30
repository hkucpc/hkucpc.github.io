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
    slug: 'east-continent-final-gold-2026',
    title: 'Monolith takes gold at the ICPC Asia East Continent Final',
    date: '2026-02-07',
    displayDate: '7 Feb 2026',
    tags: ['Competition', 'World Finals', 'Regional'],
    featured: true,
    excerpt:
      'A fourth-place finish in Xi’an earns HKU its sixth ICPC World Finals appearance and the team’s second consecutive continental gold.',
    body: [
      'HKU Monolith finished fourth at the ICPC Asia East Continent Final in Xi’an, taking a gold medal and a place at the 50th ICPC World Finals. The team solved nine of twelve problems, with the final accepted submission arriving in the last twenty minutes of the contest.',
      'The result follows a gold medal at the Asia Hong Kong Regional in December and confirms HKU’s strongest continental season to date. Monolith’s run included first-blood solutions on two problems and a clean penalty record in the opening three hours.',
      '## The final hour',
      'With two problems remaining and the scoreboard frozen, the team split work between a geometric sweep and a flow reduction. A late correctness bug on the sweep cost roughly fifteen minutes; the fix landed with time to spare, and the flow problem followed shortly after.',
      '> We stopped trying to win the scoreboard and started trying to finish the set. That is usually when things go right.',
      '## What comes next',
      'The team will spend the spring in a structured World Finals block: two full five-hour simulations per week, targeted theory sessions, and a review of every problem attempted at the regional and continental rounds.',
      'The community congratulates Monolith, coaches Dr. Miranda Lau and Kenji Watanabe, and everyone who tested problems, judged practice contests or kept the contest room stocked with coffee.',
    ],
  },
  {
    slug: 'hong-kong-regional-2025',
    title: 'Two golds and a silver at the ICPC Asia Hong Kong Regional',
    date: '2025-12-14',
    displayDate: '14 Dec 2025',
    tags: ['Competition', 'Regional'],
    excerpt:
      'HKU Monolith wins the Hong Kong Regional; Vector finishes third. Both teams qualify for the East Continent Final.',
    body: [
      'HKU Monolith won the 2025 ICPC Asia Hong Kong Regional, solving all ten problems with the lowest total penalty in the field. HKU Vector finished third with nine problems, earning the community’s second gold of the day. HKU Parabola took a silver medal in its first regional appearance.',
      'The contest was hosted on campus and brought together 68 teams from Hong Kong, mainland China and the wider region. HKU fielded six teams across the open and invitational divisions.',
      '## Problem set notes',
      'The set rewarded careful implementation: three problems had tight time limits, and the final problem combined a segment tree with offline queries. Only four teams solved it, two of them from HKU.',
      'Monolith and Vector advance to the ICPC Asia East Continent Final in Xi’an. Parabola will join the development squad for the spring training block.',
      'Full scoreboards, problem sets and editorials are available through the ICPC regional archive.',
    ],
  },
  {
    slug: 'nanjing-regional-2025',
    title: 'Monolith earns silver in a crowded Nanjing regional',
    date: '2025-11-02',
    displayDate: '2 Nov 2025',
    tags: ['Competition', 'Regional'],
    excerpt:
      'A nine-problem performance places HKU ninth in a field of 240 teams at ICPC Asia Nanjing.',
    body: [
      'HKU Monolith placed ninth at the ICPC Asia Nanjing Regional, earning a silver medal in a field of 240 teams. The team solved nine problems and spent most of the contest inside the top fifteen.',
      'Vector finished with seven problems in 41st place. For three members of the development squad, Nanjing was their first regional outside Hong Kong.',
      '## Building a season',
      'The result was the team’s third consecutive top-ten regional finish. Coaches point to a quieter change: a shared virtual contest calendar, maintained by the community, that kept all six squads competing on the same problem sets through the autumn.',
      'The team travels next to the Hong Kong Regional in December.',
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
