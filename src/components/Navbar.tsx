
import { Button } from "@/components/ui/button";
import { Flag, Calendar, Users } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="glass-card border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold neon-text">
              Saigon Dance Vibes
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5">
              Home
            </Button>
            <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5">
              Events
            </Button>
            <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5">
              Community
            </Button>
            <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5">
              Styles
            </Button>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Join Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
