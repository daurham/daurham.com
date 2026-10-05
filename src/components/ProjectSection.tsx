import { Button } from "@/components/ui/button";
import { githubReposLink } from "@/constant.config";
import { allProjects } from "./projects/AllProjects";
import { ProjectCard } from "./project-cards";
import { useState } from "react";
import { ImageViewerDialog } from "./project-cards/ImageViewerDialog";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const ProjectSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const featuredProjects = allProjects.filter((project) => project.isFeatured);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.24em] text-foreground/50 mb-3">
            Recent work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Selected Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-foreground/65 max-w-3xl mx-auto leading-relaxed">
            These are the projects that best represent how I work now: full-stack
            products with real data, operational constraints, automation, and
            interfaces designed around repeated daily use.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-12">
          {[
            "Production-minded full stack",
            "Data-heavy product UX",
            "AI where it adds leverage",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background/70 px-4 py-3 text-sm text-foreground/70"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 text-regal-blue dark:text-moonglow" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onImageClick={handleImageClick}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(githubReposLink, "_blank")}
            className="px-8 py-3 inline-flex items-center gap-2"
          >
            Explore More on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        <ImageViewerDialog
          imageSrc={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
