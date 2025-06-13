// Basic Page Information
export const navbarName = "Daurham";

export const name = "Jacob Daurham";
export const fullName = "Jacob Ernest Daurham";
export const shortName = "Jake Daurham";
export const headerName = fullName;

export const careerTitleLong = "Full-Stack Software Engineer | AI Enthusiast";
export const careerTitleShort = "Software Engineer";
export const headerCareerTitle = careerTitleLong;

export const headerDescription = "Passionately studying the world around me. Motivated to create a better one.";
export const shortDescription = "Passionate about creating elegant solutions to complex problems. Currently seeking opportunities to build innovative software that makes a difference.";
export const longDescription = "I am a software engineer with a passion for creating elegant solutions to complex problems. I am currently seeking opportunities to build innovative software that makes a difference.";

// Portraits
export const mainPortraitPath = "/jacob_daurham_dark.png";
export const mainPortraitPathDark = "/jacob_daurham_dark.png";
export const secondaryPortraitPath = "/jacob_daurham_china.jpg";
// export const mainPortraitPath = "/jacob_daurham_china.jpg";
// export const secondaryPortraitPath = "/jacob_daurham.png";
export const avatarFallback = "JD";

// Contact Information
export const location = "Phoenix, AZ";
export const email = "daurham95@gmail.com";
export const phone = "+1 (623) 261-2380";

// Links
export const resumeLink = "https://docs.google.com/document/d/1BuWNK6pHv0wWnTUAfriOv46RL_x6LvSkpYA3HpRpqbs/";
export const linkedinLink = "https://www.linkedin.com/in/daurham/";
export const githubLink = "https://github.com/daurham";
export const githubReposLink = "https://github.com/daurham?tab=repositories";
export const instagramLink = "https://www.instagram.com/captain_daurham/";
export const twitterLink = "https://x.com/daurham/";
export const youtubeLink = "https://www.youtube.com/daurham/";

// Skills
export const skills = [
  'JavaScript/TypeScript',
  'C#/.NET',
  'React/Svelte/Vue',
  'Java/Spring',
  'Node.js/Express',
  'Python/Django',
  'PostgreSQL/MongoDB',
  'Flutter/Dart',
  'AWS/Cloud',
  'Git/GitHub',
  'Docker/Kubernetes',
  'AI/ML',
];

// Featured Projects
export const projects = [
  {
    title: "iPhone SMS Transcriptor",
    description: "A desktop app that extracts SMS messages from iPhone backups and converts them into TXT, CSV, or JSON files—saved directly to your desktop. Preserve meaningful conversations, memories, and important exchanges in an organized format.",
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
    description: "A full-stack alarm system connecting an AWS EC2 client to a Raspberry Pi server with a relay switched water pump. It prompts users to wake up for a morning run, or else the bed gets soaked.",
    technologies: ["TypeScript", "React", "Node.js", "Express", "MySQL", "AWS", "Raspberry Pi"],
    isLive: false,
    isGithub: true,
    liveUrl: null,
    githubUrl: "https://github.com/daurham/PiRoutine-EC2-Client",
    date: "2022-06-15",
    interactiveDemo: false,
    demoUrl: "https://piroutine.com",
    screenshots: null,
    carousel: false,
    component: null,
  },
  // Example frontend project with carousel and demo
  // {
  //   title: "Daurham.com (Frontend Portfolio)",
  //   description: "My personal website built with React, Tailwind CSS, and TypeScript. Features a beautiful, interactive portfolio and blog.",
  //   technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  //   isLive: true,
  //   isGithub: true,
  //   liveUrl: "https://daurham.com",
  //   githubUrl: "https://github.com/daurham/daurham.com",
  //   date: "2024-04-01",
  //   screenshots: [
  //     "/screenshots/daurham_home.png",
  //     "/screenshots/daurham_blog.png"
  //   ],
  //   carousel: true,
  //   interactiveDemo: false
  // },
];
