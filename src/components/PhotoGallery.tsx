
import { useEffect, useState } from "react";
import { Image, Instagram } from "lucide-react";
import { Button } from "./ui/button";

// Sample gallery images (would be replaced with real Instagram feed later)
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Dance performance"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    alt: "Group dance"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    alt: "Dance social"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    alt: "Dance performance"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Dancing couple"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    alt: "Dance workshop"
  }
];

const PhotoGallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 neon-text">Photo Gallery</h2>
            <p className="text-white/80">Moments captured from our dance community</p>
          </div>
          <a 
            href="https://instagram.com/saigondancevibes"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0"
          >
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </Button>
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={`aspect-square relative overflow-hidden rounded-lg transition-all duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0 translate-y-4"
              } card-hover`}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-xs">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
