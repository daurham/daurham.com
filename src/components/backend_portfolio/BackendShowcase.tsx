import { allProjects } from '@/components/projects/AllProjects';
import { useState } from 'react';
import {
  ProjectCard,
  InteractiveDemoDialog,
  ImageViewerDialog
} from '@/components/project-cards';

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

const BackendShowcase = () => {
  const [openDemo, setOpenDemo] = useState<string | null>(null);
  const [openDesc, setOpenDesc] = useState<{ [title: string]: boolean }>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const backendProjects = allProjects.filter(project => project.isBackendFeatured);

  const handleDescToggle = (title: string, open: boolean) => {
    setOpenDesc(prev => ({ ...prev, [title]: open }));
  };

  const handleDemoOpen = (projectTitle: string) => {
    setOpenDemo(projectTitle);
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/60 to-purple-50/40 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Backend Project Showcase
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore some of my favorite backend projects, featuring interactive demos, beautiful UIs, and modern web technologies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {backendProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onImageClick={handleImageClick}
              onDemoOpen={handleDemoOpen}
              openDesc={openDesc}
              onDescToggle={handleDescToggle}
            />
          ))}
        </div>

        {/* Interactive Demo Dialog */}
        {openDemo && (
          <InteractiveDemoDialog
            project={backendProjects.find(p => p.title === openDemo)!}
            open={!!openDemo}
            onOpenChange={(open) => setOpenDemo(open ? openDemo : null)}
          />
        )}

        {/* Image Viewer Dialog */}
        <ImageViewerDialog
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </section>
  );
};

export default BackendShowcase;
