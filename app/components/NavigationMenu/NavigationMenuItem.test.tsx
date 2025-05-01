import type { PropsWithChildren } from "react";

import { render, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { expect, it } from "vitest";

import { NavigationMenu, type NavigationMenuProps } from "./NavigationMenu";
import { NavigationMenuItem } from "./NavigationMenuItem";

function renderComponent(currentPath: string) {
  return render(<NavigationMenuItem to="/page-1">Page 1</NavigationMenuItem>, {
    wrapper: ({ children }: PropsWithChildren) => (
      <MemoryRouter initialEntries={[currentPath]}>
        <NavigationMenu>
          {children as NavigationMenuProps["children"]}
        </NavigationMenu>
      </MemoryRouter>
    ),
  });
}

it("changes style when the user is curently on the page", () => {
  const homePageRender = renderComponent("/");
  const page1Render = renderComponent("/page-1");

  expect(within(homePageRender.container).getByRole("link").className).not.toBe(
    within(page1Render.container).getByRole("link").className,
  );
});
