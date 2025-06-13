import { UniqueButton } from "./demo_components/UniqueButton";


interface Project {
  title: string;
  description: string;
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
  demoUrl?: string;
}

// Featured Projects
export const projects: Project[] = [
  {
    title: "iPhone SMS Transcriptor",
    description: "A desktop app that extracts SMS messages from iPhone backups and converts them into TXT, CSV, or JSON files—saved directly to your desktop. Preserve meaningful conversations, memories, and important exchanges in an organized format. Supports multiple export formats and advanced filtering.",
    technologies: ["Windows", "Flutter", "Dart", "SQLite"],
    isLive: false,
    isGithub: true,
    liveUrl: null,
    githubUrl: "https://github.com/daurham/iphone_sms_transcriptor",
    date: "2023-11-01",
    screenshots: [
      "/screenshots/iphone_sms_1.png",
      "/screenshots/iphone_sms_2.png"
    ],
    carousel: true,
    interactiveDemo: false,
    component: null,
  },
  {
    title: "PiRoutine",
    description: "A full-stack alarm system connecting an AWS EC2 client to a Raspberry Pi server with a relay switched water pump. It prompts users to wake up for a morning run, or else the bed gets soaked. Features a web dashboard and real-time notifications.",
    technologies: ["TypeScript", "React", "Node.js", "Express", "MySQL", "AWS", "Raspberry Pi"],
    isLive: false,
    isGithub: true,
    liveUrl: null,
    githubUrl: "https://github.com/daurham/PiRoutine-EC2-Client",
    date: "2022-06-15",
    interactiveDemo: false,
    component: null,
    demoUrl: "https://demo.piroutine.com"
  },
  {
    title: "Daurham.com (Frontend Portfolio)",
    description: "My personal website built with React, Tailwind CSS, and TypeScript. Features a beautiful, interactive portfolio and blog. Includes dark mode and custom animations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    isLive: true,
    isGithub: true,
    liveUrl: "https://daurham.com",
    githubUrl: "https://github.com/daurham/daurham.com",
    date: "2024-04-01",
    screenshots: [
      "/screenshots/daurham_home.png",
      "/screenshots/daurham_blog.png"
    ],
    carousel: true,
    interactiveDemo: false,
    component: null,
  },
  // Dummy frontend project with single screenshot and both links
  {
    title: "Weatherly UI Kit",
    description: "A modern weather dashboard UI kit with animated icons and real-time data integration. Built for rapid prototyping and beautiful presentations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    isLive: true,
    isGithub: true,
    liveUrl: "https://weatherly-demo.com",
    githubUrl: "https://github.com/daurham/weatherly-ui-kit",
    date: "2024-02-10",
    interactiveDemo: false,
    component: null,
    screenshots: [
      "/screenshots/weatherly_dashboard.png"
    ],
    carousel: false
  },
  {
    title: "AI Disk Cleaner",
    description: "A desktop app that cleans up your disk by deleting unnecessary files and freeing up space. Built with Flutter and Dart.",
    technologies: ["Windows", "Flutter", "Dart", "SQLite"],
    isLive: true,
    isGithub: true,
    liveUrl: null,
    githubUrl: "https://github.com/daurham/ai_disk_cleaner",
    date: "2024-02-10",
    interactiveDemo: false,
    component: null,
    screenshots: [
      "/screenshots/ai_disk_cleaner_1.png",
      "/screenshots/ai_disk_cleaner_2.png",
      "/screenshots/ai_disk_cleaner_3.png"
    ],
    carousel: true
  },
  // Dummy project with a containerized interactive demo (unique button)
  {
    title: "Unique Button Demo",
    description: "A containerized demo showcasing a custom animated button component. Try clicking the button to see a confetti effect and sound feedback. Built for fun and inspiration.",
    technologies: ["React", "TypeScript", "CSS Animations"],
    isLive: false,
    isGithub: false,
    githubUrl: null,
    liveUrl: null,
    date: "2024-05-05",
    interactiveComponent: true,
    component: UniqueButton,
    demoUrl: "/demos/unique-button-demo.html",
    screenshots: null,
    carousel: false
  },
  // Dummy project with a long description
  {
    title: "PhotoSnap Carousel",
    description: "A responsive photo carousel component with touch and keyboard navigation. Supports lazy loading, custom transitions, and accessibility features. Designed for seamless integration into any React project, with a focus on performance and user experience. Includes a variety of themes and configuration options for developers.",
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
    carousel: true
  },
];