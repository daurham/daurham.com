import {
  email,
  githubLink,
  linkedinLink,
  name,
} from "@/constant.config";
import { ArrowUpRight, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <p className="font-medium">{name}</p>
            <p className="text-sm text-foreground/55 mt-1">
              Full-stack software engineering, product systems, and applied AI.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm">
            <a
              href="/frontend"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Frontend work
            </a>
            <a
              href="/backend"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Backend work
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground/60 hover:text-foreground transition-colors"
            >
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground/60 hover:text-foreground transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1 text-foreground/60 hover:text-foreground transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>
        </div>

        <div className="mt-7 pt-5 border-t border-border/70 text-center text-xs text-foreground/45">
          © {currentYear} {name}. Built with React, TypeScript, and Vite.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
