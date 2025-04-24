
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { useState } from "react";

const SubmitEvent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a database or API
    alert("Event submission functionality will be implemented when connected to a database!");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 neon-text">Submit an Event</h1>
          <p className="text-xl text-white/80 text-center max-w-3xl">
            Share your dance event with the Saigon dance community
          </p>
        </div>

        <Card className="glass-card border-white/10 max-w-3xl mx-auto">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input 
                  id="title" 
                  placeholder="e.g., Zouk Social Night" 
                  className="bg-transparent border-white/10" 
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Event Date</Label>
                  <div className="flex">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="bg-transparent border-white/10 text-white w-full flex justify-between"
                    >
                      {date ? date.toLocaleDateString() : "Select a date"}
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-white/50">
                    (Calendar picker will be implemented with Supabase integration)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    placeholder="Venue name and address" 
                    className="bg-transparent border-white/10" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="danceStyle">Dance Style</Label>
                  <Select>
                    <SelectTrigger className="bg-transparent border-white/10">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zouk">Zouk</SelectItem>
                      <SelectItem value="bachata">Bachata</SelectItem>
                      <SelectItem value="salsa">Salsa</SelectItem>
                      <SelectItem value="kizomba">Kizomba</SelectItem>
                      <SelectItem value="multiple">Multiple Styles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type</Label>
                  <Select>
                    <SelectTrigger className="bg-transparent border-white/10">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social">Social Dancing</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="class">Class</SelectItem>
                      <SelectItem value="festival">Festival</SelectItem>
                      <SelectItem value="performance">Performance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Event Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your event..." 
                  className="bg-transparent border-white/10 min-h-32" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactInfo">Contact Information</Label>
                <Input 
                  id="contactInfo" 
                  placeholder="Email, phone, or social media" 
                  className="bg-transparent border-white/10" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="flyer">Upload Event Flyer</Label>
                <Input 
                  id="flyer" 
                  type="file" 
                  accept="image/*" 
                  className="bg-transparent border-white/10" 
                />
                <p className="text-xs text-white/50">
                  (Image upload will be implemented with Supabase integration)
                </p>
              </div>

              <Button type="submit" className="bg-primary hover:bg-primary/90 w-full">
                Submit Event
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubmitEvent;
