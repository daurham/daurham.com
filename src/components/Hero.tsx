import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowDown } from 'lucide-react';
import { 
  avatarFallback,
  careerTitleLong,
  careerTitleShort,
  githubLink,
  headerDescription,
  headerName,
  instagramLink,
  linkedinLink,
  mainPortraitPath,
  resumeLink,
  twitterLink,
  youtubeLink
} from '@/constant.config';
import { AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube
} from "react-icons/ai";
import {FaXTwitter} from 'react-icons/fa6';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in flex flex-col items-center justify-center mt-20">

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
            <span className="bg-slate-600 bg-clip-text text-transparent dark:text-moonglow">
              {headerName}
            </span>
          </h1>

            {/* CareerTitle */}
            <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-4 overline">
              {isMobile ? careerTitleShort : careerTitleLong}
            </h2>

          {/* Main Portrait */}
          <div className="flex justify-center m-4">
          <Avatar className="w-80 h-80 md:w-96 md:h-96">
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

          {/* Header Description */}
          <p className="text-xl md:text-3xl text-foreground/60 max-w-2xl mx-auto leading-relaxed m-4">
            {headerDescription}
          </p>
        
        {/* Social Media Icons */}
        <div className="text-5xl flex justify-center gap-5 py-3 text-slate-700 md:gap-12 dark:text-slate-400 m-4">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                  href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
        </div>
        
        {/* [View Work] and [Resume] Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 m-4">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-to-r from-regal-blue to-slate-700 hover:from-regal-blue-800 hover:to-slate-800 text-white px-8 py-3"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(resumeLink, '_blank')}
            className="px-8 py-3"
          >
            Resume
          </Button>
        </div>
        </div>
      </div>
      {!isMobile && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-foreground/40" />
        </div>
      )}
    </section>
  );
};

export default Hero;
