import { email, githubLink, instagramLink, linkedinLink, name, twitterLink, youtubeLink } from "@/constant.config";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-foreground/60 mb-4 md:mb-0">
            © {currentYear} {name}. All rights reserved.
          </div>

          <div className="text-foreground/60 mb-4 md:mb-0">
            |
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="/frontend" 
              rel="noopener noreferrer" 
              className="text-foreground/60 hover:text-foreground transition-colors">
              Frontend Portfolio
            </a>

            <a 
              href="/backend" 
              rel="noopener noreferrer" 
              className="text-foreground/60 hover:text-foreground transition-colors">
              Backend Portfolio
            </a>
          </div>

          <div className="text-foreground/60 mb-4 md:mb-0">
            |
          </div>

          <div className="flex items-center space-x-6">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              > 
                Twitter
              </a>
              <a
                  href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                YouTube
              </a>
              <a
              href={`mailto:${email}`}
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Contact
            </a>
        </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
