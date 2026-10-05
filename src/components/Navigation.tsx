import { useState } from "react";
import { Moon, Sun, FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navbarName, resumeLink } from "@/constant.config";
import { useLocation, useNavigate } from "react-router-dom";

interface NavigationProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navigation = ({ theme, toggleTheme }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  const goHomeToSection = (sectionId: string) => {
    if (isHome) {
      scrollToSection(sectionId);
      return;
    }

    navigate(`/#${sectionId}`);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="text-2xl font-bold bg-regal-blue bg-clip-text text-transparent dark:text-moonglow"
            onClick={() => navigate("/")}
            aria-label="Go to homepage"
          >
            {navbarName}
          </button>

          <div className="hidden md:flex items-center space-x-7">
            <button
              onClick={() => goHomeToSection("about")}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => goHomeToSection("projects")}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/frontend")}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Frontend
            </button>
            <button
              onClick={() => navigate("/backend")}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Backend
            </button>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(resumeLink, "_blank")}
                className="flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-9 h-9 p-0"
                aria-label={
                  theme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 p-0"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => goHomeToSection("about")}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => goHomeToSection("projects")}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  navigate("/frontend");
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Frontend
              </button>
              <button
                onClick={() => {
                  navigate("/backend");
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Backend
              </button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(resumeLink, "_blank")}
                className="flex items-center space-x-2 w-fit"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
