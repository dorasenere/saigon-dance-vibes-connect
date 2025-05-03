
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";

// Sample gallery data - in a real app, this could come from an API
const galleryItems = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    caption: "Zouk night at District 1 ✨ #SaigonDance",
    likes: 124,
    date: "2 days ago"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    caption: "Bachata workshop with international instructors #DanceLife",
    likes: 89,
    date: "5 days ago"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    caption: "Weekend vibes at our Latin dance social #BachataLove",
    likes: 156,
    date: "1 week ago"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    caption: "Learning new moves at today's Zouk progressive class 💃",
    likes: 201,
    date: "1 week ago"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    caption: "Latin dance party highlights! What a night! #DanceVibes",
    likes: 178,
    date: "2 weeks ago"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    caption: "When the music hits just right ✨ #SaigonDancers",
    likes: 143,
    date: "2 weeks ago"
  }
];

type GalleryItemProps = {
  imageUrl: string;
  caption: string;
  likes: number;
  date: string;
};

const GalleryItem = ({ imageUrl, caption, likes, date }: GalleryItemProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative aspect-square rounded-md overflow-hidden cursor-pointer">
          <img 
            src={imageUrl} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
            alt={caption} 
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Instagram className="text-white h-8 w-8" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] p-0 bg-black rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/3 bg-black">
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <img 
                src={imageUrl} 
                className="w-full h-full object-cover" 
                alt={caption} 
              />
            </div>
          </div>
          <div className="md:w-1/3 p-6 bg-gray-900 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-bold text-white">SDV</span>
                </div>
                <span className="font-medium text-white">saigondancevibes</span>
              </div>
              <DialogClose className="text-white/60 hover:text-white">
                <X size={20} />
              </DialogClose>
            </div>
            
            <div className="flex-grow">
              <p className="text-white mb-2">{caption}</p>
              <p className="text-white/60 text-sm">{date}</p>
            </div>
            
            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="flex items-center gap-1 text-white/80 mb-4">
                <span>❤️ {likes} likes</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Instagram className="mr-2 h-4 w-4" />
                Follow on Instagram
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const InstagramGallery = () => {
  const [viewAll, setViewAll] = useState(false);
  const displayItems = viewAll ? galleryItems : galleryItems.slice(0, 6);
  
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold neon-text">Dance Community Photos</h2>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80"
          >
            <Instagram size={20} />
            <span>@saigondancevibes</span>
            <ExternalLink size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayItems.map((item) => (
            <GalleryItem 
              key={item.id}
              imageUrl={item.imageUrl}
              caption={item.caption}
              likes={item.likes}
              date={item.date}
            />
          ))}
        </div>
        
        {galleryItems.length > 6 && !viewAll && (
          <div className="mt-8 text-center">
            <Button 
              onClick={() => setViewAll(true)}
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
            >
              View More Photos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramGallery;
