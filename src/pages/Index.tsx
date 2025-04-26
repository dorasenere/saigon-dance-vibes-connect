
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Video, Map } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">
            Connect. Dance<br />
            Thrive in Saigon.
          </h1>
          <div className="flex justify-center gap-4">
            <Link to="/partner-finder">
              <Button size="lg" variant="outline">Find a Partner</Button>
            </Link>
            <Link to="/events">
              <Button size="lg">See Events</Button>
            </Link>
            <Link to="/chat">
              <Button size="lg" variant="outline">Join a Chat</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="py-16 bg-muted/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">WHAT'S HAPPENING</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Event {i}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Hub Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">COMMUNITY HUB PREVIEW</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-6 rounded-xl">
              <MessageSquare className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Group Chats</h3>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Partner Finder</h3>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <Video className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Profiles</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Preview */}
      <section className="py-16 bg-muted/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">VIDEO GALLERY PREVIEW</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold">Upload Progress</h3>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold">Showcase Clips</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Global Dance Travel Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">GLOBAL DANCE TRAVEL PREVIEW</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Map className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Map</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Upcoming Festivals</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Travel Buddies</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>© 2025 Saigon Dance Community</p>
            <div className="flex gap-6">
              <Link to="/contact">Contact</Link>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <Link to="/fax">Fax</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
