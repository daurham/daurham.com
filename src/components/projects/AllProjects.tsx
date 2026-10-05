interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  isLive: boolean;
  isGithub: boolean;
  liveUrl?: string;
  githubUrl?: string;
  date?: string;
  screenshots?: string[];
  carousel?: boolean;
  interactiveDemo?: boolean;
  demoUrl?: string;
  isFeatured: boolean;
  isFrontendFeatured: boolean;
  isBackendFeatured: boolean;
}

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Daurham Health",
    description:
      "A personal health intelligence platform that brings nutrition, training, body measurements, activity, sleep, supplements, progress, experiments, and benchmark results into one system. It includes structured provider ingestion, explicit data provenance, immutable result history, backups, tests, and an anonymous read-only demo surface.",
    shortDescription:
      "A full-stack personal health intelligence platform for nutrition, training, sleep, activity, experiments, and longitudinal progress.",
    technologies: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Vercel",
      "Gemini",
      "Vitest",
    ],
    isLive: false,
    isGithub: true,
    githubUrl: "https://github.com/daurham/daurham-health",
    date: "2026-09-22",
    screenshots: [],
    carousel: false,
    interactiveDemo: false,
    isFeatured: true,
    isFrontendFeatured: true,
    isBackendFeatured: true,
  },
  {
    id: 2,
    title: "Home Dashboard",
    description:
      "A household operations dashboard designed for a wall-mounted kiosk and everyday use. It combines finance workflows, safe-to-spend budgeting, savings and debt views, calendar information, home status, and integrations with self-hosted services in a responsive modular interface.",
    shortDescription:
      "A modular household operations dashboard combining finance, planning, home status, and self-hosted services.",
    technologies: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Plaid",
      "Recharts",
      "Docker",
    ],
    isLive: false,
    isGithub: true,
    githubUrl: "https://github.com/daurham/home-dashboard",
    date: "2026-09-28",
    screenshots: [],
    carousel: false,
    interactiveDemo: false,
    isFeatured: true,
    isFrontendFeatured: true,
    isBackendFeatured: true,
  },
  {
    id: 3,
    title: "Calorie & Macro Tracker",
    description:
      "A production nutrition tracker built around fast daily logging. It combines a personal food catalog with USDA references, barcode lookup, nutrition-label capture, AI-assisted food estimation, reusable meals, macro goals, and PostgreSQL-backed history while keeping AI usage controlled and cacheable.",
    shortDescription:
      "A production nutrition tracker with fast logging, barcode lookup, label capture, AI-assisted estimates, and PostgreSQL-backed history.",
    technologies: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Gemini",
      "Vercel",
      "ZXing",
    ],
    isLive: true,
    isGithub: true,
    liveUrl: "https://calorie-tracker-henna.vercel.app/",
    githubUrl: "https://github.com/daurham/calorie-tracker",
    date: "2026-10-03",
    screenshots: [
      "/screenshots/calorie_tracker_4.png",
      "/screenshots/calorie_tracker_1.png",
      "/screenshots/calorie_tracker_2.png",
      "/screenshots/calorie_tracker_3.png",
    ],
    carousel: true,
    interactiveDemo: false,
    isFeatured: true,
    isFrontendFeatured: true,
    isBackendFeatured: true,
  },
  {
    id: 4,
    title: "Home AI",
    description:
      "A self-hosted AI API running in Docker with Ollama-backed local models. It exposes authenticated endpoints for general AI, home-assistant workflows, nutrition/vision tasks, streaming responses, latency monitoring, and structured workout transcription while starting automatically as a Linux service.",
    shortDescription:
      "A Dockerized local AI API with authenticated Ollama endpoints, vision workflows, streaming, and Linux service automation.",
    technologies: [
      "Node.js",
      "Express",
      "Docker",
      "Ollama",
      "Linux",
      "Systemd",
    ],
    isLive: false,
    isGithub: true,
    githubUrl: "https://github.com/daurham/home-ai",
    date: "2026-09-20",
    screenshots: [],
    carousel: false,
    interactiveDemo: false,
    isFeatured: true,
    isFrontendFeatured: false,
    isBackendFeatured: true,
  },
  {
    id: 5,
    title: "PiRoutine",
    description:
      "A full-stack alarm system connecting an AWS-hosted web client to a Raspberry Pi and relay-switched water pump. It turns a morning routine into a real hardware consequence, combining web UX, APIs, cloud deployment, and physical-device control.",
    shortDescription:
      "A full-stack alarm system connecting an AWS web client to a Raspberry Pi and relay-controlled water pump.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "AWS",
      "Raspberry Pi",
    ],
    isLive: false,
    isGithub: true,
    githubUrl: "https://github.com/daurham/PiRoutine-EC2-Client",
    date: "2022-06-15",
    interactiveDemo: true,
    demoUrl: "https://piroutine-demo.vercel.app/",
    carousel: true,
    screenshots: [
      "/screenshots/piroutine_1.png",
      "/screenshots/piroutine_3.png",
      "/screenshots/piroutine_2.png",
      "/screenshots/piroutine_4.png",
    ],
    isFeatured: false,
    isFrontendFeatured: true,
    isBackendFeatured: false,
  },
  {
    id: 6,
    title: "PiRoutine API & Pi Server",
    description:
      "The backend and Raspberry Pi side of PiRoutine, handling the application workflow that connects the cloud-hosted client to the physical alarm hardware.",
    shortDescription:
      "The backend and Raspberry Pi service layer behind the PiRoutine hardware alarm system.",
    technologies: ["Node.js", "Express", "MySQL", "AWS", "Raspberry Pi"],
    isLive: false,
    isGithub: true,
    githubUrl: "https://github.com/daurham/PiRoutine-Pi-Server",
    date: "2022-06-15",
    screenshots: [],
    carousel: false,
    interactiveDemo: false,
    isFeatured: false,
    isFrontendFeatured: false,
    isBackendFeatured: true,
  },
  {
    id: 7,
    title: "iPhone SMS Transcriptor",
    description:
      "A Flutter desktop utility that reads iPhone backup data and exports message history into portable text, CSV, or JSON files with filtering and local processing.",
    shortDescription:
      "A Flutter desktop utility that turns iPhone backup message data into portable exports.",
    technologies: ["Flutter", "Dart", "SQLite", "Windows"],
    isLive: false,
    isGithub: true,
    githubUrl: "https://github.com/daurham/iphone_sms_transcriptor",
    date: "2024-01-01",
    screenshots: [],
    carousel: false,
    interactiveDemo: false,
    isFeatured: false,
    isFrontendFeatured: false,
    isBackendFeatured: false,
  },
  {
    id: 8,
    title: "Book Manager",
    description:
      "A time-boxed take-home project built from two wireframes in 24 hours. It demonstrates state management, responsive product UI, adding and editing books, and translating sparse requirements into a polished application.",
    shortDescription:
      "A 24-hour take-home build demonstrating responsive UI, state management, and product execution from wireframes.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    isLive: true,
    isGithub: false,
    liveUrl: "https://book-manager-ashy.vercel.app/",
    date: "2025-06-17",
    screenshots: [
      "/screenshots/book_manager_1.png",
      "/screenshots/book_manager_2.png",
    ],
    carousel: true,
    interactiveDemo: false,
    isFeatured: false,
    isFrontendFeatured: true,
    isBackendFeatured: false,
  },
  {
    id: 9,
    title: "Job Prompt Helper",
    description:
      "A Chrome extension that keeps reusable job-application responses and personal details one click away in a persistent floating panel, reducing repetitive form work.",
    shortDescription:
      "A Chrome extension for quickly reusing job-application responses and personal information.",
    technologies: ["JavaScript", "HTML", "CSS", "Chrome Extensions"],
    isLive: true,
    isGithub: true,
    liveUrl:
      "https://chromewebstore.google.com/detail/job-prompt-helper/beihennhbehhjhgeoiolckbpioogjlje",
    githubUrl: "https://github.com/daurham/job_prompt_helper",
    date: "2025-07-31",
    screenshots: [],
    carousel: false,
    interactiveDemo: false,
    isFeatured: false,
    isFrontendFeatured: true,
    isBackendFeatured: false,
  },
  {
    id: 10,
    title: "Toolbox",
    description:
      "A Bash command-line toolbox for common file, archive, search, and development operations, built as a lightweight collection of reusable terminal utilities.",
    shortDescription:
      "A Bash toolbox for reusable file, archive, search, and development operations.",
    technologies: ["Bash", "Linux", "CLI"],
    isLive: false,
    isGithub: true,
    githubUrl: "https://github.com/daurham/toolbox",
    date: "2025-07-31",
    screenshots: [],
    carousel: false,
    interactiveDemo: false,
    isFeatured: false,
    isFrontendFeatured: false,
    isBackendFeatured: true,
  },
];
