import type { ReactNode } from "react";

import { Outlet } from "react-router";

import {
  NavigationMenu,
  NavigationMenuItem,
} from "~/components/NavigationMenu";

export default function Layout(): ReactNode {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuItem to="/">Home</NavigationMenuItem>
        <NavigationMenuItem to="/coop">Co-op Info</NavigationMenuItem>
        <NavigationMenuItem to="/services">Services</NavigationMenuItem>
      </NavigationMenu>
      <Outlet />
    </>
  );
}
