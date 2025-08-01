import { useState } from 'react';
import { allProjects } from '@/components/projects/AllProjects';
import { ProjectCard } from '@/components/project-cards/ProjectCard';
import { InteractiveDemoDialog } from '@/components/project-cards/InteractiveDemoDialog';
import { ImageViewerDialog } from '@/components/project-cards/ImageViewerDialog';

const FrontendShowcase = () => {
  const [openDemo, setOpenDemo] = useState<string | null>(null);
  const [openDesc, setOpenDesc] = useState<{ [title: string]: boolean }>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const frontendProjects = allProjects.filter(project => project.isFrontendFeatured);

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
            Frontend Project Showcase
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore some of my favorite frontend projects, featuring interactive demos, beautiful UIs, and modern web technologies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {frontendProjects.map((project) => (
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
            project={frontendProjects.find(p => p.title === openDemo)!}
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

export default FrontendShowcase;
