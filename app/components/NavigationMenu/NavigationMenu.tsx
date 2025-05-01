import type { ReactElement, ReactNode } from "react";

import { NavigationMenu as RadixNavigationMenu } from "radix-ui";

import type { NavigationMenuItemProps } from "./NavigationMenuItem";

export function NavigationMenu({ children }: NavigationMenuProps): ReactNode {
  return (
    <RadixNavigationMenu.Root>
      <RadixNavigationMenu.List className="flex gap-2">
        {children}
      </RadixNavigationMenu.List>
    </RadixNavigationMenu.Root>
  );
}

export type NavigationMenuProps = {
  children?:
    | ReactElement<NavigationMenuItemProps>
    | ReactElement<NavigationMenuItemProps>[];
};
