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
      </NavigationMenu>
      <Outlet />
    </>
  );
}
