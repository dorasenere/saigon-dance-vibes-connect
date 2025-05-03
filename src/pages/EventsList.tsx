
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import EventsList from "@/components/EventsList";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EventsListPage = () => {
  const [danceStyle, setDanceStyle] = useState<string>("all");
  const [eventType, setEventType] = useState<string>("all");
  const [location, setLocation] = useState<string>("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 neon-text">Events List</h1>
          <p className="text-xl text-white/80 text-center max-w-3xl">
            Browse all upcoming dance events
          </p>
        </div>

        <div className="glass-card p-6 mb-8">
          <div className="flex items-center mb-4">
            <Search className="mr-2 h-5 w-5 text-white/50" />
            <Input 
              placeholder="Search events..." 
              className="bg-transparent border-white/10 focus-visible:ring-primary" 
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="w-full sm:w-auto">
              <Select value={danceStyle} onValueChange={setDanceStyle}>
                <SelectTrigger className="w-full bg-background border border-white/10">
                  <SelectValue placeholder="All Styles" />
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
            
            <div className="w-full sm:w-auto">
              <Select value={eventType} onValueChange={setEventType}>
                <SelectTrigger className="w-full bg-background border border-white/10">
                  <SelectValue placeholder="All Event Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Event Types</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="social">Social Dancing</SelectItem>
                  <SelectItem value="party">Party</SelectItem>
                  <SelectItem value="festival">Festival</SelectItem>
                  <SelectItem value="class">Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full sm:w-auto">
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full bg-background border border-white/10">
                  <SelectValue placeholder="All Locations" />
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
          </div>
        </div>

        <div className="space-y-6">
          <EventsList 
            filterDanceStyle={danceStyle !== "all" ? danceStyle : undefined}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsListPage;
