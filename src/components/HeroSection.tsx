
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="hero-gradient py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Connect with Saigon's Dance Community
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Join the vibrant world of Zouk, Bachata, and more in Ho Chi Minh City
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Explore Events
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Join Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
