import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { allProjects } from '@/components/projects/AllProjects';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/components/ui/collapsible';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  isLive: boolean;
  isGithub: boolean;
  liveUrl?: string;
  githubUrl?: string;
  date?: string;
  screenshots?: string[];
  carousel?: boolean;
  interactiveDemo?: boolean;
  demoUrl?: string;
  component?: React.ComponentType;
};

const getFirstSentence = (text: string) => {
  const match = text.match(/.*?[.!?](\s|$)/);
  return match ? match[0].trim() : text;
};

const FrontendShowcase = () => {
  const [openDemo, setOpenDemo] = useState<string | null>(null);
  const [openDesc, setOpenDesc] = useState<{ [title: string]: boolean }>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const frontendProjects = allProjects.filter(project => project.isFrontendFeatured);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/60 to-purple-50/40 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Frontend Project Showcase</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore some of my favorite frontend projects, featuring interactive demos, beautiful UIs, and modern web technologies.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {frontendProjects.map((project, idx) => {
            const isUniqueButtonDemo = project.title.toLowerCase().includes('unique button');
            return (
              <Card key={project.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col">
                <CardHeader>
                    {/* Card Title */}
                    <CardTitle className="group-hover:text-blue-600 transition-colors dark:group-hover:text-moonglow">
                      {project.title}
                    </CardTitle>
                  <Collapsible open={!!openDesc[project.title]} onOpenChange={open => setOpenDesc(prev => ({ ...prev, [project.title]: open }))}>
                    {openDesc[project.title] ? (
                      // Description
                      <CollapsibleContent forceMount>
                        <span className="block text-sm text-muted-foreground mb-1">{project.description}</span>
                      </CollapsibleContent>
                    ) : (
                      // Description
                      <span className="block text-sm text-muted-foreground mb-1">
                        {getFirstSentence(project.description)}
                        {project.description.length > getFirstSentence(project.description).length && '...'}
                      </span>
                    )}
                    {project.description.length > getFirstSentence(project.description).length && (
                      <CollapsibleTrigger asChild>
                        <Button variant="link" size="sm" className="px-0 h-auto text-xs">
                          {openDesc[project.title] ? 'See less' : 'See more'}
                        </Button>
                      </CollapsibleTrigger>
                    )}
                  </Collapsible>
                </CardHeader>
                {/* Card Content */}
                <CardContent className="flex flex-col gap-4 flex-grow">
                  {project.interactiveComponent ? (
                    <project.component />
                  ) : project.screenshots && project.screenshots.length > 0 && project.carousel ? (
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.screenshots.map((src, i) => (
                          <CarouselItem key={i} className="flex items-center justify-center h-48 rounded-lg overflow-hidden">
                            <img 
                              src={src} 
                              alt={`${project.title} screenshot ${i+1}`} 
                              className="object-contain w-full h-full cursor-pointer hover:opacity-90 transition-opacity" 
                              onClick={() => setSelectedImage(src)}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  ) : project.screenshots && project.screenshots.length > 0 ? (
                    <div className="flex items-center justify-center h-48 rounded-lg overflow-hidden">
                      <img src={project.screenshots[0]} alt={`${project.title} screenshot`} className="object-contain w-full h-full" />
                    </div>
                  ) : null}
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies?.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                {/* Card Footer */}
                <CardFooter className="flex gap-3 mt-auto pt-2">
                  {project.isLive && project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1"
                    >
                      Live
                    </Button>
                  )}
                  {project.interactiveDemo && project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      className="flex-1"
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.isGithub && project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1"
                    >
                      GitHub
                    </Button>
                  )}
                  {/* TODO: Revise this code: */}
                  {project.interactiveComponentDemo && project.component && (
                    <Dialog open={openDemo === project.title} onOpenChange={(open) => setOpenDemo(open ? project.title : null)}>
                      <DialogTrigger asChild>
                        <Button variant="default" size="sm" className="flex-1">Interactive Demo</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-full h-[70vh] p-0 overflow-hidden">
                        <DialogHeader>
                          <DialogTitle>{project.title} – Interactive Demo</DialogTitle>
                          <DialogDescription>{project.description}</DialogDescription>
                        </DialogHeader>
                        <div className="w-full h-full flex items-center justify-center bg-black/80">
                          <iframe
                            src={project.demoUrl}
                            title={`${project.title} Demo`}
                            className="w-full h-[50vh] rounded-lg border-none shadow-lg"
                            allow="autoplay; fullscreen"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[90vw] max-h-[90vh] p-4 overflow-auto">
            {selectedImage && (
              <div className="flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Enlarged screenshot" 
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FrontendShowcase;
