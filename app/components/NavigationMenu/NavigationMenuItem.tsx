import type { PropsWithChildren, ReactNode } from "react";

import { NavigationMenu as RadixNavigationMenu } from "radix-ui";
import { Link } from "react-router";

export function NavigationMenuItem({
  children,
  to,
}: NavigationMenuItemProps): ReactNode {
  return (
    <RadixNavigationMenu.Item>
      <RadixNavigationMenu.Link asChild>
        <Link to={to}>{children}</Link>
      </RadixNavigationMenu.Link>
    </RadixNavigationMenu.Item>
  );
}

export type NavigationMenuItemProps = PropsWithChildren<{ to: string }>;
