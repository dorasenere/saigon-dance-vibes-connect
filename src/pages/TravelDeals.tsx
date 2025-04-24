
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plane, MapPin, Calendar, Ticket } from "lucide-react";

const TravelDeals = () => {
  // Example travel deals (in a real app, these would come from a database or API)
  const deals = [
    {
      id: 1,
      title: "Saigon Zouk Congress Package",
      location: "Ho Chi Minh City",
      date: "June 15-18, 2025",
      price: "$299",
      description: "Full pass to the congress with 3 nights accommodation at partner hotel."
    },
    {
      id: 2,
      title: "Bachata Festival Weekend",
      location: "Da Nang",
      date: "July 8-10, 2025",
      price: "$199",
      description: "Weekend pass with beach-side accommodation and airport transfers."
    },
    {
      id: 3,
      title: "Hanoi Dance Retreat",
      location: "Hanoi",
      date: "August 5-9, 2025",
      price: "$349",
      description: "5-day intensive dance retreat with top international instructors."
    },
    {
      id: 4,
      title: "Phu Quoc Dance Vacation",
      location: "Phu Quoc",
      date: "September 20-25, 2025",
      price: "$499",
      description: "All-inclusive dance vacation with beach parties and workshops."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 neon-text">Dance Travel Deals</h1>
          <p className="text-xl text-white/80 text-center max-w-3xl">
            Special travel packages for dance events in Vietnam and beyond
          </p>
        </div>

        <div className="glass-card p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Find Dance Travel Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
              <Input 
                placeholder="Destination" 
                className="bg-transparent border-white/10 pl-10"
              />
            </div>
            <div className="relative">
              <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
              <Input 
                placeholder="Event type" 
                className="bg-transparent border-white/10 pl-10" 
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
              <Input 
                placeholder="When" 
                className="bg-transparent border-white/10 pl-10"
              />
            </div>
            <div>
              <Button className="bg-primary hover:bg-primary/90 w-full">
                Search Packages
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center neon-text">Featured Travel Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deals.map((deal) => (
              <Card key={deal.id} className="glass-card card-hover border-white/10">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <Plane className="h-5 w-5 text-secondary" />
                      {deal.title}
                    </h3>
                    <p className="text-white/70 mb-4">{deal.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-white/70 mt-auto">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{deal.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{deal.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Ticket className="h-4 w-4 text-primary" />
                        <span>From {deal.price}</span>
                      </div>
                    </div>
                    <Button className="bg-secondary hover:bg-secondary/90 mt-4">
                      View Package
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDeals;
