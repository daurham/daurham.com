import { Button } from '@/components/ui/button';
import { githubReposLink } from '@/constant.config';
import { allProjects } from './projects/AllProjects';
import { ProjectCard } from './project-cards';

const ProjectSection = () => {
  const featuredProjects = allProjects.filter(project => project.isFeatured);

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(githubReposLink, '_blank')}
            className="px-8 py-3"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
