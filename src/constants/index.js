export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about-anchor',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [];

export const myProjects = [
  {
    "title": "ChatterSphere",
    "desc": "A one-to-one messaging application combining persisted conversations with live delivery and online-user presence.",
    "subdesc": "",
    "href": "https://github.com/tongwux/ChatterSphere",
    "isLive": false,
    "texture": "/textures/project/project2.mp4",
    "logo": "/assets/project-logo2.png",
    "logoStyle": {
      "backgroundColor": "#13202F",
      "border": "0.2px solid #17293E",
      "boxShadow": "0px 0px 60px 0px #2F6DB54D"
    },
    "spotlight": "/assets/spotlight2.png",
    "tags": [],
    "category": "Full-stack web · learning project",
    "features": [
      "Account signup, JWT cookie sessions and protected HTTP routes",
      "MongoDB conversation history, live Socket.io messages and presence",
      "React Context for sessions; Zustand for conversation selection"
    ],
    "stack": [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS / DaisyUI",
      "Node.js / Express",
      "MongoDB / Mongoose",
      "Socket.io",
      "JWT / bcrypt"
    ],
    "scope": "Tutorial-based learning project. Group chat is not implemented; socket authentication and production hardening remain next steps."
  },
  {
    "title": "Trade Titan",
    "reference": {"title":"MERN trading-platform reference · Zerodha course project","href":"https://github.com/apna-college/Zerodha"},
    "plannedStack": ["MongoDB", "Express", "React", "Node.js"],
    "desc": "Growing a personal US-stock research desk into a trading application. The existing tool brings market research, watchlists and manually recorded fills into one workspace.",
    "subdesc": "",
    "href": "",
    "isLive": false,
    "texture": "/textures/project/project1.mp4",
    "logo": "/assets/stock.png",
    "logoStyle": {
      "backgroundColor": "#2A1816",
      "border": "0.2px solid #36201D",
      "boxShadow": "0px 0px 60px 0px #AA3C304D"
    },
    "spotlight": "/assets/spotlight1.png",
    "tags": [],
    "category": "Personal stock desk · trading app in development",
    "features": [
      "TradingView market charts, grouped watchlists and earnings information",
      "Server routes for watchlist persistence and quote retrieval",
      "Manual trade records and position valuation from entered fills"
    ],
    "stack": [
      "React 19",
      "TypeScript",
      "Next.js / Vinext",
      "Cloudflare Workers",
      "Cloudflare D1",
      "TradingView widgets"
    ],
    "scope": "Current foundation: the personal Stock Desk. Broker connectivity, automated order execution and a public source repository are not part of the current implementation.",
    "sourceLabel": "Private project"
  },
  {
    "title": "Somni Sleep",
    "desc": "A SwiftUI prototype exploring a calmer bedtime routine through a sleep dashboard, scheduling, ambient audio and a conversational coach interface.",
    "subdesc": "",
    "href": "https://github.com/tongwux/Somni_Sleep",
    "isLive": false,
    "texture": "/textures/project/project3.mp4",
    "logo": "/assets/Sleep.png",
    "logoStyle": {
      "backgroundColor": "rgba(35, 131, 96, 0.15)",
      "border": "0.2px solid rgba(7, 70, 47, 0.19)",
      "boxShadow": "0px 0px 60px 0px rgba(35, 131, 96, 0.3)"
    },
    "spotlight": "/assets/spotlight3.png",
    "tags": [],
    "category": "Native iOS · wellness prototype",
    "features": [
      "SwiftUI onboarding, tab navigation and reusable dashboard cards",
      "Looping AVFoundation playback with volume and stop-timer controls",
      "URLSession request service and a dedicated Keychain credential manager"
    ],
    "stack": [
      "Swift",
      "SwiftUI",
      "AVFoundation",
      "URLSession",
      "Keychain",
      "AppStorage"
    ],
    "scope": "Sleep records are simulated. Coach networking is scaffolded but its credential initialization still needs repair; no HealthKit or sensor-based tracking is implemented."
  },
  {
    "title": "Tarot Reading",
    "desc": "An animated three-card reading experience focused on selection, reveal transitions and a responsive card-based interface.",
    "subdesc": "",
    "href": "https://github.com/tongwux/ai-tarot-reading",
    "isLive": false,
    "texture": "/textures/project/project3.mp4",
    "logo": "/assets/tarot.png",
    "logoStyle": {
      "backgroundColor": "rgba(191, 62, 250, 0.15)",
      "border": "0.2px solid rgba(182, 33, 251, 0.19)",
      "boxShadow": "0px 0px 60px 0px rgba(168, 74, 212, 0.3)"
    },
    "spotlight": "/assets/spotlight5.png",
    "tags": [],
    "category": "Interactive frontend · prototype",
    "features": [
      "Select three distinct cards from a configured 21-card deck",
      "Shuffle, hover and reveal transitions with Framer Motion",
      "Typed card components, image fallbacks and local reading text"
    ],
    "stack": [
      "Next.js 14",
      "React",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS"
    ],
    "scope": "The current reading text is a local lookup, with no AI model call, account system or saved-reading backend."
  }
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Pilot Technology',
    pos: 'Software Engineer Intern',
    duration: '2024 (from original portfolio)',
    title: [
      "Optimized E-commerce Search Engine performance by designing and implementing RESTful APIs, collaborating with the development team to enhance functionality and user experience.",
      "Migrated data from PostgreSQL to Elasticsearch, creating efficient indices for storing and retrieving product data, which reduced query response times by 30% and improved system scalability.",
      "Implemented advanced search features such as spell correction, voice-to-text integration, language translation, and natural language query keyword extraction, resulting in increased search accuracy and overall user engagement."
    ],
    icon: '/assets/pilot.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Molarray',
    pos: 'Software Developer',
    duration: '2022 - 2022',
    title: [
      "Integrated ElastiCache (Redis) to cache the top 100 most frequently accessed commodity products, optimizing query performance by 35% through database schema enhancements, including specific product table indexing.",
      "Leveraged AWS OpenSearch to improve catalog search efficiency by 28% for fuzzy searches and utilized Amazon S3 to store static product assets (videos, images), ensuring high availability and efficient data retrieval. ",
    ],
    icon: '/assets/Molarray.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Didi',
    pos: 'Technical Product Manager Intern',
    duration: '2021 - 2021',
    title: "Designed an in-app ride-share booking platform to support the dispatch algorithm and increase driver capacity by 20%, and performed QA testing on the delivery.",
    icon: '/assets/Didi.png',
    animation: 'salute',
  },
];
