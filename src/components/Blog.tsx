
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const posts = [
    {
      title: "Currently Learning: Advanced React Patterns",
      date: "December 2024",
      description: "Diving deep into compound components, render props, and custom hooks to build more reusable and maintainable React applications.",
      category: "Learning"
    },
    {
      title: "Building My Portfolio Website",
      date: "December 2024",
      description: "Creating a modern, responsive portfolio using React, TypeScript, and Tailwind CSS. Focusing on performance and accessibility.",
      category: "Project"
    },
    {
      title: "Job Search Journey Begins",
      date: "December 2024",
      description: "Starting my search for exciting software engineering opportunities. Looking forward to contributing to innovative projects and growing with a great team.",
      category: "Career"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Updates</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Stay updated with what I'm working on, learning, and thinking about in the world of software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={post.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md">
                    {post.category}
                  </span>
                  <span className="text-sm text-foreground/60">{post.date}</span>
                </div>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/60">
            More updates coming soon! This section will grow as I continue my journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
