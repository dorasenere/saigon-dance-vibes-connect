
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="glass-card p-8 text-center relative z-10 max-w-lg mx-4">
        <h1 className="text-6xl font-bold mb-4 text-gradient">4<span className="text-primary">0</span>4</h1>
        <p className="text-xl text-white/80 mb-6">Oops! Looks like this dance floor doesn't exist</p>
        <p className="text-white/60 mb-8">
          The page you're looking for has moved to another venue or never existed.
          Let's get you back to where the music's playing!
        </p>
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Back to Home Floor
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
