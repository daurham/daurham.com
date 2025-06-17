import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { githubLink, githubReposLink } from '@/constant.config';
import { allProjects } from './projects/AllProjects';

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
          {featuredProjects.map((project, index) => (
            <Card key={project.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col">
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors dark:group-hover:text-moonglow">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto pt-4">
                  {project.isLive && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1"
                  >
                    Live Demo
                  </Button>
                  )}
                  {project.isGithub && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1"
                  >
                    GitHub
                  </Button>
                  )}
                </div>
              </CardContent>
            </Card>
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
