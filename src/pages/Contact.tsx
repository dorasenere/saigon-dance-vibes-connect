
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import AttendeeForm from "@/components/forms/AttendeeForm";
import OrganizationForm from "@/components/forms/OrganizationForm";

const Contact = () => {
  const [formType, setFormType] = useState<"attendee" | "organization">("attendee");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 neon-text">Get In Touch</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join our vibrant dance community as a participant or partner
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={formType === "attendee" ? "default" : "outline"}
            onClick={() => setFormType("attendee")}
          >
            Register as Attendee
          </Button>
          <Button
            variant={formType === "organization" ? "default" : "outline"}
            onClick={() => setFormType("organization")}
          >
            Partner with Us
          </Button>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-6">
            {formType === "attendee" ? <AttendeeForm /> : <OrganizationForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

