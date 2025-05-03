
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import DanceStyles from "@/components/DanceStyles";
import VideoShowcase from "@/components/VideoShowcase";
import PhotoGallery from "@/components/PhotoGallery";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturedEvents />
      <VideoShowcase />
      <PhotoGallery />
      <BlogPreview />
      <DanceStyles />
      <Footer />
    </div>
  );
};

export default Index;
