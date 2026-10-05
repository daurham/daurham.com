import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown, ArrowUpRight, Code2, Database, Sparkles } from "lucide-react";
import {
  avatarFallback,
  careerTitleLong,
  careerTitleShort,
  githubLink,
  headerDescription,
  headerName,
  linkedinLink,
  mainPortraitPath,
  resumeLink,
} from "@/constant.config";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-28 md:py-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-12 lg:gap-16 items-center animate-fade-in">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/70 mb-6">
              <Sparkles className="w-4 h-4 text-regal-blue dark:text-moonglow" />
              Building end-to-end products, not just demos
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="bg-slate-700 bg-clip-text text-transparent dark:text-moonglow">
                {headerName}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6">
              {isMobile ? careerTitleShort : careerTitleLong}
            </h2>

            <p className="text-lg md:text-xl text-foreground/65 max-w-3xl leading-relaxed mx-auto lg:mx-0 mb-8">
              {headerDescription}
            </p>

            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto lg:mx-0 mb-8 text-left">
              <div className="rounded-xl border border-border bg-card/70 p-4">
                <Code2 className="w-5 h-5 mb-3 text-regal-blue dark:text-moonglow" />
                <p className="font-semibold text-sm">Product UI</p>
                <p className="text-xs text-foreground/55 mt-1">React, TypeScript, responsive UX</p>
              </div>
              <div className="rounded-xl border border-border bg-card/70 p-4">
                <Database className="w-5 h-5 mb-3 text-regal-blue dark:text-moonglow" />
                <p className="font-semibold text-sm">Full-stack systems</p>
                <p className="text-xs text-foreground/55 mt-1">APIs, PostgreSQL, deployment</p>
              </div>
              <div className="rounded-xl border border-border bg-card/70 p-4">
                <Sparkles className="w-5 h-5 mb-3 text-regal-blue dark:text-moonglow" />
                <p className="font-semibold text-sm">Applied AI</p>
                <p className="text-xs text-foreground/55 mt-1">LLMs, vision, automation, local AI</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-regal-blue to-slate-700 hover:from-regal-blue-800 hover:to-slate-800 text-white px-8 py-3"
              >
                View Selected Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(resumeLink, "_blank")}
                className="px-8 py-3"
              >
                Resume
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-5 mt-7 text-3xl text-slate-700 dark:text-slate-400">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hover:text-foreground transition-colors"
              >
                <AiFillGithub />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-foreground transition-colors"
              >
                <AiFillLinkedin />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium hover:text-foreground transition-colors"
              >
                GitHub
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-4 rounded-full bg-regal-blue/10 dark:bg-moonglow/10 blur-3xl" />
              <Avatar className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 border-4 border-background shadow-2xl">
                <AvatarImage
                  src={mainPortraitPath}
                  alt="Jacob Daurham"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-600 text-white">
                  {avatarFallback}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {!isMobile && (
        <button
          type="button"
          onClick={scrollToProjects}
          aria-label="Scroll to projects"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-foreground/40" />
        </button>
      )}
    </section>
  );
};

export default Header;
