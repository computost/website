import type { ReactNode } from "react";

import { Link, Outlet } from "react-router";

import { ComputostLogo } from "~/components/ComputostLogo";
import { ExternalLink } from "~/components/ExternalLink";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "~/components/NavigationMenu";

export default function Layout(): ReactNode {
  return (
    <>
      <header className="flex justify-center bg-orange-100 p-2 pt-2 pb-2 shadow-md shadow-black dark:bg-orange-950">
        <div className="flex w-full max-w-7xl items-start gap-4">
          <ComputostLogo
            className="h-8 fill-stone-900 dark:fill-stone-100"
            title="Computost Consulting logo"
          />
          <Link className="text-2xl" to="/">
            Computost Consulting
          </Link>
          <NavigationMenu>
            <NavigationMenuItem to="/">Home</NavigationMenuItem>
            <NavigationMenuItem to="/coop">Co-op Info</NavigationMenuItem>
            <NavigationMenuItem to="/services">Services</NavigationMenuItem>
          </NavigationMenu>
        </div>
      </header>
      <Outlet />
      <footer className="flex flex-col items-center gap-2 p-2">
        <p>
          Contact us at{" "}
          <ExternalLink href="mailto:consulting@computost.com">
            consulting@computost.com
          </ExternalLink>
        </p>
        <p>
          Copyright &copy; {new Date().getFullYear()} Computost Consulting, LLC
        </p>
      </footer>
    </>
  );
}
