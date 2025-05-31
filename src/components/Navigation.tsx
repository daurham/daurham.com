import { useState } from 'react';
import { Moon, Sun, FileText, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navbarName, resumeLink } from '@/constant.config';

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navigation = ({ theme, toggleTheme }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          <div className="text-2xl font-bold bg-regal-blue bg-clip-text text-transparent dark:text-moonglow">
            {navbarName}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Projects
            </button>
            {/* <button
              onClick={() => scrollToSection('blog')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Updates
            </button> */}
            
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(resumeLink, '_blank')}
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
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 p-0"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Projects
              </button>
              {/* <button
                onClick={() => scrollToSection('blog')}
                className="text-left text-foreground/80 hover:text-foreground transition-colors"
              >
                Updates
              </button> */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(resumeLink, '_blank')}
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
