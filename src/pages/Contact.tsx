
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

// Form Schemas
const attendeeFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  danceStyles: z.array(z.string()).min(1, "Select at least one dance style"),
  experienceLevel: z.string().min(1, "Please select your experience level"),
  hearAboutUs: z.string().optional(),
  comments: z.string().optional(),
  newsletter: z.boolean().default(false),
});

const organizationFormSchema = z.object({
  organizationName: z.string().min(2, "Organization name is required"),
  contactName: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  orgType: z.string().min(1, "Please select organization type"),
  website: z.string().optional(),
  message: z.string().min(10, "Please provide some details about collaboration"),
});

const Contact = () => {
  const [formType, setFormType] = useState<"attendee" | "organization">("attendee");

  const attendeeForm = useForm<z.infer<typeof attendeeFormSchema>>({
    resolver: zodResolver(attendeeFormSchema),
    defaultValues: {
      danceStyles: [],
      newsletter: false,
    },
  });

  const organizationForm = useForm<z.infer<typeof organizationFormSchema>>({
    resolver: zodResolver(organizationFormSchema),
  });

  const onAttendeeSubmit = (data: z.infer<typeof attendeeFormSchema>) => {
    console.log("Attendee form data:", data);
    toast({
      title: "Registration Submitted!",
      description: "We'll get back to you soon.",
    });
    attendeeForm.reset();
  };

  const onOrganizationSubmit = (data: z.infer<typeof organizationFormSchema>) => {
    console.log("Organization form data:", data);
    toast({
      title: "Partnership Request Submitted!",
      description: "We'll review your application and contact you soon.",
    });
    organizationForm.reset();
  };

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
            {formType === "attendee" ? (
              <Form {...attendeeForm}>
                <form onSubmit={attendeeForm.handleSubmit(onAttendeeSubmit)} className="space-y-6">
                  <FormField
                    control={attendeeForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={attendeeForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={attendeeForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (234) 567-8900" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={attendeeForm.control}
                    name="experienceLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50">
                              <SelectValue placeholder="Select your level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={attendeeForm.control}
                    name="danceStyles"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dance Styles</FormLabel>
                        <Select
                          onValueChange={(value) => field.onChange([...field.value, value])}
                          value={field.value[0]}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-background/50">
                              <SelectValue placeholder="Select dance styles" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="zouk">Zouk</SelectItem>
                            <SelectItem value="bachata">Bachata</SelectItem>
                            <SelectItem value="salsa">Salsa</SelectItem>
                            <SelectItem value="kizomba">Kizomba</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={attendeeForm.control}
                    name="hearAboutUs"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How did you hear about us? (Optional)</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={attendeeForm.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comments or Special Requests (Optional)</FormLabel>
                        <FormControl>
                          <Textarea {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={attendeeForm.control}
                    name="newsletter"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Receive updates about future dance events
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">Submit Registration</Button>
                </form>
              </Form>
            ) : (
              <Form {...organizationForm}>
                <form onSubmit={organizationForm.handleSubmit(onOrganizationSubmit)} className="space-y-6">
                  <FormField
                    control={organizationForm.control}
                    name="organizationName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your organization" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={organizationForm.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Person's Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={organizationForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="contact@organization.com" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={organizationForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (234) 567-8900" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={organizationForm.control}
                    name="orgType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50">
                              <SelectValue placeholder="Select organization type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dance-school">Dance School</SelectItem>
                            <SelectItem value="dj">DJ</SelectItem>
                            <SelectItem value="brand">Brand</SelectItem>
                            <SelectItem value="event-sponsor">Event Sponsor</SelectItem>
                            <SelectItem value="performer">Performer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={organizationForm.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website or Social Media (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={organizationForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How would you like to collaborate?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your ideas for collaboration..."
                            className="bg-background/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">Submit Partnership Request</Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
