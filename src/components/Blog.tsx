import { posts } from '@/blog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';

const Blog = () => {


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


        <div className="flex flex-wrap justify-center gap-8">
          {posts.map((post, index) => (
            <Card key={post.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md">
                    {post.category}
                  </span>
                  <span className="text-sm text-foreground/60">{post.date}</span>
                </div>
                <CardTitle className="text-lg dark:group-hover:text-moonglow">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="flex-grow">{post.description}</CardDescription>

                <div className="flex gap-3 mt-4">
                  {post.blogUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(post.blogUrl, '_blank')}
                    className="flex-1"
                  >
                    Read More
                  </Button>
                  )}
                </div>
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
