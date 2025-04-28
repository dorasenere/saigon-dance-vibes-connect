
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Calendar, Users, Video, Book } from "lucide-react";

const MainNav = () => {
  return (
    <NavigationMenu className="hidden md:flex bg-background/90">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Events</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-background/95 border border-white/10">
            <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2 bg-background">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20 p-6 no-underline outline-none focus:shadow-md"
                    to="/events"
                  >
                    <Calendar className="h-6 w-6 text-primary" />
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Dance Events
                    </div>
                    <p className="text-sm leading-tight text-white/80">
                      Discover Zouk, Bachata, and other dance events in Saigon
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground"
                  to="/events/calendar"
                >
                  <div className="text-sm font-medium leading-none text-white">Calendar View</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Browse events in a monthly calendar
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground"
                  to="/events/list"
                >
                  <div className="text-sm font-medium leading-none text-white">List View</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    See all upcoming events in a list format
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground"
                  to="/events/submit"
                >
                  <div className="text-sm font-medium leading-none text-white">Submit an Event</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Add your dance event to our platform
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-background/95 border border-white/10">
            <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2 bg-background">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20 p-6 no-underline outline-none focus:shadow-md"
                    to="/communities"
                  >
                    <Users className="h-6 w-6 text-primary" />
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Dance Communities
                    </div>
                    <p className="text-sm leading-tight text-white/80">
                      Connect with dancers and find your dance community in Saigon
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground"
                  to="/videos"
                >
                  <div className="text-sm font-medium leading-none text-white">Video Gallery</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Watch and share dance videos
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground"
                  to="/partner-finder"
                >
                  <div className="text-sm font-medium leading-none text-white">Partner Finder</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Find a dance partner matching your style and level
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground"
                  to="/chat"
                >
                  <div className="text-sm font-medium leading-none text-white">Chat Groups</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Connect with other dancers
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/travel-deals">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Travel Deals
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/blog">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
