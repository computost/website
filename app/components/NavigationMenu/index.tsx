import type { PropsWithChildren, ReactElement, ReactNode } from "react";

import { NavigationMenu as RadixNavigationMenu } from "radix-ui";
import { Link } from "react-router";

export function NavigationMenu({ children }: NavigationMenuProps): ReactNode {
  return (
    <RadixNavigationMenu.Root>
      <RadixNavigationMenu.List>{children}</RadixNavigationMenu.List>
    </RadixNavigationMenu.Root>
  );
}

type NavigationMenuProps = {
  children?:
    | ReactElement<NavigationMenuItemProps>
    | ReactElement<NavigationMenuItemProps>[];
};

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

type NavigationMenuItemProps = PropsWithChildren<{ to: string }>;
