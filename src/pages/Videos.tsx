
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Search, Video } from "lucide-react";
import { useState } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const videoCategories = ["All", "Tutorials", "Performances", "Events", "Interviews"];

const videoData = [
  {
    id: 1,
    title: "Basic Bachata Footwork Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Learn the essential footwork pattern for Bachata dancing",
    duration: "15:24",
    views: "2.5k",
    category: "Tutorials",
    date: "2025-04-15"
  },
  {
    id: 2,
    title: "Zouk Performance at Saigon Dance Festival",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Watch the amazing Zouk showcase from the annual festival",
    duration: "8:12",
    views: "1.8k",
    category: "Performances",
    date: "2025-04-10"
  },
  {
    id: 3,
    title: "Dance Meetup Aftermovie - April 2025",
    thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    description: "Highlights from our weekly dance meetups in District 1",
    duration: "12:51",
    views: "3.2k",
    category: "Events",
    date: "2025-04-05"
  },
  {
    id: 4,
    title: "Salsa Fundamentals - Part 1",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Master the rhythm and basic steps of Salsa dancing",
    duration: "18:37",
    views: "4.1k",
    category: "Tutorials",
    date: "2025-03-28"
  },
  {
    id: 5,
    title: "Interview with Dance Champion Minh Nguyen",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Insights and tips from Vietnam's leading Latin dancer",
    duration: "22:15",
    views: "5.7k",
    category: "Interviews",
    date: "2025-03-20"
  },
  {
    id: 6,
    title: "Kizomba Workshop Highlights",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Recap of our sold-out Kizomba workshop with international instructors",
    duration: "10:42",
    views: "2.1k",
    category: "Events",
    date: "2025-03-15"
  },
  {
    id: 7,
    title: "Advanced Bachata Sensual Patterns",
    thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    description: "Learn complex turn patterns for intermediate and advanced dancers",
    duration: "25:18",
    views: "3.8k",
    category: "Tutorials",
    date: "2025-03-10"
  },
  {
    id: 8,
    title: "Spring Dance Festival 2025 Recap",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "The best moments from Ho Chi Minh City's biggest dance event",
    duration: "16:29",
    views: "6.2k",
    category: "Performances",
    date: "2025-03-05"
  }
];

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredVideos = videoData.filter(video => {
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 neon-text">Video Gallery</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore dance tutorials, performances, and community highlights
            </p>
          </div>
          
          <div className="glass-card p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center flex-grow">
                <Search className="mr-2 h-5 w-5 text-white/50" />
                <Input 
                  placeholder="Search videos..." 
                  className="bg-transparent border-white/10 focus-visible:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="w-full md:w-48">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-transparent border-white/10">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {videoCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video) => (
                <Card key={video.id} className="glass-card card-hover">
                  <CardContent className="p-0">
                    <div className="relative group">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-primary/90 text-white text-xs px-2 py-1 rounded-full">
                        {video.category}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                      <p className="text-sm text-white/70 mt-1 mb-2">{video.description}</p>
                      <div className="flex items-center justify-between text-xs text-white/50">
                        <div className="flex items-center">
                          <Video className="h-3 w-3 mr-1" />
                          <span>{video.views} views</span>
                        </div>
                        <span>{new Date(video.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <Video className="h-12 w-12 mx-auto text-white/30 mb-4" />
                <h3 className="text-xl font-medium text-white/80 mb-2">No videos found</h3>
                <p className="text-white/50">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Videos;
