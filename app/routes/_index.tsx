import type { ReactNode } from "react";

import { Link, Outlet } from "react-router";

import { Banner } from "~/components/Banner";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "~/components/NavigationMenu";

export default function Layout(): ReactNode {
  return (
    <>
      <Banner>
        <Link to="/">Computost Consulting</Link>
        <NavigationMenu>
          <NavigationMenuItem to="/">Home</NavigationMenuItem>
          <NavigationMenuItem to="/coop">Co-op Info</NavigationMenuItem>
          <NavigationMenuItem to="/services">Services</NavigationMenuItem>
        </NavigationMenu>
      </Banner>
      <Outlet />
      <footer>
        <p>
          Contact us at{" "}
          <a href="mailto:consulting@computost.com">consulting@computost.com</a>
        </p>
        <p>
          Copyright &copy; {new Date().getFullYear()} Computost Consulting, LLC
        </p>
      </footer>
    </>
  );
}
