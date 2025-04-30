import type { ReactElement, ReactNode } from "react";

import { NavigationMenu as RadixNavigationMenu } from "radix-ui";

import type { NavigationMenuItemProps } from "./NavigationMenuItem";

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
