
import Navbar from "@/components/Navbar";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const EventCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Example events (in a real app, these would come from a database)
  const events = [
    { 
      id: 1, 
      title: "Zouk Social Night", 
      date: new Date(2025, 3, 26), 
      location: "District 1",
      type: "Social Dancing" 
    },
    { 
      id: 2, 
      title: "Bachata Workshop", 
      date: new Date(2025, 3, 28), 
      location: "District 3",
      type: "Workshop" 
    },
    { 
      id: 3, 
      title: "Latin Dance Party", 
      date: new Date(2025, 4, 1), 
      location: "District 7",
      type: "Party" 
    },
  ];

  // Filter events for the selected date
  const selectedEvents = events.filter(
    (event) => 
      date && 
      event.date.getDate() === date.getDate() && 
      event.date.getMonth() === date.getMonth() && 
      event.date.getFullYear() === date.getFullYear()
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 neon-text">Event Calendar</h1>
          <p className="text-xl text-white/80 text-center max-w-3xl">
            Browse dance events by date
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="glass-card p-6 rounded-2xl">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="mx-auto bg-transparent text-white"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <Card className="glass-card border-white/10">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  {date ? (
                    <>Events on {date.toLocaleDateString()}</>
                  ) : (
                    <>Select a date</>
                  )}
                </h2>

                {selectedEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedEvents.map((event) => (
                      <div 
                        key={event.id} 
                        className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition"
                      >
                        <h3 className="text-lg font-bold text-white">{event.title}</h3>
                        <p className="text-white/70">{event.location}</p>
                        <p className="text-sm text-primary">{event.type}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-white/70">No events on this day</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
