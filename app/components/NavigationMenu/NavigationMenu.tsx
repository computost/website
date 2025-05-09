import type { ReactElement, ReactNode } from "react";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { DropdownMenu, NavigationMenu as RadixNavigationMenu } from "radix-ui";

import { assertUnreachable } from "~/utils/assertUnreachable";

import type { NavigationMenuItemProps } from "./NavigationMenuItem";

import {
  NavigationMenuDisplayTypeProvider,
  useNavigationMenuDisplayType,
} from "./useNavigationMenuDisplayType";

export function NavigationMenu({ children }: NavigationMenuProps): ReactNode {
  return (
    <NavigationMenuDisplayTypeProvider>
      <NavigationMenuCore>{children}</NavigationMenuCore>
    </NavigationMenuDisplayTypeProvider>
  );
}

function NavigationMenuCore({ children }: NavigationMenuProps): ReactNode {
  const displayType = useNavigationMenuDisplayType();

  switch (displayType) {
    case "dropdown":
      return <DropdownNavigationMenu>{children}</DropdownNavigationMenu>;
    case "inline":
      return <InlineNavigationMenu>{children}</InlineNavigationMenu>;
    default:
      assertUnreachable(displayType);
  }
}

function DropdownNavigationMenu({ children }: NavigationMenuProps): ReactNode {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        aria-label="Navigation"
        className="ml-auto cursor-pointer"
      >
        <HamburgerMenuIcon className="size-6" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="rounded-sm border border-stone-950 bg-stone-50 dark:border-[#434343] dark:bg-neutral-800">
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function InlineNavigationMenu({ children }: NavigationMenuProps): ReactNode {
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
