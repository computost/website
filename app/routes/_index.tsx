import type { ReactNode } from "react";

import { Outlet } from "react-router";

import { BannerLink } from "~/components/Banner";
import { ComputostLogo } from "~/components/ComputostLogo";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "~/components/NavigationMenu";

export default function Layout(): ReactNode {
  return (
    <>
      <header className="flex justify-center bg-orange-100 pt-2 pb-2 shadow-md shadow-black dark:bg-orange-950">
        <div className="flex w-full max-w-7xl items-start gap-4">
          <ComputostLogo
            className="h-8 fill-stone-900 dark:fill-stone-100"
            title="Computost Consulting logo"
          />
          <BannerLink to="/">Computost Consulting</BannerLink>
          <NavigationMenu>
            <NavigationMenuItem to="/">Home</NavigationMenuItem>
            <NavigationMenuItem to="/coop">Co-op Info</NavigationMenuItem>
            <NavigationMenuItem to="/services">Services</NavigationMenuItem>
          </NavigationMenu>
        </div>
      </header>
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
