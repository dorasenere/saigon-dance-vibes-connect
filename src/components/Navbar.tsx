
import { Button } from "@/components/ui/button";
import { Flag, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import { useState } from "react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="border-b border-white/10 sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center gap-2">
              <Flag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold neon-text">
                Saigon Dance Vibes
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <MainNav />
          
          {/* Mobile navigation */}
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Join Us
              </Button>
            </Link>
            
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button size="icon" variant="ghost">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-card border-white/10">
                <div className="mt-8 flex flex-col gap-4">
                  <Link to="/" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/5">
                      Home
                    </Button>
                  </Link>
                  <Link to="/events" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/5">
                      Events
                    </Button>
                  </Link>
                  <Link to="/communities" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/5">
                      Community
                    </Button>
                  </Link>
                  <Link to="/travel-deals" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/5">
                      Travel Deals
                    </Button>
                  </Link>
                  <Link to="/events/submit" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/5">
                      Submit Event
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
