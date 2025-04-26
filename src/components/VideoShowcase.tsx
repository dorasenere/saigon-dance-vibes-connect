
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Video } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Bachata Workshop",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Learn the basics of Bachata with our top instructors"
  },
  {
    id: 2,
    title: "Zouk Performance",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Watch amazing Zouk performances from our community"
  },
  {
    id: 3,
    title: "Dance Meetup",
    thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    description: "Join our weekly dance meetups in Saigon"
  }
];

const VideoShowcase = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center neon-text">Featured Videos</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="glass-card card-hover mx-2">
                  <CardContent className="p-0">
                    <div className="relative group">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Video className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 text-white">{video.title}</h3>
                      <p className="text-sm text-white/70">{video.description}</p>
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
