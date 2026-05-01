// src/data/projectsData.js

export const softwareProjects = [
  {
    id: "fgn",
    section: "Software & Web Projects",
    icon: "🎮",
    title: "FireStar Gaming Network",
    summary:
      "A gaming media platform for news, reviews, guides, releases, videos, and blog content. Built with a modern CMS workflow, admin approvals, SEO-friendly pages, RSS ingestion, AI-assisted publishing, and game data integrations.",
    techSummary:
      "Next.js · Supabase · PostgreSQL · Vercel · Edge Functions · RSS APIs · IGDB · RAWG",
    metric:
      "Built a scalable gaming content platform with automated news ingestion, admin publishing workflows, and production deployment on Vercel.",
    links: {
      github: "https://github.com/cejohns/FGN",
      live: "https://www.firestargn.com",
    },
  },
  {
    id: "digital-liger",
    section: "Software & Web Projects",
    icon: "🛒",
    title: "Digital Liger Marketplace",
    summary:
      "A digital commerce platform for game keys, gift cards, and software subscriptions. Designed to support distributor APIs, product imports, price syncing, checkout, inventory updates, and automated order fulfillment.",
    techSummary:
      "React · TypeScript · Node.js · Express · PostgreSQL · Stripe · REST APIs",
    metric:
      "Designed to reduce manual product management by automating imports, pricing updates, and fulfillment workflows.",
    links: {
      github: "https://github.com/cejohns",
      live: null,
    },
  },
  {
    id: "aerospace-mes",
    section: "Software & Web Projects",
    icon: "🏭",
    title: "AeroSpaceMES",
    summary:
      "An aerospace-focused manufacturing execution system for task tracking, QA sign-offs, AS9102/FAI package workflows, role-based approvals, validation rules, dashboards, shift tracking, and PDF/CSV reporting.",
    techSummary:
      "React · Node.js · PostgreSQL · Express · Playwright · Jest · PDF/CSV Export",
    metric:
      "Designed compliance-driven workflows for aerospace manufacturing, including QA approvals, work order progression, and AS9102-style documentation.",
    links: {
      github: "https://github.com/LigerTech-LLC",
      live: null,
    },
  },
  {
    id: "ligertech-cms",
    section: "Software & Web Projects",
    icon: "🧩",
    title: "LigerTech CMS",
    summary:
      "A scalable company CMS for managing LigerTech divisions, corporate pages, news updates, and brand content. Built to support multiple business lines under one web platform.",
    techSummary:
      "Next.js · Supabase · PostgreSQL · Admin CRUD · Vercel",
    metric:
      "Created the foundation for a multi-division CMS supporting company pages, news, and brand content management.",
    links: {
      github: "https://github.com/cejohns",
      live: null,
    },
  },
  {
    id: "job-bot",
    section: "Software & Web Projects",
    icon: "🤖",
    title: "Job Application Automation Bot",
    summary:
      "A Python automation tool for job search workflows, form filling, resume targeting, and application tracking. Built to speed up repetitive application tasks and support customized outreach.",
    techSummary:
      "Python · Selenium · Web Scraping · Automation · Resume Optimization",
    metric:
      "Built to reduce repetitive job application work and improve resume-job matching through automation.",
    links: {
      github: "https://github.com/cejohns",
      live: null,
    },
  },
];

export const gameProjects = [
  {
    id: "match3",
    section: "Game Development Projects",
    icon: "🎲",
    title: "Crystal Clash Match-3 Prototype",
    summary:
      "A Unity match-3 game prototype featuring tile matching, cascades, power-ups, goals, chapter progression, marketplace systems, save slots, and UI screens.",
    techSummary:
      "Unity · C# · Scriptable Objects · Custom Board Logic · UI Systems",
    metric:
      "Built the core puzzle loop with match detection, cascades, objectives, power-ups, save/load flow, and marketplace foundations.",
    links: {
      github: "https://github.com/cejohns",
      demo: null,
    },
  },
  {
    id: "ue5-fighter",
    section: "Game Development Projects",
    icon: "🥋",
    title: "UE5 Fighting Game Prototype",
    summary:
      "A 3D fighting game prototype using Unreal Engine 5 with local multiplayer, training-stage arena, input systems, early combat logic, and a foundation for online play, ranked matchmaking, replay systems, and mod support.",
    techSummary:
      "Unreal Engine 5 · Blueprint · C++ · Input Systems · Multiplayer Foundations",
    metric:
      "Structured a modular Blueprint/C++ fighting game foundation for future rollback netcode, ranked matchmaking, spectator logic, and modding support.",
    links: {
      github: "https://github.com/cejohns",
      demo: null,
    },
  },
  {
    id: "ffplugin",
    section: "Game Development Projects",
    icon: "🛠️",
    title: "FightManufacturing / FFPlugin",
    summary:
      "A game development tool concept for connecting MUGEN and Fighter Factory data/files into modern engines, with a focus on fighting game workflows and modding support.",
    techSummary:
      "Unreal Engine 5 · C++ · Blueprint · MUGEN · Fighter Factory",
    metric:
      "Designed as a bridge between legacy fighting game creation tools and modern game development pipelines.",
    links: {
      github: "https://github.com/cejohns",
      demo: null,
    },
  },
];