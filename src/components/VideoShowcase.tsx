
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Video, Play } from "lucide-react";
import { Link } from "react-router-dom";

const videos = [
  {
    id: 1,
    title: "Bachata Workshop",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Learn the basics of Bachata with our top instructors",
    duration: "15:24",
    views: "2.5k"
  },
  {
    id: 2,
    title: "Zouk Performance",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Watch amazing Zouk performances from our community",
    duration: "8:12",
    views: "1.8k"
  },
  {
    id: 3,
    title: "Dance Meetup",
    thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    description: "Join our weekly dance meetups in Saigon",
    duration: "12:51",
    views: "3.2k"
  },
  {
    id: 4,
    title: "Salsa Fundamentals",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Master the rhythm and basic steps of Salsa",
    duration: "18:37",
    views: "4.1k"
  }
];

const VideoShowcase = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 neon-text">Featured Videos</h2>
            <p className="text-white/80 max-w-2xl">Watch performances, tutorials, and community highlights</p>
          </div>
          <Link to="/videos" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View All Videos
            </Button>
          </Link>
        </div>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-1">
                <Card className="glass-card card-hover">
                  <CardContent className="p-0">
                    <div className="relative group">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 text-white">{video.title}</h3>
                      <p className="text-sm text-white/70 mb-2">{video.description}</p>
                      <div className="flex items-center text-xs text-white/50">
                        <Video className="h-3 w-3 mr-1" />
                        <span>{video.views} views</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default VideoShowcase;
