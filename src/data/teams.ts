export interface Team {
  id: string;
  season: string;
  name: string;
  alternate?: string;
  members: string[];
  honors: string[];
}

export const teamSeasons: Team[] = [
  {
    id: "2026-hot-kpop-union-a",
    season: "2026",
    name: "Hot Kpop Union",
    alternate: "热门流行音乐联盟",
    members: [
      "yuchen-wu",
      "qixuan-li",
      "mingfei-xia",
    ],
    honors: [
      "Silver Medal in 51st ICPC Asia Chengdu Regional Contest",
    ],
  },
  {
    id: "2026-hot-kpop-union-b",
    season: "2026",
    name: "Hot Kpop Union",
    members: [
      "yuchen-wu",
      "mingfei-xia",
      "ali-aliyev",
    ],
    honors: [],
  },
  {
    id: "2026-team-name-ddl-today",
    season: "2026",
    name: "Team name ddl today",
    alternate: "今天必须取个队名",
    members: [
      "mingtian-yang",
      "haoyuan-wu",
      "zhiyuan-xu",
    ],
    honors: [
      "Silver Medal in 51st ICPC Asia Xi’an Regional Contest",
      "Silver Medal in 51st ICPC Asia Chengdu Regional Contest",
    ],
  },
  {
    id: "2026-weshowspeed",
    season: "2026",
    name: "WeShowSpeed",
    members: [
      "akhmet-issa",
      "owen-sidarta",
      "christivan-komah",
    ],
    honors: [
      "Silver Medal in 51st ICPC Asia Xi’an Regional Contest",
    ],
  },
  {
    id: "2026-string-team-name-void",
    season: "2026",
    name: "string Team_Name = \"void\"",
    members: [
      "ziyan-wang",
      "guanyu-liu",
      "haoyang-wu",
    ],
    honors: [],
  },
  {
    id: "2026-ria",
    season: "2026",
    name: "RIA",
    members: [
      "ali-aliyev",
      "raul-jafarli",
      "ismayil-maharramov",
    ],
    honors: [],
  },
  {
    id: "2026-beginner-sophomore-team-0",
    season: "2026",
    name: "Beginner Sophomore Team 0",
    alternate: "一基础新生 0 队",
    members: [
      "jingyu-luo",
      "chengyu-huang",
      "yuchen-zhang",
    ],
    honors: [],
  },
  {
    id: "2026-a-wine-still-dominates-the-tomb",
    season: "2026",
    name: "A wine still dominates the tomb",
    alternate: "一酒依旧霸夷陵",
    members: [
      "jingyu-luo",
      "yuchen-zhang",
      "yue-yu",
    ],
    honors: [
      "Bronze Medal in 51st ICPC Asia Chengdu Regional Contest",
    ],
  },
  {
    id: "2026-sysmss-hku",
    season: "2026",
    name: "sysmss_hku",
    alternate: "纪中坑u分部",
    members: [
      "kin-hang-he",
      "yun-lung-he",
      "chengyu-huang",
    ],
    honors: [
      "Bronze Medal in 51st ICPC Asia Xi’an Regional Contest",
    ],
  },
  {
    id: "2026-no-bronze-no-home",
    season: "2026",
    name: "no bronze no home",
    alternate: "加一蚊即送三個HKU學位",
    members: [
      "emmanuel-elisha-tong",
      "pok-man-lau",
      "cheuk-ki-so",
    ],
    honors: [],
  },
  {
    id: "2026-un-retired",
    season: "2026",
    name: "(un)retired",
    members: [
      "boyuan-hu",
      "siwei-wang",
      "keenan-christopher-adimulia",
    ],
    honors: [],
  },
  {
    id: "2026-untitled-3",
    season: "2026",
    name: "untitled(3)",
    alternate: "自定义名称3",
    members: [
      "yi-shing-zhuo",
      "tianze-nie",
      "zixuan-he",
    ],
    honors: [],
  },
  {
    id: "2026-chinese-can-fly",
    season: "2026",
    name: "Chinese can fly",
    alternate: "中国人能飞",
    members: [
      "yusaifan-wei",
      "haoran-yuan",
      "yunhao-qu",
    ],
    honors: [],
  },
  {
    id: "2025-hot-kpop-union",
    season: "2025",
    name: "Hot Kpop Union",
    alternate: "热门流行音乐联盟",
    members: [
      "mingfei-xia",
      "yuchen-wu",
      "qixuan-li",
    ],
    honors: [
      "Silver Medal in 50th ICPC Asia East Continent Final Contest",
      "Gold Medal (7th Place) in 50th ICPC Asia Hong Kong Regional Contest",
    ],
  },
  {
    id: "2025-team-name-ddl-today",
    season: "2025",
    name: "Team name ddl today",
    alternate: "今天必须取个队名",
    members: [
      "mingtian-yang",
      "jian-luo",
      "yancheng-liu",
    ],
    honors: [
      "3rd Place in ACM-HK Programming Contest",
      "Silver Medal in 50th ICPC Asia Hong Kong Regional Contest",
      "Bronze Medal in 50th ICPC Asia Nanjing Regional Contest",
    ],
  },
  {
    id: "2025-waiguoren",
    season: "2025",
    name: "Waiguoren",
    alternate: "外国人",
    members: [
      "christivan-komah",
      "owen-sidarta",
      "akhmet-issa",
    ],
    honors: [
      "Bronze Medal in 50th ICPC Asia Shanghai Regional Contest",
      "Silver Medal in 50th ICPC Asia Nanjing Regional Contest",
    ],
  },
  {
    id: "2025-kfc-enjoyers",
    season: "2025",
    name: "kfc_enjoyers",
    members: [
      "ismayil-maharramov",
      "richie-wilynnton",
      "shah-jahan-ishaq",
    ],
    honors: [],
  },
  {
    id: "2024-hot-kpop-union",
    season: "2024",
    name: "Hot Kpop Union",
    alternate: "热门流行音乐联盟",
    members: [
      "qiyue-xu",
      "yuchen-wu",
      "qixuan-li",
    ],
    honors: [
      "Champion in ACM-HK Programming Contest",
      "Bronze Medal in 49th ICPC Asia East Continent Final Contest",
      "Gold Medal (8th Place) in 49th ICPC Asia Hong Kong Regional Contest",
      "Gold Medal (7th Place) in 49th ICPC Asia Nanjing Regional Contest",
      "Honours in 49th ICPC World Finals",
    ],
  },
  {
    id: "2024-team-name-ddl-today",
    season: "2024",
    name: "Team name ddl today",
    alternate: "今天必须取个队名",
    members: [
      "mingtian-yang",
      "haoyuan-wu",
      "mingfei-xia",
    ],
    honors: [
      "Silver Medal in 49th ICPC Asia Hong Kong Regional Contest",
      "Bronze Medal in 49th ICPC Asia Nanjing Regional Contest",
    ],
  },
  {
    id: "2024-gojo-teacher",
    season: "2024",
    name: "Gojo Teacher",
    alternate: "五条牢师",
    members: [
      "jingyu-luo",
      "yufei-li",
      "yuchen-zhang",
    ],
    honors: [
      "Bronze Medal in 49th ICPC Asia East Continent Final Contest",
      "Bronze Medal in 49th ICPC Asia Hangzhou Regional Contest",
    ],
  },
  {
    id: "2024-cheeky-chubbies",
    season: "2024",
    name: "Cheeky Chubbies",
    alternate: "Cheeky Chubbies",
    members: [
      "po-wa-lee",
      "yerdaulet-mussabek",
      "dorjderem-namsraijav",
    ],
    honors: [
      "Bronze Medal in 49th ICPC Asia Hangzhou Regional Contest",
    ],
  },
  {
    id: "2023-huawei-15-pro-max",
    season: "2023",
    name: "huawei 15 pro max",
    alternate: "遥遥领先",
    members: [
      "che-liu",
      "anzhe-wang",
      "junkai-song",
    ],
    honors: [
      "Gold Medal in 48th ICPC Asia East Continent Final Contest",
      "Gold Medal and Outstanding Local Team in 48th ICPC Asia Macau Regional Contest",
      "Silver Medal in 48th ICPC Asia Hefei Regional Contest",
    ],
  },
  {
    id: "2023-better-rua-turtle",
    season: "2023",
    name: "Better rua turtle",
    alternate: "不如摸萨卡班甲鱼",
    members: [
      "haoyuan-wu",
      "jiannan-wang",
      "shengyao-sun",
    ],
    honors: [
      "Silver Medal in 48th ICPC Asia East Continent Final Contest",
      "Bronze Medal in 48th ICPC Asia Macau Regional Contest",
      "Bronze Medal in 48th ICPC Asia Hefei Regional Contest",
    ],
  },
  {
    id: "2023-404-not-found",
    season: "2023",
    name: "404 Not Found",
    alternate: "什么神什么启动",
    members: [
      "ching-wai-justin-yim",
      "yufei-li",
      "jingyu-luo",
    ],
    honors: [
      "Bronze Medal in 48th ICPC Asia Hefei Regional Contest",
      "Bronze Medal in 48th ICPC Asia Jinan Regional Contest",
    ],
  },
  {
    id: "2023-cant-enter-hw-312",
    season: "2023",
    name: "Cant enter HW 312",
    alternate: "開门呀呀呀",
    members: [
      "xinzhuang-xiong",
      "tsz-ching-chan",
      "yerdaulet-mussabek",
    ],
    honors: [
      "Bronze Medal in 48th ICPC Asia Hefei Regional Contest",
    ],
  },
  {
    id: "2022-i-am-not-in-danger-i-am-the-danger",
    season: "2022",
    name: "I am not in danger. I am the danger.",
    alternate: "我不是密接，我是阳性",
    members: [
      "che-liu",
      "anzhe-wang",
      "jiahe-jiang",
    ],
    honors: [
      "Honours in 47th ICPC World Finals",
      "Gold Medal in 47th ICPC Asia Hong Kong Regional Contest",
      "Gold Medal in 47th ICPC Asia Jinan Regional Contest",
      "Bronze Medal in 47th ICPC Asia East Continent Final Contest",
    ],
  },
  {
    id: "2022-put-yo-d-away-waltuh",
    season: "2022",
    name: "put yo d away waltuh",
    alternate: "牛牛拿开，老白",
    members: [
      "maodian-huang",
      "junkai-song",
      "shengyao-sun",
    ],
    honors: [
      "Silver Medal in 47th ICPC Asia Jinan Regional Contest",
      "Bronze Medal in 47th ICPC Asia East Continent Final Contest",
    ],
  },
  {
    id: "2022-team-name-ddl-today-again-who-didn-t-take-the-third-dose",
    season: "2022",
    name: "team name ddl today again (Who didn't take the third dose)",
    alternate: "今天必须再取个队名 (是谁没打第三针)",
    members: [
      "mingtian-yang",
      "xiaobang-hu",
      "boao-shi",
    ],
    honors: [
      "Silver Medal in 47th ICPC Asia Hong Kong Regional Contest",
      "Bronze Medal in 47th ICPC Asia Jinan Regional Contest",
      "Bronze Medal in 47th ICPC Asia East Continent Final Contest",
    ],
  },
  {
    id: "2022-fake-plastic-tree",
    season: "2022",
    name: "fake plastic tree",
    members: [
      "baicheng-liu",
      "maodian-huang",
      "rui-cao",
    ],
    honors: [
      "Silver Medal in 47th ICPC Asia Hong Kong Regional Contest",
    ],
  },
  {
    id: "2022-a-drop-table-teams",
    season: "2022",
    name: "A\"; DROP Table Teams;--",
    members: [
      "anzhe-wang",
      "jiahe-jiang",
      "maodian-huang",
    ],
    honors: [
      "3rd Place in ACM-HK Programming Contest 2023",
    ],
  },
  {
    id: "2022-3men1com",
    season: "2022",
    name: "3men1com",
    members: [
      "ho-ning-leung",
      "boao-shi",
      "mingfei-xia",
    ],
    honors: [],
  },
  {
    id: "2021-team-name-ddl-today",
    season: "2021",
    name: "Team name ddl today",
    alternate: "今天必须取个队名",
    members: [
      "zhiheng-lyu",
      "baicheng-liu",
      "mingtian-yang",
    ],
    honors: [
      "Gold Medal in 46th ICPC Asia Shanghai Regional Contest",
    ],
  },
  {
    id: "2021-gan-ronaldo",
    season: "2021",
    name: "Gan Ronaldo",
    alternate: "穷哥们琪琪",
    members: [
      "anzhe-wang",
      "junkai-song",
      "maodian-huang",
    ],
    honors: [
      "Gold Medal in 46th ICPC Asia Shanghai Regional Contest",
    ],
  },
  {
    id: "2021-your-oi-foundation-is-stronger-than-mine",
    season: "2021",
    name: "Your OI foundation is stronger than mine!",
    alternate: "你的OI基础比我扎实！",
    members: [
      "zhenwei-hu",
      "hiu-hei-chan",
      "meitong-liu",
    ],
    honors: [],
  },
  {
    id: "2021-the-sorting-hat-says-we-belong-to-azkaban",
    season: "2021",
    name: "The Sorting Hat says we belong to Azkaban",
    members: [
      "anzhe-wang",
      "jiahe-jiang",
      "ho-ning-leung",
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
    members: [
      "zhiheng-lyu",
      "jiahe-jiang",
      "baicheng-liu",
    ],
    honors: [
      "Honours in 45th ICPC World Finals",
      "Gold Medal in 45th ICPC Asia Nanjing Regional Contest",
      "Silver Medal in 45th ICPC Asia Shanghai Regional Contest",
    ],
  },
  {
    id: "2020-pandite-ostia",
    season: "2020",
    name: "Pandite Ostia",
    alternate: "潘滴特 奧斯蹄亞",
    members: [
      "ho-ning-leung",
      "yuanyue-yao",
      "chun-yin-lee",
    ],
    honors: [
      "Silver Medal in 45th ICPC Asia Nanjing Regional Contest",
      "Bronze Medal in 45th ICPC Asia Jinan Regional Contest",
    ],
  },
  {
    id: "2020-hunyuan-xingyi-taiji-gate",
    season: "2020",
    name: "Hunyuan Xingyi Taiji Gate",
    alternate: "浑元形意太极门",
    members: [
      "junkai-song",
      "anzhe-wang",
      "kai-i-lam",
    ],
    honors: [
      "Gold Medal in 45th ICPC Asia Jinan Regional Contest",
      "Silver Medal in 45th ICPC Asia Nanjing Regional Contest",
    ],
  },
  {
    id: "2020-ggdg-wq",
    season: "2020",
    name: "ggdG:wq",
    members: [
      "eehit-ray",
      "kwan-yin-chan",
      "zhenwei-hu",
    ],
    honors: [],
  },
  {
    id: "2020-s3xy-imposter",
    season: "2020",
    name: "S3xy imposter",
    members: [
      "vyomesh-dua",
      "haihui-zhou",
      "kwan-kin-chan",
    ],
    honors: [],
  },
  {
    id: "2019-gmt-8",
    season: "2019",
    name: "GMT+8",
    members: [
      "binrui-dong",
      "chun-yin-lee",
      "kin-hei-kwok",
    ],
    honors: [
      "Silver Medal in 44th ICPC Asia Regional East Continent Final Contest",
      "Silver Medal in 44th ICPC Asia Shanghai Regional Contest",
    ],
  },
  {
    id: "2019-no-response",
    season: "2019",
    name: "No Response",
    members: [
      "zhenwei-hu",
      "dongning-chen",
    ],
    honors: [
      "Bronze Medal in 44th ICPC Asia Shanghai Regional Contest",
    ],
  },
  {
    id: "2019-chmod-254-0",
    season: "2019",
    name: "chmod 254 $0",
    members: [
      "kwan-yin-chan",
      "shendy-marcello-yuniar",
      "dewang-maskara",
    ],
    honors: [],
  },
  {
    id: "2018-rising-hairline-div3-borderline",
    season: "2018",
    name: "^^rising hairline^^ (--Div3 Borderline--)",
    members: [
      "kin-hei-kwok",
      "qingwei-huang",
      "pak-nam-hui",
    ],
    honors: [
      "Gold Medal in 43rd ICPC Asia East Continent Final Contest",
      "Silver Medal in 43rd ICPC Asia Nanjing Regional Contest",
      "2nd Place in ACM-HK Programming Contest 2018",
    ],
  },
  {
    id: "2017-aha",
    season: "2017",
    name: "Aha!",
    members: [
      "kin-hei-kwok",
      "bintao-sun",
      "tianchi-cai",
    ],
    honors: [
      "Gold Medal in 42nd ACM-ICPC Asia Xi'an Regional Contest",
      "Silver Medal in 42nd ACM-ICPC Asia East Continent League Final Contest",
      "Silver Medal in 42nd ACM-ICPC Asia Hong Kong Regional Contest",
    ],
  },
  {
    id: "2017-too-young-to-ac",
    season: "2017",
    name: "Too young to AC",
    members: [
      "pak-nam-hui",
      "jikun-wang",
      "qingwei-huang",
    ],
    honors: [
      "Silver Medal in 42nd ACM-ICPC Asia Xi'an Regional Contest",
      "Bronze Medal in 42nd ACM-ICPC Asia Qingdao Regional Contest",
    ],
  },
  {
    id: "2017-turtle-racer",
    season: "2017",
    name: "Turtle Racer",
    members: [
      "chi-ian-tang",
      "michelle-yih-chyan-wang",
      "divyansh-singh",
    ],
    honors: [
      "Silver Medal in 42nd ACM-ICPC Asia Qingdao Regional Contest",
    ],
  },
  {
    id: "2016-superhighway",
    season: "2016",
    name: "SuperHighWay",
    members: [
      "bintao-sun",
      "jikun-wang",
      "pak-nam-hui",
    ],
    honors: [
      "Silver Medal in 41st ACM-ICPC Asia China Final Contest",
      "Silver Medal in 41st ACM-ICPC Asia Hong Kong Regional Contest",
      "Silver Medal in 41st ACM-ICPC Asia Dalian Regional Contest",
    ],
  },
  {
    id: "2016-acman-go",
    season: "2016",
    name: "ACman Go!",
    members: [
      "derun-gu",
      "tianchi-cai",
      "fangjun-zhang",
    ],
    honors: [
      "Silver Medal in 41st ACM-ICPC Asia Qingdao Regional Contest",
      "Bronze Medal in 41st ACM-ICPC Asia China Final Contest",
    ],
  },
  {
    id: "1990-hku",
    season: "1990",
    name: "HKU",
    members: [],
    honors: [
      "1st Place in ACM–HK Scholastic Programming Contest",
    ],
  },
  {
    id: "1994-hku",
    season: "1994",
    name: "HKU",
    members: [
      "siu-lai-chow",
      "kar-keung-to",
      "chi-lap-yip",
    ],
    honors: [
      "4th Place in ACM–HK Scholastic Programming Contest",
    ],
  },  {
    id: "2018-gmt-7",
    season: "2018",
    name: "GMT+7",
    members: [],
    honors: [
      "Gold Medal in 4th CCPC Final, Shenzhen",
    ],
  },
  {
    id: "2014-big-boss",
    season: "2014",
    name: "BIG BOSS",
    members: [
      "chun-chi-tsang",
      "tsun-au-yeung",
      "ning-kang",
    ],
    honors: [
      "1st Place in ACM-HK Programming Contest",
      "Silver Medal in 39th ACM-ICPC Asia Guangzhou Regional",
    ],
  },
  {
    id: "2014-it-genius",
    season: "2014",
    name: "IT Genius",
    members: [],
    honors: [
      "Bronze Medal in 39th ACM-ICPC Asia Guangzhou Regional",
    ],
  },
  {
    id: "2013-gmt",
    season: "2013",
    name: "GMT",
    members: [
      "tsun-au-yeung",
      "ka-chung-wong",
      "man-lok-wong",
    ],
    honors: [
      "Honourable Mention in 37th ACM-ICPC World Finals, Saint Petersburg, Russia",
    ],
  },
  {
    id: "2012-gmt",
    season: "2012",
    name: "GMT",
    members: [
      "tsun-au-yeung",
      "ka-chung-wong",
      "man-lok-wong",
    ],
    honors: [
      "Champion in 37th ACM-ICPC Asia Hanoi Regional",
    ],
  },
  {
    id: "2012-it-genius",
    season: "2012",
    name: "IT Genius",
    members: [
      "cheuk-hei-chan",
      "ka-lok-ho",
      "chun-chi-tsang",
    ],
    honors: [
      "First Prize (3rd Place) in 37th ACM-ICPC Asia Hanoi Regional",
    ],
  },
  {
    id: "2012-azureus",
    season: "2012",
    name: "Azureus",
    members: [],
    honors: [
      "4th Place in 37th ACM-ICPC Asia Jakarta Regional",
    ],
  },
  {
    id: "2009-far-manila",
    season: "2009",
    name: "Far",
    members: [],
    honors: [
      "6th Place in 34th ACM-ICPC Asia Manila Regional",
    ],
  },
  {
    id: "2009-longlonglong",
    season: "2009",
    name: "longlonglong",
    members: [],
    honors: [
      "7th Place in 34th ACM-ICPC Asia Manila Regional",
    ],
  },
  {
    id: "2009-temp",
    season: "2009",
    name: "Temp",
    members: [],
    honors: [
      "14th Place in 34th ACM-ICPC Asia Manila Regional",
    ],
  },
  {
    id: "2009-thunder",
    season: "2009",
    name: "Thunder",
    members: [],
    honors: [
      "31st Place in 34th ACM-ICPC Asia Manila Regional",
    ],
  },
  {
    id: "2009-far",
    season: "2008",
    name: "Far",
    members: [
      "kwong-hei-ng",
      "yan-ting-hui",
      "lik-yau-yip",
    ],
    honors: [
      "Honourable Mention in 33rd ACM-ICPC World Finals, Stockholm, Sweden",
    ],
  },
  {
    id: "2008-far",
    season: "2007",
    name: "Far",
    members: [],
    honors: [
      "1st Place in ACM Collegiate Programming Contest (Hong Kong)",
    ],
  },
  {
    id: "2008-hi-hi",
    season: "2007",
    name: "Hi Hi",
    members: [],
    honors: [
      "3rd Place in ACM Collegiate Programming Contest (Hong Kong)",
    ],
  },
  {
    id: "2008-hi-hi-jakarta",
    season: "2008",
    name: "Hi Hi",
    members: [
      "lai-yin-wong",
      "yiu-ming-lai",
      "sze-hang-chan",
    ],
    honors: [
      "Gold Medal in 33rd ACM-ICPC Asia Jakarta Regional",
    ],
  },
  {
    id: "2008-lucky",
    season: "2008",
    name: "LuCkY",
    members: [
      "liwen-sun",
      "yining-chen",
      "chiu-man-tong",
    ],
    honors: [],
  },
  {
    id: "2007-near",
    season: "2007",
    name: "Near",
    members: [
      "kayman-kc-lui",
      "kelly-sm-choi",
      "stephen-kf-lai",
    ],
    honors: [
      "Honourable Mention in 31st ACM-ICPC World Finals, Tokyo, Japan",
    ],
  },
  {
    id: "2006-fate",
    season: "2006",
    name: "Fate",
    members: [
      "chi-man-liu",
      "ka-cheong-lui",
      "sin-man-choi",
    ],
    honors: [
      "High Honours in 30th ACM-ICPC World Finals, San Antonio, USA",
    ],
  },
  {
    id: "2005-hkucs1",
    season: "2005",
    name: "HKUCS1",
    members: [
      "chi-man-liu",
      "chi-yung-tse",
      "siu-lung-tam",
    ],
    honors: [
      "Bronze Medal in 29th ACM-ICPC World Finals, Shanghai, China",
    ],
  },
  {
    id: "2004-hkuce",
    season: "2004",
    name: "HKUCE",
    members: [
      "koon-ho-wong",
      "man-hon-chan",
      "xiang-fan",
    ],
    honors: [
      "Honourable Mention in 28th ACM-ICPC World Finals, Prague, Czech Republic",
    ],
  },
  {
    id: "2001-tick",
    season: "2001",
    name: "TICK",
    members: [
      "chiu-yuen-koo",
      "ho-leung-chan",
      "kin-fai-tam",
    ],
    honors: [
      "High Honours in 25th ACM-ICPC World Finals, Vancouver, Canada",
    ],
  },
  {
    id: "2022-cargo-run",
    season: "2022",
    name: "Cargo, Run!",
    members: [
      "jiahe-jiang",
      "anzhe-wang",
      "shengyao-sun",
    ],
    honors: [
      "3rd Place in ACM-HK Programming Contest",
    ],
  },
  {
    id: "2013-big-boss",
    season: "2013",
    name: "BIG BOSS",
    members: [],
    honors: [
      "1st Place in ACM Collegiate Programming Contest (Hong Kong)",
    ],
  },
];

// Contestants who represented HKU in a season but whose squad assignment is
// not recorded. They appear in the season's contestant list, not a formation.
export const seasonMembersBySeason: Record<string, string[]> = {
  "2009": [
    "ka-cheong-lam",
    "eddie-lo",
    "yan-ting-hui",
    "lik-yau-yip",
    "denon-cheung",
    "divine-fung",
    "kwong-hei-ng",
  ],
};

// 2025 squads were coached by Qipeng Kuang. Mingtian Yang is the 2026 coach.
// The 2026 coach listing is stored separately from the 2025 team data.
export const coordinatorsBySeason: Record<string, string> = {
  "2026": 'weiming-feng',
  "2025": 'weiming-feng',
  "2024": 'hubert-chan',
  "2023": 'hubert-chan',
  "2022": 'hubert-chan',
  "2021": 'hubert-chan',
  "2020": 'hubert-chan',
  "2019": 'hubert-chan',
  "2018": 'hubert-chan',
  "2017": 'hubert-chan',
  "2016": 'hubert-chan',
  "2015": 'hubert-chan',
  "2014": 'hubert-chan',
  "2013": 'hubert-chan',
  "2012": 'hubert-chan',
  "2008": 'ho-leung-chan',
};

export const coachBySeason: Record<string, string> = {
  "2026": 'mingtian-yang',
  "2025": 'qipeng-kuang',
  "2024": 'qipeng-kuang',
  "2023": 'qipeng-kuang',
  "2022": 'hao-xie',
  "2021": 'hao-xie',
  "2020": 'hao-xie',
  "2019": 'bintao-sun',
  "2018": 'bintao-sun',
  "2017": 'chenzi-zhang',
  "2016": 'shaofeng-jiang',
  "2014": 'shaofeng-jiang',
  "2013": 'zhichao-zhao',
  "2009": 'ho-leung-chan',
  "2007": 'joe-kw-chong',
  "2008": 'reynold-cheng',
  "2012": 'luyi-mo',
  "1994": 'andrew-choi',
};
