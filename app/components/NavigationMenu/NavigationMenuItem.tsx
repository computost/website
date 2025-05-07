import type { PropsWithChildren, ReactNode } from "react";

import { DropdownMenu, NavigationMenu as RadixNavigationMenu } from "radix-ui";
import { Link, useLocation } from "react-router";

import { assertUnreachable } from "~/utils/assertUnreachable";
import { mergeClassNames } from "~/utils/mergeClassNames";

import { useNavigationMenuDisplayType } from "./useNavigationMenuDisplayType";

export function NavigationMenuItem({
  children,
  to,
}: NavigationMenuItemProps): ReactNode {
  const displayType = useNavigationMenuDisplayType();

  switch (displayType) {
    case "dropdown":
      return (
        <DropdownNavigationMenuItem to={to}>
          {children}
        </DropdownNavigationMenuItem>
      );
    case "inline":
      return (
        <InlineNavigationMenuItem to={to}>{children}</InlineNavigationMenuItem>
      );
    default:
      assertUnreachable(displayType);
  }
}

function DropdownNavigationMenuItem({
  children,
  to,
}: NavigationMenuItemProps): ReactNode {
  const { pathname } = useLocation();

  return (
    <DropdownMenu.DropdownMenuItem asChild>
      <Link
        className={mergeClassNames(
          "block pt-3 pr-6 pb-3 pl-6 uppercase transition-colors duration-300",
          pathname === to
            ? "dark:text-[#f0dac2]"
            : "dark:text-orange-200 dark:hover:bg-[#3f3f3f] dark:focus:bg-[#3f3f3f]",
        )}
        to={to}
      >
        {children}
      </Link>
    </DropdownMenu.DropdownMenuItem>
  );
}

function InlineNavigationMenuItem({
  children,
  to,
}: NavigationMenuItemProps): ReactNode {
  const { pathname } = useLocation();

  return (
    <RadixNavigationMenu.Item>
      <RadixNavigationMenu.Link asChild>
        <Link
          className={mergeClassNames(
            "block pt-1.5 pr-2 pb-1.5 pl-2 uppercase transition-colors duration-300",
            pathname === to
              ? "dark:text-[#f0dac2]"
              : "dark:text-orange-200 dark:hover:text-[#fbd8ae] dark:focus:text-[#fbd8ae]",
          )}
          to={to}
        >
          {children}
        </Link>
      </RadixNavigationMenu.Link>
    </RadixNavigationMenu.Item>
  );
}

export type NavigationMenuItemProps = PropsWithChildren<{ to: string }>;
