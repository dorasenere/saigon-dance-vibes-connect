
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import DanceStyles from "@/components/DanceStyles";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedEvents />
      <DanceStyles />
    </div>
  );
};

export default Index;
