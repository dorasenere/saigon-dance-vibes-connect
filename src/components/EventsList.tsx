
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, CreditCard, Users } from "lucide-react";

// Sample event data - in a real app, this would come from an API or database
const events = [
  {
    id: 1,
    title: "Zouk Social Night",
    date: "April 26, 2025",
    time: "8:00 PM - 11:00 PM",
    location: "The Dancing Lounge, District 1",
    type: "Social Dancing",
    price: "100,000 VND",
    danceStyles: ["Zouk"],
    attendance: 45,
    description: "Join us for a night of Brazilian Zouk with local and international dancers. All levels welcome!"
  },
  {
    id: 2,
    title: "Bachata Workshop with Maria & Juan",
    date: "April 28, 2025",
    time: "7:30 PM - 9:30 PM",
    location: "Dance Studio 88, District 3",
    type: "Workshop",
    price: "250,000 VND",
    danceStyles: ["Bachata"],
    attendance: 28,
    description: "Learn bachata techniques from professional instructors. Focus on body movement and connection."
  },
  {
    id: 3,
    title: "Latin Dance Party",
    date: "May 1, 2025",
    time: "9:00 PM - 1:00 AM",
    location: "Skybar Lounge, District 7",
    type: "Party",
    price: "200,000 VND (includes one drink)",
    danceStyles: ["Bachata", "Salsa", "Kizomba"],
    attendance: 120,
    description: "A night of Latin rhythms with multiple dance floors dedicated to Bachata, Salsa, and Kizomba."
  },
  {
    id: 4,
    title: "Zouk Progressive Class",
    date: "May 5, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "Movement Center, District 2",
    type: "Class",
    price: "180,000 VND per class or 800,000 VND for 5 classes",
    danceStyles: ["Zouk"],
    attendance: 16,
    description: "Progressive classes for intermediate dancers focusing on connection techniques and advanced moves."
  },
  {
    id: 5,
    title: "Bachata Sensual Festival",
    date: "May 15-17, 2025",
    time: "Various times",
    location: "Grand Hotel, District 1",
    type: "Festival",
    price: "2,500,000 VND (Full Pass)",
    danceStyles: ["Bachata"],
    attendance: 200,
    description: "Three days of workshops, performances, and parties focused on Bachata Sensual with international instructors."
  }
];

type EventCardProps = {
  event: typeof events[0];
};

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="glass-card border-white/10">
      <CardContent className="p-0">
        <div className="relative">
          <div className={`absolute top-0 left-0 w-1 h-full ${
            event.type === "Workshop" ? "bg-primary" :
            event.type === "Social Dancing" ? "bg-secondary" :
            event.type === "Party" ? "bg-accent" :
            event.type === "Festival" ? "bg-purple-500" :
            "bg-blue-500"
          }`} />
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-white/50" />
                    <span className="text-white/80">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-white/50" />
                    <span className="text-white/80">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-white/50" />
                    <span className="text-white/80">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-white/50" />
                    <span className="text-white/80">{event.price}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-white/50" />
                    <span className="text-white/80">{event.attendance} attending</span>
                  </div>
                </div>
                
                <p className="text-white/70 mb-4">{event.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.danceStyles.map((style) => (
                    <Badge key={style} className="bg-primary/20 text-primary hover:bg-primary/30 border border-primary/50">
                      {style}
                    </Badge>
                  ))}
                  <Badge className={`
                    ${event.type === "Workshop" ? "bg-primary/20 text-primary border-primary/50" :
                      event.type === "Social Dancing" ? "bg-secondary/20 text-secondary border-secondary/50" :
                      event.type === "Party" ? "bg-accent/20 text-accent border-accent/50" :
                      event.type === "Festival" ? "bg-purple-500/20 text-purple-500 border-purple-500/50" :
                      "bg-blue-500/20 text-blue-500 border-blue-500/50"}
                    border`
                  }>
                    {event.type}
                  </Badge>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <Button className="bg-primary hover:bg-primary/90">
                  RSVP Now
                </Button>
                <Button variant="outline" className="border-white/10 hover:bg-white/5">
                  Event Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

type EventsListProps = {
  limit?: number;
  filterDanceStyle?: string;
};

const EventsList = ({ limit, filterDanceStyle }: EventsListProps) => {
  let filteredEvents = events;
  
  if (filterDanceStyle) {
    filteredEvents = events.filter(event => 
      event.danceStyles.some(style => style.toLowerCase() === filterDanceStyle.toLowerCase())
    );
  }
  
  if (limit && limit > 0) {
    filteredEvents = filteredEvents.slice(0, limit);
  }
  
  return (
    <div className="space-y-6">
      {filteredEvents.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsList;
