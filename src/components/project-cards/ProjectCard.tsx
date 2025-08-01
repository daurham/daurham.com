import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/components/ui/collapsible';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    isLive?: boolean;
    isGithub?: boolean;
    liveUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
    interactiveDemo?: boolean;
    interactiveComponent?: boolean;
    interactiveComponentDemo?: boolean;
    component?: React.ComponentType;
    screenshots?: string[];
    carousel?: boolean;
  };
  className?: string;
  onImageClick?: (imageSrc: string) => void;
  onDemoOpen?: (projectTitle: string) => void;
  openDesc?: { [title: string]: boolean };
  onDescToggle?: (title: string, open: boolean) => void;
  renderContent?: (project: ProjectCardProps['project']) => React.ReactNode;
  renderFooter?: (project: ProjectCardProps['project']) => React.ReactNode;
}

const getFirstSentence = (text: string) => {
  const match = text.match(/.*?[.!?](\s|$)/);
  return match ? match[0].trim() : text;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = "",
  onImageClick,
  onDemoOpen,
  openDesc = {},
  onDescToggle,
  renderContent,
  renderFooter
}) => {


  const isDescriptionCollapsible = project.description.length > getFirstSentence(project.description).length;
  const isDescOpen = openDesc[project.title] || false;

  const handleDescToggle = (open: boolean) => {
    onDescToggle?.(project.title, open);
  };

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col ${className}`}>
      <CardHeader>
        <CardTitle className="group-hover:text-blue-600 transition-colors dark:group-hover:text-moonglow">
          {project.title}
        </CardTitle>
        
        {onDescToggle ? (
          <Collapsible open={isDescOpen} onOpenChange={handleDescToggle}>
            {isDescOpen ? (
              <CollapsibleContent forceMount>
                <span className="block text-sm text-muted-foreground mb-1">
                  {project.description}
                </span>
              </CollapsibleContent>
            ) : (
              <span className="block text-sm text-muted-foreground mb-1">
                {getFirstSentence(project.description)}
                {isDescriptionCollapsible && '...'}
              </span>
            )}
            {isDescriptionCollapsible && (
              <CollapsibleTrigger asChild>
                <Button variant="link" size="sm" className="px-0 h-auto text-xs">
                  {isDescOpen ? 'See less' : 'See more'}
                </Button>
              </CollapsibleTrigger>
            )}
          </Collapsible>
        ) : (
          <span className="block text-sm text-muted-foreground mb-1">
            {project.description}
          </span>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-grow">
        {renderContent ? renderContent(project) : (
          <DefaultProjectContent 
            project={project} 
            onImageClick={onImageClick}
          />
        )}
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies?.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>

              <CardFooter className="flex gap-3 mt-auto pt-2">
          {renderFooter ? renderFooter(project) : (
            <DefaultProjectFooter 
              project={project}
              onDemoOpen={onDemoOpen}
            />
          )}
        </CardFooter>
    </Card>
  );
};

// Default content renderer
const DefaultProjectContent: React.FC<{
  project: ProjectCardProps['project'];
  onImageClick?: (imageSrc: string) => void;
}> = ({ project, onImageClick }) => {

  if (project.interactiveComponent && project.component) {
    return <project.component />;
  }

  if (project.screenshots && project.screenshots.length > 0) {
    if (project.carousel && project.screenshots.length > 1) {
      return <ProjectCarousel project={project} onImageClick={onImageClick} />;
    }
    
    return (
      <div className="relative group flex items-center justify-center h-48 rounded-lg overflow-hidden">
        <img 
          src={project.screenshots[0]} 
          alt={`${project.title} screenshot`} 
          className="object-contain w-full h-full cursor-zoom-in hover:scale-105 transition-all duration-300 ease-out"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            width: 'auto',
            height: 'auto'
          }}
          onClick={() => onImageClick?.(project.screenshots![0])}
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
      </div>
    );
  }

  return null;
};

// Default footer renderer
const DefaultProjectFooter: React.FC<{
  project: ProjectCardProps['project'];
  onDemoOpen?: (projectTitle: string) => void;
}> = ({ project, onDemoOpen }) => {
  const buttons = [];

  if (project.isLive && project.liveUrl) {
    buttons.push(
      <Button
        key="live"
        variant="outline"
        size="sm"
        onClick={() => window.open(project.liveUrl, '_blank')}
        className="flex-1"
      >
        Live
      </Button>
    );
  }

  if (project.interactiveDemo && project.demoUrl) {
    buttons.push(
      <Button
        key="demo"
        variant="outline"
        size="sm"
        onClick={() => window.open(project.demoUrl, '_blank')}
        className="flex-1"
      >
        Live Demo
      </Button>
    );
  }

  if (project.isGithub && project.githubUrl) {
    buttons.push(
      <Button
        key="github"
        variant="outline"
        size="sm"
        onClick={() => window.open(project.githubUrl, '_blank')}
        className="flex-1"
      >
        GitHub
      </Button>
    );
  }

  if (project.interactiveComponentDemo && project.component && onDemoOpen) {
    buttons.push(
      <Button
        key="interactive"
        variant="default"
        size="sm"
        onClick={() => onDemoOpen(project.title)}
        className="flex-1"
      >
        Interactive Demo
      </Button>
    );
  }

  return <>{buttons}</>;
};

// Carousel component for multiple screenshots
const ProjectCarousel: React.FC<{
  project: ProjectCardProps['project'];
  onImageClick?: (imageSrc: string) => void;
}> = ({ project, onImageClick }) => {

  return (
    <div className="relative group">
      <Carousel className="w-full">
        <CarouselContent>
          {project.screenshots!.map((src, i) => (
            <CarouselItem key={i} className="flex items-center justify-center h-48 rounded-lg overflow-hidden relative">
              <img 
                src={src} 
                alt={`${project.title} screenshot ${i+1}`} 
                className="object-contain w-full h-full cursor-zoom-in hover:scale-105 transition-all duration-300 ease-out" 
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto'
                }}
                onClick={() => onImageClick?.(src)}
              />
                      {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}; 