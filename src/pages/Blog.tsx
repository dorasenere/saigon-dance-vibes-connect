import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Bachata Beginners",
    excerpt: "Starting your Bachata journey? Here are essential tips to get you moving with confidence on the dance floor.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "April 24, 2025",
    author: "Maria Sanchez",
    category: "Bachata"
  },
  {
    id: 2,
    title: "Zouk Communities Around Vietnam",
    excerpt: "Explore the growing Zouk scene across Vietnam and connect with dancers from Hanoi to Ho Chi Minh City.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    date: "April 20, 2025",
    author: "David Nguyen",
    category: "Zouk"
  },
  {
    id: 3,
    title: "Dance Events to Look Forward to This Summer",
    excerpt: "Summer 2025 is packed with exciting dance festivals and socials. Mark your calendar for these must-attend events.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    date: "April 15, 2025",
    author: "Sophia Tran",
    category: "Events"
  },
  {
    id: 4,
    title: "The Evolution of Latin Dance in Vietnam",
    excerpt: "How Latin dance styles have found their way to Vietnam and evolved with local influences over the years.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    date: "April 10, 2025",
    author: "Michael Le",
    category: "Culture"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 neon-text">Dance Blog</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stay updated with the latest news, dance tips, and community stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="text-white/60 text-sm mb-2 flex justify-between">
                    <span>{post.date}</span>
                    <span>By {post.author}</span>
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
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-8 neon-text">Subscribe to Our Newsletter</h2>
            <div className="max-w-md mx-auto glass-card p-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
