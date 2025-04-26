
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const MainNav = () => {
  return (
    <NavigationMenu className="hidden md:flex bg-background">
      <NavigationMenuList className="flex gap-6">
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className="text-lg font-medium">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/events">
            <NavigationMenuLink className="text-lg font-medium">
              Events
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/community">
            <NavigationMenuLink className="text-lg font-medium">
              Community
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/videos">
            <NavigationMenuLink className="text-lg font-medium">
              Video Gallery
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/join">
            <NavigationMenuLink className="text-lg font-medium">
              Join Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
