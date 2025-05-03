
import { ArrowRight, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Bachata Beginners",
    excerpt: "Starting your Bachata journey? Here are essential tips to get you moving with confidence on the dance floor.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "April 24, 2025",
    category: "Bachata"
  },
  {
    id: 2,
    title: "Zouk Communities Around Vietnam",
    excerpt: "Explore the growing Zouk scene across Vietnam and connect with dancers from Hanoi to Ho Chi Minh City.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    date: "April 20, 2025",
    category: "Zouk"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 neon-text">Latest from Our Blog</h2>
            <p className="text-white/80 max-w-2xl">Tips, stories, and news from the dance community</p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Book className="mr-2 h-5 w-5" />
              Visit Blog
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="glass-card card-hover border-white/10 overflow-hidden">
              <div className="h-56 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-white/60 text-sm mb-2">
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                <p className="text-white/70 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="ghost" className="group text-primary hover:text-primary hover:bg-white/5 px-0">
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
