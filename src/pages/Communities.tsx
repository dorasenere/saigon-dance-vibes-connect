
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Users } from "lucide-react";
import { useState } from "react";
import AttendeeForm from "@/components/forms/AttendeeForm";
import OrganizationForm from "@/components/forms/OrganizationForm";

const Communities = () => {
  const [showForm, setShowForm] = useState<"none" | "attendee" | "organization">("none");
  const communities = [
    {
      id: 1,
      name: "Saigon Zouk Community",
      members: 125,
      focus: "Brazilian Zouk",
      description: "The main community for Zouk dancers in Ho Chi Minh City. Regular socials and workshops."
    },
    {
      id: 2,
      name: "Bachata Lovers HCMC",
      members: 98,
      focus: "Bachata",
      description: "A community dedicated to all styles of Bachata - Dominican, Sensual, and more."
    },
    {
      id: 3,
      name: "District 1 Dance Hub",
      members: 67,
      focus: "Multiple Styles",
      description: "Dancers based in District 1 who practice various Latin dance styles."
    },
    {
      id: 4,
      name: "Salsa On2 Group",
      members: 43,
      focus: "Salsa",
      description: "Focused on New York style (On2) Salsa. Weekly practice sessions."
    },
    {
      id: 5,
      name: "Kizomba Vibes Saigon",
      members: 35,
      focus: "Kizomba",
      description: "Growing community for Kizomba dancers in Saigon."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 neon-text">Dance Communities</h1>
          <p className="text-xl text-white/80 text-center max-w-3xl mb-6">
            Connect with dance groups and communities in Ho Chi Minh City
          </p>
          <div className="flex gap-4">
            <Button 
              variant={showForm === "attendee" ? "default" : "outline"}
              onClick={() => setShowForm(showForm === "attendee" ? "none" : "attendee")}
            >
              Register as Dancer
            </Button>
            <Button 
              variant={showForm === "organization" ? "default" : "outline"}
              onClick={() => setShowForm(showForm === "organization" ? "none" : "organization")}
            >
              Partner with Us
            </Button>
          </div>
        </div>

        {showForm !== "none" && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="glass-card p-6">
              {showForm === "attendee" ? <AttendeeForm /> : <OrganizationForm />}
            </div>
          </div>
        )}

        <div className="glass-card p-6 mb-8">
          <div className="flex items-center">
            <Search className="mr-2 h-5 w-5 text-white/50" />
            <Input 
              placeholder="Search communities..." 
              className="bg-transparent border-white/10 focus-visible:ring-primary" 
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <select className="bg-background border border-white/10 rounded-md p-2 text-white/70">
              <option value="">All Styles</option>
              <option value="zouk">Zouk</option>
              <option value="bachata">Bachata</option>
              <option value="salsa">Salsa</option>
              <option value="kizomba">Kizomba</option>
            </select>
            <select className="bg-background border border-white/10 rounded-md p-2 text-white/70">
              <option value="">All Districts</option>
              <option value="district1">District 1</option>
              <option value="district2">District 2</option>
              <option value="district3">District 3</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {communities.map((community) => (
            <Card key={community.id} className="glass-card card-hover border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{community.name}</h3>
                    <p className="text-white/70 mb-2">{community.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Users className="h-4 w-4" />
                      <span>{community.members} members</span>
                      <span className="text-white/50 mx-2">•</span>
                      <span className="text-white/70">{community.focus}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button className="bg-primary hover:bg-primary/90">
                      Join Group
                    </Button>
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

export default Communities;
