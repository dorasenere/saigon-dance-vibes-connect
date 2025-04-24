
import { Button } from "@/components/ui/button";
import { Flag, Calendar, Users } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Saigon Dance Vibes
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Events</Button>
            <Button variant="ghost">Community</Button>
            <Button variant="ghost">Styles</Button>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Join Us</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
