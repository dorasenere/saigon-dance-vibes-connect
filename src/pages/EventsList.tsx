
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const EventsList = () => {
  // Example events (in a real app, these would come from a database)
  const events = [
    { 
      id: 1, 
      title: "Zouk Social Night", 
      date: "April 26, 2025", 
      location: "District 1",
      type: "Social Dancing",
      description: "Join us for a night of Brazilian Zouk with local and international dancers."
    },
    { 
      id: 2, 
      title: "Bachata Workshop", 
      date: "April 28, 2025", 
      location: "District 3",
      type: "Workshop",
      description: "Learn bachata techniques from professional instructors. All levels welcome."
    },
    { 
      id: 3, 
      title: "Latin Dance Party", 
      date: "May 1, 2025", 
      location: "District 7",
      type: "Party",
      description: "A night of Latin rhythms with Bachata, Salsa, and Kizomba."
    },
    { 
      id: 4, 
      title: "Zouk Progressive Class", 
      date: "May 5, 2025", 
      location: "District 2",
      type: "Class",
      description: "Progressive classes for intermediate dancers focusing on connection techniques."
    },
    {
      id: 5,
      title: "Bachata Sensual Festival",
      date: "May 15-17, 2025",
      location: "District 1",
      type: "Festival",
      description: "Three days of workshops, performances, and parties focused on Bachata Sensual."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 neon-text">Events List</h1>
          <p className="text-xl text-white/80 text-center max-w-3xl">
            Browse all upcoming dance events
          </p>
        </div>

        <div className="glass-card p-6 mb-8">
          <div className="flex items-center">
            <Search className="mr-2 h-5 w-5 text-white/50" />
            <Input 
              placeholder="Search events..." 
              className="bg-transparent border-white/10 focus-visible:ring-primary" 
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <select className="bg-background border border-white/10 rounded-md p-2 text-white/70">
              <option value="">All Styles</option>
              <option value="zouk">Zouk</option>
              <option value="bachata">Bachata</option>
              <option value="salsa">Salsa</option>
            </select>
            <select className="bg-background border border-white/10 rounded-md p-2 text-white/70">
              <option value="">All Event Types</option>
              <option value="social">Social</option>
              <option value="workshop">Workshop</option>
              <option value="festival">Festival</option>
              <option value="class">Class</option>
            </select>
            <select className="bg-background border border-white/10 rounded-md p-2 text-white/70">
              <option value="">All Locations</option>
              <option value="district1">District 1</option>
              <option value="district2">District 2</option>
              <option value="district3">District 3</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.id} className="glass-card card-hover border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-white/70 mb-2">{event.description}</p>
                    <div className="flex flex-wrap gap-x-4 text-sm text-white/60">
                      <span>{event.date}</span>
                      <span>{event.location}</span>
                      <span className="text-primary">{event.type}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center">
                    <a 
                      href={`/events/${event.id}`} 
                      className="text-primary hover:text-primary/80 underline text-sm"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsList;
