
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Calendar, Users, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
          Connect with Saigon's Dance Community
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/80">
          Join the vibrant world of Zouk, Bachata, and more in Ho Chi Minh City
        </p>
        
        <div className="max-w-md mx-auto glass-card mb-8 p-4">
          <div className="flex items-center">
            <Search className="mr-2 h-5 w-5 text-white/50" />
            <input 
              type="text" 
              placeholder="Search for events, communities, or dance styles..." 
              className="bg-transparent border-none w-full focus:outline-none text-white" 
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/events">
            <Button size="lg" className="bg-primary hover:bg-primary/90 neon-text">
              <Calendar className="mr-2 h-5 w-5" />
              Explore Events
            </Button>
          </Link>
          <Link to="/communities">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </Link>
        </div>
        
        <div className="mt-8">
          <a href="https://instagram.com/saigondancevibes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white/80 hover:text-primary transition-colors">
            <Instagram className="mr-2 h-5 w-5" />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
