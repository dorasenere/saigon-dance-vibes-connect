
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
  },
  {
    id: 3,
    title: "Dance Events to Look Forward to This Summer",
    excerpt: "Summer 2025 is packed with exciting dance festivals and socials. Mark your calendar for these must-attend events.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    date: "April 15, 2025",
    category: "Events"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-16 px-4 bg-muted/5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold neon-text">Community Blog</h2>
          <Link to="/blog">
            <Button variant="link" className="text-primary">View All Articles</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <Card className="glass-card card-hover border-white/10 h-full overflow-hidden">
                <div className="h-48 relative">
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
                  
                  <div className="group flex items-center text-primary">
                    <span>Read More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
