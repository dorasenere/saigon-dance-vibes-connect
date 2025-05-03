
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import DanceStyles from "@/components/DanceStyles";
import VideoShowcase from "@/components/VideoShowcase";
import InstagramGallery from "@/components/InstagramGallery";
import BlogPreview from "@/components/BlogPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturedEvents />
      <VideoShowcase />
      <InstagramGallery />
      <BlogPreview />
      
      <div className="py-16 px-4 bg-muted/5">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">Stay Updated</h2>
          <Newsletter />
        </div>
      </div>
      
      <DanceStyles />
      <Footer />
    </div>
  );
};

export default Index;
