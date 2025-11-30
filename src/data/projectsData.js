// src/data/projectsData.js

export const softwareProjects = [
  {
    id: "digital-liger",
    section: "Software & Web Projects",
    icon: "🛒",
    title: "Digital Liger Marketplace",
    summary:
      "A full-stack e-commerce platform for game keys, gift cards, and software subscriptions. Automates product imports, price syncing, and secure order workflows using wholesaler APIs.",
    techSummary: "React · Node.js · TypeScript · PostgreSQL · REST APIs",
    metric: "Reduces catalog maintenance by automating 80%+ of product updates.",
    links: {
      github: "https://github.com/cejohns", // swap to exact repo when ready
      live: null, // or "https://digitalliger.example.com" when live
    },
  },
  {
    id: "aerospace-mes",
    section: "Software & Web Projects",
    icon: "🏭",
    title: "AeroSpaceMES",
    summary:
      "A manufacturing execution system (MES) designed for aerospace workflows with role-based task tracking, QA approvals, and AS9102-style documentation.",
    techSummary: "React · Node.js · SQLite/PostgreSQL · Playwright · Jest",
    metric: "Designed to support FAA/AS9102-style compliance workflows.",
    links: {
      github: "https://github.com/LigerTech-LLC", // update to exact repo
      live: null,
    },
  },
  {
    id: "fgn",
    section: "Software & Web Projects",
    icon: "🎮",
    title: "FireStar Gaming Network",
    summary:
      "A custom CMS and front-end for gaming news, reviews, guides, and video content. Includes admin approvals, media management, and SEO-friendly routing.",
    techSummary:
      "MERN-style full-stack · Tailwind CSS · Admin Panel",
    metric: "Built to streamline publishing for news, reviews, tutorials, and playthroughs.",
    links: {
      github: "https://github.com/FireStarGamingNetwork", // update specific repo
      live: null, // e.g. "https://firestargn.com" when fully live
    },
  },
  {
    id: "job-bot",
    section: "Software & Web Projects",
    icon: "🤖",
    title: "Job Application Automation Bot",
    summary:
      "A Python + Selenium tool that automates job form submissions and injects relevant keywords into resumes to increase match rates and save hours each week.",
    techSummary: "Python · Selenium · HTML DOM parsing",
    metric: "Cuts manual application time by ~70% for repetitive job boards.",
    links: {
      github: "https://github.com/cejohns", // update to specific job bot repo
      live: null,
    },
  },
];

export const gameProjects = [
  {
    id: "match3",
    section: "Game Development Projects",
    icon: "🎲",
    title: "Match-3 Game Prototype",
    summary:
      "A Unity match-3 prototype featuring tile matching, cascades, power-ups, chapter progression, unlocks, and a multi-slot save/load system.",
    techSummary: "Unity · C# · Scriptable Objects · Custom Board/Match Logic",
    metric:
      "Implements a full puzzle loop with goals, cascades, power-ups, and 3-slot save/load for future live-ops content.",
    links: {
      github: "https://github.com/cejohns", // TODO: point to the match-3 repo
      demo: null, // or a video / itch.io link later
    },
  },
  {
    id: "ue5-fighter",
    section: "Game Development Projects",
    icon: "🥋",
    title: "UE5 Fighting Game Prototype",
    summary:
      "A 3D fighting game prototype with training-style arena, input system, early combat logic, and a foundation for modding and online play.",
    techSummary:
      "Unreal Engine 5 · Blueprint Gameplay Framework · C++ Extensions · Input/Camera Systems",
    metric:
      "Structured with modular Blueprint/C++ architecture for future rollback netcode, mod support, and ranked matchmaking.",
    links: {
      github: "https://github.com/cejohns", // TODO: link to UE5 fighting game repo
      demo: null,
    },
  },
];
