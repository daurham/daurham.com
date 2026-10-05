import { allProjects } from "@/components/projects/AllProjects";
import { useState } from "react";
import {
  ProjectCard,
  InteractiveDemoDialog,
  ImageViewerDialog,
} from "@/components/project-cards";

const BackendShowcase = () => {
  const [openDemo, setOpenDemo] = useState<string | null>(null);
  const [openDesc, setOpenDesc] = useState<{ [title: string]: boolean }>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const backendProjects = allProjects.filter(
    (project) => project.isBackendFeatured,
  );

  const handleDescToggle = (title: string, open: boolean) => {
    setOpenDesc((prev) => ({ ...prev, [title]: open }));
  };

  const handleDemoOpen = (projectTitle: string) => {
    setOpenDemo(projectTitle);
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <section className="py-28 px-4 bg-gradient-to-br from-blue-50/60 to-purple-50/40 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.24em] text-foreground/50 mb-3">
            Systems engineering
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Backend & Systems
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            APIs, data models, background workflows, local services, infrastructure,
            and integrations that support the product experience behind the UI.
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

        {openDemo && (
          <InteractiveDemoDialog
            project={backendProjects.find((p) => p.title === openDemo)!}
            open={!!openDemo}
            onOpenChange={(open) => setOpenDemo(open ? openDemo : null)}
          />
        )}

        <ImageViewerDialog
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </section>
  );
};

export default BackendShowcase;
