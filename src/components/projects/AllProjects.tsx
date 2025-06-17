import { UniqueButton } from "./demo_components/UniqueButton";

interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  isLive: boolean;
  isGithub: boolean;
  liveUrl: string;
  githubUrl: string;
  date?: string;
  screenshots?: string[];
  carousel?: boolean;
  interactiveComponent?: boolean;
  component?: React.ComponentType;
  interactiveDemo?: boolean;
  interactiveComponentDemo?: boolean;
  demoUrl?: string;
  isFeatured: boolean;
  isFrontendFeatured: boolean;
  isBackendFeatured: boolean;
}

// Featured Projects
export const allProjects: Project[] = [
  {
    id: 1,
    title: "Caloric Tracker",
    description: "A web app that tracks your caloric intake and helps you reach your fitness goals. Built with React, TypeScript, and Tailwind CSS.",
    shortDescription: "A web app that tracks your caloric intake and helps you reach your fitness goals. Built with React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    isLive: true,
    isGithub: true,
    liveUrl: "https://calorie-tracker-henna.vercel.app/",
    githubUrl: "https://github.com/daurham/calorie-tracker",
    date: "2024-02-10",
    interactiveDemo: true,
    component: null,
    screenshots: [
      "/screenshots/calorie_tracker_4.png",
      "/screenshots/calorie_tracker_1.png",
      "/screenshots/calorie_tracker_2.png",
      "/screenshots/calorie_tracker_3.png",
    ],
    carousel: true,
    isFeatured: false,
    isFrontendFeatured: true,
    isBackendFeatured: false,
  },
  {
    id: 2,
    title: "iPhone SMS Transcriptor",
    description: "A desktop app that extracts SMS messages from iPhone backups and converts them into TXT, CSV, or JSON files—saved directly to your desktop. Preserve meaningful conversations, memories, and important exchanges in an organized format. Supports multiple export formats and advanced filtering.",
    shortDescription: "A desktop app that extracts SMS messages from iPhone backups and converts them into TXT, CSV, or JSON files—saved directly to your desktop. Preserve meaningful conversations, memories, and important exchanges in an organized format.",
    technologies: ["Windows", "Flutter", "Dart", "SQLite"],
    isLive: false,
    isGithub: true,
    liveUrl: null,
    githubUrl: "https://github.com/daurham/iphone_sms_transcriptor",
    date: "2023-11-01",
    screenshots: [
      "/screenshots/iphone_sms_1.png",
    ],
    carousel: false,
    interactiveDemo: false,
    component: null,
    isFeatured: true,
    isFrontendFeatured: true,
    isBackendFeatured: false,
  },
  {
    id: 3,
    title: "PiRoutine",
    description: "A full-stack alarm system connecting an AWS EC2 client to a Raspberry Pi server with a relay switched water pump. It prompts users to wake up for a morning run, or else the bed gets soaked. Features a web dashboard and real-time notifications.",
    shortDescription: "A full-stack alarm system connecting an AWS EC2 client to a Raspberry Pi server with a relay switched water pump. It prompts users to wake up for a morning run, or else the bed gets soaked. Features a web dashboard and real-time notifications.",
    technologies: ["TypeScript", "React", "Node.js", "Express", "MySQL", "AWS", "Raspberry Pi"],
    isLive: false,
    isGithub: true,
    liveUrl: null,
    githubUrl: "https://github.com/daurham/PiRoutine-EC2-Client",
    date: "2022-06-15",
    interactiveDemo: true,
    component: null,
    demoUrl: "https://piroutine-demo.vercel.app/",
    carousel: true,
    screenshots: [
      "/screenshots/piroutine_1.png",
      "/screenshots/piroutine_3.png",
      "/screenshots/piroutine_2.png",
      "/screenshots/piroutine_4.png",
    ],
    isFeatured: true,
    isFrontendFeatured: true,
    isBackendFeatured: false,
  },
  {
    id: 4,
    title: "PiRoutine",
    description: "A full-stack alarm system connecting an AWS EC2 client to a Raspberry Pi server with a relay switched water pump. It prompts users to wake up for a morning run, or else the bed gets soaked. Features a web dashboard and real-time notifications.",
    shortDescription: "A full-stack alarm system connecting an AWS EC2 client to a Raspberry Pi server with a relay switched water pump. It prompts users to wake up for a morning run, or else the bed gets soaked. Features a web dashboard and real-time notifications.",
    technologies: ["TypeScript", "React", "Node.js", "Express", "MySQL", "AWS", "Raspberry Pi"],
    isLive: false,
    isGithub: true,
    liveUrl: null,
    githubUrl: "https://github.com/daurham/PiRoutine-Pi-Server",
    date: "2022-06-15",
    interactiveDemo: true,
    component: null,
    demoUrl: "https://piroutine-demo.vercel.app/",
    isFeatured: false,
    isFrontendFeatured: false,
    isBackendFeatured: true,
  },
  // {
  //   id: 5,
  //   title: "Daurham.com",
  //   description: "My personal website built with React, Tailwind CSS, and TypeScript. Features a beautiful, interactive portfolio and blog. Includes dark mode and custom animations.",
  //   shortDescription: "My personal website built with React, Tailwind CSS, and TypeScript. Features a beautiful, interactive portfolio and blog. Includes dark mode and custom animations.",
  //   technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  //   isLive: true,
  //   isGithub: true,
  //   liveUrl: "https://daurham.com",
  //   githubUrl: "https://github.com/daurham/daurham.com",
  //   date: "2024-04-01",
  //   carousel: false,
  //   interactiveDemo: false,
  //   component: null,
  //   isFeatured: true,
  //   isFrontendFeatured: true,
  //   isBackendFeatured: false,
  // },
  {
    id: 6,
    title: "AI Disk Cleanup",
    description: "A desktop app that cleans up your disk by deleting unnecessary files and freeing up space. Built with Flutter and Dart.",
    shortDescription: "A desktop app that cleans up your disk by deleting unnecessary files and freeing up space. Built with Flutter and Dart.",
    technologies: ["Windows", "Flutter", "Dart", "SQLite"],
    isLive: false,
    isGithub: true,
    liveUrl: null,
    githubUrl: "https://github.com/daurham/ai_disk_cleanup",
    date: "2024-02-10",
    interactiveDemo: false,
    component: null,
    screenshots: [
      "/screenshots/ai_disk_cleanup_1.png",
      "/screenshots/ai_disk_cleanup_2.png",
      "/screenshots/ai_disk_cleanup_3.png"
    ],
    carousel: true,
    isFeatured: false,
    isFrontendFeatured: false,
    isBackendFeatured: false,
  },
  {
    id: 7,
    title: "Fitness Tracker",
    description: "A web app that tracks your fitness progress and helps you reach your goals. Built with React, TypeScript, and Tailwind CSS.",
    shortDescription: "A web app that tracks your fitness progress and helps you reach your goals. Built with React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "CSS Animations"],
    isLive: true,
    isGithub: true,
    githubUrl: "https://github.com/daurham/jakes-fitness-tracker",
    liveUrl: "https://jakes-fitness-tracker.vercel.app/",
    date: "2024-05-05",
    interactiveComponent: false,
    component: null,
    screenshots: null,
    carousel: false,
    interactiveDemo: false,
    isFeatured: false,
    isFrontendFeatured: true,
    isBackendFeatured: false,
  },
  // Dummy project with a long description
  {
    id: 8,
    title: "PhotoSnap Carousel",
    description: "A responsive photo carousel component with touch and keyboard navigation. Supports lazy loading, custom transitions, and accessibility features. Designed for seamless integration into any React project, with a focus on performance and user experience. Includes a variety of themes and configuration options for developers.",
    shortDescription: "A responsive photo carousel component with touch and keyboard navigation. Supports lazy loading, custom transitions, and accessibility features. Designed for seamless integration into any React project, with a focus on performance and user experience. Includes a variety of themes and configuration options for developers.",
    technologies: ["React", "TypeScript", "Framer Motion"],
    isLive: true,
    isGithub: true,
    liveUrl: "https://photosnap-carousel.com",
    githubUrl: "https://github.com/daurham/photosnap-carousel",
    date: "2023-09-20",
    interactiveDemo: false,
    component: null,
    screenshots: [
      "/screenshots/photosnap_1.png",
      "/screenshots/photosnap_2.png",
      "/screenshots/photosnap_3.png"
    ],
    carousel: true,
    isFeatured: false,
    isFrontendFeatured: false,
    isBackendFeatured: false,
  },
];