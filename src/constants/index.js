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
    title: 'ChatterSphere - Real-Time Message Tool',
    desc: "A messaging application project. Explore its implementation and documentation in the source repository.",
    subdesc: '',
    href: "https://github.com/tongwux/ChatterSphere",
    isLive: true,
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Trade Titan - MERN Stock Trading System',
    desc: "A stock trading application experiment from my earlier portfolio.",
    subdesc: '',
    href: "",
    isLive: false,
    texture: '/textures/project/project1.mp4',
    logo: '/assets/stock.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Somni.AI - AI Sleep Coach',
    desc: "A sleep-focused application project. Explore the source repository for its current implementation.",
    subdesc: '',
    href: "https://github.com/tongwux/Somni_Sleep",
    isLive: true,
    texture: '/textures/project/project3.mp4',
    logo: '/assets/Sleep.png',
    logoStyle: {
      backgroundColor: 'rgba(35, 131, 96, 0.15)',
      border: '0.2px solid rgba(7, 70, 47, 0.19)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: ' MysticAI Tarot - AI Tarot Reading App',
    desc: "An AI tarot reading experiment. Explore its implementation and documentation on GitHub.",
    subdesc: '',
    href: "https://github.com/tongwux/ai-tarot-reading",
    isLive: true,
    texture: '/textures/project/project3.mp4',
    logo: '/assets/tarot.png',
    logoStyle: {
      backgroundColor: 'rgba(191, 62, 250, 0.15)',
      border: '0.2px solid rgba(182, 33, 251, 0.19)',
      boxShadow: '0px 0px 60px 0px rgba(168, 74, 212, 0.3)',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
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
