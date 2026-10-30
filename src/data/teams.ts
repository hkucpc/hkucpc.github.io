export interface Member {
  name: string;
  slug: string;
  program?: string;
  handle?: string;
}

export interface Team {
  id: string;
  season: string;
  name: string;
  alternate?: string;
  coach: string;
  members: Member[];
  honors: string[];
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

// Sources:
// https://i.cs.hku.hk/~provinci/contact.html
// https://i.cs.hku.hk/~provinci/achievements.html
export const teamSeasons: Team[] = [
  {
    id: "2025-hot-kpop-union",
    season: "2025",
    name: "Hot Kpop Union",
    alternate: "热门流行音乐联盟",
    coach: "Qipeng Kuang",
    members: [
      { name: "Mingfei Xia", slug: "mingfei-xia", program: "BEng(CompSc) 4" },
      { name: "Yuchen Wu", slug: "yuchen-wu", program: "BEng(CompSc) 2", handle: "BeyondHeaven" },
      { name: "Qixuan Li", slug: "qixuan-li", program: "Bioinformatics 2", handle: "lqx2005" },
    ],
    honors: [
      "Silver Medal in ICPC Asia East Continent Final Contest",
      "Gold Medal (7th Place) in ICPC Asia Regional Contest Hong Kong Site",
    ],
  },
  {
    id: "2025-team-name-ddl-today",
    season: "2025",
    name: "Team name ddl today",
    alternate: "今天必须取个队名",
    coach: "Qipeng Kuang",
    members: [
      { name: "Mingtian Yang", slug: "mingtian-yang", program: "PhD 1" },
      { name: "Jian Luo", slug: "jian-luo", program: "BSc 1" },
      { name: "Yancheng Liu", slug: "yancheng-liu", program: "BSc(QFin) 1" },
    ],
    honors: [
      "3rd Place in ACM-HK Programming Contest",
      "Silver Medal in ICPC Asia Regional Contest Hong Kong Site",
      "Bronze Medal in ICPC Asia Regional Contest Nanjing Site",
    ],
  },
  {
    id: "2025-waiguoren",
    season: "2025",
    name: "Waiguoren",
    alternate: "外国人",
    coach: "Qipeng Kuang",
    members: [
      { name: "Christivan Komah", slug: "christivan-komah", program: "BEng 1" },
      { name: "Owen Sidarta", slug: "owen-sidarta", program: "BEng 1" },
      { name: "Akhmet Issa", slug: "akhmet-issa", program: "BEng 1" },
    ],
    honors: [
      "Bronze Medal in ICPC Asia Regional Contest Shanghai Site",
      "Silver Medal in ICPC Asia Regional Contest Nanjing Site",
    ],
  },
  {
    id: "2025-kfc-enjoyers",
    season: "2025",
    name: "kfc_enjoyers",
    coach: "Qipeng Kuang",
    members: [
      { name: "Ismayil Maharramov", slug: "ismayil-maharramov", program: "BEng(CompSc) 3" },
      { name: "Richie Wilynnton", slug: "richie-wilynnton", program: "BEng(CompSc) 4" },
      { name: "Shah Jahan Ishaq", slug: "shah-jahan-ishaq", program: "BEng(CompSc) 4" },
    ],
    honors: [],
  },
  {
    id: "2024-hot-kpop-union",
    season: "2024",
    name: "Hot Kpop Union",
    alternate: "热门流行音乐联盟",
    coach: "Qipeng Kuang",
    members: [
      { name: "Qiyue Xu", slug: "qiyue-xu", program: "BEng(CompSc) 2" },
      { name: "Yuchen Wu", slug: "yuchen-wu", program: "BEng 1", handle: "BeyondHeaven" },
      { name: "Qixuan Li", slug: "qixuan-li", program: "Bioinformatics 1", handle: "lqx2005" },
    ],
    honors: [
      "Champion in ACM-HK Programming Contest",
      "Bronze Medal in ICPC Asia East Continent Final Contest",
      "Gold Medal (8th Place) in ICPC Asia Regional Contest Hong Kong Site",
      "Gold Medal (7th Place, University Ranked 5) in ICPC Aisa Regional Contest Nanjing Site",
    ],
  },
  {
    id: "2024-team-name-ddl-today",
    season: "2024",
    name: "Team name ddl today",
    alternate: "今天必须取个队名",
    coach: "Qipeng Kuang",
    members: [
      { name: "Mingtian Yang", slug: "mingtian-yang", program: "BEng(CompSc) 4" },
      { name: "Haoyuan Wu", slug: "haoyuan-wu", program: "BEng(CompSc) 3" },
      { name: "Mingfei Xia", slug: "mingfei-xia", program: "BEng(CompSc) 3" },
    ],
    honors: [
      "Silver Medal in ICPC Asia Regional Contest Hong Kong Site",
      "Bronze Medal in ICPC Asia Regional Contest Nanjing Site",
    ],
  },
  {
    id: "2024-gojo-teacher",
    season: "2024",
    name: "Gojo Teacher",
    alternate: "五条牢师",
    coach: "Qipeng Kuang",
    members: [
      { name: "Jingyu Luo", slug: "jingyu-luo", program: "BEng(CompSc) 2" },
      { name: "Yufei Li", slug: "yufei-li", program: "BEng 2" },
      { name: "Yuchen Zhang", slug: "yuchen-zhang", program: "BEng 1" },
    ],
    honors: [
      "Bronze Medal in ICPC Asia East Continent Final Contest",
      "Bronze Medal in ICPC Asia Regional Contest Hangzhou Site",
    ],
  },
  {
    id: "2024-cheeky-chubbies",
    season: "2024",
    name: "Cheeky Chubbies",
    alternate: "Cheeky Chubbies",
    coach: "Qipeng Kuang",
    members: [
      { name: "Po Wa Lee", slug: "po-wa-lee", program: "MBBS 2" },
      { name: "Yerdaulet Mussabek", slug: "yerdaulet-mussabek", program: "BEng(CE) 3" },
      { name: "Dorjderem Namsraijav", slug: "dorjderem-namsraijav", program: "BEng(CompSc) 3" },
    ],
    honors: [
      "Bronze Medal in ICPC Asia Regional Contest Hangzhou Site",
    ],
  },
  {
    id: "2023-huawei-15-pro-max",
    season: "2023",
    name: "huawei 15 pro max",
    alternate: "遥遥领先",
    coach: "Qipeng Kuang",
    members: [
      { name: "Che Liu", slug: "che-liu", program: "BEng 2", handle: "cheissmart" },
      { name: "Anzhe Wang", slug: "anzhe-wang", program: "BEng(CE) 4", handle: "Biden" },
      { name: "Junkai Song", slug: "junkai-song", program: "BEng(CompSc) 4", handle: "dsgsjk" },
    ],
    honors: [
      "Gold Medal in ICPC Asia East Continent Final Contest",
      "Gold Medal and Outstanding Local Team in ICPC Asia Regional Contest Macau Site",
      "Silver Medal in ICPC Aisa Regional Contest Hefei Site",
    ],
  },
  {
    id: "2023-better-rua-turtle",
    season: "2023",
    name: "Better rua turtle",
    alternate: "不如摸萨卡班甲鱼",
    coach: "Qipeng Kuang",
    members: [
      { name: "Haoyuan Wu", slug: "haoyuan-wu", program: "BEng(CompSc)" },
      { name: "Jiannan Wang", slug: "jiannan-wang", program: "PhD 1" },
      { name: "Shengyao Sun", slug: "shengyao-sun", program: "BEng(CE) 2" },
    ],
    honors: [
      "Silver Medal in ICPC Asia East Continent Final Contest",
      "Bronze Medal in ICPC Asia Regional Contest Macau Site",
      "Bronze Medal in ICPC Asia Regional Contest Hefei Site",
    ],
  },
  {
    id: "2023-404-not-found",
    season: "2023",
    name: "404 Not Found",
    alternate: "什么神什么启动",
    coach: "Qipeng Kuang",
    members: [
      { name: "Ching Wai Justin Yim", slug: "ching-wai-justin-yim", program: "FBE 5" },
      { name: "Yufei Li", slug: "yufei-li", program: "BEng 1" },
      { name: "Jingyu Luo", slug: "jingyu-luo", program: "BEng 1" },
    ],
    honors: [
      "Bronze Medal in ICPC Asia Regional Contest Hefei Site",
      "Bronze Medal in ICPC Aisa Regional Contest Jinan Site",
    ],
  },
  {
    id: "2023-cant-enter-hw-312",
    season: "2023",
    name: "Cant enter HW 312",
    alternate: "開门呀呀呀",
    coach: "Qipeng Kuang",
    members: [
      { name: "Xinzhuang Xiong", slug: "xinzhuang-xiong", program: "BEng 2" },
      { name: "Tsz Ching Chan", slug: "tsz-ching-chan", program: "MBBS" },
      { name: "Yerdaulet Mussabek", slug: "yerdaulet-mussabek", program: "EEE 2" },
    ],
    honors: [
      "Bronze Medal in ICPC Aisa Regional Contest Hefei Site",
    ],
  },
  {
    id: "2022-i-am-not-in-danger-i-am-the-danger",
    season: "2022",
    name: "I am not in danger. I am the danger.",
    alternate: "我不是密接，我是阳性",
    coach: "Hao Xie",
    members: [
      { name: "Che Liu", slug: "che-liu", program: "BEng 1", handle: "cheissmart" },
      { name: "Anzhe Wang", slug: "anzhe-wang", program: "BEng(CE) 3", handle: "Biden" },
      { name: "Jiahe Jiang", slug: "jiahe-jiang", program: "BEng(CompSc) 3", handle: "Isrothy" },
    ],
    honors: [
      "36th Place in 47th World Final",
      "Gold Medal in ICPC Asia Regional Contest Hong Kong Site",
      "Gold Medal in ICPC Asia Regional Contest Jinan Site",
      "Bronze Medal in ICPC Aisa East Continent Final Contest",
    ],
  },
  {
    id: "2022-put-yo-d-away-waltuh",
    season: "2022",
    name: "put yo d away waltuh",
    alternate: "牛牛拿开，老白",
    coach: "Hao Xie",
    members: [
      { name: "Maodian Huang", slug: "maodian-huang", program: "BEng(CompSc) 2" },
      { name: "Junkai Song", slug: "junkai-song", program: "BEng(CompSc) 3", handle: "dsgsjk" },
      { name: "Shengyao Sun", slug: "shengyao-sun", program: "BEng 1" },
    ],
    honors: [
      "Silver Medal in ICPC Asia Regional Contest Jinan Site",
      "Bronze Medal in ICPC Aisa East Continent Final Contest",
    ],
  },
  {
    id: "2022-team-name-ddl-today-again-who-didn-t-take-the-third-dose",
    season: "2022",
    name: "team name ddl today again (Who didn't take the third dose)",
    alternate: "今天必须再取个队名 (是谁没打第三针)",
    coach: "Hao Xie",
    members: [
      { name: "Mingtian Yang", slug: "mingtian-yang", program: "BEng(CompSc) 2" },
      { name: "Xiaobang Hu", slug: "xiaobang-hu", program: "BEng 1" },
      { name: "Boao Shi", slug: "boao-shi", program: "BEng 1" },
    ],
    honors: [
      "Silver Medal in ICPC Asia Regional Contest Hong Kong Site",
      "Bronze Medal in ICPC Asia Regional Contest Jinan Site",
      "Bronze Medal in ICPC Aisa East Continent Final Contest",
    ],
  },
  {
    id: "2022-fake-plastic-tree",
    season: "2022",
    name: "fake plastic tree",
    coach: "Hao Xie",
    members: [
      { name: "Baicheng Liu", slug: "baicheng-liu", program: "BEng(CompSc) 3" },
      { name: "Maodian Huang", slug: "maodian-huang", program: "BEng(CompSc) 2" },
      { name: "Rui Cao", slug: "rui-cao", program: "BEng 1" },
    ],
    honors: [
      "Silver Medal in ICPC Asia Regional Contest Hong Kong Site",
    ],
  },
  {
    id: "2022-a-drop-table-teams",
    season: "2022",
    name: "A\"; DROP Table Teams;--",
    coach: "Hao Xie",
    members: [
      { name: "Anzhe Wang", slug: "anzhe-wang", program: "BEng(CE) 3", handle: "Biden" },
      { name: "Jiahe Jiang", slug: "jiahe-jiang", program: "BEng(CompSc) 3", handle: "Isrothy" },
      { name: "Maodian Huang", slug: "maodian-huang", program: "BEng(CompSc) 2" },
    ],
    honors: [
      "3rd Place in ACM-HK Programming Contest 2023",
    ],
  },
  {
    id: "2022-3men1com",
    season: "2022",
    name: "3men1com",
    coach: "Hao Xie",
    members: [
      { name: "Ho Ning Leung", slug: "ho-ning-leung", program: "BBA(IS)/BEng(CompSc) 3" },
      { name: "Boao Shi", slug: "boao-shi", program: "BEng 1" },
      { name: "Mingfei Xia", slug: "mingfei-xia", program: "BEng 1" },
    ],
    honors: [],
  },
  {
    id: "2021-team-name-ddl-today",
    season: "2021",
    name: "Team name ddl today",
    alternate: "今天必须取个队名",
    coach: "Hao Xie",
    members: [
      { name: "Zhiheng Lyu", slug: "zhiheng-lyu", program: "BEng(CompSc) 2" },
      { name: "Baicheng Liu", slug: "baicheng-liu", program: "BEng(CompSc) 2" },
      { name: "Mingtian Yang", slug: "mingtian-yang", program: "BEng 1" },
    ],
    honors: [
      "Gold Medal in ICPC Asia Regional Contest Shanghai Site",
    ],
  },
  {
    id: "2021-gan-ronaldo",
    season: "2021",
    name: "Gan Ronaldo",
    alternate: "穷哥们琪琪",
    coach: "Hao Xie",
    members: [
      { name: "Anzhe Wang", slug: "anzhe-wang", program: "BEng(CE) 2", handle: "Biden" },
      { name: "Junkai Song", slug: "junkai-song", program: "BEng(CompSc) 2", handle: "dsgsjk" },
      { name: "Maodian Huang", slug: "maodian-huang", program: "BEng 1" },
    ],
    honors: [
      "Gold Medal in ICPC Asia Regional Contest Shanghai Site",
    ],
  },
  {
    id: "2021-your-oi-foundation-is-stronger-than-mine",
    season: "2021",
    name: "Your OI foundation is stronger than mine!",
    alternate: "你的OI基础比我扎实！",
    coach: "Hao Xie",
    members: [
      { name: "Zhenwei Hu", slug: "zhenwei-hu", program: "BEng(CompSc) 4" },
      { name: "Hiu Hei Chan", slug: "hiu-hei-chan", program: "BEng(CompSc) 4" },
      { name: "Meitong Liu", slug: "meitong-liu", program: "BEng 1" },
    ],
    honors: [],
  },
  {
    id: "2021-the-sorting-hat-says-we-belong-to-azkaban",
    season: "2021",
    name: "The Sorting Hat says we belong to Azkaban",
    coach: "Hao Xie",
    members: [
      { name: "Anzhe Wang", slug: "anzhe-wang", program: "BEng(CE) 2", handle: "Biden" },
      { name: "Jiahe Jiang", slug: "jiahe-jiang", program: "BEng(CompSc) 2", handle: "Isrothy" },
      { name: "Ho Ning Leung", slug: "ho-ning-leung", program: "BBA(IS)/BEng(CompSci) 2" },
    ],
    honors: [
      "1st Runner-up in ACM-HK Programming Contest 2022",
    ],
  },
  {
    id: "2020-will-cyber-college-students-fantasize-about-cloud-classroom",
    season: "2020",
    name: "Will Cyber college students fantasize about Cloud Classroom?",
    alternate: "赛博大学人会梦到空中云课堂么？",
    coach: "Hao Xie",
    members: [
      { name: "Zhiheng Lyu", slug: "zhiheng-lyu", program: "BEng 1" },
      { name: "Jiahe Jiang", slug: "jiahe-jiang", program: "BEng 1", handle: "Isrothy" },
      { name: "Baicheng Liu", slug: "baicheng-liu", program: "BEng 1" },
    ],
    honors: [
      "50th Place in 45th ICPC World Final",
      "Gold Medal in ICPC Asia Regional Contest Nanjing Site",
      "Silver Medal in ICPC Asia Regional Contest Shanghai Site",
      "9th Place in ICPC Challenge Powered by Huawei",
    ],
  },
  {
    id: "2020-pandite-ostia",
    season: "2020",
    name: "Pandite Ostia",
    alternate: "潘滴特 奧斯蹄亞",
    coach: "Hao Xie",
    members: [
      { name: "Ho Ning Leung", slug: "ho-ning-leung", program: "BEng 1" },
      { name: "Yuanyue Yao", slug: "yuanyue-yao", program: "BSc 1" },
      { name: "Chun Yin Lee", slug: "chun-yin-lee", program: "BSc 4" },
    ],
    honors: [
      "Silver Medal in ICPC Asia Regional Contest Nanjing Site",
      "Bronze Medal in ICPC Asia Regional Contest Jinan Site",
    ],
  },
  {
    id: "2020-hunyuan-xingyi-taiji-gate",
    season: "2020",
    name: "Hunyuan Xingyi Taiji Gate",
    alternate: "浑元形意太极门",
    coach: "Hao Xie",
    members: [
      { name: "Junkai Song", slug: "junkai-song", program: "BEng 1", handle: "dsgsjk" },
      { name: "Anzhe Wang", slug: "anzhe-wang", program: "BEng 1", handle: "Biden" },
      { name: "Kai I Lam", slug: "kai-i-lam", program: "BEng(CompSc) 4" },
    ],
    honors: [
      "Gold Medal in ICPC Asia Regional Contest Jinan Site",
      "Silver Medal in ICPC Asia Regional Contest Nanjing Site",
    ],
  },
  {
    id: "2020-ggdg-wq",
    season: "2020",
    name: "ggdG:wq",
    coach: "Hao Xie",
    members: [
      { name: "Eehit Ray", slug: "eehit-ray", program: "BEng(CompSc) 2" },
      { name: "Kwan Yin Chan", slug: "kwan-yin-chan", program: "BEng(EngSc) 4" },
      { name: "Zhenwei Hu", slug: "zhenwei-hu", program: "BEng(CompSc) 3" },
    ],
    honors: [],
  },
  {
    id: "2020-s3xy-imposter",
    season: "2020",
    name: "S3xy imposter",
    coach: "Hao Xie",
    members: [
      { name: "Vyomesh Dua", slug: "vyomesh-dua", program: "BEng(CompSc) 4" },
      { name: "Haihui Zhou", slug: "haihui-zhou", program: "BEng(CompSc) 4" },
      { name: "Kwan Kin Chan", slug: "kwan-kin-chan", program: "BEng(CompSc) 2" },
    ],
    honors: [],
  },
  {
    id: "2019-gmt-8",
    season: "2019",
    name: "GMT+8",
    coach: "Bintao Sun",
    members: [
      { name: "Binrui Dong", slug: "binrui-dong" },
      { name: "Chun Yin Lee", slug: "chun-yin-lee", program: "BSc 3" },
      { name: "Kin Hei Kwok", slug: "kin-hei-kwok" },
    ],
    honors: [
      "Silver Medal in ICPC Asia Regional East Continent Final Contest",
      "Silver Medal in ICPC Asia Regional Contest Shanghai Site",
    ],
  },
  {
    id: "2019-no-response",
    season: "2019",
    name: "No Response",
    coach: "Bintao Sun",
    members: [
      { name: "Zhenwei Hu", slug: "zhenwei-hu", program: "BEng(CompSc) 2" },
      { name: "Dongning Chen", slug: "dongning-chen" },
    ],
    honors: [
      "Bronze Medal in ICPC Asia Regional Contest Shanghai Site",
    ],
  },
  {
    id: "2019-chmod-254-0",
    season: "2019",
    name: "chmod 254 $0",
    coach: "Bintao Sun",
    members: [
      { name: "Kwan Yin Chan", slug: "kwan-yin-chan", program: "BEng(EngSc) 3" },
      { name: "Shendy Marcello Yuniar", slug: "shendy-marcello-yuniar", program: "BSc 4" },
      { name: "Dewang Maskara", slug: "dewang-maskara", program: "BEng(CompSc) 4" },
    ],
    honors: [],
  },
  {
    id: "2018-rising-hairline-div3-borderline",
    season: "2018",
    name: "^^rising hairline^^ (--Div3 Borderline--)",
    coach: "Bintao Sun",
    members: [
      { name: "Kin Hei Kwok", slug: "kin-hei-kwok" },
      { name: "Qingwei Huang", slug: "qingwei-huang" },
      { name: "Pak Nam Hui", slug: "pak-nam-hui" },
    ],
    honors: [
      "Gold Medal in ICPC Asia East Continent Final Contest",
      "Silver Medal in ICPC Asia Regional Contest Nanjing Site",
      "2nd Place in ACM-HK Programming Contest 2018",
    ],
  },
  {
    id: "2017-aha",
    season: "2017",
    name: "Aha!",
    coach: "Chenzi Zhang",
    members: [
      { name: "Kin Hei Kwok", slug: "kin-hei-kwok" },
      { name: "Bintao Sun", slug: "bintao-sun" },
      { name: "Tianchi Cai", slug: "tianchi-cai" },
    ],
    honors: [
      "Gold Medal in ICPC Asia Regional Contest Xi'an Site",
      "Silver Medal in ICPC Asia China Final Contest",
      "Silver Medal in ICPC Asia Regional Contest Hong Kong Site",
    ],
  },
  {
    id: "2017-too-young-to-ac",
    season: "2017",
    name: "Too young to AC",
    coach: "Chenzi Zhang",
    members: [
      { name: "Pak Nam Hui", slug: "pak-nam-hui" },
      { name: "Jikun Wang", slug: "jikun-wang" },
      { name: "Qingwei Huang", slug: "qingwei-huang" },
    ],
    honors: [
      "Silver Medal in ICPC Asia Regional Contest Xi'an Site",
      "Bronze Medal in ICPC Asia Regional Contest Qingdao Site",
    ],
  },
  {
    id: "2017-turtle-racer",
    season: "2017",
    name: "Turtle Racer",
    coach: "Chenzi Zhang",
    members: [
      { name: "Chi Ian Tang", slug: "chi-ian-tang" },
      { name: "Michelle Yih-chyan Wang", slug: "michelle-yih-chyan-wang" },
      { name: "Divyansh Singh", slug: "divyansh-singh" },
    ],
    honors: [
      "Silver Medal in ICPC Asia Regional Contest Qingdao Site",
    ],
  },
  {
    id: "2016-superhighway",
    season: "2016",
    name: "SuperHighWay",
    coach: "Shaofeng Jiang",
    members: [
      { name: "Bintao Sun", slug: "bintao-sun" },
      { name: "Jikun Wang", slug: "jikun-wang" },
      { name: "Pak Nam Hui", slug: "pak-nam-hui" },
    ],
    honors: [
      "Silver Medal in ICPC Asia China Final Contest",
      "Silver Medal in ICPC Asia Regional Contest Hong Kong Site",
      "Silver Medal in ICPC Asia Regional Contest Dalian Site",
    ],
  },
  {
    id: "2016-acman-go",
    season: "2016",
    name: "ACman Go!",
    coach: "Shaofeng Jiang",
    members: [
      { name: "Derun Gu", slug: "derun-gu" },
      { name: "Tianchi Cai", slug: "tianchi-cai" },
      { name: "Fangjun Zhang", slug: "fangjun-zhang" },
    ],
    honors: [
      "Silver Medal in ICPC Asia Regional Contest Qingdao Site",
      "Bronze Medal in ICPC Asia China Final Contest",
    ],
  },
];

export const currentTeams = teamSeasons.filter((team) => team.season === '2025');
export const archive = teamSeasons.filter((team) => team.season !== '2025');

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
