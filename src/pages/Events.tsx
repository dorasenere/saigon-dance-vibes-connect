
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, List, Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import EventsList from "@/components/EventsList";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Events = () => {
  const [danceStyle, setDanceStyle] = useState<string>("all");
  const [eventType, setEventType] = useState<string>("all");
  const [location, setLocation] = useState<string>("all");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
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
              <Plus className="mr-2 h-4 w-4" /> Submit an Event
            </Button>
          </Link>
        </div>

        <div className="glass-card p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Find Events</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-white/70 block mb-2">Location</label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full bg-background border border-white/10">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="district1">District 1</SelectItem>
                  <SelectItem value="district2">District 2</SelectItem>
                  <SelectItem value="district3">District 3</SelectItem>
                  <SelectItem value="district7">District 7</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-white/70 block mb-2">Dance Style</label>
              <Select value={danceStyle} onValueChange={setDanceStyle}>
                <SelectTrigger className="w-full bg-background border border-white/10">
                  <SelectValue placeholder="Select dance style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Styles</SelectItem>
                  <SelectItem value="zouk">Zouk</SelectItem>
                  <SelectItem value="bachata">Bachata</SelectItem>
                  <SelectItem value="salsa">Salsa</SelectItem>
                  <SelectItem value="kizomba">Kizomba</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-white/70 block mb-2">Event Type</label>
              <Select value={eventType} onValueChange={setEventType}>
                <SelectTrigger className="w-full bg-background border border-white/10">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="social">Social Dancing</SelectItem>
                  <SelectItem value="party">Party</SelectItem>
                  <SelectItem value="festival">Festival</SelectItem>
                  <SelectItem value="class">Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-white/70 block mb-2">Date Range</label>
              <Select defaultValue="all">
                <SelectTrigger className="w-full bg-background border border-white/10">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <Button className="bg-primary hover:bg-primary/90">
              <Search className="mr-2 h-4 w-4" /> Search Events
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center neon-text">Upcoming Events</h2>
          <EventsList filterDanceStyle={danceStyle !== "all" ? danceStyle : undefined} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
