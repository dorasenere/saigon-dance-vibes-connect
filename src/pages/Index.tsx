
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import DanceStyles from "@/components/DanceStyles";
import VideoShowcase from "@/components/VideoShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedEvents />
      <VideoShowcase />
      <DanceStyles />
    </div>
  );
};

export default Index;
