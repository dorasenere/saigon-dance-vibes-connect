
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 neon-text">
            Explore Events
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Join Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
