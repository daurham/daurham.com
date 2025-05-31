import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BlogPost = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose dark:prose-invert lg:prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-md">
              Project
            </span>
            <time className="text-foreground/60">May 28, 2025</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Building My Portfolio Website</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-8"></div>
        </header>

        <section className="space-y-6">
          <p className="text-lg leading-relaxed">
            I'm excited to share the process of building my new portfolio website using modern web technologies. 
            This project has been a great opportunity to showcase my skills while learning new techniques.
          </p>

          <h2 className="text-2xl font-bold mt-8">Tech Stack</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>React with TypeScript for type safety</li>
            <li>Tailwind CSS for styling</li>
            <li>Next.js for routing and optimization</li>
            <li>Shadcn UI for consistent components</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Responsive design that works on all devices</li>
            <li>Dark mode support</li>
            <li>Optimized performance and accessibility</li>
            <li>Modern animations and transitions</li>
          </ul>

          <p className="text-lg leading-relaxed mt-8">
            The development process involved careful planning of the component structure and ensuring a consistent
            user experience across the site. I focused on creating reusable components that could be easily maintained
            and updated.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t">
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            ← Back to Blog
          </Button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;