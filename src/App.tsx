
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import EventCalendar from "./pages/EventCalendar";
import EventsList from "./pages/EventsList";
import SubmitEvent from "./pages/SubmitEvent";
import Communities from "./pages/Communities";
import TravelDeals from "./pages/TravelDeals";
import Blog from "./pages/Blog";
import Videos from "./pages/Videos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/calendar" element={<EventCalendar />} />
          <Route path="/events/list" element={<EventsList />} />
          <Route path="/events/submit" element={<SubmitEvent />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/travel-deals" element={<TravelDeals />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
