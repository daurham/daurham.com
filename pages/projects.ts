import { StaticImageData } from "next/image";
import piroutineGithub from "../public/piroutine_github.png";
import revampGithub from "../public/revamp_github.png";
import atelierGithub from "../public/atelier_github.png";
import oneThousandBWCGithub from "../public/oneThousandBWC_github2.png";
import timerGithub from "../public/timer_github.png";
import instagramPage from "../public/instagram_page.png";

export type ProjectProps = {
  projects: {
    id: number;
    title: string;
    desc: string;
    devPos: string;
    deployed: boolean,
    link: string;
    website: string;
    img: StaticImageData;
  }[];
};

export const Projects = [
  {
    id: 0,
    title: "PiRoutine",
    desc: "Alarm System",
    devPos: "Full-Stack",
    deployed: true,
    link: "https://github.com/daurham/PiRoutine-EC2-Client#readme",
    website: "https://piroutine.com",
    img: piroutineGithub,
  },
  {
    id: 1,
    title: "Project Revamp",
    desc: "Ecommerce Page",
    devPos: "Front-End",
    deployed: false,
    link: "https://github.com/daurham/Project-Revamp#readme",
    website: "",
    img: revampGithub,
  },
  {
    id: 2,
    title: "Atelier Systems Design",
    desc: "Ecommerce API",
    devPos: "Back-End",
    deployed: false,
    link: "https://github.com/daurham/Atelier-Systems-Design#readme",
    website: "",
    img: atelierGithub,
  },
  {
    id: 3,
    title: "1000 Blank White Cards",
    desc: "Multiplayer Game",
    devPos: "Full-Stack",
    deployed: false,
    link: "https://github.com/daurham/1000BlankWhiteCards#readme",
    website: "",
    img: oneThousandBWCGithub,
  },
  {
    id: 4,
    title: "Terminal Timer",
    desc: "Timer App",
    devPos: "Back-End",
    deployed: false,
    link: "https://github.com/daurham/Timer#readme",
    website: "",
    img: timerGithub,
  },
  {
    id: 5,
    title: "Artwork",
    desc: "Instagram Portfolio",
    devPos: "Design",
    deployed: false,
    link: "https://instagram.com/captain_daurham",
    website: "",
    img: instagramPage,
  },
  // {
  //   "id": 6,
  //   "title": "PiRoutine",
  //   "desc": "Alarm System",
  //   "devPos": "Back-End",
  //   "link": "",
  //   "img": piroutineGithub,
  // },
];
