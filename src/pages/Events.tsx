
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar, List, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 neon-text">Dance Events</h1>
          <p className="text-xl text-white/80 text-center max-w-3xl">
            Discover Zouk, Bachata, and other dance events in Ho Chi Minh City
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link to="/events/calendar">
            <Button className="bg-primary/20 hover:bg-primary/30 text-white border border-primary/50">
              <Calendar className="mr-2 h-4 w-4" /> Calendar View
            </Button>
          </Link>
          <Link to="/events/list">
            <Button className="bg-secondary/20 hover:bg-secondary/30 text-white border border-secondary/50">
              <List className="mr-2 h-4 w-4" /> List View
            </Button>
          </Link>
          <Link to="/events/submit">
            <Button className="bg-accent/20 hover:bg-accent/30 text-white border border-accent/50">
              Submit an Event
            </Button>
          </Link>
        </div>

        <div className="glass-card p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Quick Search</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-white/70 block mb-2">Location</label>
              <select className="w-full bg-background border border-white/10 rounded-md p-2">
                <option value="district1">District 1</option>
                <option value="district2">District 2</option>
                <option value="district3">District 3</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="text-white/70 block mb-2">Dance Style</label>
              <select className="w-full bg-background border border-white/10 rounded-md p-2">
                <option value="all">All Styles</option>
                <option value="zouk">Zouk</option>
                <option value="bachata">Bachata</option>
                <option value="salsa">Salsa</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="text-white/70 block mb-2">Date Range</label>
              <select className="w-full bg-background border border-white/10 rounded-md p-2">
                <option value="all">Any Time</option>
                <option value="today">Today</option>
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="bg-primary hover:bg-primary/90">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center neon-text">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* We're reusing the card styles from FeaturedEvents component */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card card-hover border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-2 text-white">Upcoming Event {i}</h3>
                <p className="text-white/70">April {25 + i}, 2025</p>
                <p className="font-medium text-white">District {i}</p>
                <p className="text-sm text-primary">Social Dancing</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
