
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const FeaturedEvents = () => {
  const events = [
    {
      id: 1,
      title: "Zouk Social Night",
      date: "April 26, 2025",
      location: "District 1",
      type: "Social Dancing"
    },
    {
      id: 2,
      title: "Bachata Workshop",
      date: "April 28, 2025",
      location: "District 3",
      type: "Workshop"
    },
    {
      id: 3,
      title: "Latin Dance Party",
      date: "May 1, 2025",
      location: "District 7",
      type: "Party"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold neon-text">Upcoming Events</h2>
          <Link to="/events">
            <Button variant="link" className="text-primary">View All Events</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link to={`/events/${event.id}`} key={event.id}>
              <Card className="glass-card card-hover border-white/10 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Calendar className="h-5 w-5 text-primary" />
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{event.date}</p>
                  <p className="font-medium text-white">{event.location}</p>
                  <p className="text-sm text-primary">{event.type}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
