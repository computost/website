import type { PropsWithChildren, ReactNode } from "react";

import { NavigationMenu as RadixNavigationMenu } from "radix-ui";
import { Link, useLocation } from "react-router";

export function NavigationMenuItem({
  children,
  to,
}: NavigationMenuItemProps): ReactNode {
  const { pathname } = useLocation();

  return (
    <RadixNavigationMenu.Item>
      <RadixNavigationMenu.Link asChild>
        <Link
          className={[
            "block bg-radial pt-1.5 pr-2 pb-1.5 pl-2 uppercase transition",
            pathname === to
              ? "from-orange-300 dark:from-orange-800"
              : "hover:from-orange-200 focus:from-orange-200 dark:hover:from-orange-900 dark:focus:from-orange-900",
          ].join(" ")}
          to={to}
        >
          {children}
        </Link>
      </RadixNavigationMenu.Link>
    </RadixNavigationMenu.Item>
  );
}

export type NavigationMenuItemProps = PropsWithChildren<{ to: string }>;
