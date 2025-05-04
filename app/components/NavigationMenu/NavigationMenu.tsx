import type { ReactElement, ReactNode } from "react";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { DropdownMenu, NavigationMenu as RadixNavigationMenu } from "radix-ui";

import type { NavigationMenuItemProps } from "./NavigationMenuItem";

export function NavigationMenu({ children }: NavigationMenuProps): ReactNode {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger aria-label="Open navigation" className="ml-auto">
        <HamburgerMenuIcon className="size-6" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content asChild>
          <RadixNavigationMenu.Root orientation="vertical">
            <RadixNavigationMenu.List className="flex flex-col gap-2">
              {children}
            </RadixNavigationMenu.List>
          </RadixNavigationMenu.Root>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export type NavigationMenuProps = {
  children?:
    | ReactElement<NavigationMenuItemProps>
    | ReactElement<NavigationMenuItemProps>[];
};
