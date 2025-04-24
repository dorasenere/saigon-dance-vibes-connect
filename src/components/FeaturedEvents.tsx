
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const FeaturedEvents = () => {
  const events = [
    {
      title: "Zouk Social Night",
      date: "April 26, 2025",
      location: "District 1",
      type: "Social Dancing"
    },
    {
      title: "Bachata Workshop",
      date: "April 28, 2025",
      location: "District 3",
      type: "Workshop"
    },
    {
      title: "Latin Dance Party",
      date: "May 1, 2025",
      location: "District 7",
      type: "Party"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center neon-text">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="glass-card card-hover border-white/10">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
